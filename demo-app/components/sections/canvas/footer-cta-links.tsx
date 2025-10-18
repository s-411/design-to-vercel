'use client'

import * as React from 'react'

export interface FooterLinkColumn {
  heading: string
  links: string[]
}

export interface FooterCtaLinksProps {
  ctaHeading?: string
  ctaDescription?: string
  buttonText?: string
  copyrightText?: string
  tagline?: string
  leftColumn?: FooterLinkColumn
  rightColumn?: FooterLinkColumn
  onButtonClick?: () => void
}

export function FooterCtaLinks({
  ctaHeading = 'Call to Action',
  ctaDescription = 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
  buttonText = 'CLICK HERE',
  copyrightText = '© 2022 - All rights reserved',
  tagline = 'All-in-One Layout Kit for the Divi Theme',
  leftColumn = {
    heading: 'Category',
    links: ['First footer link', 'Second link', 'Third footer link', 'Fourth sample link', 'Fifth link'],
  },
  rightColumn = {
    heading: 'Category',
    links: ['First footer link', 'Second link', 'Third footer link', 'Fourth sample link', 'Fifth link'],
  },
  onButtonClick,
}: FooterCtaLinksProps) {
  return (
    <footer className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: CTA */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-heading text-foreground">{ctaHeading}</h2>
            <p className="text-muted-foreground">{ctaDescription}</p>

            <button
              onClick={onButtonClick}
              className="btn-mm px-8 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              {buttonText}
            </button>

            <div className="pt-6 space-y-1">
              <p className="text-sm text-muted-foreground">{copyrightText}</p>
              <p className="text-sm text-muted-foreground">{tagline}</p>
            </div>
          </div>

          {/* Middle: Link Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{leftColumn.heading}</h3>
            <ul className="space-y-3">
              {leftColumn.links.map((link, index) => (
                <li key={index}>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Link Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{rightColumn.heading}</h3>
            <ul className="space-y-3">
              {rightColumn.links.map((link, index) => (
                <li key={index}>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
