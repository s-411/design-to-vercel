'use client'

import * as React from 'react'
import { Image as ImageIcon } from 'lucide-react'

export interface GallerySidebarRightProps {}

/**
 * GallerySidebarRight Component
 *
 * Sidebar layout with 1 large image on left, 3 small images on right sidebar.
 */
export function GallerySidebarRight({}: GallerySidebarRightProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Column - Large Image (spans 3 columns) */}
          <div className="lg:col-span-3">
            <div className="aspect-[16/9] rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-24 h-24 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
          </div>

          {/* Right Sidebar - Three Small Images Stacked */}
          <div className="space-y-6">
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
