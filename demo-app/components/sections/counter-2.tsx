'use client'

import * as React from 'react'

export interface Counter2Props {
  tagline?: string
  heading?: string
  stats?: Array<{
    percentage: number
    label: string
  }>
}

export function Counter2({
  tagline = 'Brief Headline',
  heading = 'This can be a longer heading. Your content goes here. Edit or remove this text inline or in the module Content settings.',
  stats = [
    { percentage: 50, label: 'Increase in this area' },
    { percentage: 75, label: 'Increase in this area' },
  ],
}: Counter2Props) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-primary text-sm font-medium mb-2">{tagline}</p>
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground">{heading}</h2>
          </div>

          <div className="grid grid-cols-2 gap-8">
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
                      className="text-foreground"
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
    </div>
  )
}
