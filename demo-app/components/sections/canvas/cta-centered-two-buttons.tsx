'use client'

import * as React from 'react'

export interface CtaCenteredTwoButtonsProps {
  tagline?: string
  heading?: string
  bodyCopy?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

export function CtaCenteredTwoButtons({
  tagline = 'Irresistable Offer',
  heading = 'A heading with a call to action',
  bodyCopy = 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content.',
  primaryButtonText = 'CLICK HERE',
  secondaryButtonText = 'CLICK HERE',
  onPrimaryClick,
  onSecondaryClick,
}: CtaCenteredTwoButtonsProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-primary text-lg font-medium mb-4">{tagline}</p>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
          {heading}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {bodyCopy}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onPrimaryClick}
            className="btn-mm bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
          >
            {primaryButtonText}
          </button>
          <button
            onClick={onSecondaryClick}
            className="btn-mm border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-3"
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </div>
  )
}
