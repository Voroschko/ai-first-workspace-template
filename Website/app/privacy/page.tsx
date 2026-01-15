'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedStars from '@/components/AnimatedStars'

export default function PrivacyPage() {
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
                    <span className="text-foreground">Privacy </span>
                    <span className="gradient-text">Policy</span>
                  </h1>
                  
                  <div className="text-sm text-muted mb-8 font-light">
                    Last updated: December 26, 2025
                  </div>

                  <div className="prose prose-invert max-w-none space-y-6 text-muted font-light leading-relaxed">
                    <p>
                      Go Offer, Inc. (&quot;Go Offer&quot;, &quot;we&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect information when you use our website www.go-offer.us.
                    </p>

                    <div>
                      <h2 className="text-2xl font-light text-foreground mb-4 mt-8">Information We Collect:</h2>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-foreground">Personal information:</strong> name, email, phone number</li>
                        <li><strong className="text-foreground">Professional information:</strong> current role, education, career goals</li>
                        <li><strong className="text-foreground">Technical information:</strong> IP address, browser data, cookies</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light text-foreground mb-4 mt-8">How We Use Information:</h2>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Providing our services and support</li>
                        <li>Personalizing content and recommendations</li>
                        <li>Communicating with clients</li>
                        <li>Improving our platform and services</li>
                      </ul>
                    </div>

                    <div className="mt-8 p-6 border border-border/50 rounded-lg bg-background/20 backdrop-blur-sm">
                      <p className="text-foreground font-light">
                        We do not sell, rent, or trade your personal information. No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                      </p>
                    </div>

                    <div className="mt-8">
                      <h2 className="text-2xl font-light text-foreground mb-4">Contact us:</h2>
                      <p>
                        <a href="mailto:kirill@go-offer.us" className="text-accent hover:text-purple-400 transition-colors">
                          kirill@go-offer.us
                        </a>
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
