import {
  BadgeCheck,
  Building2,
  Camera,
  Car,
  CheckCircle2,
  Flower2,
  MapPin,
  Music,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  UtensilsCrossed,
  Video,
  WalletCards,
  WandSparkles,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import GoldButton from '../components/GoldButton'

const categories = [
  { icon: Camera, title: 'Photography' },
  { icon: Sparkles, title: 'Makeup Artists' },
  { icon: UtensilsCrossed, title: 'Catering' },
  { icon: Building2, title: 'Venues' },
  { icon: Flower2, title: 'Decoration' },
  { icon: Sun, title: 'Pandits' },
  { icon: Palette, title: 'Mehendi Artists' },
  { icon: Music, title: 'DJ & Music' },
  { icon: Video, title: 'Cinematography' },
  { icon: Car, title: 'Wedding Cars' },
]

const appScreens = [
  {
    label: 'Home Screen',
    title: 'Start With Your City',
    copy: 'Browse categories, featured vendors, and local wedding services from one elegant dashboard.',
  },
  {
    label: 'Vendor Profile',
    title: 'Review Every Detail',
    copy: 'See portfolios, ratings, pricing signals, availability, and contact options inside the app.',
  },
  {
    label: 'Booking Screen',
    title: 'Book With Clarity',
    copy: 'Confirm dates, share requirements, and complete secure booking steps with fewer calls.',
  },
  {
    label: 'Reviews',
    title: 'Trust Real Feedback',
    copy: 'Read couple reviews and vendor ratings before shortlisting your wedding team.',
  },
]

const capabilities = [
  { icon: Search, title: 'Search by Need', copy: 'Filter vendors by category, city, style, and budget inside the app.' },
  { icon: Star, title: 'Compare Profiles', copy: 'Shortlist vendors, compare ratings, and check portfolio quality side by side.' },
  { icon: WalletCards, title: 'Book Securely', copy: 'Use a guided booking flow with payment support and clear vendor terms.' },
  { icon: ShieldCheck, title: 'Verified Choices', copy: 'Verified badges and reviews help couples make confident decisions.' },
]

const futureFeatures = [
  'Real wedding galleries',
  'AI-based vendor recommendations',
  'Budget calculator',
  'Location-based vendor discovery',
  'Verified badges for trusted vendors',
]

function PhoneScreen({ title, label, copy, index }) {
  return (
    <div className="h-full rounded-lg border border-border-custom bg-gradient-to-br from-surface-2 to-surface p-5">
      <div className="mx-auto mb-6 h-[340px] max-w-[180px] rounded-[28px] border border-gold/30 bg-bg p-3 shadow-2xl shadow-maroon/20">
        <div className="mx-auto mb-4 h-4 w-16 rounded-b-xl bg-black" />
        <div className="mb-3 flex items-center justify-between">
          <div className="h-2 w-16 rounded bg-gold/30" />
          <div className="h-5 w-5 rounded-full border border-gold/30" />
        </div>
        <div className="mb-3 rounded-xl border border-border-custom bg-surface-2 p-3">
          <div className="mb-2 h-20 rounded-lg bg-gradient-to-br from-maroon/40 to-gold/10" />
          <div className="mb-2 h-1.5 w-3/4 rounded bg-gold/30" />
          <div className="h-1.5 w-1/2 rounded bg-muted/25" />
        </div>
        {Array.from({ length: 3 }, (_, item) => (
          <div key={item} className="mb-2 flex items-center gap-2 rounded-lg border border-border-custom bg-surface/60 p-2">
            <div className={`h-8 w-8 rounded-md ${item === index % 3 ? 'bg-gold/25' : 'bg-maroon/20'}`} />
            <div className="flex-1">
              <div className="mb-1 h-1.5 w-2/3 rounded bg-gold/20" />
              <div className="h-1 w-1/2 rounded bg-muted/20" />
            </div>
          </div>
        ))}
      </div>
      <span className="mb-2 block font-cinzel text-[10px] uppercase tracking-[0.16em] text-gold">{label}</span>
      <h3 className="mb-2 font-cormorant text-2xl">{title}</h3>
      <p className="font-dmsans text-sm leading-relaxed text-muted">{copy}</p>
    </div>
  )
}

export default function AppPreview() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-bg">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 25% 45%, rgba(139,26,47,0.14) 0%, transparent 58%), radial-gradient(ellipse at 78% 35%, rgba(201,168,76,0.06) 0%, transparent 52%)',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />

        <div className="container relative z-10 grid grid-cols-1 items-center gap-12 pb-16 pt-32 lg:grid-cols-2 lg:pb-24">
          <AnimatedSection>
            <span className="mb-4 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              App Showcase
            </span>
            <h1 className="mb-6 font-cormorant text-[44px] font-light leading-[1.1] md:text-[56px] lg:text-[64px]">
              Plan Your Wedding
              <br />
              <em className="text-gold">Inside the App</em>
            </h1>
            <p className="mb-10 max-w-xl font-dmsans text-lg leading-relaxed text-muted">
              This website introduces OneDestiny. The actual vendor discovery, profile comparison, booking,
              reviews, and payments happen inside the mobile app.
            </p>
            <div className="flex flex-wrap gap-4">
              <GoldButton variant="filled" size="lg" href="/#app-download">
                Download App
              </GoldButton>
              <GoldButton variant="outlined" size="lg" to="/how-it-works">
                How It Works
              </GoldButton>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={160} className="hidden lg:block">
            <div className="relative mx-auto h-[520px] max-w-[420px]">
              <div className="absolute left-4 top-12 h-[420px] w-[210px] rotate-[-6deg] rounded-[34px] border border-gold/25 bg-surface-2 p-4 opacity-80 shadow-2xl shadow-maroon/20">
                <div className="mb-5 h-5 rounded-b-xl bg-black" />
                <div className="mb-4 h-28 rounded-2xl bg-gradient-to-br from-maroon/50 to-gold/10" />
                <div className="space-y-3">
                  <div className="h-12 rounded-xl border border-border-custom bg-surface" />
                  <div className="h-12 rounded-xl border border-border-custom bg-surface" />
                  <div className="h-12 rounded-xl border border-border-custom bg-surface" />
                </div>
              </div>
              <div className="absolute right-0 top-0 h-[500px] w-[240px] rotate-[4deg] rounded-[38px] border border-gold/40 bg-bg p-4 shadow-2xl shadow-maroon/30">
                <div className="mx-auto mb-6 h-6 w-24 rounded-b-2xl bg-black" />
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                    <WandSparkles size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="mb-2 h-2 w-24 rounded bg-gold/30" />
                    <div className="h-1.5 w-16 rounded bg-muted/25" />
                  </div>
                </div>
                <div className="mb-4 rounded-2xl border border-gold/15 bg-gradient-to-br from-maroon/45 to-surface-2 p-4">
                  <div className="mb-3 h-24 rounded-xl bg-gold/10" />
                  <div className="mb-2 h-1.5 w-4/5 rounded bg-gold/30" />
                  <div className="h-1.5 w-1/2 rounded bg-muted/25" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {categories.slice(0, 6).map((item) => (
                    <div key={item.title} className="rounded-xl border border-border-custom bg-surface p-3 text-center">
                      <item.icon size={18} className="mx-auto mb-2 text-gold" />
                      <div className="h-1 rounded bg-muted/20" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="angled-section bg-surface py-16 lg:py-24">
        <div className="container">
          <AnimatedSection className="mb-14 text-center">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              Vendor Categories
            </span>
            <h2 className="font-cormorant text-4xl font-light md:text-5xl">
              Explore These Inside OneDestiny
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-dmsans text-muted">
              The website gives a preview. Full vendor profiles, contact options, pricing, and booking tools stay inside the app.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 60}>
                <div className="category-card rounded-lg p-5 text-center">
                  <item.icon size={28} className="mx-auto mb-4 text-gold" />
                  <p className="font-cinzel text-[10px] uppercase tracking-[0.14em] text-gold">{item.title}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="angled-section bg-bg py-16 lg:py-24">
        <div className="container">
          <AnimatedSection className="mb-14 text-center">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              App Screens
            </span>
            <h2 className="font-cormorant text-4xl font-light md:text-5xl">
              Built for Real Wedding Planning
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {appScreens.map((screen, index) => (
              <AnimatedSection key={screen.label} delay={index * 120}>
                <PhoneScreen {...screen} index={index} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="angled-section bg-surface py-16 lg:py-24">
        <div className="container">
          <AnimatedSection className="mb-14 text-center">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              Why Choose OneDestiny
            </span>
            <h2 className="font-cormorant text-4xl font-light md:text-5xl">
              A Better Way to Build Your Wedding Team
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div className="feature-card">
                  <item.icon size={28} className="mb-5 text-gold" />
                  <h3 className="mb-3 font-cormorant text-2xl">{item.title}</h3>
                  <p className="font-dmsans text-sm leading-relaxed text-muted">{item.copy}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="angled-section bg-bg py-16 lg:py-24">
        <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <AnimatedSection>
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              Future Features
            </span>
            <h2 className="mb-6 font-cormorant text-4xl font-light md:text-5xl">
              More Planning Tools Are Coming
            </h2>
            <p className="mb-8 font-dmsans leading-relaxed text-muted">
              OneDestiny can grow into a complete Indian wedding planning companion with recommendations,
              budgeting, galleries, and location-based discovery.
            </p>
            <GoldButton variant="filled" size="lg" href="/#app-download">
              Download App
            </GoldButton>
          </AnimatedSection>

          <AnimatedSection delay={180}>
            <div className="rounded-lg border border-border-custom bg-surface-2 p-8">
              <div className="mb-6 flex items-center gap-3">
                <BadgeCheck size={24} className="text-gold" />
                <h3 className="font-cormorant text-3xl">Planned App Roadmap</h3>
              </div>
              <ul className="space-y-4">
                {futureFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 font-dmsans text-sm text-muted">
                    <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-gold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-lg border border-gold/20 bg-bg/70 p-4">
                <div className="mb-2 flex items-center gap-2 font-cinzel text-[10px] uppercase tracking-[0.14em] text-gold">
                  <MapPin size={14} />
                  Local First
                </div>
                <p className="font-dmsans text-sm text-muted">
                  Starting from Karimnagar and Telangana, built to support wedding services across India.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
