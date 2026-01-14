'use client'

import { useState } from 'react'

interface ServiceCardProps {
  title: string
  icon: string
  description: string
  module?: string
  fullDescription: string
  features: string[]
  notionLink?: string
}

export default function ServiceCard({
  title,
  icon,
  description,
  module,
  fullDescription,
  features,
  notionLink,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
        isExpanded
          ? 'border-purple-400/50 bg-white/10 shadow-2xl'
          : 'hover:border-purple-400/50 hover:bg-white/10 hover:shadow-xl'
      }`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-8 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-2xl"
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-5xl">{icon}</span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                {module && (
                  <p className="text-purple-400 text-sm font-semibold mb-2">
                    {module}
                  </p>
                )}
              </div>
            </div>
            <p className="text-gray-300 mb-4">{description}</p>
          </div>
          <div className="ml-4 flex-shrink-0">
            <svg
              className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${
                isExpanded ? 'transform rotate-180' : ''
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-8 pb-8 pt-0 border-t border-purple-500/20 mt-4">
          <div className="pt-6 space-y-6">
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-3">
                Подробное описание
              </h4>
              <p className="text-gray-300 leading-relaxed">{fullDescription}</p>
            </div>

            {features.length > 0 && (
              <div>
                <h4 className="text-lg font-bold text-purple-400 mb-3">
                  Что включает:
                </h4>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {notionLink && (
              <div className="pt-4">
                <a
                  href={notionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm font-semibold inline-flex items-center gap-2"
                >
                  Подробнее в Notion
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

























