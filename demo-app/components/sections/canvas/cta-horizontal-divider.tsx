'use client'

import * as React from 'react'

export interface CtaHorizontalDividerProps {
  tagline?: string
  heading?: string
  bodyCopy?: string
  buttonText?: string
  onButtonClick?: () => void
}

export function CtaHorizontalDivider({
  tagline = 'Irresistable Offer',
  heading = 'A heading with a call to action',
  bodyCopy = 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content.',
  buttonText = 'CLICK HERE',
  onButtonClick,
}: CtaHorizontalDividerProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-primary text-lg font-medium mb-4">{tagline}</p>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {heading}
        </h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
          {bodyCopy}
        </p>
        <div className="border-t border-muted-foreground/20 pt-6">
          <div className="flex justify-end">
            <button
              onClick={onButtonClick}
              className="btn-mm bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
