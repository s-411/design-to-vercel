'use client'

import * as React from 'react'

export interface PricingSimpleListProps {
  tagline?: string
  heading?: string
}

export function PricingSimpleList({
  tagline = 'Short Catchy Tagline',
  heading = 'Heading Introducing Pricing List',
}: PricingSimpleListProps) {
  const items = [
    {
      id: 'item-1',
      description: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
      price: '$290',
    },
    {
      id: 'item-2',
      description: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
      price: '$290',
    },
    {
      id: 'item-3',
      description: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
      price: '$290',
    },
    {
      id: 'item-4',
      description: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
      price: '$290',
    },
  ]

  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <p className="text-primary font-heading text-sm mb-4">{tagline}</p>
          <h2 className="font-heading text-4xl lg:text-5xl text-foreground">{heading}</h2>
        </div>

        {/* List Items */}
        <div className="space-y-8">
          {items.map((item, index) => (
            <React.Fragment key={item.id}>
              {index > 0 && (
                <div className="border-t border-dotted border-border"></div>
              )}
              <div className="flex items-center justify-between gap-8">
                <p className="text-muted-foreground flex-1">
                  {item.description}
                </p>
                <div className="font-heading text-3xl lg:text-4xl text-foreground whitespace-nowrap">
                  {item.price}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
