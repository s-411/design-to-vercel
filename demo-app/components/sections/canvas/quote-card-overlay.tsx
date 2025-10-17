'use client'

import * as React from 'react'

export interface QuoteCardOverlayProps {
  quote?: string
  author?: string
  role?: string
}

export function QuoteCardOverlay({
  quote = "There is something beautiful about a blank canvas, the nothingness of the beginning that is so simple and breathtakingly pure. It's the paint that changes its meaning and the hand that creates the story.",
  author = 'Piper Payne',
  role = 'Author, Breathing Black',
}: QuoteCardOverlayProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Background image with overlay card */}
        <div className="relative aspect-[21/9] bg-muted/50 dark:bg-muted/30 rounded-lg flex items-center justify-center p-8">
          {/* Quote card */}
          <div className="bg-background dark:bg-card rounded-lg p-8 lg:p-12 max-w-4xl shadow-lg">
            <svg
              className="w-10 h-10 lg:w-12 lg:h-12 text-primary mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
            <p className="text-xl lg:text-2xl font-heading text-foreground mb-6">
              {quote}
            </p>
            <div className="flex items-center gap-4">
              {/* Avatar placeholder */}
              <div className="w-12 h-12 rounded-full bg-muted/50 dark:bg-muted/30 flex-shrink-0" />
              <div>
                <p className="font-semibold text-muted-foreground">{author}</p>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
