# Canvas Section Creation Prompt

## Objective
Create a React component that perfectly replicates a screenshot design while applying the MM Design System styling. Each canvas section must work flawlessly in both **light mode** and **dark mode**.

## Critical Requirements

### 1. Canvas Page Structure
Every canvas section follows this exact pattern:

```tsx
{/* Demo N: section-name */}
<div>
  <div className="mb-6">
    <h2 className="text-2xl font-heading mb-2">section-name</h2>
  </div>

  {/* The Component */}
  <YourComponent
    heading="..."
    bodyCopy="..."
    buttonText="..."
    onButtonClick={handleButtonClick}
  />
</div>

{/* Divider */}
<div className="border-t border-border"></div>
```

**Key points:**
- Section title in top-left using `text-2xl font-heading mb-2`
- Component renders below the title
- Border divider separates each section
- Clean, consistent spacing

### 2. Design System Integration (CRITICAL)

#### Typography
**ALWAYS use the MM Design System fonts:**

- **Headings**: Use `font-heading` class → applies National2Condensed font
  ```tsx
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading">
  ```

- **Body Text**: Default font → ESKlarheit (applied automatically to body text)
  ```tsx
  <p className="text-base md:text-lg text-muted-foreground">
  ```

#### Buttons
**ALWAYS use MM Design System button classes:**

- **Primary Button**: Use `btn-mm` class
  ```tsx
  <button className="btn-mm" onClick={onPrimaryClick}>
    {buttonText}
  </button>
  ```
  - Automatically has 100px border-radius
  - Uses `hsl(var(--primary))` background
  - Uses `hsl(var(--primary-foreground))` text color

- **Secondary Button**: Use `btn-secondary` class
  ```tsx
  <button className="btn-secondary" onClick={onSecondaryClick}>
    {buttonText}
  </button>
  ```
  - Transparent background
  - Border with `border-border`
  - 100px border-radius

#### Colors (Light + Dark Mode)
**CRITICAL**: Use semantic color tokens that automatically adapt to theme:

```tsx
// Text colors
text-foreground           // Main text (dark in light mode, light in dark mode)
text-muted-foreground     // Secondary text
text-primary              // Accent/brand color

// Backgrounds
bg-background             // Main background
bg-muted                  // Subtle background
bg-card                   // Card backgrounds

// Borders
border-border             // All borders
```

**NEVER use hardcoded colors** like `bg-white`, `text-black`, `bg-gray-100` etc.

#### Image Placeholders
For image placeholders, use this exact pattern:

```tsx
import { Image as ImageIcon } from 'lucide-react'

<div className="relative w-full aspect-[4/3] rounded-card bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
  <div className="flex flex-col items-center justify-center text-muted-foreground/40">
    <div className="w-16 h-16 md:w-20 md:h-20 mb-3 rounded-lg bg-muted/60 dark:bg-muted/40 flex items-center justify-center">
      <ImageIcon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
    </div>
    <p className="text-sm text-muted-foreground/50">Image Placeholder</p>
  </div>
</div>
```

### 3. Component Props Structure

Every canvas component should accept these standard props:

```tsx
export interface YourComponentProps {
  /** Main heading text */
  heading?: string
  /** Body copy text */
  bodyCopy?: string
  /** Button text */
  buttonText?: string
  /** Button click handler */
  onButtonClick?: () => void
  /** Show image placeholder */
  showImage?: boolean
  /** Custom image element */
  imageElement?: React.ReactNode
  /** Additional variant props as needed */
}
```

### 4. Responsive Design

Use this mobile-first responsive pattern:

```tsx
// Text sizes
className="text-3xl md:text-4xl lg:text-5xl"

// Spacing
className="py-12 md:py-20"
className="gap-8 lg:gap-12"

// Grid layouts
className="grid lg:grid-cols-2 gap-8 lg:gap-12"

// Containers
<div className="max-w-7xl mx-auto px-4">
```

### 5. Component Documentation

Include comprehensive JSDoc comments:

```tsx
/**
 * ComponentName Component
 *
 * Brief description matching the screenshot layout.
 * Styled with MM Design System.
 *
 * Features:
 * - Feature 1
 * - Feature 2
 * - Fully responsive
 * - Light/dark mode support
 * - MM Design System styling
 */
```

## Implementation Checklist

When creating a new canvas section component:

- [ ] Analyze the screenshot carefully for layout structure
- [ ] Identify text hierarchy (headings vs body)
- [ ] Note button types (primary vs secondary)
- [ ] Determine responsive breakpoints needed
- [ ] Use `font-heading` for ALL headings
- [ ] Use `btn-mm` or `btn-secondary` for ALL buttons
- [ ] Use semantic color tokens (NEVER hardcoded colors)
- [ ] Use image placeholder pattern if images present
- [ ] Test in **both light and dark mode**
- [ ] Ensure responsive behavior on mobile
- [ ] Add proper TypeScript types
- [ ] Add JSDoc documentation
- [ ] Follow the exact canvas page structure shown above

## Example: Perfect Implementation

```tsx
'use client'

import * as React from 'react'
import { Image as ImageIcon } from 'lucide-react'

export interface TextImageSplitProps {
  heading?: string
  bodyCopy?: string
  buttonText?: string
  onButtonClick?: () => void
  showImage?: boolean
  imageElement?: React.ReactNode
  imagePosition?: 'left' | 'right'
}

/**
 * TextImageSplit Component
 *
 * A layout component with text content and an image/placeholder.
 * Matches the provided screenshot layout but styled with MM Design System.
 *
 * Features:
 * - Configurable layout: image left/right
 * - Fully responsive
 * - Light/dark mode support
 * - MM Design System styling
 */
export function TextImageSplit({
  heading = 'Heading to introduce your website offer',
  bodyCopy = 'Your content goes here...',
  buttonText = 'CLICK HERE',
  onButtonClick,
  showImage = true,
  imageElement,
  imagePosition = 'right',
}: TextImageSplitProps) {

  const textContent = (
    <div className="space-y-6">
      {/* Heading - MM Design System font-heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading leading-tight text-foreground">
        {heading}
      </h2>

      {/* Body - MM Design System default font */}
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
        {bodyCopy}
      </p>

      {/* Button - MM Design System btn-mm */}
      <div className="pt-2">
        <button className="btn-mm" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  )

  const imageContent = showImage && (
    <div>
      {imageElement || (
        <div className="relative w-full aspect-[4/3] rounded-card bg-muted/50 dark:bg-muted/30 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-muted-foreground/40">
            <div className="w-16 h-16 md:w-20 md:h-20 mb-3 rounded-lg bg-muted/60 dark:bg-muted/40 flex items-center justify-center">
              <ImageIcon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-muted-foreground/50">Image Placeholder</p>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {imagePosition === 'left' ? (
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
```

## Common Mistakes to Avoid

❌ **WRONG**: Using hardcoded colors
```tsx
<div className="bg-white text-black">
```

✅ **CORRECT**: Using semantic tokens
```tsx
<div className="bg-background text-foreground">
```

---

❌ **WRONG**: Using default font classes
```tsx
<h1 className="text-3xl font-bold">
```

✅ **CORRECT**: Using MM Design System font-heading
```tsx
<h1 className="text-3xl font-heading">
```

---

❌ **WRONG**: Custom button styling
```tsx
<button className="bg-blue-500 text-white px-6 py-3 rounded-full">
```

✅ **CORRECT**: Using btn-mm class
```tsx
<button className="btn-mm">
```

---

❌ **WRONG**: Inline styles or fixed colors
```tsx
<div style={{ backgroundColor: '#f0f0f0' }}>
```

✅ **CORRECT**: Design system classes
```tsx
<div className="bg-muted">
```

## Adding Sections to the Canvas Page

**CRITICAL**: Think of canvas sections like LEGO blocks. You're just stacking them on the page.

### When Adding New Sections:

1. **Import the component** at the top of the file
2. **Add the section block** to the page (top or bottom as requested)
3. **DO NOT modify existing sections** - they are independent blocks
4. **DO NOT renumber existing sections** - leave them exactly as they are

### The LEGO Block Approach:

Each section is self-contained:
```tsx
{/* Demo N: section-name */}
<div>
  <div className="mb-6">
    <h2 className="text-2xl font-heading mb-2">section-name</h2>
  </div>
  <YourComponent {...props} />
</div>

{/* Divider */}
<div className="border-t border-border"></div>
```

**Just stack them. Don't reorganize. Don't renumber. Just add your new blocks.**

### Example of CORRECT approach:
```tsx
// User asks: "Add header-1 to the top"

// Step 1: Import
import { HeaderSimple } from '@/components/sections/canvas/header-simple'

// Step 2: Add to top of the space-y-12 div
{/* Demo 1: header-1 */}
<div>
  <div className="mb-6">
    <h2 className="text-2xl font-heading mb-2">header-1</h2>
  </div>
  <HeaderSimple {...props} />
</div>

{/* Divider */}
<div className="border-t border-border"></div>

{/* Existing Demo 1: hero-1 - LEAVE THIS ALONE */}
<div>
  <div className="mb-6">
    <h2 className="text-2xl font-heading mb-2">hero-1</h2>
  </div>
  <TextImageSplit {...props} />
</div>
```

### Example of WRONG approach:
```tsx
❌ DON'T DO THIS - Renumbering existing sections
{/* Demo 1: header-1 */}
...

{/* Demo 2: hero-1 */}  // Changed from "Demo 1" - WRONG!
...

{/* Demo 3: hero-2 */}  // Changed from "Demo 2" - WRONG!
```

**The purpose**: Users can browse all sections on one page and grab any section they want to use. Each section is independent and reusable. Don't mess with the existing LEGO blocks when adding new ones.

## Final Notes

- **Light/Dark Mode**: Test EVERY component in both modes before considering it complete
- **Consistency**: Every canvas component should feel like part of the same family
- **Screenshots**: The component should be a pixel-perfect recreation of the screenshot, but with MM Design System styling applied
- **Reusability**: Components should be flexible through props while maintaining the core design
- **Documentation**: Clear comments help others understand and use your components
- **LEGO Blocks**: Just stack sections. Don't reorganize existing ones.

## Reference Files

- Design System Styles: `/design-system/styles/globals.css`
- Canvas Page: `/demo-app/app/canvas/page.tsx`
- Example Components: `/demo-app/components/sections/canvas/`
- Tier 1 Sections: `/demo-app/app/sections/page.tsx`
- Tier 2 Engagement: `/demo-app/app/engagement/page.tsx`
- Tier 3 Content: `/demo-app/app/content/page.tsx`
