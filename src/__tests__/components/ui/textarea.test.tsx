import { Textarea } from '@/components/ui/textarea'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'

describe('Textarea Component', () => {
  describe('Rendering', () => {
    it('should render textarea element', () => {
      render(<Textarea />)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('should render with placeholder', () => {
      render(<Textarea placeholder="Enter description" />)
      expect(screen.getByPlaceholderText('Enter description')).toBeInTheDocument()
    })

    it('should have minimum height', () => {
      render(<Textarea />)
      const textarea = screen.getByRole('textbox')
      expect(textarea.className).toContain('min-h-[80px]')
    })
  })

  describe('User interactions', () => {
    it('should accept text input', async () => {
      render(<Textarea />)
      const textarea = screen.getByRole('textbox')
      
      await userEvent.type(textarea, 'Multiple\nlines\nof text')
      expect(textarea).toHaveValue('Multiple\nlines\nof text')
    })

    it('should call onChange handler', async () => {
      const handleChange = jest.fn()
      render(<Textarea onChange={handleChange} />)
      
      const textarea = screen.getByRole('textbox')
      await userEvent.type(textarea, 'test')
      
      expect(handleChange).toHaveBeenCalled()
    })

    it('should support multiline input', async () => {
      render(<Textarea />)
      const textarea = screen.getByRole('textbox')
      
      await userEvent.type(textarea, 'Line 1{Enter}Line 2')
      expect(textarea).toHaveValue('Line 1\nLine 2')
    })
  })

  describe('Disabled state', () => {
    it('should render disabled textarea', () => {
      render(<Textarea disabled />)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('should not accept input when disabled', async () => {
      render(<Textarea disabled />)
      const textarea = screen.getByRole('textbox')
      
      await userEvent.type(textarea, 'test')
      expect(textarea).toHaveValue('')
    })

    it('should apply disabled styles', () => {
      render(<Textarea disabled />)
      const textarea = screen.getByRole('textbox')
      expect(textarea.className).toContain('disabled:cursor-not-allowed')
      expect(textarea.className).toContain('disabled:opacity-50')
    })
  })

  describe('Required attribute', () => {
    it('should support required attribute', () => {
      render(<Textarea required />)
      expect(screen.getByRole('textbox')).toBeRequired()
    })

    it('should validate required field', () => {
      render(<Textarea required />)
      const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
      expect(textarea.validity.valueMissing).toBe(true)
    })
  })

  describe('Rows and cols', () => {
    it('should support rows attribute', () => {
      render(<Textarea rows={10} />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('rows', '10')
    })

    it('should support cols attribute', () => {
      render(<Textarea cols={50} />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('cols', '50')
    })
  })

  describe('Max length', () => {
    it('should support maxLength attribute', () => {
      render(<Textarea maxLength={100} />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('maxLength', '100')
    })

    it('should enforce maxLength', async () => {
      render(<Textarea maxLength={5} />)
      const textarea = screen.getByRole('textbox')
      
      await userEvent.type(textarea, '12345678')
      expect(textarea).toHaveValue('12345')
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      render(<Textarea className="custom-class" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea.className).toContain('custom-class')
      expect(textarea.className).toContain('flex')
    })

    it('should override conflicting classes', () => {
      render(<Textarea className="min-h-[200px]" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea.className).toContain('min-h-[200px]')
    })
  })

  describe('Ref forwarding', () => {
    it('should forward ref to textarea element', () => {
      const ref = { current: null }
      render(<Textarea ref={ref as any} />)
      expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
    })

    it('should allow focus via ref', () => {
      const ref = { current: null }
      render(<Textarea ref={ref as any} />)
      ;(ref.current as any)?.focus()
      expect(ref.current).toHaveFocus()
    })
  })

  describe('Focus management', () => {
    it('should be focusable', () => {
      render(<Textarea />)
      const textarea = screen.getByRole('textbox')
      textarea.focus()
      expect(textarea).toHaveFocus()
    })

    it('should show focus styles', () => {
      render(<Textarea />)
      const textarea = screen.getByRole('textbox')
      expect(textarea.className).toContain('focus-visible:outline-none')
      expect(textarea.className).toContain('focus-visible:ring-2')
    })
  })

  describe('Accessibility', () => {
    it('should support aria-label', () => {
      render(<Textarea aria-label="Message" />)
      const textarea = screen.getByLabelText('Message')
      expect(textarea).toBeInTheDocument()
    })

    it('should support aria-describedby', () => {
      render(<Textarea aria-describedby="help-text" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('aria-describedby', 'help-text')
    })

    it('should support aria-invalid', () => {
      render(<Textarea aria-invalid="true" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('aria-invalid', 'true')
    })
  })

  describe('Value control', () => {
    it('should work as controlled component', async () => {
      const TestComponent = () => {
        const [value, setValue] = React.useState('')
        return (
          <Textarea 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
          />
        )
      }
      
      render(<TestComponent />)
      const textarea = screen.getByRole('textbox')
      
      await userEvent.type(textarea, 'controlled text')
      expect(textarea).toHaveValue('controlled text')
    })

    it('should work as uncontrolled component', async () => {
      render(<Textarea defaultValue="uncontrolled text" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveValue('uncontrolled text')
    })
  })

  describe('Styling', () => {
    it('should apply default styles', () => {
      render(<Textarea />)
      const textarea = screen.getByRole('textbox')
      expect(textarea.className).toContain('rounded-md')
      expect(textarea.className).toContain('border')
      expect(textarea.className).toContain('w-full')
    })

    it('should support custom width', () => {
      render(<Textarea className="w-1/2" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea.className).toContain('w-1/2')
    })
  })
})