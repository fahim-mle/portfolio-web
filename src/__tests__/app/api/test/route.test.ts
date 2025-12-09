import { GET } from '@/app/api/test/route'
import { PrismaClient } from '@/generated/prisma/client'
import { NextResponse } from 'next/server'

// Mock Prisma
jest.mock('@/generated/prisma/client', () => ({
  PrismaClient: jest.fn(),
}))

// Mock pg Pool
jest.mock('pg', () => ({
  Pool: jest.fn().mockImplementation(() => ({})),
}))

// Mock PrismaPg adapter
jest.mock('@prisma/adapter-pg', () => ({
  PrismaPg: jest.fn().mockImplementation(() => ({})),
}))

// Mock NextResponse
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn((data, init) => ({ json: data, status: init?.status || 200 })),
  },
}))

describe('Test API Route', () => {
  let mockPrismaClient: any

  beforeEach(() => {
    jest.clearAllMocks()

    mockPrismaClient = {
      user: {
        findMany: jest.fn(),
      },
    }

    ;(PrismaClient as jest.MockedClass<typeof PrismaClient>).mockImplementation(
      () => mockPrismaClient
    )
  })

  describe('GET /api/test', () => {
    it('should return list of users', async () => {
      const mockUsers = [
        { id: '1', email: 'user1@example.com', name: 'User 1' },
        { id: '2', email: 'user2@example.com', name: 'User 2' },
      ]
      mockPrismaClient.user.findMany.mockResolvedValue(mockUsers)

      const response = await GET()

      expect(mockPrismaClient.user.findMany).toHaveBeenCalledTimes(1)
      expect(NextResponse.json).toHaveBeenCalledWith(mockUsers)
    })

    it('should return empty array when no users exist', async () => {
      mockPrismaClient.user.findMany.mockResolvedValue([])

      const response = await GET()

      expect(mockPrismaClient.user.findMany).toHaveBeenCalledTimes(1)
      expect(NextResponse.json).toHaveBeenCalledWith([])
    })

    it('should handle database errors gracefully', async () => {
      mockPrismaClient.user.findMany.mockRejectedValue(new Error('Database error'))

      const response = await GET()

      expect(NextResponse.json).toHaveBeenCalledWith(
        { error: 'Failed to fetch users' },
        { status: 500 }
      )
    })

    it('should handle connection errors', async () => {
      mockPrismaClient.user.findMany.mockRejectedValue(
        new Error('Connection refused')
      )

      const response = await GET()

      expect(NextResponse.json).toHaveBeenCalledWith(
        { error: 'Failed to fetch users' },
        { status: 500 }
      )
    })

    it('should handle timeout errors', async () => {
      mockPrismaClient.user.findMany.mockRejectedValue(new Error('Query timeout'))

      const response = await GET()

      expect(NextResponse.json).toHaveBeenCalledWith(
        { error: 'Failed to fetch users' },
        { status: 500 }
      )
    })

    it('should return users with all fields', async () => {
      const mockUsers = [
        {
          id: '1',
          email: 'test@example.com',
          name: 'Test User',
          emailVerified: false,
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
      mockPrismaClient.user.findMany.mockResolvedValue(mockUsers)

      const response = await GET()

      expect(NextResponse.json).toHaveBeenCalledWith(mockUsers)
    })
  })

  describe('Environment setup', () => {
    it('should use DATABASE_URL from environment', () => {
      // DATABASE_URL is accessed during module initialization
      expect(process.env.DATABASE_URL).toBeDefined()
    })
  })
})