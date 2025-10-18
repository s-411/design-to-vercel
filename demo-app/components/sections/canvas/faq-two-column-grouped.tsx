'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'

export interface FaqTwoColumnGroupedProps {
  group1Label?: string
  group1Heading?: string
  group1Questions?: string[]
  group2Label?: string
  group2Heading?: string
  group2Questions?: string[]
}

export function FaqTwoColumnGrouped({
  group1Label = 'F.A.Q.',
  group1Heading = 'Short Heading',
  group1Questions = [
    'What is the fastest way to contact support?',
    'What payment gateways can I use?',
    'How to upgrade my license?',
    'How to cancel my subscribtion?',
    'Where are you located? Can I visit your office?',
  ],
  group2Label = 'F.A.Q.',
  group2Heading = 'Short Heading',
  group2Questions = [
    'What is the fastest way to contact support?',
    'What payment gateways can I use?',
    'How to upgrade my license?',
    'How to cancel my subscribtion?',
    'Where are you located? Can I visit your office?',
  ],
}: FaqTwoColumnGroupedProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16">
          {/* Left side - First group */}
          <div className="lg:w-64">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              {group1Label}
            </p>
            <h2 className="text-2xl font-heading text-foreground mb-8">
              {group1Heading}
            </h2>
          </div>

          {/* Right side - First group questions */}
          <div className="space-y-0">
            {group1Questions.map((question, index) => (
              <div key={index}>
                <button className="w-full flex items-center justify-between py-6 text-left">
                  <span className="text-lg text-muted-foreground">
                    {question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" />
                </button>
                {index < group1Questions.length - 1 && (
                  <div className="border-t border-border" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Spacing between groups */}
        <div className="h-16" />

        <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16">
          {/* Left side - Second group */}
          <div className="lg:w-64">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              {group2Label}
            </p>
            <h2 className="text-2xl font-heading text-foreground mb-8">
              {group2Heading}
            </h2>
          </div>

          {/* Right side - Second group questions */}
          <div className="space-y-0">
            {group2Questions.map((question, index) => (
              <div key={index}>
                <button className="w-full flex items-center justify-between py-6 text-left">
                  <span className="text-lg text-muted-foreground">
                    {question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" />
                </button>
                {index < group2Questions.length - 1 && (
                  <div className="border-t border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
