'use client'

import * as React from 'react'
import { Menu } from 'lucide-react'

export interface HeaderWithButtonProps {
  /** Logo text or element */
  logo?: string | React.ReactNode
  /** Button text */
  buttonText?: string
  /** Button click handler */
  onButtonClick?: () => void
  /** Menu click handler */
  onMenuClick?: () => void
}

/**
 * HeaderWithButton Component
 *
 * Header with logo on left, hamburger menu and button on right.
 * Matches header-2 layout styled with MM Design System.
 *
 * Features:
 * - Logo/brand element
 * - Primary button
 * - Hamburger menu icon
 * - Fully responsive
 * - Light/dark mode support
 * - MM Design System styling
 */
export function HeaderWithButton({
  logo = 'canvas',
  buttonText = 'CLICK HERE',
  onButtonClick,
  onMenuClick,
}: HeaderWithButtonProps) {

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

          {/* Button + Hamburger Menu */}
          <div className="flex items-center gap-4">
            <button
              className="btn-mm text-sm px-6 py-2"
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
            <button
              className="p-2 hover:bg-accent rounded transition-colors"
              onClick={onMenuClick}
              aria-label="Menu"
            >
              <Menu className="w-6 h-6 text-foreground" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
