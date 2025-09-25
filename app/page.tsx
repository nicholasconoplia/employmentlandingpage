'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const slideIn = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

const slideAnimation = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const ResultsSlideshow = () => {
  const results = [
    { 
      image: '/reviews/alejandra.png', 
      alt: 'Employment Result - Career Growth',
      caption: 'Get people begging to work with you'
    },
    { 
      image: '/reviews/chris.png', 
      alt: 'Employment Result - Job Opportunities',
      caption: 'Get job opportunities flowing in'
    },
    { 
      image: '/reviews/kristina.png', 
      alt: 'Employment Result - Professional Network',
      caption: 'Have companies competing for your attention'
    },
    { 
      image: '/reviews/saxon.png', 
      alt: 'Employment Result - Network Growth',
      caption: 'Build high-value connections'
    },
    { 
      image: '/reviews/todd.png', 
      alt: 'Employment Result - Community',
      caption: 'Find like-minded individuals'
    },
    { 
      image: '/reviews/yinou.png', 
      alt: 'Employment Result - Career Success',
      caption: 'Get job offers without applying'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % results.length)
  }, [results.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + results.length) % results.length)
  }, [results.length])

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="relative w-full h-[450px] bg-white dark:bg-gray-900 rounded-lg">
      {/* Content Container */}
      <div className="relative w-full h-full overflow-hidden px-12">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            {/* Image Container */}
            <div className="relative w-full h-[320px]">
              <Image
                src={results[currentIndex].image}
                alt={results[currentIndex].alt}
                fill
                style={{ objectFit: 'contain' }}
                priority
                className="p-4"
              />
            </div>
            {/* Caption Container */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center mt-6 mb-12"
            >
              <p className="text-xl font-semibold text-accent">{results[currentIndex].caption}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons - Positioned outside content area */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-accent/90 hover:bg-accent text-white rounded-r-lg p-3 shadow-lg transition-all z-10"
        onClick={prevSlide}
        aria-label="Previous result"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-accent/90 hover:bg-accent text-white rounded-l-lg p-3 shadow-lg transition-all z-10"
        onClick={nextSlide}
        aria-label="Next result"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Dots Navigation - Positioned at bottom with padding */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10 bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-sm">
        {results.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all transform hover:scale-110 ${
              index === currentIndex 
                ? 'bg-accent scale-110' 
                : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to result ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// Export the component with the original name for backward compatibility
const ReviewSlideshow = ResultsSlideshow


export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setMobileOpen(false)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const track = (event: string, meta?: Record<string, unknown>) => {
    // Minimal tracking shim; respects existing dataLayer if present
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any
    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event, meta })
    } else {
      // Fallback to console for local preview
      // eslint-disable-next-line no-console
      console.log('[track]', event, meta || {})
    }
  }

  const handlePrimaryCta = (placement: string) => () => {
    track('primary_cta_click', { placement })
  }

  return (
    <main className="min-h-screen">
      {/* Sticky translucent header */}
      <header className="sticky top-0 z-40 border-b border-border-light dark:border-border-dark header-blur">
        <div className="container-max">
          <div className="flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
            <Link href="#top" className="flex items-center space-x-3">
              <Image src="/employment_logo.png" alt="Employment Logo" width={28} height={28} className="h-7 w-auto" />
              <span className="text-lg font-extrabold tracking-tight">Employment</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#problem" className="hover:opacity-80">Problem</a>
              <a href="#how" className="hover:opacity-80">How it works</a>
              <a href="#pricing" className="hover:opacity-80">Pricing</a>
              <a href="#faq" className="hover:opacity-80">FAQ</a>
              <Link href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
                <button onClick={handlePrimaryCta('header')} className="cta-button text-sm">
                  Start posting - 49¢
                </button>
              </Link>
            </nav>
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border-light"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
          {mobileOpen && (
            <div className="md:hidden px-4 pb-4">
              <div className="flex flex-col gap-2 rounded-xl border border-border-light bg-surface p-3 shadow-subtle">
                <a href="#problem" className="px-3 py-2 rounded-lg hover:bg-glass-overlay" onClick={() => setMobileOpen(false)}>Problem</a>
                <a href="#how" className="px-3 py-2 rounded-lg hover:bg-glass-overlay" onClick={() => setMobileOpen(false)}>How it works</a>
                <a href="#pricing" className="px-3 py-2 rounded-lg hover:bg-glass-overlay" onClick={() => setMobileOpen(false)}>Pricing</a>
                <a href="#faq" className="px-3 py-2 rounded-lg hover:bg-glass-overlay" onClick={() => setMobileOpen(false)}>FAQ</a>
                <Link href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer" className="mt-2">
                  <button onClick={handlePrimaryCta('header-mobile')} className="cta-button w-full">
                    Start posting - 49¢
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero: two-column with mockup */}
      <section id="top" className="section-padding bg-primary-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full opacity-30" style={{ background: 'radial-gradient(closest-side, #0B6EFF22, transparent)' }} />
        <motion.div 
          className="container-max"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1 
                className="text-hero font-extrabold tracking-tight mb-4"
                variants={fadeIn}
              >
                AI that builds your reputation while you build your career
              </motion.h1>
              <motion.p 
                className="text-lg text-muted mb-6 max-w-prose"
                variants={fadeIn}
              >
                Employment is an AI-powered LinkedIn engine. Get seen by the right people without overthinking a thing.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Link href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
                  <motion.button 
                    type="button" 
                    onClick={handlePrimaryCta('hero')} 
                    className="cta-button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start posting - 49¢
                  </motion.button>
                </Link>
              </motion.div>
              <motion.p 
                className="text-sm text-muted mt-4"
                variants={fadeIn}
              >
                No subscription. Pay only for credits.
              </motion.p>
              <motion.div 
                className="grid sm:grid-cols-3 gap-3 mt-8"
                variants={stagger}
              >
                <motion.div className="feature-item" variants={fadeIn}><div className="feature-marker" />
                  <p className="text-sm">Built for ambitious professionals, students, job seekers & founders</p></motion.div>
                <motion.div className="feature-item" variants={fadeIn}><div className="feature-marker" />
                  <p className="text-sm">Get seen by the right people - without overthinking a thing</p></motion.div>
                <motion.div className="feature-item" variants={fadeIn}><div className="feature-marker" />
                  <p className="text-sm">Look like a pro online - even if you're just getting started</p></motion.div>
              </motion.div>
            </div>
            <motion.div 
              className="relative"
              variants={slideIn}
            >
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-glass-overlay" />
              <div className="professional-card rounded-3xl overflow-hidden">
                <div className="bg-gradient-to-r from-accent to-accent-hover h-2 w-full" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Image src="/employment_logo.png" alt="Employment" width={28} height={28} className="rounded" />
                    <div>
                      <p className="font-semibold">Real Results</p>
                      <p className="text-sm text-muted">What Employment can do for you</p>
                    </div>
                  </div>
                  <ReviewSlideshow />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Demo Section */}
      <section className="section-padding bg-white border-b border-border-light">
        <motion.div 
          className="container-max"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="section-header"
              variants={fadeIn}
            >
              See How It Works
            </motion.h2>
            <motion.p 
              className="text-xl text-muted max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Watch Employment generate and schedule your LinkedIn posts
            </motion.p>
          </div>
          <motion.div 
            className="professional-card max-w-4xl mx-auto overflow-hidden"
            variants={fadeIn}
          >
            <div className="aspect-video bg-glass-overlay flex items-center justify-center">
              <div className="text-muted">Video Demo Coming Soon</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="section-padding bg-white dark:bg-gray-950">
        <motion.div 
          className="container-max"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="section-header"
              variants={fadeIn}
            >
              "You Want to Post on LinkedIn - But You Freeze Every Time"
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              variants={fadeIn}
            >
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="feature-marker"></div>
                  <p className="text-lg">"What if I sound cringe?"</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="feature-marker"></div>
                  <p className="text-lg">"What if my friends see it?"</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="feature-marker"></div>
                  <p className="text-lg">"What if nobody cares?"</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xl font-semibold">You stay quiet.</p>
                <p className="text-xl font-semibold text-red-600 dark:text-red-400">And that silence? It makes you invisible.</p>
              </div>
            </motion.div>

            <motion.div 
              className="professional-card"
              variants={slideIn}
            >
              <p className="text-lg mb-4 font-medium">Meanwhile:</p>
              <div className="space-y-3">
                <p className="text-base">Your classmates are landing internships</p>
                <p className="text-base">Your friends are getting interviews</p>
                <p className="text-base">Your feed is full of "New job at…" updates</p>
              </div>
              <div className="divider"></div>
              <p className="text-lg font-semibold">
                And you're still figuring it out - quietly.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Desire Section (trimmed into benefits intro) */}
      <section id="how" className="section-padding bg-primary-bg dark:bg-dark-bg">
        <motion.div 
          className="container-max"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="section-header"
              variants={fadeIn}
            >
              What You Actually Want
            </motion.h2>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={stagger}
          >
            <div className="space-y-4">
              <motion.div className="flex items-start space-x-3" variants={fadeIn}>
                <div className="feature-marker"></div>
                <p className="text-lg">A feed that screams: "They're going places."</p>
              </motion.div>
              <motion.div className="flex items-start space-x-3" variants={fadeIn}>
                <div className="feature-marker"></div>
                <p className="text-lg">To look sharp without needing to feel sharp every day</p>
              </motion.div>
              <motion.div className="flex items-start space-x-3" variants={fadeIn}>
                <div className="feature-marker"></div>
                <p className="text-lg">To attract recruiters, founders, collaborators - without chasing</p>
              </motion.div>
            </div>
            <div className="space-y-4">
              <motion.div className="flex items-start space-x-3" variants={fadeIn}>
                <div className="feature-marker"></div>
                <p className="text-lg">To be proud when someone Googles your name</p>
              </motion.div>
              <motion.div className="flex items-start space-x-3" variants={fadeIn}>
                <div className="feature-marker"></div>
                <p className="text-lg">To finally stop overthinking - and start posting</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <motion.div 
          className="container-max"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="section-header"
              variants={fadeIn}
            >
              That's What Employment Does
            </motion.h2>
            <motion.p 
              className="text-xl text-muted max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Employment is your AI-powered LinkedIn engine.
            </motion.p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={stagger}
          >
            <motion.div 
              className="professional-card text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <p className="text-lg">You just tell it what you want to talk about.</p>
            </motion.div>
            <motion.div 
              className="professional-card text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <p className="text-lg">It writes, formats, and schedules a post that sounds like you - but better.</p>
            </motion.div>
            <motion.div 
              className="professional-card text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <p className="text-lg">Too nervous to post? Let the AI post for you.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="professional-card text-center max-w-2xl mx-auto"
            variants={fadeIn}
          >
            <p className="text-lg italic mb-6 text-muted">
              "Oh that post? Nah, I use a tool. Saves me hours."
            </p>
            <motion.div 
              className="space-y-3 mb-8"
              variants={stagger}
            >
              <motion.div className="flex items-center justify-center space-x-3" variants={fadeIn}>
                <div className="feature-marker"></div>
                <p className="text-lg">Log in with LinkedIn</p>
              </motion.div>
              <motion.div className="flex items-center justify-center space-x-3" variants={fadeIn}>
                <div className="feature-marker"></div>
                <p className="text-lg">Buy post credits (no subscription)</p>
              </motion.div>
              <motion.div className="flex items-center justify-center space-x-3" variants={fadeIn}>
                <div className="feature-marker"></div>
                <p className="text-lg">Click once - Get seen</p>
              </motion.div>
            </motion.div>
            <Link href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
              <motion.button 
                onClick={handlePrimaryCta('how')} 
                className="cta-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Try Employment for 49c
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>


      {/* Features Section */}
      <section className="section-padding bg-white">
        <motion.div 
          className="container-max"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="section-header"
              variants={fadeIn}
            >
              What Employment Actually Does
            </motion.h2>
            <motion.p 
              className="text-xl text-muted"
              variants={fadeIn}
            >
              The Smartest Way to Look Sharp Online
            </motion.p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={stagger}
          >
            <motion.div 
              className="professional-card text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4">Content Generation</h3>
              <ul className="text-left space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>1-click post generation with trending topics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Professional, viral, or relatable tones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Personalized to your context and goals</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="professional-card text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4">Engagement Tools</h3>
              <ul className="text-left space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Story arcs and viral frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>CTAs, polls, and AI-generated graphics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Proven formats that drive interaction</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="professional-card text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4">Automation</h3>
              <ul className="text-left space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Drag-and-drop scheduling calendar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>3 posts/week autopilot mode</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>No copywriting needed - just click</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Social Proof Section */}
      <section className="section-padding bg-primary-bg dark:bg-dark-bg">
        <motion.div 
          className="container-max text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.h2 
            className="section-header"
            variants={fadeIn}
          >
            Join 1,000+ people quietly leveling up on LinkedIn - without being cringe
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-muted max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Your LinkedIn isn't a resume. It's a signal. And right now, you're not sending one.
          </motion.p>
          <motion.p 
            className="text-lg mb-8 text-muted"
            variants={fadeIn}
          >
            Let Employment handle your visibility, so you can handle your growth.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
              <motion.button 
                onClick={handlePrimaryCta('trust')} 
                className="cta-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start posting for 49c
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Value Stack Section */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <motion.div 
          className="container-max"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="section-header"
              variants={fadeIn}
            >
              If I Priced It Like Everyone Else…
            </motion.h2>
            <motion.p 
              className="text-xl text-muted mb-8"
              variants={fadeIn}
            >
              Most SaaS tools = $20–$99/mo. And you still have to write your own posts.
            </motion.p>
            <motion.p 
              className="text-lg text-muted"
              variants={fadeIn}
            >
              Here's what Employment actually gives you:
            </motion.p>
          </div>

          <motion.div 
            className="overflow-x-auto mb-12"
            variants={fadeIn}
          >
            <table className="w-full border-collapse bg-white dark:bg-gray-900 rounded-lg shadow-card overflow-hidden">
              <thead className="bg-accent text-white">
                <tr>
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-right font-semibold">Real Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1-Click Post Generator", "$5"],
                  ["Tone Selector (Viral, Thoughtful…)", "$3"],
                  ["Personalization Inputs", "$20"],
                  ["Trending Topic Research", "$15"],
                  ["Viral Framework Templates", "$7"],
                  ["CTA + Hook Generator", "$10"],
                  ["Scheduler + Autopilot", "$12"],
                  ["AI Image Generation", "$10"],
                  ["Calendar Queue", "$5"],
                  ["Lifetime Access, No Subscription", "49c"]
                ].map(([feature, value], index) => (
                  <motion.tr 
                    key={index} 
                    className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}
                    variants={fadeIn}
                  >
                    <td className="p-4">{feature}</td>
                    <td className="p-4 text-right font-semibold text-accent">{value}</td>
                  </motion.tr>
                ))}
              </tbody>
              <tfoot className="bg-accent text-white">
                <motion.tr variants={fadeIn}>
                  <td className="p-4 font-bold">Total Real Value:</td>
                  <td className="p-4 text-right font-bold text-xl">$136+</td>
                </motion.tr>
              </tfoot>
            </table>
          </motion.div>
        </motion.div>
      </section>

      {/* Buy Credits Section */}
      <section id="pricing" className="section-padding bg-primary-bg">
        <motion.div 
          className="container-max"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="section-header"
              variants={fadeIn}
            >
              Buy Credits
            </motion.h2>
            <motion.p 
              className="text-xl text-muted max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Purchase credits for your LinkedIn content generation - no subscriptions, no commitments
            </motion.p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={stagger}
          >
            <motion.div
              className="professional-card text-center"
              whileHover={{ scale: 1.02 }}
              variants={fadeIn}
            >
              <span className="text-sm font-medium text-accent">Great for trying out</span>
              <h3 className="text-2xl font-bold mt-2 mb-1">Small Pack</h3>
              <div className="text-4xl font-bold text-accent mb-2">$0.49</div>
                <p className="text-sm text-muted mb-6">one-time payment</p>
                <div className="text-lg font-bold mb-1">25 Posts</div>
                <p className="text-sm text-muted">Never expire - Use anytime</p>
                <p className="text-sm font-medium text-accent mt-2 mb-6">Just 2¢ per post</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>All features included</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>No monthly commitment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Posts never expire</span>
                </li>
              </ul>
              <Link href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
                <motion.button 
                  onClick={handlePrimaryCta('small-pack')} 
                  className="cta-button w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Buy 25 Posts
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              className="professional-card text-center ring-2 ring-accent"
              whileHover={{ scale: 1.02 }}
              variants={fadeIn}
            >
              <span className="text-sm font-medium text-accent">Most popular choice</span>
              <h3 className="text-2xl font-bold mt-2 mb-1">Medium Pack</h3>
              <div className="text-4xl font-bold text-accent mb-2">$1.49</div>
                <p className="text-sm text-muted mb-6">one-time payment</p>
                <div className="text-lg font-bold mb-1">75 Posts</div>
                <p className="text-sm text-muted">Never expire - Use anytime</p>
                <p className="text-sm font-medium text-accent mt-2 mb-6">Just 2¢ per post</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>All features included</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>No monthly commitment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Posts never expire</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Better value per post</span>
                </li>
              </ul>
              <Link href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
                <motion.button 
                  onClick={handlePrimaryCta('medium-pack')} 
                  className="cta-button w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Buy 75 Posts
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              className="professional-card text-center"
              whileHover={{ scale: 1.02 }}
              variants={fadeIn}
            >
              <span className="text-sm font-medium text-accent">Maximum savings</span>
              <h3 className="text-2xl font-bold mt-2 mb-1">Large Pack</h3>
              <div className="text-4xl font-bold text-accent mb-2">$2.49</div>
                <p className="text-sm text-muted mb-6">one-time payment</p>
                <div className="text-lg font-bold mb-1">200 Posts</div>
                <p className="text-sm text-muted">Never expire - Use anytime</p>
                <p className="text-sm font-medium text-accent mt-2 mb-6">Just 1.2¢ per post</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>All features included</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>No monthly commitment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Posts never expire</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Best value per post</span>
                </li>
              </ul>
              <Link href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
                <motion.button 
                  onClick={handlePrimaryCta('large-pack')} 
                  className="cta-button w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Buy 200 Posts
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          </motion.div>

          {/* Value Comparison Section */}
          <motion.div 
            className="mt-16 max-w-4xl mx-auto"
            variants={fadeIn}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Why Our Pricing Makes Sense</h3>
              <p className="text-lg text-muted">Compare the value you get with traditional options</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="professional-card">
                <h4 className="text-xl font-bold mb-4 text-accent">Traditional Options</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Hiring a Ghostwriter:</p>
                    <ul className="space-y-2 text-muted">
                      <li>• $0.20 - $2.00 per word</li>
                      <li>• $25 - $125 per post</li>
                      <li>• Manual scheduling required</li>
                      <li>• No AI optimization</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Working with a Copywriter:</p>
                    <ul className="space-y-2 text-muted">
                      <li>• $0.10 - $1.00 per word</li>
                      <li>• $25 - $125 per post</li>
                      <li>• Requires back-and-forth revisions</li>
                      <li>• Limited by writer's availability</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="professional-card bg-accent/5">
                <h4 className="text-xl font-bold mb-4 text-accent">Employment Advantage</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span><strong>Just 1-2¢ per post</strong> - Save over 99% compared to traditional options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span><strong>Instant Generation</strong> - No waiting for writers or revisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span><strong>AI-Powered Quality</strong> - Consistently high-quality posts using proven frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span><strong>Complete Automation</strong> - From writing to scheduling, everything is handled</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span><strong>No Ongoing Commitment</strong> - Buy credits only when you need them</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Prompt Moat Section (FAQ flavor) */}
      <section id="faq" className="section-padding bg-white dark:bg-gray-950">
        <motion.div 
          className="container-max"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="section-header"
              variants={fadeIn}
            >
              "Can't I Just Use ChatGPT?"
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-muted max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Here's why Employment is better than generic AI tools
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn}>
              <p className="text-lg mb-8 text-muted">Employment runs on professionally engineered prompts designed to trigger:</p>
              <motion.div 
                className="space-y-4"
                variants={stagger}
              >
                <motion.div className="flex items-start space-x-3" variants={fadeIn}>
                  <div className="feature-marker"></div>
                  <p className="text-lg">Scroll-stopping hooks</p>
                </motion.div>
                <motion.div className="flex items-start space-x-3" variants={fadeIn}>
                  <div className="feature-marker"></div>
                  <p className="text-lg">Psychological curiosity gaps</p>
                </motion.div>
                <motion.div className="flex items-start space-x-3" variants={fadeIn}>
                  <div className="feature-marker"></div>
                  <p className="text-lg">Viral formats (story arcs, transformations, hot takes)</p>
                </motion.div>
                <motion.div className="flex items-start space-x-3" variants={fadeIn}>
                  <div className="feature-marker"></div>
                  <p className="text-lg">Engagement loops that spark DMs, shares, and credibility</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="professional-card"
              variants={slideIn}
            >
              <h4 className="text-xl font-bold mb-4 text-accent">Real Examples:</h4>
              <motion.div 
                className="space-y-4 text-sm"
                variants={stagger}
              >
                <motion.div variants={fadeIn}>
                  <p className="text-accent font-semibold">Student post prompt:</p>
                  <p className="italic text-muted">"I used to think X. But after working on [project], I realized Y."</p>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <p className="text-accent font-semibold">Viral content prompt:</p>
                  <p className="italic text-muted">"I made a $10K mistake so you don't have to."</p>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <p className="text-accent font-semibold">LinkedIn pro prompt:</p>
                  <p className="italic text-muted">"Most professionals ruin their rep in one of 3 ways…"</p>
                </motion.div>
              </motion.div>
              <motion.p 
                className="text-sm mt-4 text-muted"
                variants={fadeIn}
              >
                These aren't just words. They're engineered frameworks that get you seen - consistently.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent via-accent to-accent-hover text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}></div>
        </div>
        
        <motion.div 
          className="container-max relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              variants={fadeIn}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text">
                This Isn't for Everyone.
              </h2>
              <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto font-medium">
                It's for people who know they're capable - and are finally ready to get seen for it.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-16"
              variants={stagger}
            >
              {/* Current State */}
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-8 text-red-200">You're either going to:</h3>
                <motion.div 
                  className="space-y-6"
                  variants={stagger}
                >
                  {[
                    "Keep ghosting your LinkedIn",
                    "Keep watching others get opportunities",
                    "Keep hoping someone notices"
                  ].map((text, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-4 text-lg opacity-90"
                      variants={fadeIn}
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-400/20 flex items-center justify-center">
                        <span className="text-red-200 text-xl">✗</span>
                      </span>
                      <span>{text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Future State */}
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-8 text-green-200">Or...</h3>
                <motion.div 
                  className="space-y-6"
                  variants={stagger}
                >
                  {[
                    "Start showing up",
                    "Start looking legit",
                    "Start building a reputation you can cash in on"
                  ].map((text, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-4 text-lg opacity-90"
                      variants={fadeIn}
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center">
                        <span className="text-green-200 text-xl">✓</span>
                      </span>
                      <span>{text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeIn}
            >
              <Link href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
                <motion.button 
                  onClick={handlePrimaryCta('final-cta')} 
                  className="group relative inline-flex items-center justify-center bg-white text-accent hover:text-accent-hover text-xl font-bold px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 transform translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-white via-white to-gray-100"></span>
                  <span className="relative flex items-center gap-3">
                    30 posts. 49¢. Start now
                    <svg className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Sticky CTA for Mobile */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 bg-accent text-white p-4 md:hidden z-50 shadow-lg"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer" className="block">
          <motion.button 
            onClick={handlePrimaryCta('sticky-mobile')} 
            className="w-full py-3 font-semibold text-center bg-transparent border border-white rounded hover:bg-white hover:text-accent transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Try Employment - 49c
          </motion.button>
        </Link>
      </motion.div>
      
      {/* Footer */}
      <motion.footer 
        className="bg-white dark:bg-gray-950 border-t border-border-light dark:border-border-dark"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.div 
          className="container-max py-10 px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-sm"
          variants={fadeIn}
        >
          <motion.div variants={fadeIn}>
            <div className="flex items-center gap-2 mb-3">
              <Image src="/employment_logo.png" alt="Employment" width={20} height={20} />
              <span className="font-semibold">Employment</span>
            </div>
            <p className="text-muted">AI-powered LinkedIn engine to help you get seen.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={fadeIn}
          >
            <div>
              <p className="font-semibold mb-2">Product</p>
              <ul className="space-y-1">
                <li><a href="#how" className="hover:opacity-80">How it works</a></li>
                <li><a href="#pricing" className="hover:opacity-80">Pricing</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Company</p>
              <ul className="space-y-1">
                <li><a href="#faq" className="hover:opacity-80">FAQ</a></li>
                <li><Link href="https://employment.vercel.app" target="_blank" className="hover:opacity-80">Get Started</Link></li>
              </ul>
            </div>
          </motion.div>
          <motion.div 
            className="md:text-right flex md:justify-end items-end"
            variants={fadeIn}
          >
            <p className="text-muted">© {new Date().getFullYear()} Employment. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </motion.footer>

      {/* Add padding to body to account for mobile sticky CTA */}
      <div className="h-20 md:hidden"></div>
    </main>
  )
} 
 