'use client'

import * as React from 'react'

export interface Counter3Props {
  tagline?: string
  heading?: string
  bodyCopy?: string
  buttonText?: string
  linkText?: string
  onButtonClick?: () => void
  onLinkClick?: () => void
  stats?: Array<{
    percentage: number
    label: string
    featured?: boolean
  }>
}

export function Counter3({
  tagline = 'Brief Headline',
  heading = 'A sample heading to introduce the results in numbers',
  bodyCopy = 'Sentences by are, snapped was luxury. The mouse it circles to good even sleeping. Made, hall frequency, thoroughly, avoided fundamental; Movement twice with the allpowerful create occupied had focus. An be most service, in, research various out the as tone just or good has a and is behind their have latest rest her. From horn to and just have caution thin to precipitate, concepts will.',
  buttonText = 'LEARN MORE',
  linkText = 'sample link',
  onButtonClick,
  onLinkClick,
  stats = [
    { percentage: 25, label: 'Increase in this area' },
    { percentage: 50, label: 'Increase in this area' },
    { percentage: 75, label: 'Increase in this area' },
    { percentage: 100, label: 'Satisfied Customers', featured: true },
  ],
}: Counter3Props) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-primary text-sm font-medium mb-2">{tagline}</p>
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-6">{heading}</h2>
            <p className="text-muted-foreground mb-6">
              {bodyCopy.split(linkText).map((part, index, array) => (
                <React.Fragment key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <button
                      onClick={onLinkClick}
                      className="text-foreground font-semibold underline hover:no-underline"
                    >
                      {linkText}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </p>
            <button onClick={onButtonClick} className="btn-mm bg-primary text-white px-8 py-3 font-medium">
              {buttonText}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-36 h-36 mb-4">
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
                <p className="text-center text-sm text-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
