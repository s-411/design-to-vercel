'use client'

import * as React from 'react'

export interface Counter12Props {
  stats?: Array<{
    value: string
    heading: string
    bodyCopy: string
  }>
}

export function Counter12({
  stats = [
    {
      value: '79',
      heading: 'A short heading',
      bodyCopy:
        'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.',
    },
    {
      value: '250',
      heading: 'A short heading',
      bodyCopy:
        'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.',
    },
  ],
}: Counter12Props) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="relative mb-6">
                <span className="font-heading text-9xl lg:text-[10rem] text-muted/20 leading-none">
                  {stat.value}
                </span>
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-4">{stat.heading}</h3>
              <p className="text-muted-foreground">{stat.bodyCopy}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
