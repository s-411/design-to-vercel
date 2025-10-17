'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'

export interface NavItem {
  label: string
  href?: string
  hasDropdown?: boolean
  onClick?: () => void
}

export interface HeaderNavigationProps {
  /** Logo text or element */
  logo?: string | React.ReactNode
  /** Navigation items */
  navItems?: NavItem[]
}

/**
 * HeaderNavigation Component
 *
 * Header with logo on left and navigation menu on right.
 * Matches header-4 layout styled with MM Design System.
 *
 * Features:
 * - Logo/brand element
 * - Navigation menu with dropdown indicators
 * - Fully responsive
 * - Light/dark mode support
 * - MM Design System styling
 */
export function HeaderNavigation({
  logo = 'canvas',
  navItems = [
    { label: 'ABOUT', href: '#' },
    { label: 'SERVICES', href: '#', hasDropdown: true },
    { label: 'PRICING', href: '#' },
    { label: 'PORTFOLIO', href: '#' },
    { label: 'BLOG', href: '#' },
    { label: 'CONTACT', href: '#' },
  ],
}: HeaderNavigationProps) {

  return (
    <header className="py-4 px-4 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {typeof logo === 'string' ? (
              <div className="px-4 py-2 border-2 border-muted/30 rounded text-muted-foreground/30 text-2xl font-light">
                {logo}
              </div>
            ) : (
              logo
            )}
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={item.onClick}
                className="flex items-center gap-1 text-sm font-bold text-foreground hover:text-primary transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4" strokeWidth={2} />
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
