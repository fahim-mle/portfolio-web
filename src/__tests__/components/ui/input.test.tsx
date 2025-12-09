import { Input } from '@/components/ui/input'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Input Component', () => {
  describe('Rendering', () => {
    it('should render input element', () => {
      render(<Input />)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('should render with placeholder', () => {
      render(<Input placeholder="Enter text" />)
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
    })

    it('should render with default type text', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('type', 'text')
    })
  })

  describe('Input types', () => {
    it('should support email type', () => {
      render(<Input type="email" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('type', 'email')
    })

    it('should support password type', () => {
      render(<Input type="password" />)
      const input = document.querySelector('input[type="password"]')
      expect(input).toBeInTheDocument()
    })

    it('should support number type', () => {
      render(<Input type="number" />)
      const input = document.querySelector('input[type="number"]')
      expect(input).toBeInTheDocument()
    })

    it('should support search type', () => {
      render(<Input type="search" />)
      const input = screen.getByRole('searchbox')
      expect(input).toHaveAttribute('type', 'search')
    })
  })

  describe('User interactions', () => {
    it('should accept text input', async () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      
      await userEvent.type(input, 'Hello World')
      expect(input).toHaveValue('Hello World')
    })

    it('should call onChange handler', async () => {
      const handleChange = jest.fn()
      render(<Input onChange={handleChange} />)
      
      const input = screen.getByRole('textbox')
      await userEvent.type(input, 'test')
      
      expect(handleChange).toHaveBeenCalled()
    })

    it('should clear input when value is changed programmatically', () => {
      const { rerender } = render(<Input value="initial" onChange={() => {}} />)
      expect(screen.getByRole('textbox')).toHaveValue('initial')
      
      rerender(<Input value="" onChange={() => {}} />)
      expect(screen.getByRole('textbox')).toHaveValue('')
    })
  })

  describe('Disabled state', () => {
    it('should render disabled input', () => {
      render(<Input disabled />)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('should not accept input when disabled', async () => {
      render(<Input disabled />)
      const input = screen.getByRole('textbox')
      
      await userEvent.type(input, 'test')
      expect(input).toHaveValue('')
    })

    it('should apply disabled styles', () => {
      render(<Input disabled />)
      const input = screen.getByRole('textbox')
      expect(input.className).toContain('disabled:cursor-not-allowed')
      expect(input.className).toContain('disabled:opacity-50')
    })
  })

  describe('Required attribute', () => {
    it('should support required attribute', () => {
      render(<Input required />)
      expect(screen.getByRole('textbox')).toBeRequired()
    })

    it('should validate required field', () => {
      render(<Input required />)
      const input = screen.getByRole('textbox') as HTMLInputElement
      expect(input.validity.valueMissing).toBe(true)
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      render(<Input className="custom-class" />)
      const input = screen.getByRole('textbox')
      expect(input.className).toContain('custom-class')
      expect(input.className).toContain('flex')
    })

    it('should override conflicting classes', () => {
      render(<Input className="h-12" />)
      const input = screen.getByRole('textbox')
      expect(input.className).toContain('h-12')
    })
  })

  describe('Ref forwarding', () => {
    it('should forward ref to input element', () => {
      const ref = { current: null }
      render(<Input ref={ref as any} />)
      expect(ref.current).toBeInstanceOf(HTMLInputElement)
    })

    it('should allow focus via ref', () => {
      const ref = { current: null }
      render(<Input ref={ref as any} />)
      ;(ref.current as any)?.focus()
      expect(ref.current).toHaveFocus()
    })
  })

  describe('Focus management', () => {
    it('should be focusable', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      input.focus()
      expect(input).toHaveFocus()
    })

    it('should show focus styles', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      expect(input.className).toContain('focus-visible:outline-none')
      expect(input.className).toContain('focus-visible:ring-2')
    })
  })

  describe('File input', () => {
    it('should support file type', () => {
      render(<Input type="file" />)
      const input = document.querySelector('input[type="file"]')
      expect(input).toBeInTheDocument()
    })

    it('should have file input styles', () => {
      render(<Input type="file" />)
      const input = document.querySelector('input[type="file"]')
      expect(input?.className).toContain('file:border-0')
    })
  })

  describe('Accessibility', () => {
    it('should support aria-label', () => {
      render(<Input aria-label="Email address" />)
      const input = screen.getByLabelText('Email address')
      expect(input).toBeInTheDocument()
    })

    it('should support aria-describedby', () => {
      render(<Input aria-describedby="help-text" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('aria-describedby', 'help-text')
    })

    it('should support aria-invalid', () => {
      render(<Input aria-invalid="true" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('aria-invalid', 'true')
    })
  })

  describe('Value control', () => {
    it('should work as controlled component', async () => {
      const TestComponent = () => {
        const [value, setValue] = React.useState('')
        return <Input value={value} onChange={(e) => setValue(e.target.value)} />
      }
      
      render(<TestComponent />)
      const input = screen.getByRole('textbox')
      
      await userEvent.type(input, 'controlled')
      expect(input).toHaveValue('controlled')
    })

    it('should work as uncontrolled component', async () => {
      render(<Input defaultValue="uncontrolled" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveValue('uncontrolled')
    })
  })
})

import * as React from 'react'