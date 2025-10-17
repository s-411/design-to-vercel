'use client'

import * as React from 'react'
import { Image as ImageIcon, Sparkles } from 'lucide-react'

export interface FeatureListItemWithLink {
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

export interface FeaturesSplitImageListProps {
  /** Tagline text */
  tagline?: string
  /** Main heading */
  heading?: string
  /** Show image placeholder */
  showImage?: boolean
  /** Custom image element */
  imageElement?: React.ReactNode
  /** Array of feature items to display on the right */
  features?: FeatureListItemWithLink[]
  /** Button text */
  buttonText?: string
  /** Button click handler */
  onButtonClick?: () => void
}

/**
 * FeaturesSplitImageList Component
 *
 * A split layout with an image/placeholder on the left and a list of features on the right.
 * Features section includes tagline, heading, feature list with icons, and a primary button.
 * Styled with MM Design System.
 *
 * Features:
 * - Two-column split layout
 * - Left: image placeholder
 * - Right: tagline, heading, feature list, and button
 * - Each feature has icon, heading, body copy, and "Learn more" link
 * - Fully responsive
 * - Light/dark mode support
 * - MM Design System styling
 */
export function FeaturesSplitImageList({
  tagline = 'Short Catchy Tagline',
  heading = 'Heading Introducing Features',
  showImage = true,
  imageElement,
  buttonText = 'CLICK HERE',
  onButtonClick,
  features = [
    {
      heading: 'Short sample heading',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module settings. You can also style every aspect.',
      linkText: 'Learn more',
    },
    {
      heading: 'Short sample heading',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module settings. You can also style every aspect of this content in the module Design settings.',
      linkText: 'Learn more',
    },
    {
      heading: 'Short sample heading',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module settings.',
      linkText: 'Learn more',
    },
  ],
}: FeaturesSplitImageListProps) {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image */}
          {showImage && (
            <div className="lg:sticky lg:top-8">
              {imageElement || (
                <div className="relative w-full aspect-[3/4] rounded-card bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center text-muted-foreground/40">
                    <div className="w-16 h-16 md:w-20 md:h-20 mb-3 rounded-lg bg-muted/60 dark:bg-muted/40 flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm text-muted-foreground/50">Image Placeholder</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Right Column: Header and Features */}
          <div className="space-y-10">
            {/* Header Section */}
            <div className="space-y-4">
              {/* Tagline */}
              <p className="text-sm md:text-base text-primary font-semibold tracking-wide">
                {tagline}
              </p>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground leading-tight">
                {heading}
              </h2>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  {/* Icon and Heading */}
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      {feature.icon || (
                        <Sparkles className="w-6 h-6 text-primary" strokeWidth={2} />
                      )}
                    </div>
                    <h3 className="text-lg md:text-xl font-heading text-foreground">
                      {feature.heading}
                    </h3>
                  </div>

                  {/* Body Copy */}
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.bodyCopy}
                  </p>

                  {/* Link */}
                  {feature.linkText && (
                    <div>
                      <button
                        className="text-foreground font-normal underline hover:text-primary transition-colors"
                        onClick={feature.onLinkClick}
                      >
                        {feature.linkText}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Button */}
            {buttonText && (
              <div className="pt-4">
                <button className="btn-mm" onClick={onButtonClick}>
                  {buttonText}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
