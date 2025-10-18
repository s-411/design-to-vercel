'use client'

import * as React from 'react'

export interface FaqCard {
  question: string
  answer?: string
  isExpanded?: boolean
}

export interface FaqGridCardsProps {
  tagline?: string
  heading?: string
  leftColumnCards?: FaqCard[]
  rightColumnCards?: FaqCard[]
}

export function FaqGridCards({
  tagline = 'Short Tagline',
  heading = 'Frequently asked questions',
  leftColumnCards = [
    {
      question: 'How to upgrade my license',
      answer:
        'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.',
      isExpanded: true,
    },
    {
      question: 'What payment gateways can I use?',
      isExpanded: false,
    },
    {
      question: 'Where are you located?',
      isExpanded: false,
    },
  ],
  rightColumnCards = [
    {
      question: 'What payment gateways can I use?',
      isExpanded: false,
    },
    {
      question: 'How to upgrade my license',
      isExpanded: false,
    },
    {
      question: 'Where are you located?',
      isExpanded: false,
    },
  ],
}: FaqGridCardsProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {tagline}
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading text-foreground">
            {heading}
          </h2>
        </div>

        {/* Two column grid of FAQ cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="space-y-6">
            {leftColumnCards.map((card, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-6 bg-background"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {card.question}
                  </h3>
                  {!card.isExpanded && (
                    <svg
                      className="w-6 h-6 text-primary flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h3l-4-4-4 4h3z" />
                      <path d="M11 7h2v2h-2zm0 4h2v6h-2z" />
                    </svg>
                  )}
                </div>
                {card.isExpanded && card.answer && (
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {card.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {rightColumnCards.map((card, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-6 bg-background"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {card.question}
                  </h3>
                  {!card.isExpanded && (
                    <svg
                      className="w-6 h-6 text-primary flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h3l-4-4-4 4h3z" />
                      <path d="M11 7h2v2h-2zm0 4h2v6h-2z" />
                    </svg>
                  )}
                </div>
                {card.isExpanded && card.answer && (
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {card.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
