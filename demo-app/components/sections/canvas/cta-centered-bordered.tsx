'use client'

import * as React from 'react'

export interface CtaCenteredBorderedProps {
  tagline?: string
  heading?: string
  bodyCopy?: string
  buttonText?: string
  onButtonClick?: () => void
}

export function CtaCenteredBordered({
  tagline = 'Irresistable Offer',
  heading = 'A heading with a call to action',
  bodyCopy = 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content.',
  buttonText = 'CLICK HERE',
  onButtonClick,
}: CtaCenteredBorderedProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="border border-muted-foreground/20 rounded-lg px-8 py-12 lg:px-16 lg:py-16 text-center">
          <p className="text-primary text-lg font-medium mb-4">{tagline}</p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {heading}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {bodyCopy}
          </p>
          <button
            onClick={onButtonClick}
            className="btn-mm bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}
