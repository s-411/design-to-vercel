'use client'

import * as React from 'react'

export interface PricingThreeColumnElevatedProps {
  onButtonClick?: (plan: string) => void
}

export function PricingThreeColumnElevated({
  onButtonClick,
}: PricingThreeColumnElevatedProps) {
  const handleClick = (plan: string) => {
    if (onButtonClick) {
      onButtonClick(plan)
    }
  }

  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          {/* Personal Plan */}
          <div className="bg-muted/30 p-8 lg:p-10 rounded-lg">
            <h3 className="font-heading text-2xl lg:text-3xl mb-6 text-foreground">Personal</h3>
            <div className="mb-8">
              <span className="text-sm text-foreground">$</span>
              <span className="text-5xl lg:text-6xl font-heading text-foreground">20</span>
              <span className="text-sm text-foreground">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-foreground">•</span>
                <span>This feature is included</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-foreground">•</span>
                <span>This feature is included</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-foreground">•</span>
                <span>This feature is included</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground opacity-50">
                <span className="text-muted-foreground">•</span>
                <span>This feature is not included</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground opacity-50">
                <span className="text-muted-foreground">•</span>
                <span>This feature is not included</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground opacity-50">
                <span className="text-muted-foreground">•</span>
                <span>This feature is not included</span>
              </li>
            </ul>
            <button
              onClick={() => handleClick('personal')}
              className="w-full border-2 border-primary text-foreground px-6 py-3 font-heading text-sm hover:bg-primary hover:text-primary-foreground transition-colors rounded-[100px]"
            >
              CHOOSE PLAN
            </button>
          </div>

          {/* Business Plan - Featured */}
          <div className="bg-background p-8 lg:p-10 rounded-lg shadow-lg lg:scale-105 relative border border-border">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-primary font-heading text-sm">
              Best Offer
            </div>
            <h3 className="font-heading text-2xl lg:text-3xl mb-6 mt-8 text-foreground">Business</h3>
            <div className="mb-8">
              <span className="text-sm text-foreground">$</span>
              <span className="text-5xl lg:text-6xl font-heading text-foreground">30</span>
              <span className="text-sm text-foreground">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-primary">•</span>
                <span>This feature is included</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-primary">•</span>
                <span>This feature is included</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-primary">•</span>
                <span>This feature is included</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-primary">•</span>
                <span>This feature is included</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground opacity-50">
                <span className="text-muted-foreground">•</span>
                <span>This feature is not included</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground opacity-50">
                <span className="text-muted-foreground">•</span>
                <span>This feature is not included</span>
              </li>
            </ul>
            <button
              onClick={() => handleClick('business')}
              className="w-full bg-primary text-primary-foreground px-6 py-3 font-heading text-sm hover:opacity-90 transition-opacity rounded-[100px]"
            >
              CHOOSE PLAN
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-muted/30 p-8 lg:p-10 rounded-lg">
            <h3 className="font-heading text-2xl lg:text-3xl mb-6 text-foreground">Enterprise</h3>
            <div className="mb-8">
              <span className="text-sm text-foreground">$</span>
              <span className="text-5xl lg:text-6xl font-heading text-foreground">50</span>
              <span className="text-sm text-foreground">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-foreground">•</span>
                <span>This feature is included</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-foreground">•</span>
                <span>This feature is included</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-foreground">•</span>
                <span>This feature is included</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-foreground">•</span>
                <span>This feature is included</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-foreground">•</span>
                <span>This feature is included</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-foreground">•</span>
                <span>This feature is included</span>
              </li>
            </ul>
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
