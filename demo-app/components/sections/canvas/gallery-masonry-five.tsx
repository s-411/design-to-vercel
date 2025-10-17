'use client'

import * as React from 'react'
import { Image as ImageIcon } from 'lucide-react'

export interface GalleryMasonryFiveProps {}

/**
 * GalleryMasonryFive Component
 *
 * 5-image masonry layout with 2x2 grid on left, 1 large portrait image on right.
 */
export function GalleryMasonryFive({}: GalleryMasonryFiveProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left Section - 2x2 Grid (spans 3 columns) */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6">
            <div className="aspect-square rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <div className="aspect-square rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <div className="aspect-square rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <div className="aspect-square rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
          </div>

          {/* Right Section - Large Portrait Image (spans 2 columns) */}
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-20 h-20 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
