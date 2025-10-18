'use client'

import * as React from 'react'

export interface PricingFourColumnDarkFeaturedProps {
  onButtonClick?: (plan: string) => void
}

export function PricingFourColumnDarkFeatured({
  onButtonClick,
}: PricingFourColumnDarkFeaturedProps) {
  const handleClick = (plan: string) => {
    if (onButtonClick) {
      onButtonClick(plan)
    }
  }

  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Free Plan */}
          <div className="bg-muted/20 p-8 rounded-lg">
            <h3 className="font-heading text-2xl lg:text-3xl mb-6 text-foreground">Free</h3>
            <div className="mb-8">
              <span className="text-sm text-foreground">$</span>
              <span className="text-5xl lg:text-6xl font-heading text-foreground">0</span>
              <span className="text-sm text-foreground">/month</span>
            </div>
            <p className="text-muted-foreground mb-8">
              Your content goes here. Edit or remove this text inline or in the module Content settings.
            </p>
            <button
              onClick={() => handleClick('free')}
              className="w-full border-2 border-primary text-foreground px-6 py-3 font-heading text-sm hover:bg-primary hover:text-primary-foreground transition-colors rounded-[100px]"
            >
              CHOOSE PLAN
            </button>
          </div>

          {/* Personal Plan */}
          <div className="bg-muted/20 p-8 rounded-lg">
            <h3 className="font-heading text-2xl lg:text-3xl mb-6 text-foreground">Personal</h3>
            <div className="mb-8">
              <span className="text-sm text-foreground">$</span>
              <span className="text-5xl lg:text-6xl font-heading text-foreground">20</span>
              <span className="text-sm text-foreground">/month</span>
            </div>
            <p className="text-muted-foreground mb-8">
              Your content goes here. Edit or remove this text inline or in the module Content settings.
            </p>
            <button
              onClick={() => handleClick('personal')}
              className="w-full border-2 border-primary text-foreground px-6 py-3 font-heading text-sm hover:bg-primary hover:text-primary-foreground transition-colors rounded-[100px]"
            >
              CHOOSE PLAN
            </button>
          </div>

          {/* Business Plan - Dark Featured */}
          <div className="bg-[#3a4554] dark:bg-[#2a3340] p-8 rounded-lg relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3a4554] dark:bg-[#2a3340] px-3">
              <span className="text-primary font-heading text-sm">Best Offer</span>
            </div>
            <h3 className="font-heading text-2xl lg:text-3xl mb-6 text-white">Business</h3>
            <div className="mb-8">
              <span className="text-sm text-white">$</span>
              <span className="text-5xl lg:text-6xl font-heading text-white">30</span>
              <span className="text-sm text-white">/month</span>
            </div>
            <p className="text-white/70 mb-8">
              Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style this content in the module Design settings.
            </p>
            <button
              onClick={() => handleClick('business')}
              className="w-full bg-primary text-primary-foreground px-6 py-3 font-heading text-sm hover:opacity-90 transition-opacity rounded-[100px]"
            >
              CHOOSE PLAN
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-muted/20 p-8 rounded-lg">
            <h3 className="font-heading text-2xl lg:text-3xl mb-6 text-foreground">Enterprise</h3>
            <div className="mb-8">
              <span className="text-sm text-foreground">$</span>
              <span className="text-5xl lg:text-6xl font-heading text-foreground">50</span>
              <span className="text-sm text-foreground">/month</span>
            </div>
            <p className="text-muted-foreground mb-8">
              Your content goes here. Edit or remove this text inline or in the module Content settings.
            </p>
            <button
              onClick={() => handleClick('enterprise')}
              className="w-full border-2 border-primary text-foreground px-6 py-3 font-heading text-sm hover:bg-primary hover:text-primary-foreground transition-colors rounded-[100px]"
            >
              CHOOSE PLAN
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
