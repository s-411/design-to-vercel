'use client'

import * as React from 'react'
import { Sparkles } from 'lucide-react'

export interface FeatureListItem {
  /** Icon element to display */
  icon?: React.ReactNode
  /** Feature body copy */
  bodyCopy: string
}

export interface FeaturesSplitWithListProps {
  /** Main heading */
  heading?: string
  /** Body copy text */
  bodyCopy?: string
  /** Button text */
  buttonText?: string
  /** Button click handler */
  onButtonClick?: () => void
  /** Array of feature list items (shown on the right) */
  features?: FeatureListItem[]
}

/**
 * FeaturesSplitWithList Component
 *
 * A split layout with heading and button on the left, and a list of features with icons on the right.
 * Styled with MM Design System.
 *
 * Features:
 * - Two-column split layout
 * - Left: heading, body copy, and primary button
 * - Right: vertically stacked feature items with icons
 * - Fully responsive
 * - Light/dark mode support
 * - MM Design System styling
 */
export function FeaturesSplitWithList({
  heading = 'Heading to introduce the features',
  bodyCopy = 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.',
  buttonText = 'LEARN MORE',
  onButtonClick,
  features = [
    {
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    },
    {
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.',
    },
    {
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content.',
    },
  ],
}: FeaturesSplitWithListProps) {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Button */}
          <div className="space-y-6">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground leading-tight">
              {heading}
            </h2>

            {/* Body Copy */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {bodyCopy}
            </p>

            {/* Button */}
            {buttonText && (
              <div className="pt-2">
                <button className="btn-mm" onClick={onButtonClick}>
                  {buttonText}
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Feature List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
                  {feature.icon || (
                    <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={2} />
                  )}
                </div>

                {/* Body Copy */}
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed flex-1 pt-2">
                  {feature.bodyCopy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
