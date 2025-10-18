'use client'

import * as React from 'react'

export interface Counter8Props {
  stats?: Array<{
    icon: React.ReactNode
    value: string
    heading: string
    bodyCopy: string
  }>
}

export function Counter8({
  stats = [
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
        </svg>
      ),
      value: '113',
      heading: 'Your content goes here.',
      bodyCopy:
        'Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
            clipRule="evenodd"
          />
        </svg>
      ),
      value: '210',
      heading: 'Your content goes here.',
      bodyCopy:
        'Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.',
    },
  ],
}: Counter8Props) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="flex items-center gap-4 mb-4">
                <div>{stat.icon}</div>
                <span className="font-heading text-6xl lg:text-7xl text-foreground">{stat.value}</span>
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">{stat.heading}</h3>
              <p className="text-muted-foreground text-sm">{stat.bodyCopy}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
