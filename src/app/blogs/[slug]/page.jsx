import { getData } from '@/lib/getData';
import React from 'react';

// Helper function to render rich text content
const renderRichText = (content) => {
  return content.map((block, index) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index} className="mb-4 text-slate-700 leading-relaxed">
            {block.children.map((child, childIndex) => {
              if (child.bold) {
                return <strong key={childIndex} className="font-semibold text-slate-900">{child.text}</strong>;
              }
              return <span key={childIndex}>{child.text}</span>;
            })}
          </p>
        );
      
      case 'heading':
        const HeadingTag = `h${block.level}`;
        const headingClasses = {
          1: 'text-3xl font-bold text-slate-900 mb-6 mt-8',
          2: 'text-2xl font-bold text-slate-900 mb-4 mt-6',
          3: 'text-xl font-semibold text-slate-900 mb-3 mt-5'
        };
        
        return React.createElement(
          HeadingTag,
          { key: index, className: headingClasses[block.level] || 'text-lg font-semibold text-slate-900 mb-2 mt-4' },
          block.children.map((child, childIndex) => (
            child.bold ? 
              <strong key={childIndex}>{child.text}</strong> : 
              <span key={childIndex}>{child.text}</span>
          ))
        );
      
      case 'image':
        return (
          <div key={index} className="my-8">
            <img
              src={block.image.url}
              alt={block.image.alternativeText || block.image.name}
              className="w-full rounded-xl shadow-lg"
              loading="lazy"
            />
            {block.image.caption && (
              <p className="text-center text-sm text-slate-500 mt-2 italic">
                {block.image.caption}
              </p>
            )}
          </div>
        );
      
      case 'list':
        const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
        const listClasses = block.format === 'ordered' 
          ? 'list-decimal list-inside mb-4 space-y-2'
          : 'list-disc list-inside mb-4 space-y-2';
        
        return (
          <ListTag key={index} className={listClasses}>
            {block.children.map((item, itemIndex) => (
              <li key={itemIndex} className="text-slate-700">
                {item.children.map((child, childIndex) => (
                  child.bold ? 
                    <strong key={childIndex} className="font-semibold text-slate-900">{child.text}</strong> :
                    <span key={childIndex}>{child.text}</span>
                ))}
              </li>
            ))}
          </ListTag>
        );
      
      default:
        return null;
    }
  });
};



export default async function Blogs({ params }) {
  const { slug } = await params;
  const data = await fetch(
    `https://lovable-growth-4951fded8b.strapiapp.com/api/blogs/${slug}?populate=*`,
    { cache: "no-store" }
  );
  const response = await data.json();
  const blog = response.data;

  // Format the published date
  const publishedDate = blog.published ? new Date(blog.published) : null;
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center justify-center space-x-2 text-sm text-slate-600">
                <span className="hover:text-blue-600 transition-colors cursor-pointer">Home</span>
                <span className="text-slate-400">/</span>
                <span className="hover:text-blue-600 transition-colors cursor-pointer">Blog</span>
                <span className="text-slate-400">/</span>
                <span className="text-slate-900 font-medium truncate max-w-xs">
                  {blog.title.replace(/🏔️/g, '').substring(0, 30)}...
                </span>
              </div>
            </nav>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Short Description */}
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {blog.shortDescription}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500">
              {publishedDate && (
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time dateTime={blog.published}>
                    {publishedDate.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>15 min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Himachal Pradesh</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {['Trek', 'Himalayas', 'Spiritual', 'Adventure', 'Kinnaur'].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {blog.image && (
        <div className="container mx-auto px-4 -mt-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
              <img
                src={blog.image.url}
                alt={blog.image.alternativeText || blog.image.name || blog.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            {/* Quick Info Card */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Trek Highlights</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">📍</span>
                  <span><strong>Location:</strong> Rora Valley, Kinnaur</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">⛰️</span>
                  <span><strong>Altitude:</strong> 12,700 feet</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">📅</span>
                  <span><strong>Duration:</strong> 3 Days</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">💰</span>
                  <span><strong>Cost:</strong> ₹6,999 per person</span>
                </div>
              </div>
            </div>

            {/* Rich Text Content */}
            <div className="prose prose-lg max-w-none">
              {blog.description && renderRichText(blog.description)}
            </div>

            {/* Call to Action */}
            {/* <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready for Your Spiritual Journey? 🏔️</h3>
              <p className="mb-6 text-blue-100">
                Join us for the Holy Yulla Kanda Trek and experience the world's highest Krishna temple.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Book Now - ₹6,999
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Contact Us
                </button>
              </div>
            </div> */}

            {/* Share Section */}
            {/* <div className="mt-12 pt-8 border-t border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Share this trek</h3>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  <span>Twitter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                  <span>LinkedIn</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  <span>WhatsApp</span>
                </button>
              </div>
            </div> */}
          </article>

          {/* Related Treks */}
          {/* <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">More Himalayan Adventures</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Chandratal Lake Trek", location: "Spiti Valley", difficulty: "Moderate" },
                { title: "Hampta Pass Trek", location: "Kullu Valley", difficulty: "Easy-Moderate" },
                { title: "Pin Parvati Pass Trek", location: "Himachal Pradesh", difficulty: "Challenging" }
              ].map((trek, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-green-400"></div>
                  <div className="p-6">
                    <h3 className="font-semibold text-slate-900 mb-2">{trek.title}</h3>
                    <p className="text-slate-600 text-sm mb-2">{trek.location}</p>
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full mb-4">
                      {trek.difficulty}
                    </span>
                    <div className="text-blue-600 text-sm font-medium">Explore Trek →</div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
}