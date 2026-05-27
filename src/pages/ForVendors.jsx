import { useState } from 'react'
import { Check, CreditCard, Globe, MessageSquare, Smartphone, Star, TrendingUp } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import GoldButton from '../components/GoldButton'

const benefits = [
  { icon: TrendingUp, title: 'More Visibility', desc: 'Get discovered by thousands of couples actively planning their weddings across India.' },
  { icon: MessageSquare, title: 'Direct Leads', desc: 'Receive direct enquiries from interested couples with no middlemen and no lead commissions.' },
  { icon: CreditCard, title: 'Secure Payments', desc: 'Get paid securely through the Razorpay-powered payment system with clear settlement records.' },
  { icon: Star, title: 'Build Reputation', desc: 'Collect reviews and build your brand. High-rated vendors get featured prominently.' },
  { icon: Smartphone, title: 'Easy Management', desc: 'Manage bookings, calendars, and client conversations from one vendor dashboard.' },
  { icon: Globe, title: 'Pan-India Reach', desc: 'Reach couples from every city in India and expand beyond your local market.' },
]

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    period: 'forever',
    features: ['Free to list', 'Basic vendor profile', 'Up to 10 portfolio images', 'Limited leads', 'Standard support'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '999',
    period: '/month',
    features: ['Featured listing', 'Unlimited portfolio images', 'Unlimited leads', 'Priority support', 'Analytics dashboard'],
    cta: 'Start Premium',
    highlighted: true,
  },
  {
    name: 'Featured Vendor',
    price: '2,499',
    period: '/month',
    features: ['Top of search results', 'Dedicated account manager', 'Premium verified badge', 'Priority lead matching', 'Monthly performance reports'],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

const vendorTestimonials = [
  {
    quote: 'OneDestiny doubled my bookings within three months. The leads are high quality and the platform is easy to use.',
    name: 'Rajesh Kumar',
    category: 'Wedding Photographer',
    location: 'Hyderabad',
  },
  {
    quote: 'As a makeup artist, visibility is everything. OneDestiny helped me reach clients I never could have reached on my own.',
    name: 'Meena Sharma',
    category: 'Bridal Makeup Artist',
    location: 'Mumbai',
  },
  {
    quote: 'The analytics dashboard helps me understand what couples are looking for. My business has grown 3x since joining.',
    name: 'Amit Patel',
    category: 'Wedding Decorator',
    location: 'Bangalore',
  },
]

const categoryOptions = [
  'Photography',
  'Videography',
  'Makeup Artists',
  'Catering',
  'Venues',
  'Decoration',
  'Pandits',
  'Mehendi Artists',
  'DJ & Music',
  'Wedding Cars',
  'Other',
]

export default function ForVendors() {
  const [formData, setFormData] = useState({
    businessName: '',
    category: '',
    city: '',
    whatsapp: '',
    email: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.businessName.trim()) newErrors.businessName = 'Required'
    if (!formData.category) newErrors.category = 'Required'
    if (!formData.city.trim()) newErrors.city = 'Required'
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'Required'
    if (!formData.email.trim()) newErrors.email = 'Required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSubmitted(true)
    window.setTimeout(() => setSubmitted(false), 5000)
    setFormData({ businessName: '', category: '', city: '', whatsapp: '', email: '' })
  }

  return (
    <>
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
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

        <div className="container relative z-10 pb-12 pt-32 text-center sm:pb-16 lg:pb-20">
          <AnimatedSection>
            <span className="mb-4 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              For Vendors
            </span>
            <h1 className="mb-6 font-cormorant text-[44px] font-light leading-[1.1] md:text-[56px] lg:text-[64px]">
              Grow Your Wedding Business
              <br />
              <em className="text-gold">with OneDestiny</em>
            </h1>
            <p className="mx-auto mb-10 max-w-xl font-dmsans text-lg text-muted">
              Join 500+ vendors reaching thousands of couples across India. More visibility, more bookings, more growth.
            </p>
            <GoldButton variant="filled" size="lg" href="#register">
              Register as Vendor
            </GoldButton>
          </AnimatedSection>
        </div>
      </section>

      <section className="angled-section bg-surface py-16 lg:py-24">
        <div className="container">
          <AnimatedSection className="mb-16 text-center">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              Why Join Us
            </span>
            <h2 className="font-cormorant text-4xl font-light md:text-5xl">
              Benefits of Listing on OneDestiny
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 100}>
                <div className="group rounded-lg border border-border-custom bg-surface-2 p-6 transition-all hover:border-gold/30">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-maroon/20 transition-colors group-hover:bg-maroon/30">
                    <b.icon className="text-gold" size={24} />
                  </div>
                  <h3 className="mb-2 font-cormorant text-xl">{b.title}</h3>
                  <p className="font-dmsans text-sm leading-relaxed text-muted">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="angled-section bg-bg py-16 lg:py-24">
        <div className="container">
          <AnimatedSection className="mb-16 text-center">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              Pricing
            </span>
            <h2 className="font-cormorant text-4xl font-light md:text-5xl">
              Choose Your Plan
            </h2>
            <hr className="gold-rule-wide mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 150}>
                <div className={`rounded-lg p-8 ${plan.highlighted ? 'pricing-highlight bg-surface-2 pt-10' : 'border border-border-custom bg-surface-2'}`}>
                  <h3 className="mb-4 font-cinzel text-sm uppercase tracking-[0.1em] text-gold">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="font-cormorant text-5xl font-light">
                      {plan.price === 'Free' ? 'Free' : <>&#8377;{plan.price}</>}
                    </span>
                    <span className="ml-1 font-dmsans text-sm text-muted">{plan.period}</span>
                  </div>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 font-dmsans text-sm text-muted">
                        <Check size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <GoldButton variant={plan.highlighted ? 'filled' : 'outlined'} size="md" className="w-full">
                    {plan.cta}
                  </GoldButton>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="angled-section scroll-mt-20 bg-surface py-16 lg:py-24">
        <div className="container max-w-[640px]">
          <AnimatedSection className="mb-12 text-center">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              Get Started
            </span>
            <h2 className="font-cormorant text-4xl font-light md:text-5xl">
              Register Your Business Today
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label className="form-label" htmlFor="businessName">Business Name</label>
                <input
                  id="businessName"
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Enter your business name"
                  className={`form-input ${errors.businessName ? 'error' : ''}`}
                />
              </div>

              <div>
                <label className="form-label" htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`form-input ${errors.category ? 'error' : ''}`}
                >
                  <option value="">Select your category</option>
                  {categoryOptions.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label" htmlFor="city">City / Location</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Hyderabad, Mumbai"
                  className={`form-input ${errors.city ? 'error' : ''}`}
                />
              </div>

              <div>
                <label className="form-label" htmlFor="whatsapp">WhatsApp Number</label>
                <input
                  id="whatsapp"
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className={`form-input ${errors.whatsapp ? 'error' : ''}`}
                />
              </div>

              <div>
                <label className="form-label" htmlFor="vendorEmail">Email Address</label>
                <input
                  id="vendorEmail"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                />
              </div>

              <GoldButton variant="filled" size="lg" type="submit" className="w-full">
                Submit Registration
              </GoldButton>

              <p className="mt-4 text-center font-dmsans text-xs text-muted">
                Our team will contact you within 24 hours to complete your onboarding.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </section>

      <section className="angled-section bg-bg py-16 lg:py-24">
        <div className="container">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="font-cormorant text-4xl font-light italic md:text-5xl">
              Vendor Success Stories
            </h2>
            <hr className="gold-rule-wide mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vendorTestimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 150} className={i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}>
                <div className="relative rounded-lg border border-border-custom bg-gradient-to-br from-surface-2 to-surface p-8">
                  <span className="absolute left-6 top-4 font-cormorant text-6xl text-gold/20">&ldquo;</span>
                  <p className="mb-6 mt-6 font-cormorant text-lg italic leading-relaxed text-text-primary/90">
                    {t.quote}
                  </p>
                  <div>
                    <p className="font-dmsans text-sm font-medium text-text-primary">{t.name}</p>
                    <p className="font-dmsans text-xs text-gold">{t.category}</p>
                    <p className="font-dmsans text-xs text-muted">{t.location}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {submitted && (
        <div className="toast" role="status">
          &#127882; Registration submitted successfully. We'll contact you within 24 hours.
        </div>
      )}
    </>
  )
}
