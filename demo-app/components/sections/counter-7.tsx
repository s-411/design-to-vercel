'use client'

import * as React from 'react'

export interface Counter7Props {
  tagline?: string
  heading?: string
  stats?: Array<{
    value: string
    label: string
    featured?: boolean
  }>
}

export function Counter7({
  tagline = 'Short Catchy Tagline',
  heading = 'Heading Introducing Results',
  stats = [
    { value: '79', label: 'Sample content describing the number counter' },
    { value: '30', label: 'Sample content describing the number counter' },
    { value: '311', label: 'Sample content describing the number counter' },
    { value: '97+', label: 'Sample content describing the featured number', featured: true },
  ],
}: Counter7Props) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium mb-2">{tagline}</p>
          <h2 className="font-heading text-4xl lg:text-5xl text-foreground">{heading}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg ${
                stat.featured ? 'bg-foreground text-background' : ''
              }`}
            >
              <div className="text-center">
                <div className={`font-heading text-6xl lg:text-7xl mb-4 ${stat.featured ? 'text-background' : 'text-foreground'}`}>
                  {stat.value}
                </div>
                <p className={`text-sm ${stat.featured ? 'text-background/80' : 'text-foreground'}`}>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
