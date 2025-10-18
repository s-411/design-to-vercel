'use client'

import * as React from 'react'

export interface PricingSplitWithCtaProps {
  onButtonClick?: (action: string) => void
}

export function PricingSplitWithCta({
  onButtonClick,
}: PricingSplitWithCtaProps) {
  const handleClick = (action: string) => {
    if (onButtonClick) {
      onButtonClick(action)
    }
  }

  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Side - Two Plans */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Plan */}
            <div>
              <h3 className="font-heading text-3xl lg:text-4xl mb-6 text-foreground">Personal</h3>
              <div className="mb-6">
                <span className="text-5xl lg:text-6xl font-heading text-foreground">20</span>
                <span className="text-lg text-foreground">/month</span>
              </div>
              <ul className="space-y-3">
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
              </ul>
            </div>

            {/* Business Plan */}
            <div>
              <h3 className="font-heading text-3xl lg:text-4xl mb-6 text-foreground">Business</h3>
              <div className="mb-6">
                <span className="text-5xl lg:text-6xl font-heading text-foreground">30</span>
                <span className="text-lg text-foreground">/month</span>
              </div>
              <ul className="space-y-3">
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
            </div>
          </div>

          {/* Right Side - CTA Card */}
          <div className="lg:col-span-1">
            <div className="border border-border bg-background p-8 rounded-lg h-full flex flex-col justify-center">
              <h3 className="font-heading text-3xl lg:text-4xl mb-6 text-foreground text-center">
                Get started now
              </h3>
              <p className="text-muted-foreground text-center mb-8">
                Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content.
              </p>
              <button
                onClick={() => handleClick('get-started')}
                className="w-full bg-primary text-primary-foreground px-8 py-3 font-heading text-sm hover:opacity-90 transition-opacity rounded-[100px]"
              >
                CLICK HERE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
