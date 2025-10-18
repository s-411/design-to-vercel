'use client'

import * as React from 'react'

export interface Counter1Props {
  tagline?: string
  heading?: string
  stats?: Array<{
    percentage: number
    label: string
    featured?: boolean
  }>
}

export function Counter1({
  tagline = 'Short Catchy Tagline',
  heading = 'Heading Introducing Results',
  stats = [
    { percentage: 25, label: 'Increase in this area' },
    { percentage: 50, label: 'Increase in this area' },
    { percentage: 75, label: 'Increase in this area' },
    { percentage: 100, label: 'Satisfied Customers', featured: true },
  ],
}: Counter1Props) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium mb-2">{tagline}</p>
          <h2 className="font-heading text-4xl lg:text-5xl text-foreground">{heading}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-6">
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
                  <span className="font-heading text-4xl text-foreground">{stat.percentage}%</span>
                </div>
              </div>
              <p className="text-center text-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
