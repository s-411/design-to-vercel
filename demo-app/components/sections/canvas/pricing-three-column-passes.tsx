'use client'

import * as React from 'react'
import { Check, X } from 'lucide-react'

export interface PricingThreeColumnPassesProps {
  onButtonClick?: (plan: string) => void
}

export function PricingThreeColumnPasses({
  onButtonClick,
}: PricingThreeColumnPassesProps) {
  const handleClick = (plan: string) => {
    if (onButtonClick) {
      onButtonClick(plan)
    }
  }

  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Hourly Pass */}
          <div className="flex flex-col">
            <div className="flex-1">
              <h3 className="font-heading text-3xl lg:text-4xl mb-6 text-foreground">Hourly Pass</h3>

              <h4 className="font-heading text-sm mb-4 text-foreground">WHAT'S INCLUDED:</h4>

              <ul className="space-y-3 mb-8">
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

            <div className="border-t border-border pt-8 mt-8">
              <div className="mb-6">
                <span className="text-sm text-foreground">$</span>
                <span className="text-5xl lg:text-6xl font-heading text-foreground">9</span>
                <span className="text-sm text-foreground">/hour</span>
              </div>
              <button
                onClick={() => handleClick('hourly')}
                className="w-full bg-primary text-primary-foreground px-6 py-3 font-heading text-sm hover:opacity-90 transition-opacity rounded-[100px]"
              >
                CHOOSE PLAN
              </button>
            </div>
          </div>

          {/* Day Pass */}
          <div className="flex flex-col">
            <div className="flex-1">
              <h3 className="font-heading text-3xl lg:text-4xl mb-6 text-foreground">Day Pass</h3>

              <h4 className="font-heading text-sm mb-4 text-foreground">WHAT'S INCLUDED:</h4>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Your content goes here. This feature is included.</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Your content goes here. This feature is included.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-border pt-8 mt-8">
              <div className="mb-6">
                <span className="text-sm text-foreground">$</span>
                <span className="text-5xl lg:text-6xl font-heading text-foreground">19</span>
                <span className="text-sm text-foreground">/day</span>
              </div>
              <button
                onClick={() => handleClick('day')}
                className="w-full bg-primary text-primary-foreground px-6 py-3 font-heading text-sm hover:opacity-90 transition-opacity rounded-[100px]"
              >
                CHOOSE PLAN
              </button>
            </div>
          </div>

          {/* Monthly Pass */}
          <div className="flex flex-col">
            <div className="flex-1">
              <h3 className="font-heading text-3xl lg:text-4xl mb-6 text-foreground">Monthly Pass</h3>

              <h4 className="font-heading text-sm mb-4 text-foreground">WHAT'S INCLUDED:</h4>

              <ul className="space-y-3 mb-8">
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
                  <span>Your content goes here. This feature is included.</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Your content goes here. This feature is included.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-border pt-8 mt-8">
              <div className="mb-6">
                <span className="text-sm text-foreground">$</span>
                <span className="text-5xl lg:text-6xl font-heading text-foreground">350</span>
                <span className="text-sm text-foreground">/month</span>
              </div>
              <button
                onClick={() => handleClick('monthly')}
                className="w-full bg-primary text-primary-foreground px-6 py-3 font-heading text-sm hover:opacity-90 transition-opacity rounded-[100px]"
              >
                CHOOSE PLAN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
