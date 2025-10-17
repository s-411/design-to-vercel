'use client'

import * as React from 'react'
import { Sparkles } from 'lucide-react'

export interface FeatureGridItem {
  /** Icon element to display */
  icon?: React.ReactNode
  /** Feature heading */
  heading: string
  /** Feature body copy */
  bodyCopy: string
}

export interface FeaturesFourGridProps {
  /** Array of feature items to display (up to 4) */
  features?: FeatureGridItem[]
}

/**
 * FeaturesFourGrid Component
 *
 * A 2x2 grid layout with icon and text side-by-side for each feature.
 * Icon on the left, heading and body copy on the right.
 * Styled with MM Design System.
 *
 * Features:
 * - 2x2 grid on desktop, stacked on mobile
 * - Horizontal layout: icon left, content right
 * - Circular icon backgrounds
 * - Fully responsive
 * - Light/dark mode support
 * - MM Design System styling
 */
export function FeaturesFourGrid({
  features = [
    {
      heading: 'Perfectly Aligned',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings.',
    },
    {
      heading: 'Perfectly Aligned',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style.',
    },
    {
      heading: 'Perfectly Aligned',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    },
    {
      heading: 'Perfectly Aligned',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings.',
    },
  ],
}: FeaturesFourGridProps) {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 items-start">
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
                {feature.icon || (
                  <Sparkles className="w-7 h-7 md:w-9 md:h-9 text-primary" strokeWidth={2} />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col space-y-3 flex-1">
                {/* Heading */}
                <h3 className="text-xl md:text-2xl font-heading text-foreground">
                  {feature.heading}
                </h3>

                {/* Body Copy */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {feature.bodyCopy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
