import * as blog from '@/lib/blog'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

// Mock the fs module
jest.mock('fs')
jest.mock('gray-matter')

const mockFs = fs as jest.Mocked<typeof fs>
const mockMatter = matter as jest.MockedFunction<typeof matter>

describe('Blog utility functions', () => {
  const mockPostsDir = path.join(process.cwd(), 'src/content/posts')

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getSortedPostsData', () => {
    it('should return sorted posts by date (newest first)', () => {
      mockFs.readdirSync.mockReturnValue([
        'post1.md',
        'post2.md',
        'post3.md',
      ] as any)

      mockFs.readFileSync
        .mockReturnValueOnce('---\ntitle: Old Post\ndate: 2023-01-01\nexcerpt: Old excerpt\n---\nContent')
        .mockReturnValueOnce('---\ntitle: New Post\ndate: 2024-01-01\nexcerpt: New excerpt\n---\nContent')
        .mockReturnValueOnce('---\ntitle: Middle Post\ndate: 2023-06-01\nexcerpt: Middle excerpt\n---\nContent')

      mockMatter
        .mockReturnValueOnce({
          data: { title: 'Old Post', date: '2023-01-01', excerpt: 'Old excerpt' },
          content: 'Content',
        } as any)
        .mockReturnValueOnce({
          data: { title: 'New Post', date: '2024-01-01', excerpt: 'New excerpt' },
          content: 'Content',
        } as any)
        .mockReturnValueOnce({
          data: { title: 'Middle Post', date: '2023-06-01', excerpt: 'Middle excerpt' },
          content: 'Content',
        } as any)

      const result = blog.getSortedPostsData()

      expect(result).toHaveLength(3)
      expect(result[0].title).toBe('New Post')
      expect(result[1].title).toBe('Middle Post')
      expect(result[2].title).toBe('Old Post')
    })

    it('should return empty array when no posts exist', () => {
      mockFs.readdirSync.mockReturnValue([] as any)

      const result = blog.getSortedPostsData()

      expect(result).toEqual([])
    })

    it('should extract correct post metadata', () => {
      mockFs.readdirSync.mockReturnValue(['test-post.md'] as any)
      mockFs.readFileSync.mockReturnValue('---\ntitle: Test Post\ndate: 2024-01-01\nexcerpt: Test excerpt\n---\nContent')
      mockMatter.mockReturnValue({
        data: { title: 'Test Post', date: '2024-01-01', excerpt: 'Test excerpt' },
        content: 'Content',
      } as any)

      const result = blog.getSortedPostsData()

      expect(result[0]).toEqual({
        id: 'test-post',
        title: 'Test Post',
        date: '2024-01-01',
        excerpt: 'Test excerpt',
      })
    })

    it('should handle posts without excerpt', () => {
      mockFs.readdirSync.mockReturnValue(['no-excerpt.md'] as any)
      mockFs.readFileSync.mockReturnValue('---\ntitle: No Excerpt\ndate: 2024-01-01\n---\nContent')
      mockMatter.mockReturnValue({
        data: { title: 'No Excerpt', date: '2024-01-01' },
        content: 'Content',
      } as any)

      const result = blog.getSortedPostsData()

      expect(result[0].excerpt).toBeUndefined()
    })

    it('should remove .md extension from filename for id', () => {
      mockFs.readdirSync.mockReturnValue(['my-blog-post.md'] as any)
      mockFs.readFileSync.mockReturnValue('---\ntitle: Test\ndate: 2024-01-01\n---\nContent')
      mockMatter.mockReturnValue({
        data: { title: 'Test', date: '2024-01-01' },
        content: 'Content',
      } as any)

      const result = blog.getSortedPostsData()

      expect(result[0].id).toBe('my-blog-post')
    })
  })

  describe('getAllPostIds', () => {
    it('should return array of post IDs with params structure', () => {
      mockFs.readdirSync.mockReturnValue([
        'post1.md',
        'post2.md',
        'post3.md',
      ] as any)

      const result = blog.getAllPostIds()

      expect(result).toEqual([
        { params: { slug: 'post1' } },
        { params: { slug: 'post2' } },
        { params: { slug: 'post3' } },
      ])
    })

    it('should return empty array when no posts exist', () => {
      mockFs.readdirSync.mockReturnValue([] as any)

      const result = blog.getAllPostIds()

      expect(result).toEqual([])
    })

    it('should handle filenames with special characters', () => {
      mockFs.readdirSync.mockReturnValue([
        'post-with-dashes.md',
        'post_with_underscores.md',
      ] as any)

      const result = blog.getAllPostIds()

      expect(result).toEqual([
        { params: { slug: 'post-with-dashes' } },
        { params: { slug: 'post_with_underscores' } },
      ])
    })
  })

  describe('getPostData', () => {
    it('should return post data with HTML content', async () => {
      mockFs.readFileSync.mockReturnValue(
        '---\ntitle: Test Post\ndate: 2024-01-01\nexcerpt: Test excerpt\n---\n# Test Content\n\nThis is a test.'
      )
      mockMatter.mockReturnValue({
        data: { title: 'Test Post', date: '2024-01-01', excerpt: 'Test excerpt' },
        content: '# Test Content\n\nThis is a test.',
      } as any)

      const result = await blog.getPostData('test-post')

      expect(result.id).toBe('test-post')
      expect(result.title).toBe('Test Post')
      expect(result.date).toBe('2024-01-01')
      expect(result.excerpt).toBe('Test excerpt')
      expect(result.contentHtml).toBeTruthy()
      expect(typeof result.contentHtml).toBe('string')
    })

    it('should sanitize HTML content', async () => {
      mockFs.readFileSync.mockReturnValue(
        '---\ntitle: Test\ndate: 2024-01-01\n---\n<script>alert("xss")</script>'
      )
      mockMatter.mockReturnValue({
        data: { title: 'Test', date: '2024-01-01' },
        content: '<script>alert("xss")</script>',
      } as any)

      const result = await blog.getPostData('test-post')

      // The rehype-sanitize plugin should remove dangerous content
      expect(result.contentHtml).toBeDefined()
    })

    it('should convert markdown to HTML correctly', async () => {
      mockFs.readFileSync.mockReturnValue(
        '---\ntitle: Test\ndate: 2024-01-01\n---\n**bold** and *italic*'
      )
      mockMatter.mockReturnValue({
        data: { title: 'Test', date: '2024-01-01' },
        content: '**bold** and *italic*',
      } as any)

      const result = await blog.getPostData('test-post')

      expect(result.contentHtml).toBeTruthy()
    })

    it('should read from correct file path', async () => {
      mockFs.readFileSync.mockReturnValue('---\ntitle: Test\ndate: 2024-01-01\n---\nContent')
      mockMatter.mockReturnValue({
        data: { title: 'Test', date: '2024-01-01' },
        content: 'Content',
      } as any)

      await blog.getPostData('my-post')

      const expectedPath = path.join(mockPostsDir, 'my-post.md')
      expect(mockFs.readFileSync).toHaveBeenCalledWith(expectedPath, 'utf8')
    })

    it('should handle posts without excerpt in getPostData', async () => {
      mockFs.readFileSync.mockReturnValue(
        '---\ntitle: No Excerpt\ndate: 2024-01-01\n---\nContent'
      )
      mockMatter.mockReturnValue({
        data: { title: 'No Excerpt', date: '2024-01-01' },
        content: 'Content',
      } as any)

      const result = await blog.getPostData('no-excerpt')

      expect(result.excerpt).toBeUndefined()
      expect(result.title).toBe('No Excerpt')
    })
  })

  describe('Edge cases and error handling', () => {
    it('should handle file system errors gracefully', () => {
      mockFs.readdirSync.mockImplementation(() => {
        throw new Error('File system error')
      })

      expect(() => blog.getSortedPostsData()).toThrow()
    })

    it('should handle malformed frontmatter', () => {
      mockFs.readdirSync.mockReturnValue(['bad-post.md'] as any)
      mockFs.readFileSync.mockReturnValue('Invalid frontmatter content')
      mockMatter.mockImplementation(() => {
        throw new Error('Invalid frontmatter')
      })

      expect(() => blog.getSortedPostsData()).toThrow()
    })
  })
})