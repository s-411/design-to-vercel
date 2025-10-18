'use client'

import * as React from 'react'
import { MapPin } from 'lucide-react'

export interface ContactMapSplitProps {
  locationHeading?: string
  address?: string
  mapLinkText?: string
  mapLinkHref?: string
  callHeading?: string
  phone?: string
  messageHeading?: string
  email?: string
}

export function ContactMapSplit({
  locationHeading = 'OUR LOCATION',
  address = '3118 Crescent St, Astoria, New York 11106',
  mapLinkText = 'See the map',
  mapLinkHref = '#',
  callHeading = 'Call Us Now',
  phone = '234-194-1387',
  messageHeading = 'Send Us a Message',
  email = 'hello@mywebsite.com',
}: ContactMapSplitProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Map with location card overlay */}
          <div className="relative aspect-[4/3] bg-muted/50 dark:bg-muted/30 rounded-lg overflow-hidden flex items-center justify-center">
            {/* Location card overlay */}
            <div className="absolute bottom-8 left-8 right-8 bg-background dark:bg-card p-6 rounded-lg shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-muted/50 dark:bg-muted/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {locationHeading}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {address}
                  </p>
                </div>
              </div>
              <a
                href={mapLinkHref}
                className="text-sm text-foreground underline hover:text-primary transition-colors"
              >
                {mapLinkText}
              </a>
            </div>
          </div>

          {/* Right side - Contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                {callHeading}
              </p>
              <p className="text-3xl lg:text-4xl font-heading text-foreground">
                {phone}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                {messageHeading}
              </p>
              <p className="text-3xl lg:text-4xl font-heading text-foreground">
                {email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
