'use client'

import * as React from 'react'

export interface Counter5Props {
  stats?: Array<{
    percentage: number
    heading: string
    bodyCopy: string
    featured?: boolean
  }>
}

export function Counter5({
  stats = [
    {
      percentage: 25,
      heading: 'A SHORT HEADING',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    },
    {
      percentage: 45,
      heading: 'A SHORT HEADING',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    },
    {
      percentage: 75,
      heading: 'A SHORT HEADING',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    },
    {
      percentage: 100,
      heading: 'A SHORT HEADING',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
      featured: true,
    },
  ],
}: Counter5Props) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-6">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-muted/30"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - stat.percentage / 100)}`}
                    className={stat.featured ? 'text-primary' : 'text-foreground'}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-3xl text-foreground">{stat.percentage}%</span>
                </div>
              </div>
              <h3 className="text-foreground font-bold text-sm mb-2 text-center">{stat.heading}</h3>
              <p className="text-muted-foreground text-sm text-center">{stat.bodyCopy}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
