'use client'

import * as React from 'react'

export interface PricingFourColumnGridProps {
  onButtonClick?: (plan: string) => void
  onLearnMoreClick?: (plan: string) => void
}

export function PricingFourColumnGrid({
  onButtonClick,
  onLearnMoreClick,
}: PricingFourColumnGridProps) {
  const handleButtonClick = (plan: string) => {
    if (onButtonClick) {
      onButtonClick(plan)
    }
  }

  const handleLearnMore = (plan: string) => {
    if (onLearnMoreClick) {
      onLearnMoreClick(plan)
    }
  }

  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Free Plan */}
          <div className="bg-muted/20 p-8 lg:p-10 rounded-lg">
            <h3 className="font-heading text-2xl lg:text-3xl mb-6 text-foreground">Free</h3>
            <div className="mb-8">
              <span className="text-sm text-foreground">$</span>
              <span className="text-5xl lg:text-6xl font-heading text-foreground">0</span>
              <span className="text-sm text-foreground">/month</span>
            </div>
            <p className="text-muted-foreground mb-8">
              Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content.
            </p>
            <button
              onClick={() => handleLearnMore('free')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Learn more
            </button>
          </div>

          {/* Personal Plan */}
          <div className="bg-muted/20 p-8 lg:p-10 rounded-lg">
            <h3 className="font-heading text-2xl lg:text-3xl mb-6 text-foreground">Personal</h3>
            <div className="mb-8">
              <span className="text-sm text-foreground">$</span>
              <span className="text-5xl lg:text-6xl font-heading text-foreground">20</span>
              <span className="text-sm text-foreground">/month</span>
            </div>
            <p className="text-muted-foreground mb-8">
              Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content.
            </p>
            <button
              onClick={() => handleLearnMore('personal')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Learn more
            </button>
          </div>

          {/* Business Plan - With Diagonal Ribbon */}
          <div className="bg-background border border-border p-8 lg:p-10 rounded-lg relative overflow-hidden shadow-md">
            {/* Diagonal Ribbon */}
            <div className="absolute -top-0 -right-0 w-32 h-32">
              <div className="absolute top-6 -right-8 bg-primary text-primary-foreground text-xs font-heading py-1 px-12 rotate-45 shadow-lg">
                Best Offer
              </div>
            </div>

            <h3 className="font-heading text-2xl lg:text-3xl mb-6 text-foreground">Business</h3>
            <div className="mb-8">
              <span className="text-sm text-foreground">$</span>
              <span className="text-5xl lg:text-6xl font-heading text-foreground">30</span>
              <span className="text-sm text-foreground">/month</span>
            </div>
            <p className="text-muted-foreground mb-8">
              Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content.
            </p>
            <button
              onClick={() => handleButtonClick('business')}
              className="bg-primary text-primary-foreground px-8 py-3 font-heading text-sm hover:opacity-90 transition-opacity rounded-[100px]"
            >
              CLICK HERE
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-muted/20 p-8 lg:p-10 rounded-lg">
            <h3 className="font-heading text-2xl lg:text-3xl mb-6 text-foreground">Enterprise</h3>
            <div className="mb-8">
              <span className="text-sm text-foreground">$</span>
              <span className="text-5xl lg:text-6xl font-heading text-foreground">50</span>
              <span className="text-sm text-foreground">/month</span>
            </div>
            <p className="text-muted-foreground mb-8">
              Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content.
            </p>
            <button
              onClick={() => handleLearnMore('enterprise')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
