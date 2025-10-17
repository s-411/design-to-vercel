'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'

export interface NavItem {
  label: string
  href?: string
  hasDropdown?: boolean
  onClick?: () => void
}

export interface HeaderCenteredNavProps {
  /** Logo text or element */
  logo?: string | React.ReactNode
  /** Left navigation items */
  leftNavItems?: NavItem[]
  /** Right navigation items */
  rightNavItems?: NavItem[]
}

/**
 * HeaderCenteredNav Component
 *
 * Header with navigation on left, logo centered, and more navigation on right.
 * Matches header-7 layout styled with MM Design System.
 *
 * Features:
 * - Centered logo/brand element
 * - Split navigation (left and right)
 * - Dropdown indicators
 * - Fully responsive
 * - Light/dark mode support
 * - MM Design System styling
 */
export function HeaderCenteredNav({
  logo = 'canvas',
  leftNavItems = [
    { label: 'ABOUT', href: '#' },
    { label: 'SERVICES', href: '#', hasDropdown: true },
    { label: 'PRICING', href: '#' },
  ],
  rightNavItems = [
    { label: 'PORTFOLIO', href: '#' },
    { label: 'BLOG', href: '#' },
    { label: 'CONTACT', href: '#' },
  ],
}: HeaderCenteredNavProps) {

  return (
    <header className="py-4 px-4 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-8">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {leftNavItems.map((item, index) => (
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

          {/* Centered Logo */}
          <div className="flex items-center flex-shrink-0">
            {typeof logo === 'string' ? (
              <div className="px-4 py-2 border-2 border-muted/30 rounded text-muted-foreground/30 text-2xl font-light">
                {logo}
              </div>
            ) : (
              logo
            )}
          </div>

          {/* Right Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {rightNavItems.map((item, index) => (
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
        </div>
      </div>
    </header>
  )
}
