'use client'

import * as React from 'react'

export interface Counter4Props {
  stats?: Array<{
    percentage: number
    tagline: string
    heading: string
    bodyCopy: string
  }>
}

export function Counter4({
  stats = [
    {
      percentage: 45,
      tagline: 'Increase in this area',
      heading: 'A headline to introduce the results',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.',
    },
    {
      percentage: 80,
      tagline: 'Increase in this area',
      heading: 'A headline to introduce the results',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.',
    },
  ],
}: Counter4Props) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="space-y-12">
          {stats.map((stat, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 items-center">
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-48 h-48">
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
                    <span className="font-heading text-5xl text-foreground">{stat.percentage}%</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-primary text-sm font-medium mb-2">{stat.tagline}</p>
                <h3 className="font-heading text-2xl lg:text-3xl text-foreground mb-3">{stat.heading}</h3>
                <p className="text-muted-foreground">{stat.bodyCopy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
