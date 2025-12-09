import { cn } from '@/lib/utils'

describe('cn utility function', () => {
  describe('Basic functionality', () => {
    it('should merge single class name', () => {
      expect(cn('text-red-500')).toBe('text-red-500')
    })

    it('should merge multiple class names', () => {
      const result = cn('text-red-500', 'bg-blue-500')
      expect(result).toContain('text-red-500')
      expect(result).toContain('bg-blue-500')
    })

    it('should handle empty inputs', () => {
      expect(cn()).toBe('')
      expect(cn('')).toBe('')
    })

    it('should handle undefined and null values', () => {
      expect(cn(undefined, 'text-red-500', null)).toBe('text-red-500')
    })
  })

  describe('Tailwind merge functionality', () => {
    it('should merge conflicting tailwind classes correctly', () => {
      // Later class should override earlier class
      const result = cn('px-2', 'px-4')
      expect(result).toBe('px-4')
    })

    it('should handle multiple conflicting classes', () => {
      const result = cn('text-sm', 'text-lg', 'text-xl')
      expect(result).toBe('text-xl')
    })

    it('should merge padding classes correctly', () => {
      const result = cn('p-2', 'px-4')
      expect(result).toContain('px-4')
      expect(result).toContain('p-2')
    })
  })

  describe('Conditional classes with clsx', () => {
    it('should handle conditional object syntax', () => {
      const result = cn({
        'text-red-500': true,
        'bg-blue-500': false,
      })
      expect(result).toContain('text-red-500')
      expect(result).not.toContain('bg-blue-500')
    })

    it('should handle arrays of classes', () => {
      const result = cn(['text-red-500', 'bg-blue-500'])
      expect(result).toContain('text-red-500')
      expect(result).toContain('bg-blue-500')
    })

    it('should handle mixed conditional and string classes', () => {
      const isActive = true
      const result = cn('base-class', {
        'active-class': isActive,
        'inactive-class': !isActive,
      })
      expect(result).toContain('base-class')
      expect(result).toContain('active-class')
      expect(result).not.toContain('inactive-class')
    })
  })

  describe('Real-world usage patterns', () => {
    it('should handle component variant patterns', () => {
      const variant = 'primary'
      const result = cn(
        'base-button',
        variant === 'primary' && 'bg-blue-500',
        variant === 'secondary' && 'bg-gray-500'
      )
      expect(result).toContain('base-button')
      expect(result).toContain('bg-blue-500')
    })

    it('should handle size and variant combinations', () => {
      const size = 'lg'
      const variant = 'outline'
      const result = cn(
        'rounded-md',
        size === 'sm' && 'px-2 py-1',
        size === 'lg' && 'px-4 py-2',
        variant === 'outline' && 'border border-gray-300'
      )
      expect(result).toContain('rounded-md')
      expect(result).toContain('px-4')
      expect(result).toContain('py-2')
      expect(result).toContain('border')
    })

    it('should handle responsive classes', () => {
      const result = cn('text-sm', 'md:text-base', 'lg:text-lg')
      expect(result).toContain('text-sm')
      expect(result).toContain('md:text-base')
      expect(result).toContain('lg:text-lg')
    })
  })

  describe('Edge cases', () => {
    it('should handle whitespace in class names', () => {
      const result = cn('  text-red-500  ', '  bg-blue-500  ')
      expect(result.trim()).toBeTruthy()
    })

    it('should handle duplicate classes', () => {
      const result = cn('text-red-500', 'text-red-500')
      expect(result).toBe('text-red-500')
    })

    it('should handle very long class strings', () => {
      const longClasses = Array(50).fill('class').map((c, i) => `${c}-${i}`).join(' ')
      const result = cn(longClasses)
      expect(result.length).toBeGreaterThan(0)
    })
  })
})