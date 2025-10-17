'use client'

import * as React from 'react'
import { Palette, Monitor, Share2, Search, Pencil, MessageSquare } from 'lucide-react'

export interface FeatureWithIcon {
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

export interface FeaturesSixGridWithHeaderProps {
  /** Tagline text */
  tagline?: string
  /** Main heading */
  heading?: string
  /** Array of feature items to display (up to 6) */
  features?: FeatureWithIcon[]
}

/**
 * FeaturesSixGridWithHeader Component
 *
 * A centered tagline and heading followed by a 3x2 grid of features with icons.
 * Each feature has an icon, heading, body copy, and "Learn more" link.
 * Styled with MM Design System.
 *
 * Features:
 * - Centered header section with tagline and heading
 * - 3-column grid on desktop (2 rows)
 * - Icons with headings and body copy
 * - Underlined "Learn more" links
 * - Fully responsive
 * - Light/dark mode support
 * - MM Design System styling
 */
export function FeaturesSixGridWithHeader({
  tagline = 'Short Catchy Tagline',
  heading = 'Heading Introducing Features',
  features = [
    {
      icon: <Palette className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={2} />,
      heading: 'Logo and Branding',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module settings.',
      linkText: 'Learn more',
    },
    {
      icon: <Monitor className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={2} />,
      heading: 'Web Design and Development',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module settings.',
      linkText: 'Learn more',
    },
    {
      icon: <Share2 className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={2} />,
      heading: 'Social Media and Online Marketing',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module settings.',
      linkText: 'Learn more',
    },
    {
      icon: <Search className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={2} />,
      heading: 'Search Engine Optimization',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module settings.',
      linkText: 'Learn more',
    },
    {
      icon: <Pencil className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={2} />,
      heading: 'Copywriting',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module settings.',
      linkText: 'Learn more',
    },
    {
      icon: <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={2} />,
      heading: '1-on-1 Trainings and Support',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module settings.',
      linkText: 'Learn more',
    },
  ],
}: FeaturesSixGridWithHeaderProps) {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          {/* Tagline */}
          <p className="text-sm md:text-base text-primary font-semibold tracking-wide uppercase">
            {tagline}
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground">
            {heading}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                {feature.icon}
              </div>

              {/* Heading */}
              <h3 className="text-lg md:text-xl font-heading text-foreground">
                {feature.heading}
              </h3>

              {/* Body Copy */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {feature.bodyCopy}
              </p>

              {/* Link */}
              {feature.linkText && (
                <div className="pt-1">
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
      </div>
    </section>
  )
}
