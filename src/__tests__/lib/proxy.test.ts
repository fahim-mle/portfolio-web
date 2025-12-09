import { proxy } from '@/proxy'
import { NextRequest, NextResponse } from 'next/server'

// Mock better-auth/cookies
jest.mock('better-auth/cookies', () => ({
  getSessionCookie: jest.fn(),
}))

import { getSessionCookie } from 'better-auth/cookies'

const mockGetSessionCookie = getSessionCookie as jest.MockedFunction<typeof getSessionCookie>

describe('Proxy Middleware', () => {
  let mockRequest: Partial<NextRequest>
  let mockNextResponse: jest.SpyInstance

  beforeEach(() => {
    jest.clearAllMocks()
    
    mockNextResponse = jest.spyOn(NextResponse, 'next').mockReturnValue({} as NextResponse)
    jest.spyOn(NextResponse, 'redirect').mockImplementation((url) => ({ redirect: true, url } as any))
    
    mockRequest = {
      nextUrl: {
        pathname: '/',
      } as any,
      url: 'http://localhost:3000/',
    }
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('Protected routes', () => {
    it('should redirect to login when accessing /dashboard without session', async () => {
      mockGetSessionCookie.mockReturnValue(null as any)
      mockRequest.nextUrl!.pathname = '/dashboard'
      mockRequest.url = 'http://localhost:3000/dashboard'

      const result = await proxy(mockRequest as NextRequest)

      expect(mockGetSessionCookie).toHaveBeenCalledWith(mockRequest)
      expect(NextResponse.redirect).toHaveBeenCalled()
      const redirectCall = (NextResponse.redirect as jest.Mock).mock.calls[0][0]
      expect(redirectCall.pathname).toBe('/login')
    })

    it('should redirect to login when accessing /dashboard/profile without session', async () => {
      mockGetSessionCookie.mockReturnValue(null as any)
      mockRequest.nextUrl!.pathname = '/dashboard/profile'
      mockRequest.url = 'http://localhost:3000/dashboard/profile'

      const result = await proxy(mockRequest as NextRequest)

      expect(NextResponse.redirect).toHaveBeenCalled()
    })

    it('should allow access to /dashboard with valid session', async () => {
      mockGetSessionCookie.mockReturnValue({ sessionId: 'valid-session' } as any)
      mockRequest.nextUrl!.pathname = '/dashboard'

      const result = await proxy(mockRequest as NextRequest)

      expect(NextResponse.next).toHaveBeenCalled()
      expect(NextResponse.redirect).not.toHaveBeenCalled()
    })
  })

  describe('Public routes', () => {
    it('should allow access to home page without session', async () => {
      mockGetSessionCookie.mockReturnValue(null as any)
      mockRequest.nextUrl!.pathname = '/'

      const result = await proxy(mockRequest as NextRequest)

      expect(NextResponse.next).toHaveBeenCalled()
      expect(NextResponse.redirect).not.toHaveBeenCalled()
    })

    it('should allow access to /about without session', async () => {
      mockGetSessionCookie.mockReturnValue(null as any)
      mockRequest.nextUrl!.pathname = '/about'

      const result = await proxy(mockRequest as NextRequest)

      expect(NextResponse.next).toHaveBeenCalled()
    })

    it('should allow access to /blog without session', async () => {
      mockGetSessionCookie.mockReturnValue(null as any)
      mockRequest.nextUrl!.pathname = '/blog'

      const result = await proxy(mockRequest as NextRequest)

      expect(NextResponse.next).toHaveBeenCalled()
    })

    it('should allow access to /contact without session', async () => {
      mockGetSessionCookie.mockReturnValue(null as any)
      mockRequest.nextUrl!.pathname = '/contact'

      const result = await proxy(mockRequest as NextRequest)

      expect(NextResponse.next).toHaveBeenCalled()
    })

    it('should allow access to /login without session', async () => {
      mockGetSessionCookie.mockReturnValue(null as any)
      mockRequest.nextUrl!.pathname = '/login'

      const result = await proxy(mockRequest as NextRequest)

      expect(NextResponse.next).toHaveBeenCalled()
    })

    it('should allow access to /signup without session', async () => {
      mockGetSessionCookie.mockReturnValue(null as any)
      mockRequest.nextUrl!.pathname = '/signup'

      const result = await proxy(mockRequest as NextRequest)

      expect(NextResponse.next).toHaveBeenCalled()
    })
  })

  describe('API routes', () => {
    it('should allow access to public API routes', async () => {
      mockGetSessionCookie.mockReturnValue(null as any)
      mockRequest.nextUrl!.pathname = '/api/auth/signin'

      const result = await proxy(mockRequest as NextRequest)

      expect(NextResponse.next).toHaveBeenCalled()
    })

    it('should protect /api/protected routes without session', async () => {
      mockGetSessionCookie.mockReturnValue(null as any)
      mockRequest.nextUrl!.pathname = '/api/protected/user'
      mockRequest.url = 'http://localhost:3000/api/protected/user'

      const result = await proxy(mockRequest as NextRequest)

      expect(NextResponse.redirect).toHaveBeenCalled()
    })
  })

  describe('Edge cases', () => {
    it('should handle undefined session cookie gracefully', async () => {
      mockGetSessionCookie.mockReturnValue(undefined as any)
      mockRequest.nextUrl!.pathname = '/dashboard'
      mockRequest.url = 'http://localhost:3000/dashboard'

      const result = await proxy(mockRequest as NextRequest)

      expect(NextResponse.redirect).toHaveBeenCalled()
    })

    it('should handle routes with query parameters', async () => {
      mockGetSessionCookie.mockReturnValue(null as any)
      mockRequest.nextUrl!.pathname = '/dashboard'
      mockRequest.url = 'http://localhost:3000/dashboard?tab=profile'

      const result = await proxy(mockRequest as NextRequest)

      expect(NextResponse.redirect).toHaveBeenCalled()
    })

    it('should handle nested protected routes', async () => {
      mockGetSessionCookie.mockReturnValue(null as any)
      mockRequest.nextUrl!.pathname = '/dashboard/settings/profile'
      mockRequest.url = 'http://localhost:3000/dashboard/settings/profile'

      const result = await proxy(mockRequest as NextRequest)

      expect(NextResponse.redirect).toHaveBeenCalled()
    })
  })

  describe('Session validation', () => {
    it('should check session cookie for every request', async () => {
      mockGetSessionCookie.mockReturnValue({ sessionId: '123' } as any)
      mockRequest.nextUrl!.pathname = '/dashboard'

      await proxy(mockRequest as NextRequest)

      expect(mockGetSessionCookie).toHaveBeenCalledTimes(1)
      expect(mockGetSessionCookie).toHaveBeenCalledWith(mockRequest)
    })

    it('should accept any truthy session cookie', async () => {
      mockGetSessionCookie.mockReturnValue({ sessionId: 'any-value' } as any)
      mockRequest.nextUrl!.pathname = '/dashboard'

      const result = await proxy(mockRequest as NextRequest)

      expect(NextResponse.next).toHaveBeenCalled()
    })
  })
})