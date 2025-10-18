'use client'

import * as React from 'react'

export interface FaqQuestion {
  question: string
  answer: string
}

export interface FaqSplitTextCtaProps {
  questions?: FaqQuestion[]
  ctaHeading?: string
  ctaDescription?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

export function FaqSplitTextCta({
  questions = [
    {
      question: 'How to upgrade my license?',
      answer:
        'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.',
    },
    {
      question: 'What payment gateways can I use?',
      answer:
        'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design.',
    },
    {
      question: 'Where are you located?',
      answer:
        'Your content goes here. Edit or remove this text inline or in the module Content settings.',
    },
  ],
  ctaHeading = 'Contact Us',
  ctaDescription = 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content.',
  primaryButtonText = 'SCHEDULE A CALL',
  secondaryButtonText = 'SECONDARY ACTION',
  onPrimaryClick,
  onSecondaryClick,
}: FaqSplitTextCtaProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16">
          {/* Left side - FAQ questions with answers */}
          <div className="space-y-10">
            {questions.map((item, index) => (
              <div key={index}>
                <h3 className="text-2xl lg:text-3xl font-heading text-foreground mb-4">
                  {item.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Right side - CTA card */}
          <div className="lg:w-96">
            <div className="border border-border rounded-lg p-8 lg:p-10 bg-muted/10 dark:bg-muted/5">
              <h2 className="text-3xl font-heading text-foreground mb-4">
                {ctaHeading}
              </h2>
              <p className="text-muted-foreground mb-8">
                {ctaDescription}
              </p>

              <div className="space-y-4">
                <button
                  onClick={onPrimaryClick}
                  className="btn-mm w-full py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  {primaryButtonText}
                </button>
                <button
                  onClick={onSecondaryClick}
                  className="btn-mm w-full py-3 border-2 border-primary text-primary font-semibold bg-transparent hover:bg-primary/10 transition-colors"
                >
                  {secondaryButtonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
