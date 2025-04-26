"use client"

import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faAnchor, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import PNLPbook from "../assets/images/PNLPbook.jpg"
import pnlpchinese from "../assets/images/pnlpchinese.jpg"
import pnlppolish from "../assets/images/pnlppolish.jpg"

const bookCovers = [
  { id: 1, src: PNLPbook, alt: "PNLP Book Cover" },
  { id: 2, src: pnlppolish, alt: "Japanese simplified translation" },
  { id: 4, src: pnlpchinese, alt: "Chinese Complex Translation" },
]

function BookPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === bookCovers.length - 1 ? 0 : prev + 1))
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bookCovers.length - 1 ? 0 : prev + 1))
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bookCovers.length - 1 : prev - 1))
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  // Styled Name Link component for highlighting endorsers
  const NameLink = ({ href, children }) => (
    <a
      href={href}
      className="font-bold text-indigo-600 hover:text-indigo-800 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )

  return (
    <div className="content container mx-auto py-6">
      <div className="archive px-4 md:px-0">
        <h1 className="page__title pageh1 text-3xl font-bold text-gray-900 mb-4 text-center">
          Practical Natural Language Processing
        </h1>
        <p className="text-gray-700 text-base text-center italic mb-6">
          A Comprehensive Guide to Building Real-World NLP Systems
        </p>

        <div className="list__item">
          <article
            className="archive__item bg-white rounded-xl shadow-md overflow-hidden"
            style={{ width: "auto", height: "auto", margin: "0 auto", padding: "16px" }}
          >
            <div className="md:flex gap-4 item ">
              {/* Photo container with separate background and border - Updated with smaller size */}
              <div
                className="md:w-1/5 relative bg-gray-100 rounded-lg border border-gray-300 p-1"
                style={{ minHeight: "300px", maxHeight: "280px" }}
              >
                <div className="relative h-full">
                  <div className="relative h-full">
                    {bookCovers.map((book, index) => (
                      <div
                        key={book.id}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                          index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={book.src || "/placeholder.svg"}
                          alt={book.alt}
                          style={{
                            width: "auto",
                            height: "auto",
                            maxHeight: "380px",
                            maxWidth: "100%",
                          }}
                          className="object-contain "
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full z-20 hover:bg-opacity-70"
                    aria-label="Previous slide"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full z-20 hover:bg-opacity-70"
                    aria-label="Next slide"
                  >
                    <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
                  </button>

                  <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1.5 z-20">
                    {bookCovers.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-400"}`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Written content container remains the same */}
              <div className="p-4 md:w-3/5 bg-white rounded-lg">
                <h2 className="archive__item-title text-xl font-semibold text-gray-800 mb-2" itemProp="headline"></h2>
                <p className="archive__item-excerpt text-gray-700 text-sm leading-relaxed mb-3">
                  The book gives a unique perspective on how to do AI when you are part of startups and product teams as
                  opposed to academia or research labs. It has been translated into multiple languages, including
                  English, Polish, Chinese, and Japanese, received 285+ citations and 1350+ stars on Github. It has also
                  been used by 50+ universities globally for their AI curriculum.
                </p>
                <p className="text-gray-600 text-xs">
                  <strong>Endorsed by the topmost AI leaders globally:</strong>{" "}
                  <NameLink href="https://www.acmilab.org/people/zachary-lipton/">Zachary Lipton</NameLink>,{" "}
                  <NameLink href="https://ruder.io/">Sebastian Ruder</NameLink>,{" "}
                  <NameLink href="http://marc.najork.org/">Marc Najork</NameLink>,{" "}
                  <NameLink href="https://www.microsoft.com/en-us/research/people/monojitc/">
                    Monojit Choudhury
                  </NameLink>
                  , <NameLink href="https://www.linkedin.com/in/vinayakh/">Vinayak Hegde</NameLink>,{" "}
                  <NameLink href="https://mengtingwan.github.io/">Mengting Wan</NameLink>,{" "}
                  <NameLink href="https://www.linkedin.com/in/siddharth-sharma-31140210/">Siddharth Sharma</NameLink>{" "}
                  and <NameLink href="https://www.linkedin.com/in/e10is/">Ed Harris</NameLink>.
                </p>
                <p className="text-gray-600 text-xs">
                  <strong>Forward by</strong>{" "}
                  <NameLink href="https://cseweb.ucsd.edu/~jmcauley/">Julian McAuley</NameLink>
                </p>
                <p className="text-gray-600 text-xs">
                  <strong>Published by O'Reilly Media, US in June, 2020</strong>
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="https://www.oreilly.com/library/view/practical-natural-language/9781492070509/"
                    className="inline-flex items-center bg-purple-600 text-white rounded-md px-3 py-1.5 text-xs hover:bg-purple-700 transition-colors duration-200"
                  >
                    <FontAwesomeIcon icon={faBook} className="mr-1.5" />
                    O'Reilly
                  </a>
                  <a
                    href="https://www.amazon.com/Practical-Natural-Language-Processing-Comprehensive/dp/1492070528"
                    className="inline-flex items-center bg-blue-500 text-white rounded-md px-3 py-1.5 text-xs hover:bg-blue-600 transition-colors duration-200"
                  >
                    <FontAwesomeIcon icon={faAnchor} className="mr-1.5" />
                    Amazon
                  </a>
                  <a
                    href="https://www.linkedin.com/company/practical-nlp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#0077B5] text-white rounded-md px-3 py-1.5 text-xs hover:bg-[#005582] transition-colors duration-200"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="mr-1.5" />
                    LinkedIn
                  </a>
                </div>

                {/* Read From Professionals Section */}
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-gray-800 mb-2">Read From Professionals </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mt-2">
                    {[
                      {
                        src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
                        alt: "Google",
                        link: "https://www.google.com/",
                      },
                      {
                        src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
                        alt: "Microsoft",
                        link: "https://www.microsoft.com/",
                      },
                      {
                        src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
                        alt: "Amazon",
                        link: "https://www.amazon.com/",
                      },
                      {
                        src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
                        alt: "Meta",
                        link: "https://about.meta.com/",
                      },
                      {
                        src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
                        alt: "Walmart",
                        link: "https://www.walmart.com/",
                      },
                      {
                        src: "https://upload.wikimedia.org/wikipedia/commons/6/60/ARM_logo.svg",
                        alt: "Arm",
                        link: "https://www.arm.com/",
                      },
                      {
                        src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg",
                        alt: "KPMG",
                        link: "https://home.kpmg/",
                      },
                      {
                        src: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Medium_%28website%29_logo.svg",
                        alt: "Medium",
                        link: "https://medium.com/",
                      },
                      {
                        src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
                        alt: "Spotify",
                        link: "https://www.spotify.com/",
                      },
                      {
                        src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Intel_logo_%282020%2C_light_blue%29.svg",
                        alt: "Intel",
                        link: "https://www.intel.com/",
                      },
                      {
                        src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
                        alt: "Oracle",
                        link: "https://www.oracle.com/",
                      },
                      {
                        src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg",
                        alt: "AmEx",
                        link: "https://www.americanexpress.com/",
                      },
                      {
                        src: "https://upload.wikimedia.org/wikipedia/en/b/bf/Reliance_Jio_Logo.svg",
                        alt: "Jio",
                        link: "https://www.jio.com/",
                      },
                      {
                        src: "https://upload.wikimedia.org/wikipedia/en/b/bb/Google_AI_logo.svg",
                        alt: "Google AI",
                        link: "https://ai.google/",
                      },
                    ].map((logo, index) => (
                      <a
                        key={index}
                        href={logo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center"
                      >
                        <img
                          src={logo.src || "/placeholder.svg"}
                          alt={logo.alt}
                          className={`h-6 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition ${
                            ["Meta", "Intel", "Meta AI", "Google AI", "Jio"].includes(logo.alt)
                              ? "bg-gray-100 px-1 py-0.5 rounded"
                              : ""
                          }`}
                          style={{ maxWidth: "80px" }}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* New Book Announcement moved below both columns */}
            <div
              className="mt-4 p-4 rounded-lg w-full"
              style={{
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                borderLeft: "4px solid #4f46e5",
              }}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">Coming Soon:</h3>
              <p className="text-gray-700 mb-2 text-base">
                I am writing my 2nd book - <strong className="text-indigo-600">"AI First by Design"</strong>
              </p>
              <p className="text-gray-600 mb-3 text-sm">
                Your Guide to Accelerating AI Maturity & Leading High-Performance AI Initiatives & Organizations
              </p>
              <a
                href="https://github.com/Gradient-Advisors/AI-First-by-Design-Book"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-800 text-white rounded-md px-3 py-1.5 text-xs hover:bg-gray-700 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faGithub} className="mr-1.5" />
                View on GitHub
              </a>
              <p className="text-gray-500 text-xs mt-1">The book is open source, free for all.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
export default BookPage;

