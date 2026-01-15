'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedStars from '@/components/AnimatedStars'

export default function CompanyDetailsPage() {
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
                    <span className="text-foreground">Company </span>
                    <span className="gradient-text">Details</span>
                  </h1>

                  <div className="prose prose-invert max-w-none space-y-6 text-muted font-light leading-relaxed">
                    <div className="mt-8 p-6 border border-border/50 rounded-lg bg-background/20 backdrop-blur-sm">
                      <h2 className="text-2xl font-light text-foreground mb-6">About Go Offer</h2>
                      
                      <p className="mb-6">
                        Go Offer, Inc. is a career development company specializing in helping professionals secure job opportunities in the United States. We provide educational resources, mentorship, and strategic guidance for job seekers looking to advance their careers.
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-light text-foreground mb-3">Services:</h3>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Career consultation and strategy development</li>
                            <li>Resume and interview preparation</li>
                            <li>Mentorship programs</li>
                            <li>Job search optimization</li>
                            <li>Salary negotiation coaching</li>
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-border/30">
                          <p className="mb-2">
                            <span className="text-foreground font-medium">Founded:</span> 2023
                          </p>
                          <p className="mb-2">
                            <span className="text-foreground font-medium">Headquarters:</span> Jersey City, United States
                          </p>
                          <p>
                            <span className="text-foreground font-medium">Legal Entity:</span> Go Offer, Inc.
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
