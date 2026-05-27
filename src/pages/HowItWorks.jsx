import { useState } from 'react'
import {
  CalendarCheck,
  ChevronDown,
  Download,
  GitCompare,
  Headphones,
  Layers,
  Lock,
  MessageCircle,
  Search,
  ShieldCheck,
  Star,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import GoldButton from '../components/GoldButton'

const timelineSteps = [
  {
    num: 1,
    title: 'Download the App',
    desc: 'Get OneDestiny from the App Store or Google Play. Create your profile in under a minute with your phone number or email.',
    icon: Download,
  },
  {
    num: 2,
    title: 'Search & Discover',
    desc: 'Filter vendors by category, city, budget, and ratings. Smart search helps you find exactly what you need for your celebration.',
    icon: Search,
  },
  {
    num: 3,
    title: 'Compare Vendors',
    desc: 'Read genuine reviews from real couples, compare portfolios, and review pricing side by side before you decide.',
    icon: GitCompare,
  },
  {
    num: 4,
    title: 'Book & Connect',
    desc: 'Contact vendors directly through in-app chat or book instantly with secure payments powered by Razorpay.',
    icon: CalendarCheck,
  },
  {
    num: 5,
    title: 'Review & Rate',
    desc: 'After your event, share your experience and help other couples find their perfect vendors.',
    icon: Star,
  },
]

const features = [
  { icon: ShieldCheck, title: 'Verified Vendors', desc: 'Every vendor goes through a strict verification process before being listed on the platform.' },
  { icon: Lock, title: 'Secure Payments', desc: 'All transactions are protected with bank-grade encryption and powered by Razorpay.' },
  { icon: MessageCircle, title: 'Direct Contact', desc: 'Chat directly with vendors to discuss requirements, negotiate pricing, and finalize details.' },
  { icon: Star, title: 'Reviews & Ratings', desc: 'Genuine reviews from verified couples who have used the vendor services.' },
  { icon: Layers, title: 'Multiple Categories', desc: 'Ten vendor categories cover every aspect of your wedding from photography to transport.' },
  { icon: Headphones, title: 'Fast Support', desc: 'A dedicated support team is available to help you with questions before and after booking.' },
]

const faqData = [
  {
    q: 'How do I book a vendor through OneDestiny?',
    a: 'Download the app, browse vendors by category or city, view their profile and portfolio, then choose Book Now or Contact to get started. You can pay securely through the in-app payment system powered by Razorpay.',
  },
  {
    q: 'Are the vendors verified?',
    a: 'Yes. Every vendor on OneDestiny goes through a verification process covering identity, business details, portfolio authenticity, and customer feedback before listing.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'OneDestiny supports UPI, credit and debit cards, net banking, and popular wallets through Razorpay. You receive confirmation after every successful payment.',
  },
  {
    q: 'Can I contact vendors directly?',
    a: 'Yes. You can use in-app chat to message vendors directly, discuss requirements, ask for custom quotes, and finalize details.',
  },
  {
    q: 'What if I need to cancel a booking?',
    a: 'Cancellation terms are shown before booking. You can request cancellation through the app, and the support team can help with eligible refunds based on the vendor policy.',
  },
]

function PhoneMockupSmall() {
  return (
    <div className="relative mx-auto h-[400px] w-[200px] overflow-hidden rounded-[28px] border-2 border-border-custom bg-gradient-to-b from-surface-2 to-surface">
      <div className="absolute left-1/2 top-0 h-[18px] w-[80px] -translate-x-1/2 rounded-b-xl bg-bg" />
      <div className="space-y-3 p-4 pt-8">
        <div className="mx-auto mb-4 h-0.5 w-10 rounded bg-gold/30" />
        <div className="rounded-lg border border-border-custom bg-surface p-3">
          <div className="mb-2 h-12 w-full rounded bg-maroon/15" />
          <div className="mb-1 h-1.5 w-3/4 rounded bg-gold/20" />
          <div className="h-1.5 w-1/2 rounded bg-muted/20" />
        </div>
        <div className="rounded-lg border border-border-custom bg-surface p-3">
          <div className="mb-2 h-12 w-full rounded bg-gold/10" />
          <div className="mb-1 h-1.5 w-2/3 rounded bg-gold/20" />
          <div className="h-1.5 w-1/3 rounded bg-muted/20" />
        </div>
        <div className="rounded-lg border border-border-custom bg-surface p-3">
          <div className="flex gap-2">
            <div className="h-8 w-8 flex-shrink-0 rounded-full bg-maroon/20" />
            <div className="flex-1">
              <div className="mb-1 h-1.5 w-2/3 rounded bg-gold/20" />
              <div className="h-1.5 w-1/3 rounded bg-muted/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="mb-3 overflow-hidden rounded-lg border border-border-custom bg-surface-2">
      <button onClick={onClick} className="flex w-full cursor-pointer items-center justify-between p-5 text-left">
        <span className="pr-4 font-cormorant text-lg text-text-primary">{question}</span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`accordion-content px-5 ${isOpen ? 'open' : ''}`}>
        <p className="pb-2 font-dmsans text-sm leading-relaxed text-muted">{answer}</p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-bg">
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(139,26,47,0.1) 0%, transparent 60%)' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />

        <div className="container relative z-10 pb-12 pt-32 text-center sm:pb-16 lg:pb-20">
          <AnimatedSection>
            <span className="mb-4 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              The Process
            </span>
            <h1 className="mb-6 font-cormorant text-[44px] font-light leading-[1.1] md:text-[56px] lg:text-[64px]">
              Booking Your Dream Team
              <br />
              <em className="text-gold">Has Never Been Easier</em>
            </h1>
            <p className="mx-auto max-w-xl font-dmsans text-lg text-muted">
              From download to booking, the simple five-step process makes wedding planning focused and manageable.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="angled-section bg-surface py-16 lg:py-24 relative overflow-hidden">
        <div className="container relative">
          <div className="timeline-line hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {timelineSteps.map((step, i) => {
              const isLeft = i % 2 === 0

              return (
                <div key={step.num} className="relative">
                  <div className="absolute left-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-gold bg-surface-2 md:flex">
                    <span className="font-cormorant text-lg text-gold">{step.num}</span>
                  </div>

                  <div className={`items-center gap-12 md:flex ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                    <AnimatedSection
                      className={`md:w-1/2 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}
                      direction={isLeft ? 'left' : 'right'}
                      delay={i * 100}
                    >
                      <div className="mb-4 flex items-center gap-3 md:hidden">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gold bg-surface-2">
                          <span className="font-cormorant text-base text-gold">{step.num}</span>
                        </div>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
                      </div>

                      <step.icon className={`mb-4 text-gold ${isLeft ? 'md:ml-auto' : ''}`} size={32} />
                      <h3 className="mb-3 font-cormorant text-3xl">{step.title}</h3>
                      <p className="font-dmsans text-sm leading-relaxed text-muted">{step.desc}</p>
                    </AnimatedSection>

                    <AnimatedSection
                      className="mt-8 md:mt-0 md:w-1/2"
                      direction={isLeft ? 'right' : 'left'}
                      delay={i * 100 + 200}
                    >
                      <PhoneMockupSmall />
                    </AnimatedSection>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="angled-section bg-bg py-16 lg:py-24">
        <div className="container">
          <AnimatedSection className="mb-16 text-center">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              Platform Features
            </span>
            <h2 className="font-cormorant text-4xl font-light md:text-5xl">
              Everything You Need
            </h2>
            <hr className="gold-rule-wide mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 100}>
                <div className="group rounded-lg border border-border-custom bg-surface-2 p-6 transition-colors hover:border-gold/30">
                  <f.icon className="mb-4 text-gold transition-transform group-hover:scale-110" size={28} />
                  <h3 className="mb-2 font-cormorant text-xl">{f.title}</h3>
                  <p className="font-dmsans text-sm leading-relaxed text-muted">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="angled-section bg-surface py-16 lg:py-24">
        <div className="container max-w-[800px]">
          <AnimatedSection className="mb-12 text-center">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              Common Questions
            </span>
            <h2 className="font-cormorant text-4xl font-light md:text-5xl">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            {faqData.map((item, i) => (
              <AccordionItem
                key={item.q}
                question={item.q}
                answer={item.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </AnimatedSection>

          <AnimatedSection className="mt-12 text-center" delay={400}>
            <p className="mb-4 font-dmsans text-sm text-muted">Still have questions?</p>
            <GoldButton variant="outlined" size="md" to="/contact">
              Contact Us
            </GoldButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
