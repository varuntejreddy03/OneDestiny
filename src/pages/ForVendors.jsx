import { ArrowRight, CalendarCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import GoldButton from '../components/GoldButton'

export default function ForVendors() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-bg">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 40% 50%, rgba(139,26,47,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(201,168,76,0.06) 0%, transparent 50%)',
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />

      <div className="container relative z-10 py-32 text-center">
        <AnimatedSection>
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-surface-2">
            <CalendarCheck size={36} className="text-gold" />
          </div>
          <span className="mb-4 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
            For Vendors
          </span>
          <h1 className="mb-6 font-cormorant text-[44px] font-light leading-[1.1] md:text-[56px] lg:text-[64px]">
            Coming <em className="text-gold">Soon</em>
          </h1>
          <p className="mx-auto mb-6 max-w-xl font-dmsans text-lg text-muted">
            We're building something amazing for vendors. OneDestiny will connect you with thousands of customers looking for premium event management services.
          </p>
          <div className="mx-auto mb-10 inline-flex items-center gap-2 rounded-lg border border-gold/30 bg-surface-2/60 px-5 py-3 font-cinzel text-sm uppercase tracking-[0.1em] text-gold">
            <CalendarCheck size={18} />
            Launching 27 July 2026
          </div>
          <p className="mx-auto mb-10 max-w-md font-dmsans text-sm leading-relaxed text-muted">
            Want to be among the first vendors on our platform? Reach out to us and we'll notify you as soon as registrations open.
          </p>
          <GoldButton variant="outlined" size="lg" to="/contact">
            Contact Us <ArrowRight size={14} />
          </GoldButton>
        </AnimatedSection>
      </div>
    </section>
  )
}
