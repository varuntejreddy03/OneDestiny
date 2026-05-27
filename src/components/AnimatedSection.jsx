import { useEffect, useRef } from 'react'

export default function AnimatedSection({ children, delay = 0, className = '', direction = 'up' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        el.style.animationDelay = `${delay}ms`
        if (direction === 'left') {
          el.classList.add('animate-slide-left')
        } else if (direction === 'right') {
          el.classList.add('animate-slide-right')
        } else {
          el.classList.add('animate-in')
        }
        observer.unobserve(el)
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, direction])

  return (
    <div ref={ref} className={`animate-hidden ${className}`}>
      {children}
    </div>
  )
}
