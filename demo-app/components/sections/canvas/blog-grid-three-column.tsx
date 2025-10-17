'use client'

import * as React from 'react'
import { Image as ImageIcon } from 'lucide-react'

export interface BlogGridThreeColumnProps {
  tagline?: string
  heading?: string
}

/**
 * BlogGridThreeColumn Component
 *
 * A 3-column grid of 6 blog articles (2 rows × 3 columns).
 * Each article has image on top, content below in card style.
 */
export function BlogGridThreeColumn({
  tagline = 'From the Blog',
  heading = 'Latest Articles',
}: BlogGridThreeColumnProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <p className="text-primary font-semibold text-sm mb-2">{tagline}</p>
          <h2 className="text-4xl lg:text-5xl font-heading text-foreground">{heading}</h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Article 1 - Light */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl lg:text-2xl font-heading text-foreground">
                4 Ways You Can Grow Your Creativity
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                NOV 19, 2022 | SAMPLE CATEGORY
              </p>
            </div>
          </div>

          {/* Article 2 - Dark */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-lg bg-foreground/90 dark:bg-foreground/80 flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-background/30" strokeWidth={1.5} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl lg:text-2xl font-heading text-foreground">
                Building an Efficient Team with the Help of Psychometry
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                OCT 28, 2022 | SAMPLE CATEGORY
              </p>
            </div>
          </div>

          {/* Article 3 - Light */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl lg:text-2xl font-heading text-foreground">
                Design Expert Interview
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                OCT 14, 2022 | SAMPLE CATEGORY
              </p>
            </div>
          </div>

          {/* Article 4 - Light */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl lg:text-2xl font-heading text-foreground">
                Rules Not To Follow About Social Media
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                OCT 6, 2022 | SAMPLE CATEGORY
              </p>
            </div>
          </div>

          {/* Article 5 - Light */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl lg:text-2xl font-heading text-foreground">
                The Ultimate Guide To Facebook Ads
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                SEP 18, 2022 | SAMPLE CATEGORY
              </p>
            </div>
          </div>

          {/* Article 6 - Light */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl lg:text-2xl font-heading text-foreground">
                7 Mistakes to Avoid on LinkedIn
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                SEP 4, 2022 | SAMPLE CATEGORY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
