import React, { useState } from 'react'; // Import useState hook

function BlogPostCard({ title, date, excerpt }) { // Receive blog post data as props
    const [isExpanded, setIsExpanded] = useState(false); // State to manage card expansion

    const toggleCard = () => { // Function to toggle expansion state
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className={`blog-post-card bg-white rounded-lg border border-gray-200 shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer mb-6 ${isExpanded ? 'expanded' : ''}`} // Conditional class for expanded state
            onClick={toggleCard} // Toggle expansion on click
        >
            <article className="archive__item" itemscope itemtype="http://schema.org/CreativeWork">
                <h2 className="archive__item-title text-xl font-semibold text-gray-800 mb-2" itemprop="headline">
                    <a href="#" rel="" className="no-underline hover:underline">{title}</a> {/* Title from props */}
                </h2>
                <p className="page__date text-gray-500 text-sm mb-2">
                    <strong>
                        <i className="fa fa-fw fa-calendar mr-1" aria-hidden="true"></i>
                        Published:
                    </strong>
                    <time dateTime="2199-01-01T00:00:00-08:00">{date}</time> {/* Date from props */}
                </p>
                <div className={`archive__item-excerpt text-gray-700 leading-relaxed overflow-hidden transition-max-h-500 duration-500 ${isExpanded ? 'max-h-500' : 'max-h-24'}`} itemprop="description"> {/* Conditional max-h for collapsing/expanding */}
                    {excerpt} {/* Excerpt from props */}
                </div>
            </article>
        </div>
    );
}

export default BlogPostCard;