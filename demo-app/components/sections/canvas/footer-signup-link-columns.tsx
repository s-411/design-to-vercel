'use client'

import * as React from 'react'

export interface FooterLinkColumn {
  heading: string
  links: string[]
}

export interface FooterSignupLinkColumnsProps {
  signupHeading?: string
  signupDescription?: string
  emailPlaceholder?: string
  buttonText?: string
  gdprText?: string
  leftColumn?: FooterLinkColumn
  rightColumn?: FooterLinkColumn
  onSubmit?: (email: string) => void
}

export function FooterSignupLinkColumns({
  signupHeading = 'Sign up for weekly tips!',
  signupDescription = 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
  emailPlaceholder = 'Email',
  buttonText = 'SIGN UP',
  gdprText = 'GDPR-compliant, so you can subtly include a link to your Privacy Policy',
  leftColumn = {
    heading: 'Category',
    links: ['First footer link', 'Second link', 'Third footer link', 'Fourth sample link', 'Fifth link'],
  },
  rightColumn = {
    heading: 'Category',
    links: ['First footer link', 'Second link', 'Third footer link', 'Fourth sample link', 'Fifth link'],
  },
  onSubmit,
}: FooterSignupLinkColumnsProps) {
  const [email, setEmail] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(email)
    }
  }

  return (
    <footer className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: Signup Form */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-heading text-foreground">{signupHeading}</h2>
            <p className="text-muted-foreground">{signupDescription}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={emailPlaceholder}
                className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="btn-mm w-full py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                {buttonText}
              </button>
            </form>

            <p className="text-xs text-muted-foreground">
              {gdprText.split('Privacy Policy').map((part, index, array) => (
                <React.Fragment key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <button className="underline hover:text-primary transition-colors">Privacy Policy</button>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Middle: Link Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{leftColumn.heading}</h3>
            <ul className="space-y-3">
              {leftColumn.links.map((link, index) => (
                <li key={index}>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Link Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{rightColumn.heading}</h3>
            <ul className="space-y-3">
              {rightColumn.links.map((link, index) => (
                <li key={index}>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
