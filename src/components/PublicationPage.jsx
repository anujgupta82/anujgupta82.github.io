import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faBook, faArchive, faAnchor, faNewspaper } from '@fortawesome/free-solid-svg-icons'; // Import icons

function PublicationPage() {
    return (
        <div className="content container mx-auto py-10">
            <h1 className="page__title text-4xl font-bold text-blue-900 mb-6 text-center">Publications</h1> {/* Main title */}

            <div className="archive px-4 md:px-0"> {/* Container for publications */}
                <div className="list__item mb-8"> {/* Spacing between publication items */}
                    <article className="archive__item bg-white rounded-lg shadow-md p-6"> {/* Card styling */}
                        <h2 className="archive__item-title text-xl font-semibold text-blue-800 mb-3" itemprop="headline"> {/* Publication title */}
                            <a href="#" rel="" className="no-underline hover:underline">Noisy Text Data: Achilles' Heel of popular transformer based NLP models</a> {/* Link styling */}
                        </h2>
                        <p className="text-gray-700 mb-2"> {/* Author list */}
                            <b>Author:</b>
                            <a href="http://linkedin.com/in/kartikay-bagla-60638a167" className="text-gray-600 hover:underline">Kartikay Bagla</a>,
                            <a href="http://linkedin.com/in/ankit-ahlawat" className="text-gray-600 hover:underline">Ankit Kumar</a>,
                            <a href="https://www.linkedin.com/in/shmgupta/" className="text-gray-600 hover:underline">Shivam Gupta</a>,
                            <a href="https://anujgupta82.github.io/" className="text-gray-600 hover:underline"><strong>Anuj Gupta</strong></a>
                        </p>
                        <p className="distance flex space-x-4 text-gray-600 text-sm"> {/* Publication details and links container */}
                            <a className="cell hover:text-blue-700" href="https://arxiv.org/pdf/2110.03353.pdf">
                                <FontAwesomeIcon icon={faFilePdf} className="mr-1" aria-hidden="true" /> PDF
                            </a>
                            <a className="cell hover:text-blue-700" href="https://arxiv2bibtex.org/?q=2110.03353">
                                <FontAwesomeIcon icon={faBook} className="mr-1" aria-hidden="true" /> Bibtex
                            </a>
                            <a className="cell hover:text-blue-700" href="https://arxiv.org/abs/2110.03353">
                                <FontAwesomeIcon icon={faArchive} className="mr-1" aria-hidden="true" /> arXiv: 2110.03353
                            </a>
                        </p>
                    </article>
                </div>

                {/* Repeat list__item block for other publications, adjust content accordingly */}

                <div className="list__item mb-8">
                    <article className="archive__item bg-white rounded-lg shadow-md p-6">
                        <h2 className="archive__item-title text-xl font-semibold text-blue-800 mb-3" itemprop="headline">
                            <a href="#" rel="" className="no-underline hover:underline">Practical Natural Language Processing: A Comprehensive Guide to Building Real-World NLP Systems</a>
                        </h2>
                        <p className="text-gray-700 mb-2">
                            <b>Author:</b>
                            Sowmya Vajjala,
                            Bodhisattwa Majumder,
                            <a href="https://anujgupta82.github.io/" className="text-gray-800 hover:underline"><strong>Anuj Gupta</strong></a>,
                            Harshit Surana
                        </p>
                        <p className="distance flex space-x-4 text-gray-600 text-sm">
                            <a className="cell hover:text-blue-800" href="https://www.doi2bib.org/bib/10.18653/v1/2020.wnut-1.3">
                                <FontAwesomeIcon icon={faBook} className="mr-1" aria-hidden="true" /> Bibtex
                            </a>
                            <a className="cell hover:text-blue-800" href="http://doi.org/10/gjzgqh">
                                <FontAwesomeIcon icon={faAnchor} className="mr-1" aria-hidden="true" /> DOI: 10/gjzgqh
                            </a>
                        </p>
                    </article>
                </div>

                {/* ... Add more list__item blocks for other publications */}

            </div>
        </div>
    );
}

export default PublicationPage;