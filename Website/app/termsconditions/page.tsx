'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedStars from '@/components/AnimatedStars'

export default function TermsConditionsPage() {
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
                    <span className="text-foreground">Terms & </span>
                    <span className="gradient-text">Conditions</span>
                  </h1>
                  
                  <div className="text-sm text-muted mb-8 font-light">
                    Last updated: November 7, 2024
                  </div>

                  <div className="prose prose-invert max-w-none space-y-6 text-muted font-light leading-relaxed">
                    <p>
                      These Terms and Conditions (&quot;Terms&quot;) are a legal contract between you and Go Offer, Inc. By using our website and services, you agree to these Terms.
                    </p>

                    <div>
                      <h2 className="text-2xl font-light text-foreground mb-4 mt-8">Key Points:</h2>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Services are for personal or internal business use only</li>
                        <li>Various tariff plans available with different payment structures</li>
                        <li>3-day refund period for cancellations</li>
                        <li>Dispute resolution through arbitration</li>
                        <li>Content and materials are protected by copyright</li>
                      </ul>
                    </div>

                    <div className="mt-8 p-6 border border-border/50 rounded-lg bg-background/20 backdrop-blur-sm">
                      <h3 className="text-xl font-light text-foreground mb-4">Go Offer Terms of Use</h3>
                      <p className="text-sm text-muted mb-4">Last updated: Nov 13, 2025</p>
                      <p className="mb-4">
                        Welcome to Go Offer! These Terms & Conditions (&quot;Terms&quot;) explain the rules for using our website, platform, and career coaching services. Go Offer, Inc. is a corporation located at 400 Claremont Ave, Jersey City, NJ 07304. When we say &quot;Go Offer,&quot; &quot;we,&quot; or &quot;us,&quot; we mean Go Offer, Inc. and our affiliated companies.
                      </p>
                      <p className="mb-4">
                        These Terms apply to your use of the Go Offer website (www.go-offer.us), educational platform, and any related features, resources, or educational programs and courses we offer (collectively, the &quot;Go Offer Service&quot; or &quot;Service&quot;). By using our Service, you confirm that you have read, understood, and agree to these Terms. If you do not agree, please do not use the Go Offer Service.
                      </p>
                      <p>
                        Some parts of the Service may have additional rules or terms (&quot;Additional Terms&quot;). If so, we will provide those terms for you to review. By using those parts of the Service, you agree to follow the Additional Terms as well.
                      </p>
                    </div>

                    <div className="mt-8">
                      <h2 className="text-2xl font-light text-foreground mb-4">1. ABOUT THE GO OFFER SERVICE</h2>
                      <p className="mb-4">
                        Go Offer offers career coaching, resume development, interview preparation, and job search strategy programs (&quot;Programs&quot;). Our Programs are designed to help working professionals navigate their job search with more clarity, structure, and confidence. When you successfully complete a Program (as determined by Go Offer), you will have gained valuable skills and knowledge to support your career goals.
                      </p>
                      <p className="mb-4 font-medium text-foreground">Please note the following important points:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-foreground">Go Offer Programs Are Not Accredited:</strong> Go Offer is not an accredited school or institution. We do not grant formal degrees, academic credits, diplomas, or certificates that are transferable to accredited colleges or universities.</li>
                        <li><strong className="text-foreground">No Academic Credit:</strong> Completing a Program does not earn you academic credit that is recognized by other schools or institutions.</li>
                        <li><strong className="text-foreground">No Guarantee of Employment:</strong> Completing a Program may help you build your skills and knowledge, but we cannot promise or guarantee that you will get a job, receive job offers, achieve specific salary levels, or secure career advancement as a result.</li>
                        <li><strong className="text-foreground">3-Day Refund Period:</strong> Except as specifically provided in the &quot;3-Day Refund Period&quot; section, refunds and cancellations are not based on job search results, employment outcomes, salary offers, or any other career-related results.</li>
                      </ul>
                    </div>

                    <div className="mt-8">
                      <h2 className="text-2xl font-light text-foreground mb-4">2. YOUR RESPONSIBILITIES</h2>
                      <p className="mb-4">
                        To participate in a Go Offer Program, you must first register for an account. During registration, you will need to provide some personal information. Go Offer will use this information according to our Privacy Policy. It is your responsibility to make sure that all information you provide during registration, and any time after, is true, accurate, and complete.
                      </p>
                      <p className="mb-4">
                        As part of creating your account, you may be asked to choose a username and password. Go Offer can refuse or revoke your chosen username for any reason, including if it is offensive, impersonates someone else, is illegal, or could cause confusion. You are responsible for keeping your username and password confidential.
                      </p>
                      <p className="font-medium text-foreground">
                        YOU ARE ENTIRELY RESPONSIBLE FOR MAINTAINING THE CONFIDENTIALITY OF YOUR USERNAME AND PASSWORD AND FOR ANY AND ALL ACTIVITIES THAT ARE CONDUCTED THROUGH YOUR ACCOUNT.
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
