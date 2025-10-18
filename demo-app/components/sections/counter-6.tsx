'use client'

import * as React from 'react'

export interface Counter6Props {
  stats?: Array<{
    percentage: number
    bodyCopy: string
  }>
}

export function Counter6({
  stats = [
    {
      percentage: 45,
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.',
    },
    {
      percentage: 25,
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.',
    },
  ],
}: Counter6Props) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image placeholder */}
          <div className="aspect-[4/3] bg-muted/50 dark:bg-muted/30 rounded-lg flex items-center justify-center">
            <svg
              className="w-16 h-16 text-muted-foreground/30"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Stats */}
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="grid grid-cols-[140px_1fr] gap-6 items-center">
                <div className="relative w-32 h-32">
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
                    <span className="font-heading text-3xl text-foreground">{stat.percentage}%</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm">{stat.bodyCopy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
