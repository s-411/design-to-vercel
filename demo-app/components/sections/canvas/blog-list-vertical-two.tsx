'use client'

import * as React from 'react'
import { Image as ImageIcon } from 'lucide-react'

export interface BlogListVerticalTwoProps {
  tagline?: string
  heading?: string
}

/**
 * BlogListVerticalTwo Component
 *
 * A vertical list of 2 blog articles with image on left, content on right.
 * First image is light gray, second is dark gray.
 *
 * Layout: Image left (~40%), Content right (~60%)
 */
export function BlogListVerticalTwo({
  tagline = 'From the Blog',
  heading = 'Latest Articles',
}: BlogListVerticalTwoProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <p className="text-primary font-semibold text-sm mb-2">{tagline}</p>
          <h2 className="text-4xl lg:text-5xl font-heading text-foreground">{heading}</h2>
        </div>

        {/* Blog Articles */}
        <div className="space-y-12">
          {/* Article 1 - Light gray image */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="aspect-[16/9] rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-muted-foreground/30" strokeWidth={1.5} />
              </div>
            </div>
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-2xl lg:text-3xl font-heading text-foreground">
                4 Ways You Can Grow Your Creativity
              </h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                NOV 19, 2022 | SAMPLE CATEGORY
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Augue primis adipiscing dapibus metus tortor fames. Fames iaculis curae montes pharetra magna mi ridiculus velit. Cras interdum suspendisse porta...
              </p>
            </div>
          </div>

          {/* Article 2 - Dark gray image */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="aspect-[16/9] rounded-lg bg-foreground/90 dark:bg-foreground/80 flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-background/30" strokeWidth={1.5} />
              </div>
            </div>
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-2xl lg:text-3xl font-heading text-foreground">
                Building an Efficient Team with the Help of Psychometry
              </h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                OCT 28, 2022 | SAMPLE CATEGORY
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Lacinia taciti lorem himenaeos odio risus aliquam. Montes purus sodales magna lectus vitae id fringilla nam ligula aliquet. Sit hendrerit...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
