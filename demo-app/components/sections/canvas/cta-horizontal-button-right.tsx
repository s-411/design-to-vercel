'use client'

import * as React from 'react'

export interface CtaHorizontalButtonRightProps {
  tagline?: string
  heading?: string
  buttonText?: string
  onButtonClick?: () => void
}

export function CtaHorizontalButtonRight({
  tagline = 'Irresistable Offer',
  heading = 'A heading with a call to action',
  buttonText = 'CLICK HERE',
  onButtonClick,
}: CtaHorizontalButtonRightProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-primary text-lg font-medium mb-4">{tagline}</p>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
            {heading}
          </h2>
          <button
            onClick={onButtonClick}
            className="btn-mm bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 whitespace-nowrap"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}
