'use client'

import * as React from 'react'

export interface Counter11Props {
  tagline?: string
  heading?: string
  stats?: Array<{
    value: string
    title: string
  }>
}

export function Counter11({
  tagline = 'Short Catchy Tagline',
  heading = 'Heading Introducing Numbers',
  stats = [
    { value: '79', title: 'Your Title Goes Here' },
    { value: '112', title: 'Your Title Goes Here' },
    { value: '250', title: 'Your Title Goes Here' },
  ],
}: Counter11Props) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium mb-2">{tagline}</p>
          <h2 className="font-heading text-4xl lg:text-5xl text-foreground">{heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4">
                <span className="font-heading text-9xl lg:text-[12rem] text-muted/20 leading-none">
                  {stat.value}
                </span>
              </div>
              <p className="text-foreground text-sm">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
