'use client'

import * as React from 'react'

export interface Counter10Props {
  stats?: Array<{
    icon: React.ReactNode
    value: string
    heading: string
    bodyCopy: string
  }>
}

export function Counter10({
  stats = [
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
      ),
      value: '19',
      heading: 'A SHORT HEADING',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
      ),
      value: '215',
      heading: 'A SHORT HEADING',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
            clipRule="evenodd"
          />
        </svg>
      ),
      value: '45',
      heading: 'A SHORT HEADING',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
            clipRule="evenodd"
          />
        </svg>
      ),
      value: '999+',
      heading: 'A SHORT HEADING',
      bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    },
  ],
}: Counter10Props) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-muted/30 rounded-lg flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="flex-1">
                <div className="font-heading text-5xl text-foreground mb-2">{stat.value}</div>
                <h3 className="text-foreground font-bold text-sm mb-2">{stat.heading}</h3>
                <p className="text-muted-foreground text-sm">{stat.bodyCopy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
