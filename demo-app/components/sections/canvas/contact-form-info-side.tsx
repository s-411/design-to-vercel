'use client'

import * as React from 'react'

export interface ContactFormInfoSideProps {
  heading?: string
  namePlaceholder?: string
  emailPlaceholder?: string
  messagePlaceholder?: string
  buttonText?: string
  emailLabel?: string
  email?: string
  phoneLabel?: string
  phone?: string
  officeLabel?: string
  office?: string
  onSubmit?: (data: { name: string; email: string; message: string }) => void
}

export function ContactFormInfoSide({
  heading = 'Short Heading',
  namePlaceholder = 'Name',
  emailPlaceholder = 'Email Address',
  messagePlaceholder = 'Message',
  buttonText = 'SEND MESSAGE',
  emailLabel = 'Email:',
  email = 'hello@mywebsite.com',
  phoneLabel = 'Phone:',
  phone = '234-194-1387',
  officeLabel = 'Our Office:',
  office = '3118 Crescent St, Astoria, New York',
  onSubmit,
}: ContactFormInfoSideProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (onSubmit) {
      const formData = new FormData(e.currentTarget)
      onSubmit({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
      })
    }
  }

  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Form */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading text-foreground mb-8">
              {heading}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder={namePlaceholder}
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={emailPlaceholder}
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <textarea
                name="message"
                placeholder={messagePlaceholder}
                rows={6}
                className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn-mm px-8 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  {buttonText}
                </button>
              </div>
            </form>
          </div>

          {/* Right side - Contact info */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                {emailLabel}
              </p>
              <p className="text-2xl lg:text-3xl font-heading text-foreground">
                {email}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                {phoneLabel}
              </p>
              <p className="text-2xl lg:text-3xl font-heading text-foreground">
                {phone}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                {officeLabel}
              </p>
              <p className="text-2xl lg:text-3xl font-heading text-foreground">
                {office}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
