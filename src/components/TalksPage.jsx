import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLink, faWindowMaximize, faVideo } from '@fortawesome/free-solid-svg-icons'; // Import icons

function TalksPage() {
    return (
        <div className="content container mx-auto py-10">
            <h1 className="page__title text-4xl font-bold text-gray-900 mb-6 text-center">Talks and Presentations</h1> {/* Main title styling */}

            <div className="archive px-4 md:px-0"> {/* Container for talks */}
                <div className="list__item mb-8"> {/* Spacing between talk items */}
                    <article className="archive__item bg-white rounded-lg shadow-md p-6"> {/* Card styling for talk item */}
                        <h2 className="archive__item-title text-xl font-semibold text-blue-800 mb-3" itemprop="headline"> {/* Talk title styling */}
                            <a>AI Founders' Masterclass: Spotting large opportunities</a> {/* Link styling - adjust if needed */}
                        </h2>
                        <div className="workshop-info flex flex-col md:flex-row justify-between items-start"> {/* Flex layout for talk info */}
                            <p className="archive__item-excerpt text-gray-700 mb-2 md:mb-0">Upekkha AI Accelerator</p> {/* Talk excerpt styling */}
                            <div className="vertical_side text-right md:text-left"> {/* Right-aligned text on small screens, left-aligned on larger */}
                                <p className="page__meta text-gray-500 text-sm"> {/* Meta info styling */}
                                    <FontAwesomeIcon icon={faClock} className="mr-1" aria-hidden="true" /> 26th Feb, 2025
                                </p>
                                <p className="archive__item-excerpt text-gray-700 text-sm mt-2"> {/* Link styling */}
                                    <a href="#" className="text-blue-800 hover:underline mr-2"><FontAwesomeIcon icon={faLink} className="mr-1" aria-hidden="true" /> Website</a>
                                    <a href="#" className="text-blue-800 hover:underline mr-2"><FontAwesomeIcon icon={faWindowMaximize} className="mr-1" aria-hidden="true" /> Slides</a>
                                    <a href="#" className="text-blue-800 hover:underline"><FontAwesomeIcon icon={faVideo} className="mr-1" aria-hidden="true" /> Recording</a>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Repeat list__item block for other talks, adjust content accordingly */}

                <div className="list__item mb-8">
                    <article className="archive__item bg-white rounded-lg shadow-md p-6">
                        <h2 className="archive__item-title text-xl font-semibold text-blue-700 mb-3" itemprop="headline">
                            <a>Leveraging AI for innovation and business growth</a>
                        </h2>
                        <div className="workshop-info flex flex-col md:flex-row justify-between items-start">
                            <p className="archive__item-excerpt text-gray-700 mb-2 md:mb-0">Ladies Who Lead (LWL)</p>
                            <div className="vertical_side text-right md:text-left">
                                <p className="page__meta text-gray-500 text-sm">
                                    <FontAwesomeIcon icon={faClock} className="mr-1" aria-hidden="true" /> 24th Feb, 2025
                                </p>
                                <p className="archive__item-excerpt text-gray-700 text-sm mt-2">
                                    <a href="#" className="text-blue-800 hover:underline mr-2"><FontAwesomeIcon icon={faLink} className="mr-1" aria-hidden="true" /> Website</a>
                                    <a href="#" className="text-blue-800 hover:underline mr-2"><FontAwesomeIcon icon={faWindowMaximize} className="mr-1" aria-hidden="true" /> Slides</a>
                                    <a href="#" className="text-blue-800 hover:underline"><FontAwesomeIcon icon={faVideo} className="mr-1" aria-hidden="true" /> Recording</a>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

                {/* ... Add more list__item blocks for other talks, repeating the structure above */}

            </div>
        </div>
    );
}

export default TalksPage;