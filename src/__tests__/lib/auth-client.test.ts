import { authClient, signIn, signOut, signUp, useSession } from '@/lib/auth-client'

// Mock better-auth/react
jest.mock('better-auth/react', () => ({
  createAuthClient: jest.fn((config) => ({
    signIn: { email: jest.fn() },
    signUp: { email: jest.fn() },
    signOut: jest.fn(),
    useSession: jest.fn(),
    config,
  })),
}))

import { createAuthClient } from 'better-auth/react'

describe('Auth Client', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Client initialization', () => {
    it('should create auth client with baseURL', () => {
      expect(createAuthClient).toHaveBeenCalledWith({
        baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
      })
    })

    it('should use environment variable for baseURL', () => {
      const mockCreateAuthClient = createAuthClient as jest.MockedFunction<
        typeof createAuthClient
      >
      const calls = mockCreateAuthClient.mock.calls
      
      expect(calls[0][0]).toHaveProperty('baseURL')
      expect(calls[0][0].baseURL).toBe(process.env.NEXT_PUBLIC_BETTER_AUTH_URL)
    })

    it('should export authClient instance', () => {
      expect(authClient).toBeDefined()
      expect(authClient).toHaveProperty('config')
    })
  })

  describe('Exported functions', () => {
    it('should export signIn function', () => {
      expect(signIn).toBeDefined()
      expect(signIn).toHaveProperty('email')
    })

    it('should export signUp function', () => {
      expect(signUp).toBeDefined()
      expect(signUp).toHaveProperty('email')
    })

    it('should export signOut function', () => {
      expect(signOut).toBeDefined()
      expect(typeof signOut).toBe('function')
    })

    it('should export useSession hook', () => {
      expect(useSession).toBeDefined()
      expect(typeof useSession).toBe('function')
    })
  })

  describe('Configuration', () => {
    it('should have correct baseURL configuration', () => {
      const mockCreateAuthClient = createAuthClient as jest.MockedFunction<
        typeof createAuthClient
      >
      const config = mockCreateAuthClient.mock.calls[0][0]

      expect(config.baseURL).toBe('http://localhost:3000')
    })
  })
})