import { GET, POST } from '@/app/api/auth/[...all]/route'

// Mock better-auth
jest.mock('@/lib/better-auth', () => ({
  auth: {
    handler: jest.fn(),
  },
}))

// Mock toNextJsHandler
jest.mock('better-auth/next-js', () => ({
  toNextJsHandler: jest.fn((auth) => ({
    GET: jest.fn(),
    POST: jest.fn(),
  })),
}))

import { auth } from '@/lib/better-auth'
import { toNextJsHandler } from 'better-auth/next-js'

describe('Auth API Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Route exports', () => {
    it('should export GET handler', () => {
      expect(GET).toBeDefined()
      expect(typeof GET).toBe('function')
    })

    it('should export POST handler', () => {
      expect(POST).toBeDefined()
      expect(typeof POST).toBe('function')
    })

    it('should use toNextJsHandler with auth instance', () => {
      expect(toNextJsHandler).toHaveBeenCalledWith(auth)
    })
  })

  describe('Handler initialization', () => {
    it('should create handlers from better-auth', () => {
      const mockHandlers = {
        GET: jest.fn(),
        POST: jest.fn(),
      }
      ;(toNextJsHandler as jest.Mock).mockReturnValue(mockHandlers)

      // Re-import to trigger initialization
      jest.isolateModules(() => {
        require('@/app/api/auth/[...all]/route')
      })

      expect(toNextJsHandler).toHaveBeenCalled()
    })
  })
})