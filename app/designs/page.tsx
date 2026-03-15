'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight, Eye, Sparkles, Shield, Hammer, Home } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface Design {
  id: number
  name: string
  description: string
  cost: string
  safetyScore: number
  image: string
  materials: number
}

const mockDesigns: Design[] = [
  {
    id: 1,
    name: 'Modern Open Plan',
    description: 'Spacious and light-filled design with open living areas',
    cost: '$450,000 - $550,000',
    safetyScore: 95,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231a1a2e" width="400" height="300"/%3E%3Crect fill="%234F46E5" x="20" y="20" width="360" height="260" rx="10"/%3E%3Crect fill="%231a1a2e" x="40" y="40" width="320" height="220"/%3E%3Crect fill="%234F46E5" opacity="0.5" x="60" y="60" width="70" height="80"/%3E%3Crect fill="%234F46E5" opacity="0.5" x="150" y="60" width="120" height="90"/%3E%3Crect fill="%234F46E5" opacity="0.5" x="290" y="60" width="50" height="70"/%3E%3Crect fill="%234F46E5" opacity="0.5" x="60" y="160" width="280" height="100"/%3E%3C/svg%3E',
    materials: 12,
  },
  {
    id: 2,
    name: 'Family Comfort',
    description: 'Designed for families with separate living and recreational areas',
    cost: '$380,000 - $480,000',
    safetyScore: 92,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231a1a2e" width="400" height="300"/%3E%3Crect fill="%236366f1" x="20" y="20" width="360" height="260" rx="10"/%3E%3Crect fill="%231a1a2e" x="40" y="40" width="320" height="220"/%3E%3Crect fill="%236366f1" opacity="0.5" x="60" y="60" width="100" height="85"/%3E%3Crect fill="%236366f1" opacity="0.5" x="180" y="60" width="120" height="80"/%3E%3Crect fill="%236366f1" opacity="0.5" x="60" y="160" width="100" height="110"/%3E%3Crect fill="%236366f1" opacity="0.5" x="180" y="160" width="120" height="110"/%3E%3C/svg%3E',
    materials: 14,
  },
  {
    id: 3,
    name: 'Luxe Executive',
    description: 'Premium design with home office and entertainment areas',
    cost: '$620,000 - $750,000',
    safetyScore: 98,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231a1a2e" width="400" height="300"/%3E%3Crect fill="%235b21b6" x="20" y="20" width="360" height="260" rx="10"/%3E%3Crect fill="%231a1a2e" x="40" y="40" width="320" height="220"/%3E%3Crect fill="%235b21b6" opacity="0.5" x="60" y="60" width="85" height="70"/%3E%3Crect fill="%235b21b6" opacity="0.5" x="160" y="60" width="85" height="70"/%3E%3Crect fill="%235b21b6" opacity="0.5" x="260" y="60" width="80" height="70"/%3E%3Crect fill="%235b21b6" opacity="0.5" x="60" y="150" width="280" height="110"/%3E%3C/svg%3E',
    materials: 16,
  },
  {
    id: 4,
    name: 'Compact Urban',
    description: 'Efficient design for urban living with smart space usage',
    cost: '$280,000 - $350,000',
    safetyScore: 94,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231a1a2e" width="400" height="300"/%3E%3Crect fill="%239333ea" x="20" y="20" width="360" height="260" rx="10"/%3E%3Crect fill="%231a1a2e" x="40" y="40" width="320" height="220"/%3E%3Crect fill="%239333ea" opacity="0.5" x="60" y="60" width="150" height="95"/%3E%3Crect fill="%239333ea" opacity="0.5" x="220" y="60" width="120" height="95"/%3E%3Crect fill="%239333ea" opacity="0.5" x="60" y="170" width="280" height="80"/%3E%3C/svg%3E',
    materials: 10,
  },
  {
    id: 5,
    name: 'Garden Paradise',
    description: 'Garden-focused design with outdoor living spaces and green areas',
    cost: '$500,000 - $620,000',
    safetyScore: 91,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231a1a2e" width="400" height="300"/%3E%3Crect fill="%2310b981" x="20" y="20" width="360" height="260" rx="10"/%3E%3Crect fill="%231a1a2e" x="40" y="40" width="320" height="220"/%3E%3Crect fill="%2310b981" opacity="0.5" x="60" y="60" width="140" height="100"/%3E%3Crect fill="%2310b981" opacity="0.5" x="220" y="60" width="120" height="100"/%3E%3Crect fill="%2310b981" opacity="0.3" x="60" y="170" width="280" height="80"/%3E%3C/svg%3E',
    materials: 13,
  },
  {
    id: 6,
    name: 'Modern Minimalist',
    description: 'Clean, minimalist design with emphasis on simplicity and efficiency',
    cost: '$400,000 - $520,000',
    safetyScore: 96,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231a1a2e" width="400" height="300"/%3E%3Crect fill="%230891b2" x="20" y="20" width="360" height="260" rx="10"/%3E%3Crect fill="%231a1a2e" x="40" y="40" width="320" height="220"/%3E%3Crect fill="%230891b2" opacity="0.5" x="60" y="60" width="320" height="80"/%3E%3Crect fill="%230891b2" opacity="0.5" x="60" y="155" width="320" height="95"/%3E%3C/svg%3E',
    materials: 11,
  },
]

export default function DesignsPage() {
  const router = useRouter()
  const [designs, setDesigns] = useState<Design[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading designs
    const timer = setTimeout(() => {
      setDesigns(mockDesigns)
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleViewDesign = (designId: number) => {
    // Store selected design in sessionStorage
    sessionStorage.setItem('selectedDesignId', designId.toString())
    router.push('/3d-view')
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 py-4 md:px-12 border-b border-border flex items-center justify-between">
        <Link href="/input" className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition">
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Home className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-foreground">AI Architect</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-12 md:px-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">Your AI-Generated Designs</h1>
            </div>
            <p className="text-lg text-foreground/60">
              Explore 6 intelligent floor plan options, each optimized for different preferences. Compare costs, safety scores, and materials.
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="bg-card/30 border-border animate-pulse p-6 h-96" />
              ))}
            </div>
          ) : (
            <>
              {/* Design Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {designs.map((design) => (
                  <Card
                    key={design.id}
                    className="overflow-hidden bg-card/50 border-primary/20 hover:border-primary/40 transition group cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                      <svg viewBox="0 0 400 300" className="w-full h-full text-primary" dangerouslySetInnerHTML={{__html: design.image}} />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-60" />
                      <Badge className="absolute top-4 right-4 bg-primary/80 text-primary-foreground">
                        Design {design.id}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {design.name}
                        </h3>
                        <p className="text-sm text-foreground/60">
                          {design.description}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="space-y-3 pt-3 border-t border-border">
                        <div className="flex items-center justify-between">
                          <span className="text-foreground/70 flex items-center gap-2">
                            <Hammer className="w-4 h-4 text-primary" />
                            Cost
                          </span>
                          <span className="font-semibold text-foreground">{design.cost}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-foreground/70 flex items-center gap-2">
                            <Shield className="w-4 h-4 text-primary" />
                            Safety Score
                          </span>
                          <span className="font-semibold text-foreground">{design.safetyScore}%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-foreground/70 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            Materials
                          </span>
                          <span className="font-semibold text-foreground">{design.materials} items</span>
                        </div>
                      </div>

                      {/* Button */}
                      <Button
                        onClick={() => handleViewDesign(design.id)}
                        className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View 3D Model
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Bonus Feature - Generate Variations */}
              <Card className="p-8 bg-gradient-to-r from-primary/10 via-background to-accent/10 border-primary/30 text-center">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-3">Want More Options?</h2>
                <p className="text-foreground/70 mb-6 max-w-lg mx-auto">
                  Generate 6 additional design variations with different architectural styles and layouts to compare with your current selection.
                </p>
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate 6 More Variations
                </Button>
              </Card>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
