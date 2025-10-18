'use client'

import * as React from 'react'
import { Check, X } from 'lucide-react'

export interface PricingThreeColumnIconsProps {
  onButtonClick?: (plan: string) => void
}

export function PricingThreeColumnIcons({
  onButtonClick,
}: PricingThreeColumnIconsProps) {
  const handleClick = (plan: string) => {
    if (onButtonClick) {
      onButtonClick(plan)
    }
  }

  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Free Plan */}
          <div className="bg-muted/20 p-8 lg:p-10 rounded-lg">
            <h3 className="font-heading text-2xl lg:text-3xl mb-2 text-foreground">Free</h3>
            <p className="text-sm text-muted-foreground mb-6">Your content goes here. Get started for free.</p>
            <div className="mb-8">
              <span className="text-sm text-foreground">$</span>
              <span className="text-5xl lg:text-6xl font-heading text-foreground">0</span>
              <span className="text-sm text-foreground">/month</span>
            </div>
            <button
              onClick={() => handleClick('free')}
              className="w-full border-2 border-primary text-foreground px-6 py-3 font-heading text-sm hover:bg-primary hover:text-primary-foreground transition-colors rounded-[100px] mb-8"
            >
              CHOOSE PLAN
            </button>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Your content goes here. This feature is included.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span>Your content goes here. This feature is not included.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span>Your content goes here. This feature is not included.</span>
              </li>
            </ul>
          </div>

          {/* Personal Plan */}
          <div className="bg-muted/20 p-8 lg:p-10 rounded-lg">
            <h3 className="font-heading text-2xl lg:text-3xl mb-2 text-foreground">Personal</h3>
            <p className="text-sm text-muted-foreground mb-6">Your content goes here. Best deal for individuals.</p>
            <div className="mb-8">
              <span className="text-sm text-foreground">$</span>
              <span className="text-5xl lg:text-6xl font-heading text-foreground">20</span>
              <span className="text-sm text-foreground">/month</span>
            </div>
            <button
              onClick={() => handleClick('personal')}
              className="w-full border-2 border-primary text-foreground px-6 py-3 font-heading text-sm hover:bg-primary hover:text-primary-foreground transition-colors rounded-[100px] mb-8"
            >
              CHOOSE PLAN
            </button>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Your content goes here. This feature is included.</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Your content goes here. This feature is included.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span>Your content goes here. This feature is not included.</span>
              </li>
            </ul>
          </div>

          {/* Business Plan - Featured */}
          <div className="bg-muted/20 p-8 lg:p-10 rounded-lg relative">
            <div className="absolute -top-4 left-0 right-0 bg-[#3a4554] dark:bg-[#2a3340] py-2 rounded-t-lg">
              <p className="text-center text-white font-heading text-sm">Best Offer</p>
            </div>
            <div className="mt-6">
              <h3 className="font-heading text-2xl lg:text-3xl mb-2 text-foreground">Business</h3>
              <p className="text-sm text-muted-foreground mb-6">Everything you need to successfully run your business</p>
              <div className="mb-8">
                <span className="text-sm text-foreground">$</span>
                <span className="text-5xl lg:text-6xl font-heading text-foreground">30</span>
                <span className="text-sm text-foreground">/month</span>
              </div>
              <button
                onClick={() => handleClick('business')}
                className="w-full bg-primary text-primary-foreground px-6 py-3 font-heading text-sm hover:opacity-90 transition-opacity rounded-[100px] mb-8"
              >
                CHOOSE PLAN
              </button>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Your content goes here. This feature is included.</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Your content goes here. This feature is included.</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Your content goes here. Every feature is included in this plan.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
