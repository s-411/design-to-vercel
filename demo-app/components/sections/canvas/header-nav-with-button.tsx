'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'

export interface NavItem {
  label: string
  href?: string
  hasDropdown?: boolean
  onClick?: () => void
}

export interface HeaderNavWithButtonProps {
  /** Logo text or element */
  logo?: string | React.ReactNode
  /** Navigation items */
  navItems?: NavItem[]
  /** Button text */
  buttonText?: string
  /** Button click handler */
  onButtonClick?: () => void
}

/**
 * HeaderNavWithButton Component
 *
 * Header with logo on left, navigation center, and button on right.
 * Matches header-5 layout styled with MM Design System.
 *
 * Features:
 * - Logo/brand element
 * - Navigation menu with dropdown indicators
 * - Primary button
 * - Fully responsive
 * - Light/dark mode support
 * - MM Design System styling
 */
export function HeaderNavWithButton({
  logo = 'canvas',
  navItems = [
    { label: 'ABOUT', href: '#' },
    { label: 'SERVICES', href: '#', hasDropdown: true },
    { label: 'PRICING', href: '#' },
    { label: 'PORTFOLIO', href: '#' },
    { label: 'BLOG', href: '#' },
    { label: 'CONTACT', href: '#' },
  ],
  buttonText = 'CLICK HERE',
  onButtonClick,
}: HeaderNavWithButtonProps) {

  return (
    <header className="py-4 px-4 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            {typeof logo === 'string' ? (
              <div className="px-4 py-2 border-2 border-muted/30 rounded text-muted-foreground/30 text-2xl font-light">
                {logo}
              </div>
            ) : (
              logo
            )}
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={item.onClick}
                className="flex items-center gap-1 text-sm font-bold text-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4" strokeWidth={2} />
                )}
              </a>
            ))}
          </nav>

          {/* Button */}
          <button
            className="btn-mm text-sm px-6 py-2 flex-shrink-0"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </header>
  )
}
