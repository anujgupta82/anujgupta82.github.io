import React from 'react';
import BlogPostCard from './BlogPostCard'; // Import BlogPostCard component

function BlogPostPage() {
  return (
    <div className="content container mx-auto py-10">
      <h1 className="page__title text-4xl font-bold text-gray-900 mb-6 text-center">Blog Posts</h1>

      <div className="archive px-4 md:px-0">
        <h2 className="archive__subtitle text-2xl font-semibold text-blue-800 mb-4 mt-8 border-b pb-2">2023</h2>
        <div className="list__item mb-6">
          <BlogPostCard // Use BlogPostCard component
            title="Product management for AI products - old wine in new bottle?"
            date="Aug 05, 2023"
            excerpt="The answer lies in the specialized skill set required for product management in the realm of AI. The traditional principles and experiences in product management for standard software products do not suffice for AI products. Product management in AI development demands a significant upgrade."
          />
        </div>

        <h2 className="archive__subtitle text-2xl font-semibold text-blue-800 mb-4 mt-8 border-b pb-2">2022</h2>
        <div className="list__item mb-6">
          <BlogPostCard // Use BlogPostCard component again
            title="Alexa AI and Layoffs"
            date="Nov 23, 2022"
            excerpt="Yesterday I was reading an article on recent layoffs at Alexa voice assistant unit in Amazon. This got me thinking. I believe the whole episode contains some critical lessons for many AI teams..."
          />
        </div>
        <h2 className="archive__subtitle text-2xl font-semibold text-blue-800 mb-4 mt-8 border-b pb-2">2021</h2>
        <div className="list__item mb-6">
          <BlogPostCard // Use BlogPostCard component again
            title="Alexa AI and Layoffs"
            date="Nov 23, 2021"
            excerpt="Yesterday I was reading an article on recent layoffs at Alexa voice assistant unit in Amazon. This got me thinking. I believe the whole episode contains some critical lessons for many AI teams..."
          />
        </div>
        <h2 className="archive__subtitle text-2xl font-semibold text-blue-800 mb-4 mt-8 border-b pb-2">2020</h2>
        <div className="list__item mb-6">
          <BlogPostCard // Use BlogPostCard component again
            title="Alexa AI and Layoffs"
            date="Nov 23, 2020"
            excerpt="Yesterday I was reading an article on recent layoffs at Alexa voice assistant unit in Amazon. This got me thinking. I believe the whole episode contains some critical lessons for many AI teams..."
          />
        </div>
        {/* ... Add more BlogPostCard components for other blog posts, passing in their data as props */}
      </div>
    </div>
  );
}

export default BlogPostPage;