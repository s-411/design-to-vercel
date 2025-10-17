'use client'

import * as React from 'react'
import { Image as ImageIcon } from 'lucide-react'

export interface GalleryFeaturedGridProps {}

/**
 * GalleryFeaturedGrid Component
 *
 * Balanced layout with 1 large featured image on left, 2x2 grid of 4 images on right.
 */
export function GalleryFeaturedGrid({}: GalleryFeaturedGridProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Section - Large Featured Image */}
          <div>
            <div className="aspect-square rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-20 h-20 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
          </div>

          {/* Right Section - 2x2 Grid of 4 Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-square rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-10 h-10 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <div className="aspect-square rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-10 h-10 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <div className="aspect-square rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-10 h-10 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <div className="aspect-square rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-10 h-10 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
