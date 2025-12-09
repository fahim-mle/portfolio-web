import { Button, buttonVariants } from '@/components/ui/button'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Button Component', () => {
  describe('Rendering', () => {
    it('should render button with text', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
    })

    it('should render with children', () => {
      render(
        <Button>
          <span>Icon</span>
          <span>Text</span>
        </Button>
      )
      expect(screen.getByText('Icon')).toBeInTheDocument()
      expect(screen.getByText('Text')).toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    it('should apply default variant classes', () => {
      render(<Button>Default</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('bg-primary')
    })

    it('should apply destructive variant classes', () => {
      render(<Button variant="destructive">Delete</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('bg-destructive')
    })

    it('should apply outline variant classes', () => {
      render(<Button variant="outline">Outline</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('border')
    })

    it('should apply secondary variant classes', () => {
      render(<Button variant="secondary">Secondary</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('bg-secondary')
    })

    it('should apply ghost variant classes', () => {
      render(<Button variant="ghost">Ghost</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('hover:bg-accent')
    })

    it('should apply link variant classes', () => {
      render(<Button variant="link">Link</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('underline-offset-4')
    })
  })

  describe('Sizes', () => {
    it('should apply default size classes', () => {
      render(<Button>Default Size</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('h-10')
    })

    it('should apply small size classes', () => {
      render(<Button size="sm">Small</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('h-9')
    })

    it('should apply large size classes', () => {
      render(<Button size="lg">Large</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('h-11')
    })

    it('should apply icon size classes', () => {
      render(<Button size="icon">Icon</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('h-10')
      expect(button.className).toContain('w-10')
    })
  })

  describe('Interactions', () => {
    it('should call onClick handler when clicked', async () => {
      const handleClick = jest.fn()
      render(<Button onClick={handleClick}>Click</Button>)
      
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should not call onClick when disabled', async () => {
      const handleClick = jest.fn()
      render(<Button onClick={handleClick} disabled>Click</Button>)
      
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('should support keyboard navigation', async () => {
      const handleClick = jest.fn()
      render(<Button onClick={handleClick}>Press Enter</Button>)
      
      const button = screen.getByRole('button')
      button.focus()
      await userEvent.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalled()
    })
  })

  describe('Disabled state', () => {
    it('should render disabled button', () => {
      render(<Button disabled>Disabled</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })

    it('should apply disabled classes', () => {
      render(<Button disabled>Disabled</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('disabled:opacity-50')
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      render(<Button className="custom-class">Custom</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('custom-class')
      expect(button.className).toContain('inline-flex')
    })
  })

  describe('asChild prop', () => {
    it('should render as Slot when asChild is true', () => {
      render(
        <Button asChild>
          <a href="/test">Link Button</a>
        </Button>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', '/test')
    })
  })

  describe('HTML attributes', () => {
    it('should support type attribute', () => {
      render(<Button type="submit">Submit</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'submit')
    })

    it('should support aria attributes', () => {
      render(<Button aria-label="Close dialog">X</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('aria-label', 'Close dialog')
    })

    it('should support data attributes', () => {
      render(<Button data-testid="custom-button">Test</Button>)
      expect(screen.getByTestId('custom-button')).toBeInTheDocument()
    })
  })

  describe('buttonVariants function', () => {
    it('should generate correct classes for default variant', () => {
      const classes = buttonVariants()
      expect(classes).toContain('bg-primary')
    })

    it('should generate correct classes for variant and size combination', () => {
      const classes = buttonVariants({ variant: 'outline', size: 'lg' })
      expect(classes).toContain('border')
      expect(classes).toContain('h-11')
    })

    it('should include custom className', () => {
      const classes = buttonVariants({ className: 'custom' })
      expect(classes).toContain('custom')
    })
  })

  describe('Focus management', () => {
    it('should be focusable by default', () => {
      render(<Button>Focusable</Button>)
      const button = screen.getByRole('button')
      button.focus()
      expect(button).toHaveFocus()
    })

    it('should show focus styles', () => {
      render(<Button>Focus Styles</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('focus-visible:outline-none')
      expect(button.className).toContain('focus-visible:ring-2')
    })
  })
})