'use client'

import * as React from 'react'

export interface QuoteCenteredAvatarProps {
  quote?: string
  author?: string
  role?: string
}

export function QuoteCenteredAvatar({
  quote = "There is something beautiful about a blank canvas, the nothingness of the beginning that is so simple and breathtakingly pure. It's the paint that changes its meaning and the hand that creates the story.",
  author = 'Piper Payne',
  role = 'Author, Breathing Black',
}: QuoteCenteredAvatarProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <svg
          className="w-10 h-10 lg:w-12 lg:h-12 text-muted/30 mx-auto mb-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>
        <p className="text-2xl lg:text-3xl font-heading text-foreground mb-8">
          {quote}
        </p>
        <div className="flex flex-col items-center">
          {/* Avatar placeholder */}
          <div className="w-16 h-16 rounded-full bg-muted/50 dark:bg-muted/30 mb-4" />
          <p className="text-lg text-primary font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}
