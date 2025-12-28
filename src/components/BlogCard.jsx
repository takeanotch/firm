// // import Link from 'next/link';
// // import Tag from './Tag';

// // export default function BlogCard({ blog, featured = false }) {
// //   const formattedDate = new Date(blog.date).toLocaleDateString('fr-FR', {
// //     year: 'numeric',
// //     month: 'short',
// //     day: 'numeric',
// //   });
  
// //   return (
// //     <article className={`bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 ${featured ? 'md:flex' : ''}`}>
// //       {/* Image */}
// //       <div className={`${featured ? 'md:w-2/5' : 'h-48'} bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center`}>
// //         <div className="text-center p-4">
// //           <div className="text-4xl mb-2">📊</div>
// //           <p className="text-gray-700 text-sm">Finance & Marchés</p>
// //         </div>
// //       </div>
      
// //       {/* Content */}
// //       <div className={`p-6 ${featured ? 'md:w-3/5' : ''}`}>
// //         <div className="flex items-center space-x-2 mb-3">
// //           <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
// //             {blog.category}
// //           </span>
// //           <span className="text-gray-500 text-sm">{formattedDate}</span>
// //           <span className="text-gray-500 text-sm">•</span>
// //           <span className="text-gray-500 text-sm">{blog.readTime} de lecture</span>
// //         </div>
        
// //         <h2 className={`font-bold text-gray-900 mb-3 ${featured ? 'text-2xl' : 'text-xl'}`}>
// //           <Link href={`/blogs/${blog.slug}`} className="hover:text-blue-600">
// //             {blog.title}
// //           </Link>
// //         </h2>
        
// //         <p className="text-gray-600 mb-4">
// //           {blog.excerpt}
// //         </p>
        
// //         <div className="flex flex-wrap gap-2 mb-4">
// //           {blog.tags.slice(0, 3).map(tag => (
// //             <Tag key={tag} tag={tag} small />
// //           ))}
// //         </div>
        
// //         <div className="flex items-center justify-between">
// //           <div className="flex items-center space-x-2">
// //             <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
// //             <span className="text-gray-700 font-medium text-sm">{blog.author}</span>
// //           </div>
          
// //           <Link 
// //             href={`/blogs/${blog.slug}`} 
// //             className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
// //           >
// //             Lire l'article
// //             <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
// //             </svg>
// //           </Link>
// //         </div>
// //       </div>
// //     </article>
// //   );
// // }

// import Link from 'next/link';

// export default function BlogCard({ blog }) {
//   const formattedDate = new Date(blog.date).toLocaleDateString('fr-FR', {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
//   });
  
//   return (
//     <article className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
//       {/* Image container */}
//       <div className="relative  overflow-hidden">
//         <div className="h-44 w-full">
//           <img src={blog.image} className='w-full h-full object-cover'/>
//         </div>
        
//         {/* Category badge */}
//         <div className="absolute top-4 left-4">
//           <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold rounded-full">
//             {blog.category}
//           </span>
//         </div>
        
//         {/* Date */}
//         <div className="absolute bottom-4 left-4">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
//               <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//             </div>
//             <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
//               {formattedDate}
//             </span>
//           </div>
//         </div>
//       </div>
      
//       {/* Content */}
//       <div className="p-6">
//         <div className="flex items-center justify-between mb-3">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white text-sm font-bold">
//               {blog.author.charAt(0)}
//             </div>
//             <span className="text-gray-700 font-medium text-sm">{blog.author}</span>
//           </div>
//           <span className="text-gray-500 text-sm flex items-center gap-1">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             {blog.readTime}
//           </span>
//         </div>
        
//         <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
//           <Link href={`/blogs/${blog.slug}`}>
//             {blog.title}
//           </Link>
//         </h2>
        
//         <p className="text-gray-600 mb-4 line-clamp-3">
//           {blog.excerpt}
//         </p>
        
//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mb-6">
//           {blog.tags.slice(0, 2).map(tag => (
//             <span 
//               key={tag} 
//               className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors"
//             >
//               #{tag}
//             </span>
//           ))}
//           {blog.tags.length > 2 && (
//             <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
//               +{blog.tags.length - 2}
//             </span>
//           )}
//         </div>
        
     
//       </div>
//     </article>
//   );
// }
import Link from 'next/link';

export default function BlogCard({ blog }) {
  const formattedDate = new Date(blog.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  
  return (
    <article className="group py-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image */}
        <div className="lg:w-40 lg:flex-shrink-0">
          <div className="relative aspect-video lg:aspect-square bg-gray-100 overflow-hidden">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-full object-cover group-hover:opacity-95 transition-opacity"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          {/* Meta info */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span className="text-gray-900 font-medium">
              {blog.category}
            </span>
            <span className="text-gray-400">•</span>
            <span>{formattedDate}</span>
            <span className="text-gray-400">•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {blog.readTime}
            </span>
          </div>
          
          {/* Title */}
          <h2 className="text-2xl font-medium text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
            <Link href={`/blogs/${blog.slug}`}>
              {blog.title}
            </Link>
          </h2>
          
          {/* Excerpt */}
          <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
            {blog.excerpt}
          </p>
          
          {/* Author */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 text-sm font-medium">
                {blog.author.charAt(0)}
              </div>
              <span className="text-gray-700 font-medium text-sm">{blog.author}</span>
            </div>
            
            {/* Tags */}
            <div className="hidden md:flex items-center gap-2">
              {blog.tags.slice(0, 2).map(tag => (
                <span 
                  key={tag} 
                  className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                >
                  #{tag}
                </span>
              ))}
              {blog.tags.length > 2 && (
                <span className="text-xs text-gray-400">
                  +{blog.tags.length - 2}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile tags */}
      <div className="md:hidden flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
        {blog.tags.slice(0, 3).map(tag => (
          <span 
            key={tag} 
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
          >
            #{tag}
          </span>
        ))}
        {blog.tags.length > 3 && (
          <span className="text-xs text-gray-400">
            +{blog.tags.length - 3}
          </span>
        )}
      </div>
    </article>
  );
}