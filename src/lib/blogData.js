import blogsData from '@/data/blogs.json';

export function getAllBlogs() {
  return blogsData.blogs;
}

export function getFeaturedBlogs() {
  return blogsData.blogs.filter(blog => blog.featured);
}

export function getBlogBySlug(slug) {
  return blogsData.blogs.find(blog => blog.slug === slug);
}

export function getCategories() {
  const categories = blogsData.blogs.map(blog => blog.category);
  return [...new Set(categories)];
}

export function getTags() {
  const allTags = blogsData.blogs.flatMap(blog => blog.tags);
  return [...new Set(allTags)];
}

export function getRecentBlogs(limit = 4) {
  return [...blogsData.blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}