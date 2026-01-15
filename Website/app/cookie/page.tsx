'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedStars from '@/components/AnimatedStars'

export default function CookiePage() {
  return (
    <>
      <main className="relative">
        <AnimatedStars />
        <div className="relative z-10">
          <Header />
          <Breadcrumbs />
          
          <section className="py-16 md:py-20 border-t border-border relative">
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
              <ScrollReveal animation="fade-in">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8 tracking-tight">
                    <span className="text-foreground">Cookie </span>
                    <span className="gradient-text">Policy</span>
                  </h1>

                  <div className="prose prose-invert max-w-none space-y-6 text-muted font-light leading-relaxed">
                    <p>
                      We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By continuing to use our site, you consent to our use of cookies.
                    </p>

                    <div>
                      <h2 className="text-2xl font-light text-foreground mb-4 mt-8">Types of cookies we use:</h2>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-foreground">Essential cookies</strong> for site functionality</li>
                        <li><strong className="text-foreground">Analytics cookies</strong> to understand user behavior</li>
                        <li><strong className="text-foreground">Marketing cookies</strong> for personalized advertising</li>
                      </ul>
                    </div>

                    <div className="mt-8 p-6 border border-border/50 rounded-lg bg-background/20 backdrop-blur-sm">
                      <p className="text-foreground font-light">
                        You can manage cookie preferences in your browser settings.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
