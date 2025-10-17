'use client'

import * as React from 'react'
import { Image as ImageIcon } from 'lucide-react'

export interface GallerySplitTextLeftProps {
  heading?: string
  bodyCopy?: string
  linkText?: string
  onLinkClick?: () => void
}

/**
 * GallerySplitTextLeft Component
 *
 * Split layout with heading and image on left, large image with text on right.
 */
export function GallerySplitTextLeft({
  heading = 'Sample heading to introduce the content',
  bodyCopy = 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.',
  linkText = 'Learn more',
  onLinkClick,
}: GallerySplitTextLeftProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Heading and Image */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-heading text-foreground">
              {heading}
            </h2>
            <div className="aspect-square rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-16 h-16 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
          </div>

          {/* Right Column - Large Image and Text */}
          <div className="space-y-6">
            <div className="aspect-[4/3] rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-20 h-20 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              {bodyCopy}
            </p>
            {linkText && (
              <button
                className="text-foreground font-semibold underline hover:text-primary transition-colors"
                onClick={onLinkClick}
              >
                {linkText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
