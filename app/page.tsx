'use client'

import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-accent dark:bg-dark-accent text-primary-bg dark:text-dark-bg">
        <div className="section-padding relative z-10">
          <div className="container-max text-center">
            <h1 className="text-hero font-extrabold mb-4 leading-tight">
              Employment
            </h1>
            <p className="text-xl md:text-2xl mb-2 font-medium">
              The AI-Powered LinkedIn Engine That Builds Your Reputation While You Build Your Career
            </p>
            <p className="text-lg mb-8 opacity-90 italic">
              "You're not lazy. You're leveraged."
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🧠</span>
                <div>
                  <p className="font-semibold">Built for ambitious professionals, students, job seekers & founders</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-semibold">Get seen by the right people — without overthinking a thing</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">💼</span>
                <div>
                  <p className="font-semibold">Look like a pro online — even if you're just getting started</p>
                </div>
              </div>
            </div>

            <a href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="cta-button text-xl">
                Try it for $0.49 →
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-section font-bold mb-6 text-primary-text dark:text-dark-text">
              "You Want to Post on LinkedIn — But You Freeze Every Time"
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4 mb-8">
                <p className="pain-bullet text-lg">"What if I sound cringe?"</p>
                <p className="pain-bullet text-lg">"What if my friends see it?"</p>
                <p className="pain-bullet text-lg">"What if nobody cares?"</p>
              </div>
              <p className="text-xl font-semibold text-primary-text dark:text-dark-text mb-4">You stay quiet.</p>
              <p className="text-xl font-semibold text-red-600 dark:text-red-400">And that silence? It makes you invisible.</p>
            </div>

            <div>
              <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">Meanwhile:</p>
              <div className="space-y-3">
                <p className="text-lg">Your classmates are landing internships</p>
                <p className="text-lg">Your friends are getting interviews</p>
                <p className="text-lg">Your feed is full of "New job at…" updates</p>
              </div>
              <p className="text-xl font-semibold mt-6 text-primary-text dark:text-dark-text">
                And you're still figuring it out — quietly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Desire Section */}
      <section className="section-padding bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-section font-bold mb-6 text-gradient">
              What You Actually Want
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="desire-bullet text-lg">A feed that screams: "They're going places."</p>
              <p className="desire-bullet text-lg">To look sharp without needing to feel sharp every day</p>
              <p className="desire-bullet text-lg">To attract recruiters, founders, collaborators — without chasing</p>
            </div>
            <div className="space-y-4">
              <p className="desire-bullet text-lg">To be proud when someone Googles your name</p>
              <p className="desire-bullet text-lg">To finally stop overthinking — and start posting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-section font-bold mb-6 text-primary-text dark:text-dark-text">
              That's What Employment Does
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Employment is your AI-powered LinkedIn engine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent dark:bg-dark-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <p className="text-lg">You just tell it what you want to talk about.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent dark:bg-dark-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <p className="text-lg">It writes, formats, and schedules a post that sounds like you — but better.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent dark:bg-dark-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <p className="text-lg">Too nervous to post? Let the AI post for you.</p>
            </div>
          </div>

          <div className="text-center glass-card p-8">
            <p className="text-lg italic mb-6">
              "Oh that post? Nah, I use a tool. Saves me hours."
            </p>
            <div className="space-y-3 mb-8">
              <p className="feature-bullet text-lg">Log in with LinkedIn</p>
              <p className="feature-bullet text-lg">Buy post credits (no subscription)</p>
              <p className="feature-bullet text-lg">Click once → Get seen</p>
            </div>
            <a href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="cta-button">
                Try Employment for $0.49 →
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="section-padding bg-accent dark:bg-dark-accent text-primary-bg dark:text-dark-bg">
        <div className="container-max text-center">
          <h2 className="text-section font-bold mb-6">
            It's Not About Posting.
          </h2>
          <h3 className="text-2xl font-bold mb-8 text-primary-bg dark:text-dark-bg opacity-90">
            It's About Becoming Someone Who Gets Noticed.
          </h3>
          
          <p className="text-xl mb-8 opacity-90">
            You're not buying a tool. You're buying the version of yourself people remember.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <span className="text-4xl block mb-4">👥</span>
              <p className="text-lg font-semibold">Someone who shows up</p>
            </div>
            <div className="text-center">
              <span className="text-4xl block mb-4">⭐</span>
              <p className="text-lg font-semibold">Someone who looks like a pro</p>
            </div>
            <div className="text-center">
              <span className="text-4xl block mb-4">📈</span>
              <p className="text-lg font-semibold">Someone who's in motion — not stuck</p>
            </div>
          </div>

          <p className="text-xl font-bold mb-4">This is digital status.</p>
          <p className="text-lg opacity-90">And you can have it in seconds.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-section font-bold mb-6 text-primary-text dark:text-dark-text">
              What Employment Actually Does
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">The Smartest Way to Look Sharp Online</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <p className="feature-bullet text-sm md:text-base">1-click post generation (trending or custom ideas)</p>
            </div>
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <p className="feature-bullet text-sm md:text-base">Choose tone: Professional, Viral, Relatable, Thoughtful</p>
            </div>
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <p className="feature-bullet text-sm md:text-base">Add personal context (uni, job hunt, industry, side hustle)</p>
            </div>
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <p className="feature-bullet text-sm md:text-base">Viral frameworks: story arcs, bold takes, open loops</p>
            </div>
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <p className="feature-bullet text-sm md:text-base">CTAs, polls, images, even AI-generated graphics</p>
            </div>
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <p className="feature-bullet text-sm md:text-base">Drag-and-drop calendar + auto-post scheduling</p>
            </div>
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <p className="feature-bullet text-sm md:text-base">3 posts/week autopilot mode</p>
            </div>
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <p className="feature-bullet text-sm md:text-base">No copywriting required. No burnout. Just clicks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-padding bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container-max text-center">
          <h2 className="text-section font-bold mb-6 text-primary-text dark:text-dark-text">
            Join 1,000+ people quietly leveling up on LinkedIn — without being cringe
          </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">
            Your LinkedIn isn't a resume. It's a signal. And right now, you're not sending one.
          </p>
          <p className="text-lg mb-8">
            Let Employment handle your visibility, so you can handle your growth.
          </p>
          <a href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
            <button className="cta-button">
              Start posting for $0.49 →
            </button>
          </a>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-section font-bold mb-6 text-primary-text dark:text-dark-text">
              If I Priced It Like Everyone Else…
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Most SaaS tools = $20–$99/mo. And you still have to write your own posts.
            </p>
            <p className="text-lg">Here's what Employment actually gives you:</p>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-accent dark:bg-dark-accent text-primary-bg dark:text-dark-bg">
                <tr>
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-right">Real Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="p-4 text-primary-text dark:text-dark-text">1-Click Post Generator</td>
                  <td className="p-4 text-right font-semibold text-accent dark:text-dark-accent">$5</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="p-4 text-primary-text dark:text-dark-text">Tone Selector (Viral, Thoughtful…)</td>
                  <td className="p-4 text-right font-semibold text-accent dark:text-dark-accent">$3</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="p-4 text-primary-text dark:text-dark-text">Personalization Inputs</td>
                  <td className="p-4 text-right font-semibold text-accent dark:text-dark-accent">$20</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="p-4 text-primary-text dark:text-dark-text">Trending Topic Research</td>
                  <td className="p-4 text-right font-semibold text-accent dark:text-dark-accent">$15</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="p-4 text-primary-text dark:text-dark-text">Viral Framework Templates</td>
                  <td className="p-4 text-right font-semibold text-accent dark:text-dark-accent">$7</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="p-4 text-primary-text dark:text-dark-text">CTA + Hook Generator</td>
                  <td className="p-4 text-right font-semibold text-accent dark:text-dark-accent">$10</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="p-4 text-primary-text dark:text-dark-text">Scheduler + Autopilot</td>
                  <td className="p-4 text-right font-semibold text-accent dark:text-dark-accent">$12</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="p-4 text-primary-text dark:text-dark-text">AI Image Generation</td>
                  <td className="p-4 text-right font-semibold text-accent dark:text-dark-accent">$10</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="p-4 text-primary-text dark:text-dark-text">Calendar Queue</td>
                  <td className="p-4 text-right font-semibold text-accent dark:text-dark-accent">$5</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="p-4 text-primary-text dark:text-dark-text">Lifetime Access, No Subscription</td>
                  <td className="p-4 text-right font-semibold text-accent dark:text-dark-accent">$49</td>
                </tr>
              </tbody>
              <tfoot className="bg-accent dark:bg-dark-accent text-primary-bg dark:text-dark-bg">
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
      <section className="section-padding bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-section font-bold mb-6 text-primary-text dark:text-dark-text">
              Try It. Own It. No Subscription Ever.
            </h2>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-primary-text dark:text-dark-text">⚡ Starter Packs</h3>
            <div className="grid md:grid-cols-3 gap-6">
                              <div className="glass-card p-6 text-center cursor-pointer transition-all hover:scale-105">
                  <h4 className="text-xl font-bold mb-2 text-primary-text dark:text-dark-text">Starter</h4>
                  <p className="text-3xl font-bold text-accent dark:text-dark-accent mb-2">$0.49</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">30 credits</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">~$0.016/post</p>
                </div>
                <div className="glass-card p-6 text-center cursor-pointer transition-all hover:scale-105 ring-2 ring-accent dark:ring-dark-accent">
                  <h4 className="text-xl font-bold mb-2 text-primary-text dark:text-dark-text">Pro</h4>
                  <p className="text-3xl font-bold text-accent dark:text-dark-accent mb-2">$1.49</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">100 credits</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">~$0.015/post</p>
                </div>
                <div className="glass-card p-6 text-center cursor-pointer transition-all hover:scale-105">
                  <h4 className="text-xl font-bold mb-2 text-primary-text dark:text-dark-text">Business</h4>
                  <p className="text-3xl font-bold text-accent dark:text-dark-accent mb-2">$2.49</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">300 credits</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">~$0.008/post</p>
                </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-primary-text dark:text-dark-text">🔁 One-Time Credit Packs (Buy when you need more)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center">
                <h4 className="text-lg font-bold mb-2 text-primary-text dark:text-dark-text">Small</h4>
                <p className="text-2xl font-bold text-accent dark:text-dark-accent mb-2">$0.99</p>
                <p className="text-gray-600 dark:text-gray-400">25 credits</p>
              </div>
              <div className="glass-card p-6 text-center">
                <h4 className="text-lg font-bold mb-2 text-primary-text dark:text-dark-text">Medium</h4>
                <p className="text-2xl font-bold text-accent dark:text-dark-accent mb-2">$2.49</p>
                <p className="text-gray-600 dark:text-gray-400">75 credits</p>
              </div>
              <div className="glass-card p-6 text-center">
                <h4 className="text-lg font-bold mb-2 text-primary-text dark:text-dark-text">Large</h4>
                <p className="text-2xl font-bold text-accent dark:text-dark-accent mb-2">$5.99</p>
                <p className="text-gray-600 dark:text-gray-400">200 credits</p>
              </div>
            </div>
          </div>

          <div className="text-center glass-card p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <p className="feature-bullet text-lg">No monthly fees</p>
              <p className="feature-bullet text-lg">Just log in with LinkedIn once</p>
              <p className="feature-bullet text-lg">Add card to unlock credits</p>
            </div>
            <p className="text-lg mb-8">Use when you want — no commitment</p>
            <a href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="cta-button">
                Try Employment for $0.49 →
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Prompt Moat Section */}
      <section className="section-padding bg-accent dark:bg-dark-accent text-primary-bg dark:text-dark-bg">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-section font-bold mb-6">
              "Can't I Just Use ChatGPT?"
            </h2>
            <p className="text-xl mb-8 opacity-90">
              You could. And you could try doing surgery after watching a YouTube video, too.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-8">Employment runs on professionally engineered prompts designed to trigger:</p>
              <div className="space-y-4">
                <p className="feature-bullet text-lg">Scroll-stopping hooks</p>
                <p className="feature-bullet text-lg">Psychological curiosity gaps</p>
                <p className="feature-bullet text-lg">Viral formats (story arcs, transformations, hot takes)</p>
                <p className="feature-bullet text-lg">Engagement loops that spark DMs, shares, and credibility</p>
              </div>
            </div>

            <div className="glass-card p-6 bg-white/10 dark:bg-black/20">
              <h4 className="text-xl font-bold mb-4 text-primary-bg dark:text-dark-bg opacity-90">Real Examples:</h4>
                              <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-primary-bg dark:text-dark-bg font-semibold opacity-90">Student post prompt:</p>
                    <p className="italic">"I used to think X. But after working on [project], I realized Y."</p>
                  </div>
                  <div>
                    <p className="text-primary-bg dark:text-dark-bg font-semibold opacity-90">Viral content prompt:</p>
                    <p className="italic">"I made a $10K mistake so you don't have to."</p>
                  </div>
                  <div>
                    <p className="text-primary-bg dark:text-dark-bg font-semibold opacity-90">LinkedIn pro prompt:</p>
                    <p className="italic">"Most professionals ruin their rep in one of 3 ways…"</p>
                  </div>
                </div>
              <p className="text-sm mt-4 opacity-80">
                These aren't just words. They're engineered frameworks that get you seen — consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-accent dark:bg-dark-accent text-primary-bg dark:text-dark-bg">
        <div className="container-max text-center">
          <h2 className="text-section font-bold mb-8">
            This Isn't for Everyone.
          </h2>
          <p className="text-xl mb-12 opacity-90">
            It's for people who know they're capable — and are finally ready to get seen for it.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-red-400">You're either going to:</h3>
              <div className="space-y-3 text-left">
                <p className="flex items-center"><span className="text-red-400 mr-3">❌</span> Keep ghosting your LinkedIn</p>
                <p className="flex items-center"><span className="text-red-400 mr-3">❌</span> Keep watching others get opportunities</p>
                <p className="flex items-center"><span className="text-red-400 mr-3">❌</span> Keep hoping someone notices</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-green-400">Or…</h3>
              <div className="space-y-3 text-left">
                <p className="flex items-center"><span className="text-green-400 mr-3">✅</span> Start showing up</p>
                <p className="flex items-center"><span className="text-green-400 mr-3">✅</span> Start looking legit</p>
                <p className="flex items-center"><span className="text-green-400 mr-3">✅</span> Start building a reputation you can cash in on</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="cta-button text-xl px-12 py-6">
                30 posts. $0.49. No BS. Start now →
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-accent dark:bg-dark-accent text-primary-bg dark:text-dark-bg p-4 md:hidden z-50 shadow-lg">
        <a href="https://employment.vercel.app" target="_blank" rel="noopener noreferrer">
          <button className="w-full py-3 font-semibold text-center">
            Try Employment - $0.49 →
          </button>
        </a>
      </div>
    </main>
  )
} 