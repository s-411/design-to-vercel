'use client'

import * as React from 'react'
import { Sparkles } from 'lucide-react'

export interface FeatureItem {
  /** Icon element to display */
  icon?: React.ReactNode
  /** Feature heading */
  heading: string
  /** Feature body copy */
  bodyCopy: string
  /** Button text */
  buttonText?: string
  /** Button click handler */
  onButtonClick?: () => void
}

export interface FeaturesThreeColumnButtonsProps {
  /** Array of feature items to display */
  features?: FeatureItem[]
}

/**
 * FeaturesThreeColumnButtons Component
 *
 * A three-column feature layout with icons, headings, body copy, and buttons.
 * Each column is vertically stacked and center-aligned.
 * Styled with MM Design System.
 *
 * Features:
 * - Three equal-width columns
 * - Circular icon backgrounds
 * - Center-aligned content
 * - Secondary button style with borders
 * - Fully responsive
 * - Light/dark mode support
 * - MM Design System styling
 */
export function FeaturesThreeColumnButtons({
  features = [
    {
      heading: 'PERFECTLY ALIGNED',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings.',
      buttonText: 'CLICK HERE',
    },
    {
      heading: 'SHORT HEADING',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text.',
      buttonText: 'CLICK HERE',
    },
    {
      heading: 'SHORT HEADING',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect.',
      buttonText: 'CLICK HERE',
    },
  ],
}: FeaturesThreeColumnButtonsProps) {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-6">
              {/* Icon */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
                {feature.icon || (
                  <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-primary" strokeWidth={2} />
                )}
              </div>

              {/* Heading */}
              <h3 className="text-xl md:text-2xl font-heading text-foreground tracking-wide">
                {feature.heading}
              </h3>

              {/* Body Copy */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {feature.bodyCopy}
              </p>

              {/* Button */}
              {feature.buttonText && (
                <div className="pt-2">
                  <button
                    className="btn-secondary"
                    onClick={feature.onButtonClick}
                  >
                    {feature.buttonText}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
