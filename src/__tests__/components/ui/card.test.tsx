import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { render, screen } from '@testing-library/react'

describe('Card Components', () => {
  describe('Card', () => {
    it('should render card element', () => {
      render(<Card>Card content</Card>)
      expect(screen.getByText('Card content')).toBeInTheDocument()
    })

    it('should apply default card styles', () => {
      const { container } = render(<Card>Content</Card>)
      const card = container.firstChild as HTMLElement
      expect(card.className).toContain('rounded-lg')
      expect(card.className).toContain('border')
      expect(card.className).toContain('shadow-sm')
    })

    it('should merge custom className', () => {
      const { container } = render(<Card className="custom-class">Content</Card>)
      const card = container.firstChild as HTMLElement
      expect(card.className).toContain('custom-class')
      expect(card.className).toContain('rounded-lg')
    })

    it('should forward ref', () => {
      const ref = { current: null }
      render(<Card ref={ref as any}>Content</Card>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('should support data attributes', () => {
      render(<Card data-testid="test-card">Content</Card>)
      expect(screen.getByTestId('test-card')).toBeInTheDocument()
    })
  })

  describe('CardHeader', () => {
    it('should render card header', () => {
      render(<CardHeader>Header content</CardHeader>)
      expect(screen.getByText('Header content')).toBeInTheDocument()
    })

    it('should apply header styles', () => {
      const { container } = render(<CardHeader>Header</CardHeader>)
      const header = container.firstChild as HTMLElement
      expect(header.className).toContain('flex')
      expect(header.className).toContain('flex-col')
      expect(header.className).toContain('p-6')
    })

    it('should merge custom className', () => {
      const { container } = render(<CardHeader className="custom">Header</CardHeader>)
      const header = container.firstChild as HTMLElement
      expect(header.className).toContain('custom')
    })
  })

  describe('CardTitle', () => {
    it('should render as h3 element', () => {
      render(<CardTitle>Title</CardTitle>)
      const title = screen.getByText('Title')
      expect(title.tagName).toBe('H3')
    })

    it('should apply title styles', () => {
      render(<CardTitle>Title</CardTitle>)
      const title = screen.getByText('Title')
      expect(title.className).toContain('text-2xl')
      expect(title.className).toContain('font-semibold')
    })

    it('should support custom className', () => {
      render(<CardTitle className="custom-title">Title</CardTitle>)
      const title = screen.getByText('Title')
      expect(title.className).toContain('custom-title')
    })
  })

  describe('CardDescription', () => {
    it('should render as paragraph element', () => {
      render(<CardDescription>Description text</CardDescription>)
      const description = screen.getByText('Description text')
      expect(description.tagName).toBe('P')
    })

    it('should apply description styles', () => {
      render(<CardDescription>Description</CardDescription>)
      const description = screen.getByText('Description')
      expect(description.className).toContain('text-sm')
      expect(description.className).toContain('text-muted-foreground')
    })

    it('should support custom className', () => {
      render(<CardDescription className="custom-desc">Description</CardDescription>)
      const description = screen.getByText('Description')
      expect(description.className).toContain('custom-desc')
    })
  })

  describe('CardContent', () => {
    it('should render card content', () => {
      render(<CardContent>Main content</CardContent>)
      expect(screen.getByText('Main content')).toBeInTheDocument()
    })

    it('should apply content styles', () => {
      const { container } = render(<CardContent>Content</CardContent>)
      const content = container.firstChild as HTMLElement
      expect(content.className).toContain('p-6')
      expect(content.className).toContain('pt-0')
    })

    it('should support custom className', () => {
      const { container } = render(<CardContent className="custom-content">Content</CardContent>)
      const content = container.firstChild as HTMLElement
      expect(content.className).toContain('custom-content')
    })
  })

  describe('CardFooter', () => {
    it('should render card footer', () => {
      render(<CardFooter>Footer content</CardFooter>)
      expect(screen.getByText('Footer content')).toBeInTheDocument()
    })

    it('should apply footer styles', () => {
      const { container } = render(<CardFooter>Footer</CardFooter>)
      const footer = container.firstChild as HTMLElement
      expect(footer.className).toContain('flex')
      expect(footer.className).toContain('items-center')
      expect(footer.className).toContain('p-6')
    })

    it('should support custom className', () => {
      const { container } = render(<CardFooter className="custom-footer">Footer</CardFooter>)
      const footer = container.firstChild as HTMLElement
      expect(footer.className).toContain('custom-footer')
    })
  })

  describe('Card composition', () => {
    it('should render complete card with all components', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter>Card Footer</CardFooter>
        </Card>
      )

      expect(screen.getByText('Card Title')).toBeInTheDocument()
      expect(screen.getByText('Card Description')).toBeInTheDocument()
      expect(screen.getByText('Card Content')).toBeInTheDocument()
      expect(screen.getByText('Card Footer')).toBeInTheDocument()
    })

    it('should maintain proper hierarchy', () => {
      const { container } = render(
        <Card data-testid="card">
          <CardHeader data-testid="header">
            <CardTitle data-testid="title">Title</CardTitle>
          </CardHeader>
        </Card>
      )

      const card = screen.getByTestId('card')
      const header = screen.getByTestId('header')
      const title = screen.getByTestId('title')

      expect(card).toContainElement(header)
      expect(header).toContainElement(title)
    })

    it('should work with minimal setup', () => {
      render(
        <Card>
          <CardContent>Simple card</CardContent>
        </Card>
      )
      expect(screen.getByText('Simple card')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should support ARIA attributes on Card', () => {
      render(<Card aria-label="User profile card">Content</Card>)
      const card = screen.getByLabelText('User profile card')
      expect(card).toBeInTheDocument()
    })

    it('should support role attribute', () => {
      render(<Card role="region">Content</Card>)
      const card = screen.getByRole('region')
      expect(card).toBeInTheDocument()
    })

    it('should support aria-describedby', () => {
      render(
        <>
          <Card aria-describedby="card-description">
            <CardContent>Content</CardContent>
          </Card>
          <p id="card-description">This is a card</p>
        </>
      )
      const card = screen.getByText('Content').parentElement?.parentElement
      expect(card).toHaveAttribute('aria-describedby', 'card-description')
    })
  })

  describe('Custom styling', () => {
    it('should allow custom background color', () => {
      const { container } = render(
        <Card className="bg-red-500">Colored card</Card>
      )
      const card = container.firstChild as HTMLElement
      expect(card.className).toContain('bg-red-500')
    })

    it('should allow custom padding', () => {
      const { container } = render(
        <CardContent className="p-10">Custom padding</CardContent>
      )
      const content = container.firstChild as HTMLElement
      expect(content.className).toContain('p-10')
    })

    it('should allow removing border', () => {
      const { container } = render(
        <Card className="border-0">No border</Card>
      )
      const card = container.firstChild as HTMLElement
      expect(card.className).toContain('border-0')
    })
  })
})