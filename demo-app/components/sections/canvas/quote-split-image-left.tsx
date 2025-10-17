'use client'

import * as React from 'react'

export interface QuoteSplitImageLeftProps {
  quote?: string
  author?: string
}

export function QuoteSplitImageLeft({
  quote = "There is something beautiful about a blank canvas, the nothingness of the beginning that is so simple and breathtakingly pure. It's the paint that changes its meaning and the hand that creates the story.",
  author = 'Piper Payne',
}: QuoteSplitImageLeftProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image placeholder */}
          <div className="aspect-[4/3] bg-muted/50 dark:bg-muted/30 rounded-lg" />

          {/* Quote content */}
          <div>
            <svg
              className="w-10 h-10 lg:w-12 lg:h-12 text-muted/30 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
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
