'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'

export interface FaqSplitAccordionInfoProps {
  faqHeading?: string
  questions?: string[]
  infoHeading?: string
  infoItems?: string[]
}

export function FaqSplitAccordionInfo({
  faqHeading = 'F.A.Q.',
  questions = [
    'How to contact support?',
    'What payment gateways can I use?',
    'How to upgrade my license?',
    'How to cancel my subscribtion?',
    'Where are you located?',
  ],
  infoHeading = 'Important Information',
  infoItems = [
    'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    'Your content goes here. Edit or remove this text inline or in the module Content settings.',
  ],
}: FaqSplitAccordionInfoProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - FAQ accordion */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-heading text-foreground mb-8">
              {faqHeading}
            </h2>

            <div className="space-y-0">
              {questions.map((question, index) => (
                <div key={index}>
                  <button className="w-full flex items-center justify-between py-6 text-left">
                    <span className="text-lg text-muted-foreground">
                      {question}
                    </span>
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" />
                  </button>
                  {index < questions.length - 1 && (
                    <div className="border-t border-border" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Important information */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-heading text-foreground mb-8">
              {infoHeading}
            </h2>

            <div className="space-y-6">
              {infoItems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
                  </svg>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
