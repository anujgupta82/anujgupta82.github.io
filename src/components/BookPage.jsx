"use client";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faAnchor,
  faBook,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import PNLPbook from "../assets/images/PNLPbook.jpg";
import pnlpchinese from "../assets/images/pnlpchinese.jpg";
import pnlppolish from "../assets/images/pnlppolish.jpg";
import pnlpjapanese from "../assets/images/pnlpjapanese.jpg";
// Placeholder book covers with consistent aspect ratios
const bookCovers = [
  { id: 1, src: PNLPbook, alt: "PNLP Book Cover" },
  { id: 2, src: pnlpjapanese, alt: "Japanese simplified translation" },
  { id: 3, src: pnlpchinese, alt: "Chinese Complex Translation" },
  { id: 4, src: pnlppolish, alt: "Polish simplified translation" },
  
];

function BookPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  //   const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval;
    // if (isAutoPlaying) {
    interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === bookCovers.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    // }
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bookCovers.length - 1 ? 0 : prev + 1));
    // setIsAutoPlaying(false)
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bookCovers.length - 1 : prev - 1));
    // setIsAutoPlaying(false)
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // setIsAutoPlaying(false)
  };

  const NameLink = ({ href, children }) => (
    <a
      href={href}
      className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200 hover:underline decoration-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );

  const companies = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      url: "https://www.google.com/",
      brandColor: "#4285F4",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      url: "https://www.microsoft.com/",
      brandColor: "#00A4EF",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      url: "https://www.amazon.com/",
      brandColor: "#FF9900",
    },
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      url: "https://about.meta.com/",
      brandColor: "#1877F2",
    },
    {
      name: "Walmart",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
      url: "https://www.walmart.com/",
      brandColor: "#0071CE",
    },
    {
      name: "Arm",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/ARM_logo.svg",
      url: "https://www.arm.com/",
      brandColor: "#0091BD",
    },
    {
      name: "KPMG",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg",
      url: "https://home.kpmg/",
      brandColor: "#00338D",
    },
    {
      name: "Medium",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Medium_%28website%29_logo.svg",
      url: "https://medium.com/",
      brandColor: "#00AB6C",
    },
    {
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
      url: "https://www.spotify.com/",
      brandColor: "#1DB954",
    },
    {
      name: "Intel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Intel_logo_%282020%2C_light_blue%29.svg",
      url: "https://www.intel.com/",
      brandColor: "#0071C5",
    },
    {
      name: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      url: "https://www.oracle.com/",
      brandColor: "#F80000",
    },
    {
      name: "American Express",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg",
      url: "https://www.americanexpress.com/",
      brandColor: "#006FCF",
    },
    {
      name: "Jio",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reliance_Jio_Logo.svg/768px-Reliance_Jio_Logo.svg.png",
      url: "https://www.jio.com/",
      brandColor: "#003F7F",
    },
    {
      name: "Google AI",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/bb/Google_AI_logo.svg",
      url: "https://ai.google/",
      brandColor: "#4285F4",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Practical Natural Language Processing
          </h1>
          <p className="text-xl text-gray-600 font-light italic max-w-3xl mx-auto">
            A Comprehensive Guide to Building Real-World NLP Systems
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="lg:flex">
            {/* Book Carousel Section */}
            <div className="lg:w-2/5 xl:w-1/3 p-8 bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="relative aspect-[3/4] max-w-sm mx-auto">
                <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden">
                  {bookCovers.map((book, index) => (
                    <div
                      key={book.id}
                      className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                        index === currentSlide
                          ? "opacity-100 scale-100 z-10"
                          : "opacity-0 scale-95 z-0"
                      }`}
                    >
                      <img
                        src={book.src}
                        alt={book.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full shadow-md border border-blue-100 z-20 hover:bg-blue-100 transition-all duration-200 hover:scale-110"
                    aria-label="Previous slide"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full shadow-md border border-blue-100 z-20 hover:bg-blue-100 transition-all duration-200 hover:scale-110"
                    aria-label="Next slide"
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-sm"
                    />
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
                    {bookCovers.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? "bg-blue-600 scale-125"
                            : "bg-blue-300 hover:bg-blue-400"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-3/5 xl:w-2/3 p-8 lg:p-12">
              <div className="space-y-6">
                {/* Book Description */}
                <div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    The book gives a unique perspective on how to do AI when you
                    are part of startups and product teams as opposed to
                    academia or research labs. It has been translated into
                    multiple languages, including English, Polish, Chinese, and
                    Japanese, received 285+ citations and 1350+ stars on Github.
                    It has also been used by 50+ universities globally for their
                    AI curriculum.
                  </p>
                </div>

                {/* Endorsements */}
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">
                      Endorsed by the topmost AI leaders globally:
                    </span>{" "}
                    <NameLink href="https://www.acmilab.org/people/zachary-lipton/">
                      Zachary Lipton
                    </NameLink>
                    ,{" "}
                    <NameLink href="https://ruder.io/">
                      Sebastian Ruder
                    </NameLink>
                    ,{" "}
                    <NameLink href="http://marc.najork.org/">
                      Marc Najork
                    </NameLink>
                    ,{" "}
                    <NameLink href="https://www.microsoft.com/en-us/research/people/monojitc/">
                      Monojit Choudhury
                    </NameLink>
                    ,{" "}
                    <NameLink href="https://www.linkedin.com/in/vinayakh/">
                      Vinayak Hegde
                    </NameLink>
                    ,{" "}
                    <NameLink href="https://mengtingwan.github.io/">
                      Mengting Wan
                    </NameLink>
                    ,{" "}
                    <NameLink href="https://www.linkedin.com/in/siddharth-sharma-31140210/">
                      Siddharth Sharma
                    </NameLink>
                    , and{" "}
                    <NameLink href="https://www.linkedin.com/in/e10is/">
                      Ed Harris
                    </NameLink>
                    .
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Forward by</span>{" "}
                    <NameLink href="https://cseweb.ucsd.edu/~jmcauley/">
                      Julian McAuley
                    </NameLink>
                  </p>
                  <p className="text-gray-600 font-medium">
                    Published by O'Reilly Media, US in June, 2020
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    title="O'Reilly"
                    target="_blank"
                    href="https://www.oreilly.com/library/view/practical-natural-language/9781492054047/"
                    className="group inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faBook}
                      className="mr-2 group-hover:rotate-12 transition-transform duration-200"
                    />
                    O'Reilly
                  </a>
                  <a
                    title="Amazon"
                    target="_blank"
                    href="https://www.amazon.in/Practical-Natural-Language-Processing-Gupta/dp/1492054054"
                    className="group inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faAnchor}
                      className="mr-2 group-hover:rotate-12 transition-transform duration-200"
                    />
                    Amazon
                  </a>
                  <a
                    title="LinkedIn"
                    href="https://www.linkedin.com/company/practical-nlp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="mr-2 group-hover:scale-110 transition-transform duration-200"
                    />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Companies Section */}
          <div className="border-t border-gray-100 bg-gradient-to-br from-gray-50 to-slate-100 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Trusted by Professionals at Leading Companies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {companies.map((company, index) => (
                <div key={index} className="relative group">
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden"
                  >
                    <div className="flex items-center justify-center h-16 px-4 py-3 rounded-xl  transition-all duration-300   group-hover:-translate-y-1 bg-transparent">
                      <img
                        src={company.logo}
                        title={company.name}
                        alt={`${company.name} logo`}
                        className="h-8 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                        style={{
                          filter: "grayscale(100%) brightness(0.4)",
                          transition: "all 0.3s ease",
                          backgroundColor: "transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.filter = "grayscale(0%) brightness(1)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.filter =
                            "grayscale(100%) brightness(0.4)";
                        }}
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Additional Professional Touch */}
            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm font-medium">
                Join thousands of professionals who trust our expertise
              </p>
            </div>
          </div>

          {/* Upcoming Book Section */}
          {/* Upcoming Book Section */}
          <div className="border-t-2">
            <div className="w-full rounded-lg bg-gradient-to-br from-gray-100 to-indigo-100 border-l-4 border-indigo-600 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                📘 Coming Soon
              </h3>
              <p className="text-gray-800 text-base mb-2">
                I’m currently writing my second book titled{" "}
                <strong className="text-indigo-700">
                  "AI First by Design"
                </strong>
                .
              </p>
              <p className="text-gray-700 text-sm mb-4">
                A practical guide to accelerating AI maturity and leading
                high-performance AI-driven initiatives and organizations.
              </p>
              <a
                href="https://github.com/Gradient-Advisors/AI-First-by-Design-Book"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="mr-2 group-hover:rotate-12 transition-transform duration-200"
                />
                View on GitHub
              </a>
              <p className="text-gray-500 text-xs mt-2 italic">
                This book is open-source and freely available to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
