'use client'

import * as React from 'react'

export interface CtaSplitImageLeftProps {
  tagline?: string
  heading?: string
  bodyCopy?: string
  buttonText?: string
  onButtonClick?: () => void
}

export function CtaSplitImageLeft({
  tagline = 'Irresistable Offer',
  heading = 'A heading to introduce the promised transformation with a call to action',
  bodyCopy = 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content.',
  buttonText = 'CLICK HERE',
  onButtonClick,
}: CtaSplitImageLeftProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] bg-muted/50 dark:bg-muted/30 rounded-lg" />
          </div>
          <div className="lg:col-span-3">
            <p className="text-primary text-lg font-medium mb-4">{tagline}</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {heading}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
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
    </div>
  )
}
