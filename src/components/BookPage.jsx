import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you installed font-awesome
import { faBook, faAnchor, faFilePdf } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import PNLPbook from "../assets/images/PNLPbook.jpg"

function BookPage() {
    return (
        <div className="content container mx-auto py-10">
            <div className="archive px-4 md:px-0">
                <h1 className="page__title pageh1 text-4xl font-bold text-gray-900 mb-6 text-center"> {/* Centered, darker title */}
                    Practical Natural Language Processing
                </h1>
                <p className="text-gray-700 text-lg text-center italic mb-8"> {/* Subtitle styling - italic, centered */}
                    A Comprehensive Guide to Building Real-World NLP Systems
                </p>

                <div className="list__item">
                    <article className="archive__item bg-white rounded-xl shadow-lg overflow-hidden"> {/* Rounded corners, more pronounced shadow, overflow hidden for image */}
                        <div className="md:flex"> {/* Flex container for image and text on medium screens and above */}
                            <div className="md:w-1/3"> {/* Image column width */}
                                <img
                                    src={PNLPbook}
                                    alt="Book Cover"
                                    className="h-full w-full object-cover" // Full height, full width, cover image
                                />
                            </div>
                            <div className="p-6 md:w-2/3"> {/* Text column width and padding */}
                                <h2 className="archive__item-title text-2xl font-semibold text-gray-800 mb-3" itemProp="headline"> {/* Darker purple title */}
                                    <a href="#" rel="" className="no-underline hover:underline"> {/* Underline on hover for link */}
                                        A Comprehensive Guide to Building Real-World NLP Systems
                                    </a>
                                </h2>
                                <p className="archive__item-excerpt text-gray-700 leading-relaxed mb-4"> {/* Improved readability */}
                                    I co-authored this book with <a href="https://www.linkedin.com/in/sowmya-vajjala-2a38734/">Sowmya Vajjala</a>, <a href="http://www.majumderb.com/">Bodhisattwa P. Majumder</a>, <a
                                        href="http://harshitsurana.com/">Harshit Surana</a>; published by <a
                                        href="http://shop.oreilly.com/product/0636920262329.do">O’Reilly Media</a> in June, 2020.
                                        The book has been translated into multiple languages including English, Japanese, Chinese
                                        simplified and Chinese complex. The book is being used by over 40 universities globally for
                                        their AI curriculum.
                                </p>
                                <p className="text-gray-600 text-sm"> {/* Smaller, muted text for endorsements */}
                                    <strong>Endorsed by:</strong>
                                    <a href="https://www.acmilab.org/people/zachary-lipton/">Zachary Lipton</a>, <a href="https://ruder.io/">Sebastian Ruder</a>,
                                    <a href="http://marc.najork.org/">Marc Najork</a>, <a href="https://www.microsoft.com/en-us/research/people/monojitc/">Monojit Choudhury</a>,
                                    <a href="https://www.linkedin.com/in/vinayakh/">Vinayak Hegde</a>, <a href="https://mengtingwan.github.io/">Mengting Wan</a>,
                                    <a href="https://www.linkedin.com/in/siddharth-sharma-31140210/">Siddharth Sharma</a> and <a href="https://www.linkedin.com/in/e10is/">Ed Harris</a>.
                                </p>
                                <p className="text-gray-600 text-sm"> {/* Smaller, muted text for forward */}
                                    <strong>Forward by</strong> <a href="https://cseweb.ucsd.edu/~jmcauley/">Julian McAuley</a>
                                </p>
                                <div className="mt-4 flex space-x-4"> {/* Spacing for buttons */}
                                    <a href="https://www.oreilly.com/library/view/practical-natural-language/9781492070509/"
                                        className="inline-flex items-center bg-purple-600 text-white rounded-md px-4 py-2 hover:bg-purple-700 transition-colors duration-200"> {/* Button styling */}
                                        <FontAwesomeIcon icon={faBook} className="mr-2" /> {/* Icon */}
                                        O'Reilly
                                    </a>
                                    <a href="https://www.amazon.com/Practical-Natural-Language-Processing-Comprehensive/dp/1492070528"
                                        className="inline-flex items-center bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors duration-200"> {/* Button styling */}
                                        <FontAwesomeIcon icon={faAnchor} className="mr-2" /> {/* Icon */}
                                        Amazon
                                    </a>
                                    <a href="/ABG_MS_Thesis.pdf"
                                        className="inline-flex items-center bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-700 transition-colors duration-200"> {/* Button styling */}
                                        <FontAwesomeIcon icon={faFilePdf} className="mr-2" /> {/* Icon */}
                                        PDF
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default BookPage;