import { auth } from '@/lib/better-auth'

// Mock dependencies
jest.mock('@/generated/prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    $connect: jest.fn(),
    $disconnect: jest.fn(),
  })),
}))

jest.mock('@prisma/adapter-pg', () => ({
  PrismaPg: jest.fn().mockImplementation(() => ({})),
}))

jest.mock('pg', () => ({
  Pool: jest.fn().mockImplementation(() => ({})),
}))

jest.mock('better-auth', () => ({
  betterAuth: jest.fn((config) => ({
    config,
    handler: jest.fn(),
  })),
}))

jest.mock('better-auth/adapters/prisma', () => ({
  prismaAdapter: jest.fn((prisma, config) => ({ prisma, config })),
}))

import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'

describe('Better Auth Configuration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Auth instance', () => {
    it('should export auth instance', () => {
      expect(auth).toBeDefined()
      expect(auth).toHaveProperty('config')
    })

    it('should call betterAuth with configuration', () => {
      expect(betterAuth).toHaveBeenCalled()
    })
  })

  describe('Database configuration', () => {
    it('should use prismaAdapter for database', () => {
      const betterAuthCall = (betterAuth as jest.Mock).mock.calls[0][0]
      expect(betterAuthCall).toHaveProperty('database')
      expect(prismaAdapter).toHaveBeenCalled()
    })

    it('should configure postgresql provider', () => {
      const prismaAdapterCall = (prismaAdapter as jest.Mock).mock.calls[0][1]
      expect(prismaAdapterCall).toEqual({ provider: 'postgresql' })
    })

    it('should use DATABASE_URL from environment', () => {
      expect(process.env.DATABASE_URL).toBeDefined()
    })
  })

  describe('Email and password configuration', () => {
    it('should enable email and password authentication', () => {
      const betterAuthCall = (betterAuth as jest.Mock).mock.calls[0][0]
      expect(betterAuthCall.emailAndPassword).toEqual({ enabled: true })
    })
  })

  describe('Rate limiting configuration', () => {
    it('should configure rate limiting', () => {
      const betterAuthCall = (betterAuth as jest.Mock).mock.calls[0][0]
      expect(betterAuthCall.rateLimit).toBeDefined()
    })

    it('should set rate limit window to 60 seconds', () => {
      const betterAuthCall = (betterAuth as jest.Mock).mock.calls[0][0]
      expect(betterAuthCall.rateLimit.window).toBe(60)
    })

    it('should set max requests to 100', () => {
      const betterAuthCall = (betterAuth as jest.Mock).mock.calls[0][0]
      expect(betterAuthCall.rateLimit.max).toBe(100)
    })
  })

  describe('PrismaClient initialization', () => {
    it('should initialize PrismaClient with adapter', () => {
      const { PrismaClient } = require('@/generated/prisma/client')
      expect(PrismaClient).toHaveBeenCalled()
    })

    it('should create Pool with connection string', () => {
      const { Pool } = require('pg')
      expect(Pool).toHaveBeenCalledWith({
        connectionString: process.env.DATABASE_URL,
      })
    })

    it('should create PrismaPg adapter with pool', () => {
      const { PrismaPg } = require('@prisma/adapter-pg')
      expect(PrismaPg).toHaveBeenCalled()
    })
  })
})