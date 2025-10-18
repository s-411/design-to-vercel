'use client'

import * as React from 'react'

export interface PricingProductListInlineProps {
  onButtonClick?: (product: string) => void
}

export function PricingProductListInline({
  onButtonClick,
}: PricingProductListInlineProps) {
  const handleClick = (product: string) => {
    if (onButtonClick) {
      onButtonClick(product)
    }
  }

  const products = [
    {
      id: 'product-1',
      heading: 'Heading Inroducing Product',
      bodyCopy: 'Your content goes here. Edit or remove this text inlin or in the module Content settings. You can also style every aspect of this content in the module Design settings',
      price: '$290',
    },
    {
      id: 'product-2',
      heading: 'Heading Inroducing Product',
      bodyCopy: 'Your content goes here. Edit or remove this text inlin or in the module Content settings. You can also style every aspect of this content in the module Design settings',
      price: '$290',
    },
    {
      id: 'product-3',
      heading: 'Heading Inroducing Product',
      bodyCopy: 'Your content goes here. Edit or remove this text inlin or in the module Content settings. You can also style every aspect of this content in the module Design settings',
      price: '$290',
    },
  ]

  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-8">
          {products.map((product, index) => (
            <React.Fragment key={product.id}>
              {index > 0 && <div className="border-t border-border"></div>}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Image Placeholder */}
                <div className="lg:col-span-4">
                  <div className="aspect-[4/3] bg-muted/50 dark:bg-muted/30 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-muted-foreground/30"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-8">
                  <h3 className="font-heading text-2xl lg:text-3xl mb-3 text-foreground">
                    {product.heading}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {product.bodyCopy}
                  </p>

                  {/* Button and Price Inline */}
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => handleClick(product.id)}
                      className="border-2 border-primary text-foreground px-8 py-3 font-heading text-sm hover:bg-primary hover:text-primary-foreground transition-colors rounded-[100px]"
                    >
                      CLICK HERE
                    </button>
                    <div className="font-heading text-4xl lg:text-5xl text-foreground">
                      {product.price}
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
