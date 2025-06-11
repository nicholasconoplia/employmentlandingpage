'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DarkModeToggle from './components/DarkModeToggle'

export default function Home() {
  return (
    <main className="min-h-screen">
      <DarkModeToggle />
      
      {/* Header */}
      <header className="bg-primary-bg dark:bg-dark-bg border-b border-border-light dark:border-border-dark">
        <div className="container-max">
          <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3">
              <Image 
                src="/employment_logo.png" 
                alt="Employment Logo" 
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-primary-text dark:text-dark-text">
                Employment
              </span>
            </div>
            <Link href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="cta-button text-sm px-6 py-2">
                Try it for 49 cents
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding bg-primary-bg dark:bg-dark-bg">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-hero font-bold text-primary-text dark:text-dark-text mb-6">
              Employment
            </h1>
            <p className="text-xl sm:text-2xl text-muted mb-4 leading-relaxed">
              The AI-Powered LinkedIn Engine That Builds Your Reputation While You Build Your Career
            </p>
            <p className="text-lg text-muted mb-8 italic">
              "You're not lazy. You're leveraged."
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
              <div className="feature-item">
                <div className="feature-marker"></div>
                <p className="text-sm sm:text-base">Built for ambitious professionals, students, job seekers & founders</p>
              </div>
              <div className="feature-item">
                <div className="feature-marker"></div>
                <p className="text-sm sm:text-base">Get seen by the right people — without overthinking a thing</p>
              </div>
              <div className="feature-item">
                <div className="feature-marker"></div>
                <p className="text-sm sm:text-base">Look like a pro online — even if you're just getting started</p>
              </div>
            </div>

            <Link href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="cta-button text-lg">
                Try it for 49 cents
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-header">
              "You Want to Post on LinkedIn — But You Freeze Every Time"
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
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
            </div>

            <div className="professional-card">
              <p className="text-lg mb-4 font-medium">Meanwhile:</p>
              <div className="space-y-3">
                <p className="text-base">Your classmates are landing internships</p>
                <p className="text-base">Your friends are getting interviews</p>
                <p className="text-base">Your feed is full of "New job at…" updates</p>
              </div>
              <div className="divider"></div>
              <p className="text-lg font-semibold">
                And you're still figuring it out — quietly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Desire Section */}
      <section className="section-padding bg-primary-bg dark:bg-dark-bg">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-header">
              What You Actually Want
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="feature-marker"></div>
                <p className="text-lg">A feed that screams: "They're going places."</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="feature-marker"></div>
                <p className="text-lg">To look sharp without needing to feel sharp every day</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="feature-marker"></div>
                <p className="text-lg">To attract recruiters, founders, collaborators — without chasing</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="feature-marker"></div>
                <p className="text-lg">To be proud when someone Googles your name</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="feature-marker"></div>
                <p className="text-lg">To finally stop overthinking — and start posting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-header">
              That's What Employment Does
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Employment is your AI-powered LinkedIn engine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="professional-card text-center">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <p className="text-lg">You just tell it what you want to talk about.</p>
            </div>
            <div className="professional-card text-center">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <p className="text-lg">It writes, formats, and schedules a post that sounds like you — but better.</p>
            </div>
            <div className="professional-card text-center">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <p className="text-lg">Too nervous to post? Let the AI post for you.</p>
            </div>
          </div>

          <div className="professional-card text-center max-w-2xl mx-auto">
            <p className="text-lg italic mb-6 text-muted">
              "Oh that post? Nah, I use a tool. Saves me hours."
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <div className="feature-marker"></div>
                <p className="text-lg">Log in with LinkedIn</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="feature-marker"></div>
                <p className="text-lg">Buy post credits (no subscription)</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="feature-marker"></div>
                <p className="text-lg">Click once → Get seen</p>
              </div>
            </div>
            <Link href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="cta-button">
                Try Employment for 49c
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="section-padding bg-primary-bg dark:bg-dark-bg">
        <div className="container-max text-center">
          <h2 className="section-header">
            It's Not About Posting.
          </h2>
          <h3 className="text-2xl font-bold mb-8 text-accent">
            It's About Becoming Someone Who Gets Noticed.
          </h3>
          
          <p className="text-xl mb-8 text-muted max-w-3xl mx-auto">
            You're not buying a tool. You're buying the version of yourself people remember.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="professional-card text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <p className="text-lg font-semibold">Someone who shows up</p>
            </div>
            <div className="professional-card text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <p className="text-lg font-semibold">Someone who looks like a pro</p>
            </div>
            <div className="professional-card text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <p className="text-lg font-semibold">Someone who's in motion — not stuck</p>
            </div>
          </div>

          <p className="text-xl font-bold mb-4">This is digital status.</p>
          <p className="text-lg text-muted">And you can have it in seconds.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-header">
              What Employment Actually Does
            </h2>
            <p className="text-xl text-muted">The Smartest Way to Look Sharp Online</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "1-click post generation (trending or custom ideas)",
              "Choose tone: Professional, Viral, Relatable, Thoughtful",
              "Add personal context (uni, job hunt, industry, side hustle)",
              "Viral frameworks: story arcs, bold takes, open loops",
              "CTAs, polls, images, even AI-generated graphics",
              "Drag-and-drop calendar + auto-post scheduling",
              "3 posts/week autopilot mode",
              "No copywriting required. No burnout. Just clicks."
            ].map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-marker"></div>
                <p className="text-sm md:text-base">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-padding bg-primary-bg dark:bg-dark-bg">
        <div className="container-max text-center">
          <h2 className="section-header">
            Join 1,000+ people quietly leveling up on LinkedIn — without being cringe
          </h2>
          <p className="text-xl mb-8 text-muted max-w-3xl mx-auto">
            Your LinkedIn isn't a resume. It's a signal. And right now, you're not sending one.
          </p>
          <p className="text-lg mb-8 text-muted">
            Let Employment handle your visibility, so you can handle your growth.
          </p>
          <Link href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
            <button className="cta-button">
              Start posting for 49c
            </button>
          </Link>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-header">
              If I Priced It Like Everyone Else…
            </h2>
            <p className="text-xl text-muted mb-8">
              Most SaaS tools = $20–$99/mo. And you still have to write your own posts.
            </p>
            <p className="text-lg text-muted">Here's what Employment actually gives you:</p>
          </div>

          <div className="overflow-x-auto mb-12">
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
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}>
                    <td className="p-4">{feature}</td>
                    <td className="p-4 text-right font-semibold text-accent">{value}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-accent text-white">
                <tr>
                  <td className="p-4 font-bold">Total Real Value:</td>
                  <td className="p-4 text-right font-bold text-xl">$136+</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-primary-bg dark:bg-dark-bg">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-header">
              Try It. Own It. No Subscription Ever.
            </h2>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Starter Packs</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { name: "Starter", credits: 30, price: "$49c", cost: "~$0.016/post" },
                { name: "Pro", credits: 100, price: "$1.49", cost: "~$0.015/post", popular: true },
                { name: "Business", credits: 300, price: "$2.49", cost: "~$0.008/post" }
              ].map((plan, index) => (
                <div
                  key={plan.name}
                  className={`professional-card text-center hover:shadow-lg transition-shadow cursor-pointer ${
                    plan.popular ? 'ring-2 ring-accent' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-accent text-white text-sm px-3 py-1 rounded-full inline-block mb-2">
                      Most Popular
                    </div>
                  )}
                  <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                  <p className="text-3xl font-bold text-accent mb-2">{plan.price}</p>
                  <p className="text-muted mb-2">{plan.credits} credits</p>
                  <p className="text-sm text-muted">{plan.cost}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">One-Time Credit Packs (Buy when you need more)</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { name: "Small", credits: 25, price: "$0.99" },
                { name: "Medium", credits: 75, price: "$2.49" },
                { name: "Large", credits: 200, price: "$5.99" }
              ].map((pack, index) => (
                <div key={pack.name} className="professional-card text-center">
                  <h4 className="text-lg font-bold mb-2">{pack.name}</h4>
                  <p className="text-2xl font-bold text-accent mb-2">{pack.price}</p>
                  <p className="text-muted">{pack.credits} credits</p>
                </div>
              ))}
            </div>
          </div>

          <div className="professional-card text-center max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <div className="feature-marker"></div>
                <p className="text-lg">No monthly fees</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="feature-marker"></div>
                <p className="text-lg">Just log in with LinkedIn once</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="feature-marker"></div>
                <p className="text-lg">Add card to unlock credits</p>
              </div>
            </div>
            <p className="text-lg mb-8 text-muted">Use when you want — no commitment</p>
            <Link href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="cta-button">
                Try Employment for 49c
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Prompt Moat Section */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-header">
              "Can't I Just Use ChatGPT?"
            </h2>
            <p className="text-xl mb-8 text-muted max-w-3xl mx-auto">
              You could. And you could try doing surgery after watching a YouTube video, too.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-8 text-muted">Employment runs on professionally engineered prompts designed to trigger:</p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="feature-marker"></div>
                  <p className="text-lg">Scroll-stopping hooks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="feature-marker"></div>
                  <p className="text-lg">Psychological curiosity gaps</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="feature-marker"></div>
                  <p className="text-lg">Viral formats (story arcs, transformations, hot takes)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="feature-marker"></div>
                  <p className="text-lg">Engagement loops that spark DMs, shares, and credibility</p>
                </div>
              </div>
            </div>

            <div className="professional-card">
              <h4 className="text-xl font-bold mb-4 text-accent">Real Examples:</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-accent font-semibold">Student post prompt:</p>
                  <p className="italic text-muted">"I used to think X. But after working on [project], I realized Y."</p>
                </div>
                <div>
                  <p className="text-accent font-semibold">Viral content prompt:</p>
                  <p className="italic text-muted">"I made a $10K mistake so you don't have to."</p>
                </div>
                <div>
                  <p className="text-accent font-semibold">LinkedIn pro prompt:</p>
                  <p className="italic text-muted">"Most professionals ruin their rep in one of 3 ways…"</p>
                </div>
              </div>
              <p className="text-sm mt-4 text-muted">
                These aren't just words. They're engineered frameworks that get you seen — consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-accent text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            This Isn't for Everyone.
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            It's for people who know they're capable — and are finally ready to get seen for it.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-6 text-red-300">You're either going to:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-red-300">✗</span>
                  <span>Keep ghosting your LinkedIn</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-300">✗</span>
                  <span>Keep watching others get opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-300">✗</span>
                  <span>Keep hoping someone notices</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-green-300">Or…</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-green-300">✓</span>
                  <span>Start showing up</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-300">✓</span>
                  <span>Start looking legit</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-300">✓</span>
                  <span>Start building a reputation you can cash in on</span>
                </div>
              </div>
            </div>
          </div>

          <Link href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-accent text-xl font-semibold px-12 py-4 rounded-md hover:bg-gray-100 transition-colors duration-200">
              30 posts. 49c. Start now
            </button>
          </Link>
        </div>
      </section>

      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-accent text-white p-4 md:hidden z-50 shadow-lg">
        <Link href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer" className="block">
          <button className="w-full py-3 font-semibold text-center bg-transparent border border-white rounded hover:bg-white hover:text-accent transition-colors duration-200">
            Try Employment - 49c
          </button>
        </Link>
      </div>
      
      {/* Add padding to body to account for mobile sticky CTA */}
      <div className="h-20 md:hidden"></div>
    </main>
  )
} 