'use client'

import * as React from 'react'
import { Menu } from 'lucide-react'

export interface HeaderSimpleProps {
  /** Logo text or element */
  logo?: string | React.ReactNode
  /** Menu click handler */
  onMenuClick?: () => void
}

/**
 * HeaderSimple Component
 *
 * Simple header with logo on left and hamburger menu on right.
 * Matches header-1 layout styled with MM Design System.
 *
 * Features:
 * - Logo/brand element
 * - Hamburger menu icon
 * - Fully responsive
 * - Light/dark mode support
 * - MM Design System styling
 */
export function HeaderSimple({
  logo = 'canvas',
  onMenuClick,
}: HeaderSimpleProps) {

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

          {/* Hamburger Menu */}
          <button
            className="p-2 hover:bg-accent rounded transition-colors"
            onClick={onMenuClick}
            aria-label="Menu"
          >
            <Menu className="w-6 h-6 text-foreground" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  )
}
