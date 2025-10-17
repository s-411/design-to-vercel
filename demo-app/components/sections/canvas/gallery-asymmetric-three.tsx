'use client'

import * as React from 'react'
import { Image as ImageIcon } from 'lucide-react'

export interface GalleryAsymmetricThreeProps {}

/**
 * GalleryAsymmetricThree Component
 *
 * Asymmetric 3-image gallery with 2 small images on left, 1 large image on right.
 */
export function GalleryAsymmetricThree({}: GalleryAsymmetricThreeProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Two Small Images Stacked */}
          <div className="space-y-6">
            <div className="aspect-square rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <div className="aspect-square rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
          </div>

          {/* Right Column - Large Image (spans 2 columns) */}
          <div className="lg:col-span-2">
            <div className="aspect-[16/9] rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-20 h-20 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
