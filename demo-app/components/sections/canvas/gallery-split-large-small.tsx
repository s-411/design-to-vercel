'use client'

import * as React from 'react'
import { Image as ImageIcon } from 'lucide-react'

export interface GallerySplitLargeSmallProps {}

/**
 * GallerySplitLargeSmall Component
 *
 * Split layout with 1 large image on left, 2 smaller images stacked on right.
 */
export function GallerySplitLargeSmall({}: GallerySplitLargeSmallProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left Column - Large Image (spans 3 columns) */}
          <div className="lg:col-span-3">
            <div className="aspect-[3/4] rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-20 h-20 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
          </div>

          {/* Right Column - Two Smaller Images Stacked (spans 2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-[4/3] rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <div className="aspect-[4/3] rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
