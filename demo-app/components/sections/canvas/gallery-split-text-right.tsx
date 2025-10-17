'use client'

import * as React from 'react'
import { Image as ImageIcon } from 'lucide-react'

export interface GallerySplitTextRightProps {
  heading?: string
  bodyCopy?: string
}

/**
 * GallerySplitTextRight Component
 *
 * Split layout with 2 stacked images on left, heading and large image with text on right.
 */
export function GallerySplitTextRight({
  heading = 'Sample heading to introduce the content',
  bodyCopy = 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.',
}: GallerySplitTextRightProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Two Stacked Images */}
          <div className="space-y-6">
            <div className="aspect-[4/3] rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-16 h-16 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <div className="aspect-[4/3] rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-16 h-16 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
          </div>

          {/* Right Column - Heading, Large Image, and Text */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-heading text-foreground">
              {heading}
            </h2>
            <div className="aspect-[4/3] rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-20 h-20 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              {bodyCopy}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
