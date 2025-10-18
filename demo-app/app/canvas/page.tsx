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
import { CtaCenteredTwoButtons } from '@/components/sections/canvas/cta-centered-two-buttons'
import { CtaCenteredButtonLink } from '@/components/sections/canvas/cta-centered-button-link'
import { CtaHorizontalButtonRight } from '@/components/sections/canvas/cta-horizontal-button-right'
import { CtaCenteredBordered } from '@/components/sections/canvas/cta-centered-bordered'
import { CtaHorizontalDivider } from '@/components/sections/canvas/cta-horizontal-divider'
import { CtaSplitImageLeft } from '@/components/sections/canvas/cta-split-image-left'
import { CtaSplitImageRight } from '@/components/sections/canvas/cta-split-image-right'
import { QuoteSimpleLeft } from '@/components/sections/canvas/quote-simple-left'
import { QuoteSplitImageLeft } from '@/components/sections/canvas/quote-split-image-left'
import { QuoteCardOverlay } from '@/components/sections/canvas/quote-card-overlay'
import { QuoteSplitImageRight } from '@/components/sections/canvas/quote-split-image-right'
import { QuoteCenteredAvatar } from '@/components/sections/canvas/quote-centered-avatar'
import { SignupCenteredForm } from '@/components/sections/canvas/signup-centered-form'
import { SignupSplitImageLeft } from '@/components/sections/canvas/signup-split-image-left'
import { SignupHorizontalForm } from '@/components/sections/canvas/signup-horizontal-form'
import { SignupHorizontalWithImage } from '@/components/sections/canvas/signup-horizontal-with-image'
import { SignupHorizontalMinimal } from '@/components/sections/canvas/signup-horizontal-minimal'
import { SignupSplitEmailOnly } from '@/components/sections/canvas/signup-split-email-only'
import { ContactSplitSocialForm } from '@/components/sections/canvas/contact-split-social-form'
import { ContactSplitInfoCards } from '@/components/sections/canvas/contact-split-info-cards'
import { ContactFormInfoSide } from '@/components/sections/canvas/contact-form-info-side'
import { ContactCtaSocial } from '@/components/sections/canvas/contact-cta-social'
import { ContactMapSplit } from '@/components/sections/canvas/contact-map-split'
import { ContactInfoGridSignup } from '@/components/sections/canvas/contact-info-grid-signup'
import { FaqSplitAccordionInfo } from '@/components/sections/canvas/faq-split-accordion-info'
import { FaqTwoColumnGrouped } from '@/components/sections/canvas/faq-two-column-grouped'
import { FaqSplitTextCta } from '@/components/sections/canvas/faq-split-text-cta'
import { FaqGridCards } from '@/components/sections/canvas/faq-grid-cards'
import { Counter1 } from '@/components/sections/counter-1'
import { Counter2 } from '@/components/sections/counter-2'
import { Counter3 } from '@/components/sections/counter-3'
import { Counter4 } from '@/components/sections/counter-4'
import { Counter5 } from '@/components/sections/counter-5'
import { Counter6 } from '@/components/sections/counter-6'
import { Counter7 } from '@/components/sections/counter-7'
import { Counter8 } from '@/components/sections/counter-8'
import { Counter9 } from '@/components/sections/counter-9'
import { Counter10 } from '@/components/sections/counter-10'
import { Counter11 } from '@/components/sections/counter-11'
import { Counter12 } from '@/components/sections/counter-12'
import { PricingThreeColumnElevated } from '@/components/sections/canvas/pricing-three-column-elevated'
import { PricingThreeColumnBordered } from '@/components/sections/canvas/pricing-three-column-bordered'
import { PricingFourColumnDarkFeatured } from '@/components/sections/canvas/pricing-four-column-dark-featured'
import { PricingThreeColumnIcons } from '@/components/sections/canvas/pricing-three-column-icons'
import { PricingThreeColumnRibbon } from '@/components/sections/canvas/pricing-three-column-ribbon'
import { PricingFourColumnGrid } from '@/components/sections/canvas/pricing-four-column-grid'
import { PricingThreeColumnPasses } from '@/components/sections/canvas/pricing-three-column-passes'
import { PricingProductListHorizontal } from '@/components/sections/canvas/pricing-product-list-horizontal'
import { PricingProductListInline } from '@/components/sections/canvas/pricing-product-list-inline'
import { PricingSplitWithCta } from '@/components/sections/canvas/pricing-split-with-cta'
import { PricingSimpleList } from '@/components/sections/canvas/pricing-simple-list'
import { FooterLogoSocialCopyright } from '@/components/sections/canvas/footer-logo-social-copyright'
import { FooterCopyrightLogoLinks } from '@/components/sections/canvas/footer-copyright-logo-links'
import { FooterLogoCopyrightSocial } from '@/components/sections/canvas/footer-logo-copyright-social'
import { FooterSignupLinkColumns } from '@/components/sections/canvas/footer-signup-link-columns'
import { FooterContactSignup } from '@/components/sections/canvas/footer-contact-signup'
import { FooterLinksLogoSocial } from '@/components/sections/canvas/footer-links-logo-social'
import { FooterCtaLinks } from '@/components/sections/canvas/footer-cta-links'
import { FooterCtaPhoneCard } from '@/components/sections/canvas/footer-cta-phone-card'
import { FooterEmailSignup } from '@/components/sections/canvas/footer-email-signup'
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

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 34: cta-1 */}
          <div id="cta" className="scroll-mt-[5.5rem]">
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">cta-1</h2>
            </div>

            {/* The Component */}
            <CtaCenteredTwoButtons onPrimaryClick={handleButtonClick} onSecondaryClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 35: cta-2 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">cta-2</h2>
            </div>

            {/* The Component */}
            <CtaCenteredButtonLink onButtonClick={handleButtonClick} onLinkClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 36: cta-3 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">cta-3</h2>
            </div>

            {/* The Component */}
            <CtaHorizontalButtonRight onButtonClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 37: cta-4 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">cta-4</h2>
            </div>

            {/* The Component */}
            <CtaCenteredBordered onButtonClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 38: cta-5 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">cta-5</h2>
            </div>

            {/* The Component */}
            <CtaHorizontalDivider onButtonClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 39: cta-6 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">cta-6</h2>
            </div>

            {/* The Component */}
            <CtaSplitImageLeft onButtonClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 40: cta-7 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">cta-7</h2>
            </div>

            {/* The Component */}
            <CtaSplitImageRight onButtonClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 41: quote-1 */}
          <div id="quotes" className="scroll-mt-[5.5rem]">
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">quote-1</h2>
            </div>

            {/* The Component */}
            <QuoteSimpleLeft />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 42: quote-2 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">quote-2</h2>
            </div>

            {/* The Component */}
            <QuoteSplitImageLeft />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 43: quote-3 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">quote-3</h2>
            </div>

            {/* The Component */}
            <QuoteCardOverlay />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 44: quote-4 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">quote-4</h2>
            </div>

            {/* The Component */}
            <QuoteSplitImageRight />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 45: quote-5 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">quote-5</h2>
            </div>

            {/* The Component */}
            <QuoteCenteredAvatar />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 46: signup-1 */}
          <div id="signup" className="scroll-mt-[5.5rem]">
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">signup-1</h2>
            </div>

            {/* The Component */}
            <SignupCenteredForm />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 47: signup-2 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">signup-2</h2>
            </div>

            {/* The Component */}
            <SignupSplitImageLeft />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 48: signup-3 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">signup-3</h2>
            </div>

            {/* The Component */}
            <SignupHorizontalForm />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 49: signup-4 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">signup-4</h2>
            </div>

            {/* The Component */}
            <SignupHorizontalWithImage />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 50: signup-5 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">signup-5</h2>
            </div>

            {/* The Component */}
            <SignupHorizontalMinimal />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 51: signup-6 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">signup-6</h2>
            </div>

            {/* The Component */}
            <SignupSplitEmailOnly />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 52: contact-1 */}
          <div id="contact" className="scroll-mt-[5.5rem]">
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">contact-1</h2>
            </div>

            {/* The Component */}
            <ContactSplitSocialForm />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 53: contact-2 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">contact-2</h2>
            </div>

            {/* The Component */}
            <ContactSplitInfoCards />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 54: contact-3 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">contact-3</h2>
            </div>

            {/* The Component */}
            <ContactFormInfoSide />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 55: contact-4 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">contact-4</h2>
            </div>

            {/* The Component */}
            <ContactCtaSocial />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 56: contact-5 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">contact-5</h2>
            </div>

            {/* The Component */}
            <ContactMapSplit />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 57: contact-6 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">contact-6</h2>
            </div>

            {/* The Component */}
            <ContactInfoGridSignup />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 58: faq-1 */}
          <div id="faq" className="scroll-mt-[5.5rem]">
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">faq-1</h2>
            </div>

            {/* The Component */}
            <FaqSplitAccordionInfo />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 59: faq-2 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">faq-2</h2>
            </div>

            {/* The Component */}
            <FaqTwoColumnGrouped />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 60: faq-3 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">faq-3</h2>
            </div>

            {/* The Component */}
            <FaqSplitTextCta />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 61: faq-4 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">faq-4</h2>
            </div>

            {/* The Component */}
            <FaqGridCards />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 62: footer-1 */}
          <div id="footers" className="scroll-mt-[5.5rem]">
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">footer-1</h2>
            </div>

            {/* The Component */}
            <FooterLogoSocialCopyright />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 63: footer-2 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">footer-2</h2>
            </div>

            {/* The Component */}
            <FooterCopyrightLogoLinks />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 64: footer-3 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">footer-3</h2>
            </div>

            {/* The Component */}
            <FooterLogoCopyrightSocial />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 65: footer-4 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">footer-4</h2>
            </div>

            {/* The Component */}
            <FooterSignupLinkColumns />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 66: footer-5 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">footer-5</h2>
            </div>

            {/* The Component */}
            <FooterContactSignup />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 67: footer-6 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">footer-6</h2>
            </div>

            {/* The Component */}
            <FooterLinksLogoSocial />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 68: footer-7 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">footer-7</h2>
            </div>

            {/* The Component */}
            <FooterCtaLinks />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 69: footer-8 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">footer-8</h2>
            </div>

            {/* The Component */}
            <FooterCtaPhoneCard />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 70: footer-9 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">footer-9</h2>
            </div>

            {/* The Component */}
            <FooterEmailSignup />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 71: counter-1 */}
          <div id="number" className="scroll-mt-[5.5rem]">
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">counter-1</h2>
            </div>

            {/* The Component */}
            <Counter1 />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 72: counter-2 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">counter-2</h2>
            </div>

            {/* The Component */}
            <Counter2 />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 73: counter-3 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">counter-3</h2>
            </div>

            {/* The Component */}
            <Counter3 onButtonClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 74: counter-4 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">counter-4</h2>
            </div>

            {/* The Component */}
            <Counter4 />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 75: counter-5 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">counter-5</h2>
            </div>

            {/* The Component */}
            <Counter5 />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 76: counter-6 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">counter-6</h2>
            </div>

            {/* The Component */}
            <Counter6 />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 77: counter-7 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">counter-7</h2>
            </div>

            {/* The Component */}
            <Counter7 />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 78: counter-8 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">counter-8</h2>
            </div>

            {/* The Component */}
            <Counter8 />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 79: counter-9 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">counter-9</h2>
            </div>

            {/* The Component */}
            <Counter9 />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 80: counter-10 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">counter-10</h2>
            </div>

            {/* The Component */}
            <Counter10 />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 81: counter-11 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">counter-11</h2>
            </div>

            {/* The Component */}
            <Counter11 />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 82: counter-12 */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">counter-12</h2>
            </div>

            {/* The Component */}
            <Counter12 />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 83: pricing-1-light */}
          <div id="pricing" className="scroll-mt-[5.5rem]">
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">pricing-1-light</h2>
            </div>

            {/* The Component */}
            <PricingThreeColumnElevated onButtonClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 84: pricing-2-light */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">pricing-2-light</h2>
            </div>

            {/* The Component */}
            <PricingThreeColumnBordered onButtonClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 85: pricing-3-light */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">pricing-3-light</h2>
            </div>

            {/* The Component */}
            <PricingFourColumnDarkFeatured onButtonClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 86: pricing-4-light */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">pricing-4-light</h2>
            </div>

            {/* The Component */}
            <PricingThreeColumnIcons onButtonClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 87: pricing-5-light */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">pricing-5-light</h2>
            </div>

            {/* The Component */}
            <PricingThreeColumnRibbon
              onButtonClick={handleButtonClick}
              onLearnMoreClick={handleButtonClick}
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 88: pricing-6-light */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">pricing-6-light</h2>
            </div>

            {/* The Component */}
            <PricingFourColumnGrid
              onButtonClick={handleButtonClick}
              onLearnMoreClick={handleButtonClick}
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 89: pricing-7-light */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">pricing-7-light</h2>
            </div>

            {/* The Component */}
            <PricingThreeColumnPasses onButtonClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 90: pricing-8-light */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">pricing-8-light</h2>
            </div>

            {/* The Component */}
            <PricingProductListHorizontal onButtonClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 91: pricing-9-light */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">pricing-9-light</h2>
            </div>

            {/* The Component */}
            <PricingProductListInline onButtonClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 92: pricing-10-light */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">pricing-10-light</h2>
            </div>

            {/* The Component */}
            <PricingSplitWithCta onButtonClick={handleButtonClick} />
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Demo 93: pricing-11-light */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading mb-2">pricing-11-light</h2>
            </div>

            {/* The Component */}
            <PricingSimpleList />
          </div>

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
