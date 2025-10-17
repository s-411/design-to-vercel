'use client'

import * as React from 'react'

export interface QuoteSimpleLeftProps {
  quote?: string
  author?: string
}

export function QuoteSimpleLeft({
  quote = "There is something beautiful about a blank canvas, the nothingness of the beginning that is so simple and breathtakingly pure. It's the paint that changes its meaning and the hand that creates the story.",
  author = 'Piper Payne',
}: QuoteSimpleLeftProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex gap-6 lg:gap-8">
          {/* Decorative quotation marks */}
          <div className="flex-shrink-0">
            <svg
              className="w-12 h-12 lg:w-16 lg:h-16 text-muted/30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
          </div>

          {/* Quote content */}
          <div>
            <p className="text-2xl lg:text-3xl font-heading text-foreground mb-4">
              {quote}
            </p>
            <p className="text-lg text-primary font-semibold">{author}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
