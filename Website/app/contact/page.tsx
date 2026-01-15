'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedStars from '@/components/AnimatedStars'

export default function ContactPage() {
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
                    <span className="text-foreground">Contact </span>
                    <span className="gradient-text">Information</span>
                  </h1>

                  <div className="prose prose-invert max-w-none space-y-6 text-muted font-light leading-relaxed">
                    <div className="mt-8 p-6 border border-border/50 rounded-lg bg-background/20 backdrop-blur-sm">
                      <h2 className="text-2xl font-light text-foreground mb-6">Contact Us</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-light text-foreground mb-2">Go Offer, Inc.</h3>
                          <p className="text-muted">
                            400 Claremont Ave<br />
                            Jersey City, NJ, 07304<br />
                            United States
                          </p>
                        </div>

                        <div className="pt-4 border-t border-border/30">
                          <p className="mb-2">
                            <span className="text-foreground font-medium">Email:</span>{' '}
                            <a href="mailto:kirill@go-offer.us" className="text-accent hover:text-purple-400 transition-colors">
                              kirill@go-offer.us
                            </a>
                          </p>
                          <p>
                            <span className="text-foreground font-medium">Website:</span>{' '}
                            <a href="https://www.go-offer.us" className="text-accent hover:text-purple-400 transition-colors">
                              www.go-offer.us
                            </a>
                          </p>
                        </div>

                        <div className="pt-4 border-t border-border/30">
                          <h4 className="text-lg font-light text-foreground mb-2">Customer Support Hours:</h4>
                          <p className="text-muted">
                            Monday - Friday: 9:00 AM - 6:00 PM EST
                          </p>
                        </div>
                      </div>
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
