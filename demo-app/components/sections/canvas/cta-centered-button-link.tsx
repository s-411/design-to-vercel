'use client'

import * as React from 'react'

export interface CtaCenteredButtonLinkProps {
  heading?: string
  bodyCopy?: string
  buttonText?: string
  linkText?: string
  onButtonClick?: () => void
  onLinkClick?: () => void
}

export function CtaCenteredButtonLink({
  heading = 'A heading with a call to action',
  bodyCopy = 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content.',
  buttonText = 'CLICK HERE',
  linkText = 'Learn More',
  onButtonClick,
  onLinkClick,
}: CtaCenteredButtonLinkProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
          {heading}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {bodyCopy}
        </p>
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={onButtonClick}
            className="btn-mm bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
          >
            {buttonText}
          </button>
          <button
            onClick={onLinkClick}
            className="text-foreground font-semibold hover:text-muted-foreground transition-colors"
          >
            {linkText}
          </button>
        </div>
      </div>
    </div>
  )
}
