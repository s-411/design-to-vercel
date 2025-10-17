'use client'

import * as React from 'react'

export interface QuoteSplitImageRightProps {
  quote?: string
  author?: string
  role?: string
}

export function QuoteSplitImageRight({
  quote = "There is something beautiful about a blank canvas, the nothingness of the beginning that is so simple and breathtakingly pure. It's the paint that changes its meaning and the hand that creates the story.",
  author = 'Piper Payne',
  role = 'Author, Breathing Black',
}: QuoteSplitImageRightProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Quote content */}
          <div className="lg:col-span-2">
            <svg
              className="w-10 h-10 lg:w-12 lg:h-12 text-primary mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
            <p className="text-2xl lg:text-3xl font-heading text-foreground mb-6">
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

          {/* Image placeholder */}
          <div className="lg:col-span-1">
            <div className="aspect-[3/4] bg-muted/50 dark:bg-muted/30 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}
