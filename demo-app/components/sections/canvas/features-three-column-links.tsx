'use client'

import * as React from 'react'
import { Sparkles } from 'lucide-react'

export interface FeatureItemWithLink {
  /** Icon element to display */
  icon?: React.ReactNode
  /** Feature heading */
  heading: string
  /** Feature body copy */
  bodyCopy: string
  /** Link text */
  linkText?: string
  /** Link click handler */
  onLinkClick?: () => void
}

export interface FeaturesThreeColumnLinksProps {
  /** Array of feature items to display */
  features?: FeatureItemWithLink[]
}

/**
 * FeaturesThreeColumnLinks Component
 *
 * A three-column feature layout with larger circular icons, headings, body copy, and "Learn more" links.
 * Each column is vertically stacked and center-aligned.
 * Styled with MM Design System.
 *
 * Features:
 * - Three equal-width columns
 * - Larger circular icon backgrounds
 * - Center-aligned content
 * - Underlined "Learn more" text links
 * - Fully responsive
 * - Light/dark mode support
 * - MM Design System styling
 */
export function FeaturesThreeColumnLinks({
  features = [
    {
      heading: 'PERFECTLY ALIGNED',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings.',
      linkText: 'Learn more',
    },
    {
      heading: 'SHORT HEADING',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS.',
      linkText: 'Learn more',
    },
    {
      heading: 'SHORT HEADING',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
      linkText: 'Learn more',
    },
  ],
}: FeaturesThreeColumnLinksProps) {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-6">
              {/* Icon */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
                {feature.icon || (
                  <Sparkles className="w-9 h-9 md:w-11 md:h-11 text-primary" strokeWidth={2} />
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

              {/* Link */}
              {feature.linkText && (
                <div className="pt-2">
                  <button
                    className="text-foreground font-semibold underline hover:text-primary transition-colors"
                    onClick={feature.onLinkClick}
                  >
                    {feature.linkText}
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
