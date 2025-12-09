import { Container } from '@/components/ui/container'
import { render, screen } from '@testing-library/react'

describe('Container Component', () => {
  describe('Rendering', () => {
    it('should render children', () => {
      render(<Container>Test content</Container>)
      expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('should render as div element', () => {
      const { container } = render(<Container>Content</Container>)
      expect(container.firstChild?.nodeName).toBe('DIV')
    })

    it('should render multiple children', () => {
      render(
        <Container>
          <span>Child 1</span>
          <span>Child 2</span>
        </Container>
      )
      expect(screen.getByText('Child 1')).toBeInTheDocument()
      expect(screen.getByText('Child 2')).toBeInTheDocument()
    })
  })

  describe('Styling', () => {
    it('should apply default container classes', () => {
      const { container } = render(<Container>Content</Container>)
      const div = container.firstChild as HTMLElement
      expect(div.className).toContain('w-full')
      expect(div.className).toContain('max-w-4xl')
      expect(div.className).toContain('mx-auto')
      expect(div.className).toContain('px-4')
    })

    it('should merge custom className', () => {
      const { container } = render(
        <Container className="custom-class">Content</Container>
      )
      const div = container.firstChild as HTMLElement
      expect(div.className).toContain('custom-class')
      expect(div.className).toContain('w-full')
    })

    it('should allow overriding default classes', () => {
      const { container } = render(
        <Container className="max-w-7xl">Content</Container>
      )
      const div = container.firstChild as HTMLElement
      expect(div.className).toContain('max-w-7xl')
    })

    it('should support responsive classes', () => {
      const { container } = render(
        <Container className="md:px-8 lg:px-12">Content</Container>
      )
      const div = container.firstChild as HTMLElement
      expect(div.className).toContain('md:px-8')
      expect(div.className).toContain('lg:px-12')
    })
  })

  describe('HTML attributes', () => {
    it('should support data attributes', () => {
      render(<Container data-testid="test-container">Content</Container>)
      expect(screen.getByTestId('test-container')).toBeInTheDocument()
    })

    it('should support id attribute', () => {
      const { container } = render(<Container id="main-container">Content</Container>)
      const div = container.firstChild as HTMLElement
      expect(div.id).toBe('main-container')
    })

    it('should support role attribute', () => {
      render(<Container role="main">Content</Container>)
      expect(screen.getByRole('main')).toBeInTheDocument()
    })

    it('should support aria attributes', () => {
      render(<Container aria-label="Main content">Content</Container>)
      expect(screen.getByLabelText('Main content')).toBeInTheDocument()
    })
  })

  describe('Event handlers', () => {
    it('should support onClick handler', () => {
      const handleClick = jest.fn()
      render(<Container onClick={handleClick}>Clickable</Container>)
      
      const container = screen.getByText('Clickable').parentElement
      container?.click()
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should support onMouseEnter handler', () => {
      const handleMouseEnter = jest.fn()
      render(<Container onMouseEnter={handleMouseEnter}>Hoverable</Container>)
      
      const container = screen.getByText('Hoverable').parentElement
      if (container) {
        container.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }))
      }
      expect(handleMouseEnter).toHaveBeenCalled()
    })
  })

  describe('Nested containers', () => {
    it('should support nested containers', () => {
      render(
        <Container>
          <Container>Nested content</Container>
        </Container>
      )
      expect(screen.getByText('Nested content')).toBeInTheDocument()
    })

    it('should maintain proper nesting structure', () => {
      const { container } = render(
        <Container data-testid="outer">
          <Container data-testid="inner">Content</Container>
        </Container>
      )
      const outer = screen.getByTestId('outer')
      const inner = screen.getByTestId('inner')
      expect(outer).toContainElement(inner)
    })
  })

  describe('TypeScript interface', () => {
    it('should accept React node children', () => {
      render(
        <Container>
          <div>Div child</div>
          <span>Span child</span>
          Plain text
        </Container>
      )
      expect(screen.getByText('Div child')).toBeInTheDocument()
      expect(screen.getByText('Span child')).toBeInTheDocument()
      expect(screen.getByText('Plain text')).toBeInTheDocument()
    })

    it('should accept HTMLDivElement props', () => {
      const { container } = render(
        <Container style={{ backgroundColor: 'red' }}>Content</Container>
      )
      const div = container.firstChild as HTMLElement
      expect(div.style.backgroundColor).toBe('red')
    })
  })
})