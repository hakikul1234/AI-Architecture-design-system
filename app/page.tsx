'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Home, Zap, Box, AlertCircle, Hammer } from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/50 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Home className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">AI Architect</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#features" className="text-foreground/70 hover:text-foreground transition">
            Features
          </Link>
          <Link href="#" className="text-foreground/70 hover:text-foreground transition">
            Pricing
          </Link>
          <Link href="#" className="text-foreground/70 hover:text-foreground transition">
            About
          </Link>
        </div>
        <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
          Sign In
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:px-12 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl -ml-48 -mb-48" />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <span className="text-sm font-semibold text-primary">AI-Powered Design Innovation</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Design Your
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {' '}Dream House{' '}
              </span>
              with AI
            </h1>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
              Generate intelligent house floor plans, 3D models, and construction insights in seconds. Transform your architectural vision into reality with the power of artificial intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/input">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold py-6 text-base">
                  Start Designing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" className="w-full sm:w-auto border-primary/50 text-primary hover:bg-primary/10 py-6 text-base font-semibold">
                View Demo
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm shadow-2xl">
            <Image
              src="/ai-architect-hero.jpg"
              alt="AI Robot designing house blueprint"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-6 py-20 md:px-12 md:py-32 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Everything you need to design, visualize, and analyze your dream house with AI-powered intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <Card className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/20 transition">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                AI Floor Plan Generation
              </h3>
              <p className="text-foreground/60">
                Generate intelligent, optimized floor plans based on your specific requirements and design preferences.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/20 transition">
                <Box className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Multiple Design Options
              </h3>
              <p className="text-foreground/60">
                Get 5-6 different floor plan variations to choose from, each uniquely optimized for your needs.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/20 transition">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                3D House Visualization
              </h3>
              <p className="text-foreground/60">
                Explore your designs in stunning 3D. Rotate, zoom, and view from every angle with interactive controls.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/20 transition">
                <AlertCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Structural Safety Analysis
              </h3>
              <p className="text-foreground/60">
                Get comprehensive safety scores and structural analysis for each design option automatically.
              </p>
            </Card>

            {/* Feature 5 */}
            <Card className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/20 transition">
                <Hammer className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Material & Cost Estimation
              </h3>
              <p className="text-foreground/60">
                Get detailed material lists and accurate cost estimations for construction of your design.
              </p>
            </Card>

            {/* Feature 6 */}
            <Card className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/20 transition">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Real-time Design Editing
              </h3>
              <p className="text-foreground/60">
                Modify designs instantly with natural language prompts. See changes reflect in real-time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-20 md:px-12 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-accent/10 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Design Your Dream House?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Create intelligent floor plans and visualize your house in 3D with AI-powered insights. All in seconds.
          </p>
          <Link href="/input">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold py-6 text-lg px-8">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Home className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">AI Architect</span>
            </div>
            <p className="text-foreground/60">
              © 2024 AI Architect. Design the future of housing.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-foreground/60 hover:text-foreground transition">
                Privacy
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-foreground transition">
                Terms
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-foreground transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
