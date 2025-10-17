'use client'

import * as React from 'react'
import { Star } from 'lucide-react'

export interface FeatureCard {
  /** Feature heading */
  heading?: string
  /** Feature body copy */
  bodyCopy: string
  /** Link text */
  linkText?: string
  /** Link click handler */
  onLinkClick?: () => void
  /** Whether this is the featured card (dark background) */
  isFeatured?: boolean
  /** Button text (only for featured card) */
  buttonText?: string
  /** Button click handler (only for featured card) */
  onButtonClick?: () => void
}

export interface FeaturesThreeCardsFeaturedProps {
  /** Array of 3 feature cards */
  features?: FeatureCard[]
}

/**
 * FeaturesThreeCardsFeatured Component
 *
 * A three-column card layout where one card can be "featured" with a dark background,
 * star badge, button, and different text color.
 * Styled with MM Design System.
 *
 * Features:
 * - Three equal-width cards with borders
 * - Featured card has dark background and star badge
 * - Regular cards have "Learn more" links
 * - Featured card has a primary button
 * - Fully responsive
 * - Light/dark mode support
 * - MM Design System styling
 */
export function FeaturesThreeCardsFeatured({
  features = [
    {
      heading: 'Your content goes here',
      bodyCopy: 'Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.',
      linkText: 'Learn more',
      isFeatured: false,
    },
    {
      heading: 'Your content goes here',
      bodyCopy: 'Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings.',
      linkText: 'Learn more',
      isFeatured: false,
    },
    {
      heading: 'Featured content',
      bodyCopy: 'Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this.',
      buttonText: 'CLICK HERE',
      isFeatured: true,
    },
  ],
}: FeaturesThreeCardsFeaturedProps) {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                relative p-8 md:p-10 rounded-card flex flex-col space-y-6
                ${
                  feature.isFeatured
                    ? 'bg-foreground text-background'
                    : 'bg-background border border-border'
                }
              `}
            >
              {/* Star Badge (Featured only) */}
              {feature.isFeatured && (
                <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <Star className="w-7 h-7 text-primary-foreground fill-current" />
                </div>
              )}

              {/* Heading */}
              {feature.heading && (
                <h3
                  className={`text-xl md:text-2xl font-heading leading-tight ${
                    feature.isFeatured ? 'text-background' : 'text-foreground'
                  }`}
                >
                  {feature.heading}
                </h3>
              )}

              {/* Body Copy */}
              <p
                className={`text-sm md:text-base leading-relaxed flex-1 ${
                  feature.isFeatured ? 'text-background/90' : 'text-muted-foreground'
                }`}
              >
                {feature.bodyCopy}
              </p>

              {/* Link or Button */}
              {feature.isFeatured && feature.buttonText ? (
                <div className="pt-2">
                  <button className="btn-mm" onClick={feature.onButtonClick}>
                    {feature.buttonText}
                  </button>
                </div>
              ) : (
                feature.linkText && (
                  <div className="pt-2">
                    <button
                      className="text-foreground font-semibold underline hover:text-primary transition-colors"
                      onClick={feature.onLinkClick}
                    >
                      {feature.linkText}
                    </button>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
