import Link from 'next/link';
import { getRecentBlogs } from '@/lib/blogData';

export default function FeaturedBlogsSection() {
  const blogs = getRecentBlogs(3);
  
  if (!blogs.length) {
    return null;
  }
  
  const mainBlog = blogs[0];
  const otherBlogs = blogs.slice(1);
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      month: 'short',
      day: 'numeric',
    });
  };
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="mb-10">
          <h2 className="text-2xl font-medium text-gray-900 mb-3">
            Analyses financières récentes
          </h2>
          <p className="text-gray-600">
            Nos insights sur les marchés et stratégies d'investissement
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article principal */}
          <div className="lg:col-span-2">
            <div className="group">
              <div className="h-[230px] mb-6 overflow-hidden">
                <img 
                  src={mainBlog.image} 
                  alt={mainBlog.title}
                  className="w-full h-full object-cover group-hover:opacity-95 transition-opacity"
                />
              </div>
              
              <div className="px-2">
                <div className="mb-3">
                  <span className="text-sm text-gray-900 font-medium uppercase tracking-wider">
                    {mainBlog.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  <Link href={`/blogs/${mainBlog.slug}`} className="hover:text-gray-700 transition-colors">
                    {mainBlog.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {mainBlog.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-medium">
                      {mainBlog.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">{mainBlog.author}</div>
                      <div className="text-gray-500 text-xs">{formatDate(mainBlog.date)}</div>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blogs/${mainBlog.slug}`}
                    className="text-gray-900 hover:text-gray-700 text-sm font-medium"
                  >
                    Lire l'analyse →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Articles secondaires */}
          <div className="space-y-6">
            {otherBlogs.map(blog => (
              <div key={blog.id} className="group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-base font-medium text-gray-900 mb-2 group-hover:text-gray-700">
                      <Link href={`/blogs/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h4>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{formatDate(blog.date)}</span>
                      <span className="mx-2">•</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Lien vers tous les articles */}
            <div className="pt-6 border-t border-gray-100">
              <Link 
                href="/blogs"
                className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 text-sm font-medium"
              >
                Voir toutes les analyses
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}