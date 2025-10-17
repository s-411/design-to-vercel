'use client'

import * as React from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/design-system/lib/theme-toggle'
import { ArrowLeft, Palette, Monitor, Share2, Search, Pencil, MessageSquare, Sparkles } from 'lucide-react'
import { HeaderSimple } from '@/components/sections/canvas/header-simple'
import { HeaderWithButton } from '@/components/sections/canvas/header-with-button'
import { HeaderCenteredButton } from '@/components/sections/canvas/header-centered-button'
import { HeaderNavigation } from '@/components/sections/canvas/header-navigation'
import { HeaderNavWithButton } from '@/components/sections/canvas/header-nav-with-button'
import { HeaderNavWithSocial } from '@/components/sections/canvas/header-nav-with-social'
import { HeaderCenteredNav } from '@/components/sections/canvas/header-centered-nav'
import { HeaderSocialNavButton } from '@/components/sections/canvas/header-social-nav-button'
import { HeaderFullFeatured } from '@/components/sections/canvas/header-full-featured'
import { TextImageSplit } from '@/components/sections/canvas/text-image-split'
import { TextImageSplitWithTagline } from '@/components/sections/canvas/text-image-split-with-tagline'
import { HeroCenteredWithMockup } from '@/components/sections/canvas/hero-centered-with-mockup'
import { EmailSignupSplit } from '@/components/sections/canvas/email-signup-split'
import { ContentSplitBasic } from '@/components/sections/canvas/content-split-basic'
import { ContentSplitDivided } from '@/components/sections/canvas/content-split-divided'
import { ContentTwoColumnCard } from '@/components/sections/canvas/content-two-column-card'
import { ContentWithImages } from '@/components/sections/canvas/content-with-images'
import { ContentImageAbove } from '@/components/sections/canvas/content-image-above'
import { FeaturesThreeColumnButtons } from '@/components/sections/canvas/features-three-column-buttons'
import { FeaturesThreeColumnLinks } from '@/components/sections/canvas/features-three-column-links'
import { FeaturesFourGrid } from '@/components/sections/canvas/features-four-grid'
import { FeaturesSplitWithList } from '@/components/sections/canvas/features-split-with-list'
import { FeaturesThreeCardsFeatured } from '@/components/sections/canvas/features-three-cards-featured'
import { FeaturesSixGridWithHeader } from '@/components/sections/canvas/features-six-grid-with-header'
import { FeaturesSplitImageList } from '@/components/sections/canvas/features-split-image-list'
import { BlogListVerticalTwo } from '@/components/sections/canvas/blog-list-vertical-two'
import { BlogListAlternating } from '@/components/sections/canvas/blog-list-alternating'
import { BlogListLargeImages } from '@/components/sections/canvas/blog-list-large-images'
import { BlogListImageRight } from '@/components/sections/canvas/blog-list-image-right'
import { BlogGridThreeColumn } from '@/components/sections/canvas/blog-grid-three-column'
import { GallerySplitTextLeft } from '@/components/sections/canvas/gallery-split-text-left'
import { GallerySplitTextRight } from '@/components/sections/canvas/gallery-split-text-right'
import { GalleryAsymmetricThree } from '@/components/sections/canvas/gallery-asymmetric-three'
import { GallerySplitLargeSmall } from '@/components/sections/canvas/gallery-split-large-small'
import { GallerySidebarLeft } from '@/components/sections/canvas/gallery-sidebar-left'
import { GallerySidebarRight } from '@/components/sections/canvas/gallery-sidebar-right'
import { GalleryMasonryFive } from '@/components/sections/canvas/gallery-masonry-five'
import { GalleryFeaturedGrid } from '@/components/sections/canvas/gallery-featured-grid'
import { useToast } from '@/hooks/use-toast'

export default function CanvasPage() {
  const { toast } = useToast()

  const handleButtonClick = () => {
    toast({
      title: 'Button Clicked!',
      description: 'This is a demo action from the Canvas layout.',
    })
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading text-primary">Canvas Layouts</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Custom layout components that match your design mockups exactly, styled with the MM Design System.
            Upload screenshots and we'll recreate them with the proper fonts, colors, and button styles.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="border-t border-border"></div>
      </div>

      {/* Sticky Navigation Menu */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex flex-wrap gap-4 text-sm">
            <a href="#header" className="text-muted-foreground hover:text-primary transition-colors">Header</a>
            <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Hero</a>
            <a href="#content" className="text-muted-foreground hover:text-primary transition-colors">Content</a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
            <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</a>
            <a href="#cta" className="text-muted-foreground hover:text-primary transition-colors">CTA</a>
            <a href="#quotes" className="text-muted-foreground hover:text-primary transition-colors">Quotes</a>
            <a href="#signup" className="text-muted-foreground hover:text-primary transition-colors">Sign Up</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="#footers" className="text-muted-foreground hover:text-primary transition-colors">Footers</a>
            <a href="#number" className="text-muted-foreground hover:text-primary transition-colors">Number</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
          </nav>
        </div>
      </div>

      {/* Layout Demo Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-12">

          {/* Demo 1: header-1 */}
          <div id="header" className="scroll-mt-[5.5rem]">
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">header-1</h2>
            </div>
            <HeaderSimple logo="canvas" onMenuClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 2: header-2 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">header-2</h2>
            </div>
            <HeaderWithButton logo="canvas" buttonText="CLICK HERE" onButtonClick={handleButtonClick} onMenuClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 3: header-3 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">header-3</h2>
            </div>
            <HeaderCenteredButton logo="canvas" buttonText="CLICK HERE" onButtonClick={handleButtonClick} onMenuClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 4: header-4 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">header-4</h2>
            </div>
            <HeaderNavigation logo="canvas" />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 5: header-5 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">header-5</h2>
            </div>
            <HeaderNavWithButton logo="canvas" buttonText="CLICK HERE" onButtonClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 6: header-6 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">header-6</h2>
            </div>
            <HeaderNavWithSocial logo="canvas" />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 7: header-7 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">header-7</h2>
            </div>
            <HeaderCenteredNav logo="canvas" />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 8: header-8 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">header-8</h2>
            </div>
            <HeaderSocialNavButton logo="canvas" buttonText="CLICK HERE" onButtonClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 9: header-9 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">header-9</h2>
            </div>
            <HeaderFullFeatured logo="canvas" buttonText="CLICK HERE" onButtonClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 1: hero-1 */}
          <div id="hero" className="scroll-mt-[5.5rem]">
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">hero-1</h2>
            </div>

            {/* The Component */}
            <TextImageSplit
              heading="Heading to introduce your website offer"
              bodyCopy="Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings."
              buttonText="CLICK HERE"
              onButtonClick={handleButtonClick}
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 2: hero-2 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">hero-2</h2>
            </div>

            {/* The Component */}
            <TextImageSplit
              heading="Heading to introduce your website offer"
              bodyCopy="Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings."
              buttonText="CLICK HERE"
              onButtonClick={handleButtonClick}
              imagePosition="left"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 3: hero-3 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">hero-3</h2>
            </div>

            {/* The Component */}
            <TextImageSplitWithTagline
              tagline="Brief Catchy Tagline"
              heading="Heading to introduce your website offer"
              bodyCopy="Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings."
              primaryButtonText="CLICK HERE"
              onPrimaryClick={handleButtonClick}
              secondaryButtonText="CLICK HERE"
              onSecondaryClick={handleButtonClick}
              imagePosition="left"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 4: hero-4 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">hero-4</h2>
            </div>

            {/* The Component */}
            <TextImageSplitWithTagline
              tagline="Brief Catchy Tagline"
              heading="Heading to introduce your website offer"
              bodyCopy="Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings."
              primaryButtonText="CLICK HERE"
              onPrimaryClick={handleButtonClick}
              secondaryButtonText="CLICK HERE"
              onSecondaryClick={handleButtonClick}
              imagePosition="right"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 5: hero-5 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">hero-5</h2>
            </div>

            {/* The Component */}
            <HeroCenteredWithMockup
              logo="canvas"
              heading="A heading to introduce your website offer"
              bodyCopy="Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content."
              primaryButtonText="CLICK HERE"
              onPrimaryClick={handleButtonClick}
              secondaryButtonText="CLICK HERE"
              onSecondaryClick={handleButtonClick}
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 6: hero-6 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">hero-6</h2>
            </div>

            {/* The Component */}
            <EmailSignupSplit
              heading="A heading to introduce your website offer"
              bodyCopy="Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings."
              emailPlaceholder="Email"
              buttonText="SIGN UP"
              onSubmit={(email) => {
                toast({
                  title: 'Signed up!',
                  description: `Email: ${email}`,
                })
              }}
              privacyText="GDPR-compliant, so you can subtly include a link to your"
              privacyLink="Privacy Policy"
              imagePosition="right"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 7: content-1 */}
          <div id="content" className="scroll-mt-[5.5rem]">
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">content-1</h2>
            </div>

            {/* The Component */}
            <ContentSplitBasic
              tagline="Brief Catchy Tagline"
              heading="This can be a longer heading. Your content goes here. Edit or remove this text inline or in the module Content settings."
              bodyCopy="Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.

In write mathematicians frequency, at unmolested made like the muff it or on slight and reposed doctor's magnitude, bulk; Little in and or was herself for while could avarice expect, frequency; Really actual looked. All the both wasn't missions to the creative home by the in be in a to the then for in look design would government he flatter more time thoughts each of for she slight coordinates review, me in pass will. Would often if in it the should remember eyes of sublime lady the and soon to the postage think turn past in yes, back all decision-making."
              learnMoreText="Learn more"
              onLearnMoreClick={handleButtonClick}
              layout="heading-left"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 8: content-2 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">content-2</h2>
            </div>

            {/* The Component */}
            <ContentSplitBasic
              tagline="Brief Tagline"
              heading="This can be a longer heading. Your content goes here. Edit or remove this text inline or in the module Content settings."
              bodyCopy="Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.

In write mathematicians frequency, at unmolested made like the muff it or on slight and reposed doctor's magnitude, bulk; Little in and or was herself for while could avarice expect, frequency; Really actual looked. All the both wasn't missions to the creative home by the in be in a to the then for in look design would government he flatter more time thoughts each of for she slight coordinates review, me in pass will. Would often if in it the should remember eyes of sublime lady the and soon to the postage think turn past in yes, back all decision-making.

Comment and chime in sometimes one. Everyone shortcuts. The a with too. Of as quitting months that in found odd more by learn that have far made and choose a synthesizers he any a versus in effectiveness back multi you'd in of purpose a one me on up and one."
              learnMoreText="Learn more"
              onLearnMoreClick={handleButtonClick}
              layout="heading-right"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 9: content-3 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">content-3</h2>
            </div>

            {/* The Component */}
            <ContentSplitDivided
              heading="Sample heading to introduce the content"
              bodyCopy="Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.

In write mathematicians frequency, at unmolested made like the muff it or on slight and reposed doctor's magnitude, bulk; Little in and or was herself for while could avarice expect, frequency; Really actual looked. All the both wasn't missions to the creative home by the in be in a to the then for in look design would government he flatter more time thoughts each of for she slight coordinates review, me in pass will. Would often if in it the should remember eyes of sublime lady the and soon to the postage think turn past in yes, back all decision-making.

Comment and chime in sometimes one. Everyone shortcuts. The a with too. Of as quitting months that in found odd more by learn that have far made and choose a synthesizers he any a versus in effectiveness back multi you'd in of purpose a one me on up and one."
              learnMoreText="Learn more"
              onLearnMoreClick={handleButtonClick}
              layout="heading-left"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 10: content-4 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">content-4</h2>
            </div>

            {/* The Component */}
            <ContentSplitDivided
              heading=""
              bodyCopy="Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.

In write mathematicians frequency, at unmolested made like the muff it or on slight and reposed doctor's magnitude, bulk; Little in and or was herself for while could avarice expect, frequency; Really actual looked. All the both wasn't missions to the creative home by the in be in a to the then for in look design would government he flatter more time thoughts each of for she slight coordinates review, me in pass will. Would often if in it the should remember eyes of sublime lady the and soon to the postage think turn past in yes, back all decision-making.

Comment and chime in sometimes one. Everyone shortcuts. The a with too. Of as quitting months that in found odd more by learn that have far made and choose a synthesizers he any a versus in effectiveness back multi you'd in of purpose a one me on up and one."
              learnMoreText="Learn more"
              onLearnMoreClick={handleButtonClick}
              layout="body-left"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 11: content-5 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">content-5</h2>
            </div>

            {/* The Component */}
            <ContentTwoColumnCard
              tagline="Brief and catchy tagline"
              topBodyCopy="Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings."
              onLearnMoreClick={handleButtonClick}
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 12: content-6 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">content-6</h2>
            </div>

            {/* The Component */}
            <ContentWithImages
              tagline="Brief Tagline"
              heading="This can be a longer heading. Your content goes here. Edit or remove this text inline or in the module Content settings."
              bodyCopy="Sentences by are, snapped was luxury. An be most service, in, research various out the as tone just or good has a and is behind their have latest rest her. From horn to and just have caution thin to precipitate, concepts will. The mouse it circles to good even sleeping.

Made, hall frequency, thoroughly, avoided fundamental; Movement twice with the allpowerful create sample link occupied had focus could because nor showed set who rush out indication stopped they analyzed case that I times, one overcome first phase wasn't of the sofa writing but any the to the in partiality the with go of people clearly, of where be devious with hard the founding by or the beacon due decisions, pattern. To her tone didn't to the drops. Counter. Sitting for that of you star position."
              linkText="sample link"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 13: content-7 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">content-7</h2>
            </div>

            {/* The Component */}
            <ContentImageAbove
              tagline="Brief Tagline"
              heading="A longer header to introduce your website content"
              bodyCopy="Full-width paragraphs need more line spacing. We increased the Text line-height in the Design settings. Sentences by are, snapped was luxury. An be most service, in, research various out the as tone just or good has a and is behind their have latest rest her. From horn to and just have caution thin to precipitate, concepts will. The mouse it circles to good even sleeping.

Made, hall frequency, thoroughly, avoided fundamental; Movement twice with the allpowerful create sample link occupied had focus could because nor showed set who rush out indication stopped they analyzed case that I times, one overcome first phase wasn't of the sofa writing but any the to the in partiality the with go of people clearly, of where be devious with hard the founding by or the beacon due decisions, pattern. To her tone didn't to the drops. Counter. Sitting for that of you star position."
              linkText="sample link"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 14: features-1 */}
          <div id="features" className="scroll-mt-[5.5rem]">
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">features-1</h2>
            </div>

            {/* The Component */}
            <FeaturesThreeColumnButtons
              features={[
                {
                  heading: 'PERFECTLY ALIGNED',
                  bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings.',
                  buttonText: 'CLICK HERE',
                  onButtonClick: handleButtonClick,
                },
                {
                  heading: 'SHORT HEADING',
                  bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text.',
                  buttonText: 'CLICK HERE',
                  onButtonClick: handleButtonClick,
                },
                {
                  heading: 'SHORT HEADING',
                  bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect.',
                  buttonText: 'CLICK HERE',
                  onButtonClick: handleButtonClick,
                },
              ]}
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 15: features-2 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">features-2</h2>
            </div>

            {/* The Component */}
            <FeaturesThreeColumnLinks
              features={[
                {
                  heading: 'PERFECTLY ALIGNED',
                  bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings.',
                  linkText: 'Learn more',
                  onLinkClick: handleButtonClick,
                },
                {
                  heading: 'SHORT HEADING',
                  bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS.',
                  linkText: 'Learn more',
                  onLinkClick: handleButtonClick,
                },
                {
                  heading: 'SHORT HEADING',
                  bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
                  linkText: 'Learn more',
                  onLinkClick: handleButtonClick,
                },
              ]}
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 16: features-3 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">features-3</h2>
            </div>

            {/* The Component */}
            <FeaturesFourGrid
              features={[
                {
                  heading: 'Perfectly Aligned',
                  bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings.',
                },
                {
                  heading: 'Perfectly Aligned',
                  bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style.',
                },
                {
                  heading: 'Perfectly Aligned',
                  bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
                },
                {
                  heading: 'Perfectly Aligned',
                  bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings.',
                },
              ]}
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 17: features-4 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">features-4</h2>
            </div>

            {/* The Component */}
            <FeaturesSplitWithList
              heading="Heading to introduce the features"
              bodyCopy="Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings."
              buttonText="LEARN MORE"
              onButtonClick={handleButtonClick}
              features={[
                {
                  bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings.',
                },
                {
                  bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.',
                },
                {
                  bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content.',
                },
              ]}
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 18: features-5 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">features-5</h2>
            </div>

            {/* The Component */}
            <FeaturesThreeCardsFeatured
              features={[
                {
                  heading: 'Your content goes here',
                  bodyCopy: 'Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.',
                  linkText: 'Learn more',
                  onLinkClick: handleButtonClick,
                  isFeatured: false,
                },
                {
                  heading: 'Your content goes here',
                  bodyCopy: 'Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings.',
                  linkText: 'Learn more',
                  onLinkClick: handleButtonClick,
                  isFeatured: false,
                },
                {
                  heading: 'Featured content',
                  bodyCopy: 'Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this.',
                  buttonText: 'CLICK HERE',
                  onButtonClick: handleButtonClick,
                  isFeatured: true,
                },
              ]}
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 19: features-6 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">features-6</h2>
            </div>

            {/* The Component */}
            <FeaturesSixGridWithHeader
              tagline="Short Catchy Tagline"
              heading="Heading Introducing Features"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 20: features-7 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">features-7</h2>
            </div>

            {/* The Component */}
            <FeaturesSplitImageList
              tagline="Short Catchy Tagline"
              heading="Heading Introducing Features"
              buttonText="CLICK HERE"
              onButtonClick={handleButtonClick}
              features={[
                {
                  heading: 'Short sample heading',
                  bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module settings. You can also style every aspect.',
                  linkText: 'Learn more',
                  onLinkClick: handleButtonClick,
                },
                {
                  heading: 'Short sample heading',
                  bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module settings. You can also style every aspect of this content in the module Design settings.',
                  linkText: 'Learn more',
                  onLinkClick: handleButtonClick,
                },
                {
                  heading: 'Short sample heading',
                  bodyCopy: 'Your content goes here. Edit or remove this text inline or in the module settings.',
                  linkText: 'Learn more',
                  onLinkClick: handleButtonClick,
                },
              ]}
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 21: blog-1 */}
          <div id="blog" className="scroll-mt-[5.5rem]">
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">blog-1</h2>
            </div>

            {/* The Component */}
            <BlogListVerticalTwo />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 22: blog-2 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">blog-2</h2>
            </div>

            {/* The Component */}
            <BlogListAlternating />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 23: blog-3 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">blog-3</h2>
            </div>

            {/* The Component */}
            <BlogListLargeImages />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 24: blog-4 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">blog-4</h2>
            </div>

            {/* The Component */}
            <BlogListImageRight />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 25: blog-5 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">blog-5</h2>
            </div>

            {/* The Component */}
            <BlogGridThreeColumn />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 26: gallery-1 */}
          <div id="gallery" className="scroll-mt-[5.5rem]">
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">gallery-1</h2>
            </div>

            {/* The Component */}
            <GallerySplitTextLeft />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 27: gallery-2 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">gallery-2</h2>
            </div>

            {/* The Component */}
            <GallerySplitTextRight />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 28: gallery-3 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">gallery-3</h2>
            </div>

            {/* The Component */}
            <GalleryAsymmetricThree />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 29: gallery-4 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">gallery-4</h2>
            </div>

            {/* The Component */}
            <GallerySplitLargeSmall />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 30: gallery-5 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">gallery-5</h2>
            </div>

            {/* The Component */}
            <GallerySidebarLeft />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 31: gallery-6 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">gallery-6</h2>
            </div>

            {/* The Component */}
            <GallerySidebarRight />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 32: gallery-7 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">gallery-7</h2>
            </div>

            {/* The Component */}
            <GalleryMasonryFive />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 33: gallery-8 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">gallery-8</h2>
            </div>

            {/* The Component */}
            <GalleryFeaturedGrid />
          </div>

          {/*
            FUTURE SECTIONS - Add with these IDs and scroll offset for sticky navigation:
            Example: <div id="cta" className="scroll-mt-[5.5rem]">

            - id="cta" className="scroll-mt-[5.5rem]" for cta-1
            - id="quotes" className="scroll-mt-[5.5rem]" for quotes-1
            - id="signup" className="scroll-mt-[5.5rem]" for signup-1
            - id="contact" className="scroll-mt-[5.5rem]" for contact-1
            - id="faq" className="scroll-mt-[5.5rem]" for faq-1
            - id="footers" className="scroll-mt-[5.5rem]" for footer-1
            - id="number" className="scroll-mt-[5.5rem]" for number-1
            - id="pricing" className="scroll-mt-[5.5rem]" for pricing-1

            The scroll-mt-[5.5rem] adds a 5.5rem (88px) offset so the section title is visible below the sticky menu.
          */}

        </div>
      </div>

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center space-y-4 pb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Powered by MM Design System
          </div>
          <p className="text-sm text-muted-foreground">
            All layouts automatically inherit your design system's fonts, colors, spacing, and dark mode support.
          </p>
        </div>
      </div>
    </div>
  )
}
