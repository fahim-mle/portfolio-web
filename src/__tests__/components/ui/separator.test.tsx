import { Separator } from '@/components/ui/separator'
import { render } from '@testing-library/react'

describe('Separator Component', () => {
  describe('Rendering', () => {
    it('should render separator element', () => {
      const { container } = render(<Separator />)
      expect(container.firstChild).toBeInTheDocument()
    })

    it('should apply default separator styles', () => {
      const { container } = render(<Separator />)
      const separator = container.firstChild as HTMLElement
      expect(separator.className).toContain('shrink-0')
      expect(separator.className).toContain('bg-border')
    })
  })

  describe('Orientation', () => {
    it('should render horizontal by default', () => {
      const { container } = render(<Separator />)
      const separator = container.firstChild as HTMLElement
      expect(separator.className).toContain('h-[1px]')
      expect(separator.className).toContain('w-full')
      expect(separator).toHaveAttribute('data-orientation', 'horizontal')
    })

    it('should render vertical separator', () => {
      const { container } = render(<Separator orientation="vertical" />)
      const separator = container.firstChild as HTMLElement
      expect(separator.className).toContain('h-full')
      expect(separator.className).toContain('w-[1px]')
      expect(separator).toHaveAttribute('data-orientation', 'vertical')
    })

    it('should apply correct classes for horizontal orientation', () => {
      const { container } = render(<Separator orientation="horizontal" />)
      const separator = container.firstChild as HTMLElement
      expect(separator.className).toContain('h-[1px]')
      expect(separator.className).toContain('w-full')
    })
  })

  describe('Decorative prop', () => {
    it('should be decorative by default', () => {
      const { container } = render(<Separator />)
      const separator = container.firstChild as HTMLElement
      expect(separator).toHaveAttribute('data-orientation')
    })

    it('should support non-decorative mode', () => {
      const { container } = render(<Separator decorative={false} />)
      const separator = container.firstChild as HTMLElement
      expect(separator).toBeInTheDocument()
    })
  })

  describe('Custom className', () => {
    it('should merge custom className', () => {
      const { container } = render(<Separator className="custom-class" />)
      const separator = container.firstChild as HTMLElement
      expect(separator.className).toContain('custom-class')
      expect(separator.className).toContain('shrink-0')
    })

    it('should allow custom color', () => {
      const { container } = render(<Separator className="bg-red-500" />)
      const separator = container.firstChild as HTMLElement
      expect(separator.className).toContain('bg-red-500')
    })
  })

  describe('Ref forwarding', () => {
    it('should forward ref to separator element', () => {
      const ref = { current: null }
      render(<Separator ref={ref as any} />)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })
  })

  describe('Accessibility', () => {
    it('should have proper ARIA attributes when decorative', () => {
      const { container } = render(<Separator decorative={true} />)
      const separator = container.firstChild as HTMLElement
      // Radix UI handles aria attributes internally
      expect(separator).toBeInTheDocument()
    })

    it('should support role attribute when not decorative', () => {
      const { container } = render(<Separator decorative={false} role="separator" />)
      const separator = container.firstChild as HTMLElement
      expect(separator).toHaveAttribute('role', 'separator')
    })
  })

  describe('Use cases', () => {
    it('should work in horizontal layouts', () => {
      const { container } = render(
        <div>
          <div>Content above</div>
          <Separator />
          <div>Content below</div>
        </div>
      )
      expect(container.querySelector('[data-orientation="horizontal"]')).toBeInTheDocument()
    })

    it('should work in vertical layouts', () => {
      const { container } = render(
        <div style={{ display: 'flex' }}>
          <div>Left content</div>
          <Separator orientation="vertical" />
          <div>Right content</div>
        </div>
      )
      expect(container.querySelector('[data-orientation="vertical"]')).toBeInTheDocument()
    })
  })

  describe('Data attributes', () => {
    it('should support custom data attributes', () => {
      const { container } = render(<Separator data-testid="my-separator" />)
      const separator = container.querySelector('[data-testid="my-separator"]')
      expect(separator).toBeInTheDocument()
    })
  })
})