'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ArrowRight, Home, Sparkles, Plus, Zap } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const editSuggestions = [
  'Add a balcony to the second floor',
  'Increase living room size',
  'Add a parking garage',
  'Add a home gym',
  'Expand the kitchen',
  'Add a swimming pool area',
  'Create a home office',
  'Add a basement',
  'Increase bedroom count',
  'Add outdoor patio',
]

const designVariations = [
  {
    id: 1,
    name: 'Contemporary Plus',
    description: 'Modern design with extended outdoor spaces',
    changes: 'Added 50sqm patio, expanded kitchen to 30sqm',
  },
  {
    id: 2,
    name: 'Luxury Executive Pro',
    description: 'Premium version with home office and gym',
    changes: 'Added 25sqm home office, 20sqm gym, upgraded finishes',
  },
  {
    id: 3,
    name: 'Family Edition',
    description: 'Optimized for families with playroom',
    changes: 'Added playroom (20sqm), expanded kitchen, 4 bedrooms',
  },
  {
    id: 4,
    name: 'Eco-Friendly',
    description: 'Sustainable design with green features',
    changes: 'Added solar panels, rainwater system, green roof',
  },
  {
    id: 5,
    name: 'Entertainment Hub',
    description: 'Designed for entertaining with expanded living',
    changes: 'Large open living (60sqm), wine cellar, entertainment kitchen',
  },
  {
    id: 6,
    name: 'Urban Compact Pro',
    description: 'Space-efficient with smart storage',
    changes: 'Optimized layout, built-in storage, multi-purpose spaces',
  },
]

export default function EditDesignPage() {
  const router = useRouter()
  const [editPrompt, setEditPrompt] = useState('')
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [activeTab, setActiveTab] = useState('edit')

  const handleApplySuggestion = (suggestion: string) => {
    setEditPrompt(suggestion)
    setSelectedSuggestion(suggestion)
  }

  const handleGenerateEdit = async () => {
    if (!editPrompt.trim()) return

    setIsGenerating(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // In a real app, this would regenerate the design
    // For now, we'll just show a success message
    setIsGenerating(false)
    setEditPrompt('')
    setSelectedSuggestion(null)
  }

  const handleSelectVariation = (variationId: number) => {
    sessionStorage.setItem('selectedVariationId', variationId.toString())
    router.push('/3d-view')
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 py-4 md:px-12 border-b border-border flex items-center justify-between">
        <Link href="/3d-view" className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition">
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
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-primary" />
              Edit Your Design
            </h1>
            <p className="text-lg text-foreground/60">
              Modify your design with natural language prompts. Describe the changes you want and AI will regenerate the layout instantly.
            </p>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-card/50 border border-border p-1">
              <TabsTrigger value="edit" className="data-[state=active]:bg-primary/10">
                Edit Design
              </TabsTrigger>
              <TabsTrigger value="variations" className="data-[state=active]:bg-primary/10">
                Design Variations
              </TabsTrigger>
            </TabsList>

            {/* Edit Design Tab */}
            <TabsContent value="edit" className="space-y-8">
              {/* Text Prompt Section */}
              <Card className="p-8 bg-card/50 border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  Describe Your Changes
                </h2>

                <div className="space-y-4">
                  <Textarea
                    value={editPrompt}
                    onChange={(e) => setEditPrompt(e.target.value)}
                    placeholder="Example: Add a balcony to the second floor and increase the living room size by 20%"
                    className="min-h-24 bg-input border-border text-foreground placeholder:text-foreground/40 resize-none"
                  />

                  <Button
                    onClick={handleGenerateEdit}
                    disabled={!editPrompt.trim() || isGenerating}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold py-6 text-base"
                  >
                    {isGenerating ? (
                      <>
                        <span className="inline-block animate-spin mr-2">⏳</span>
                        Regenerating Design...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        Regenerate Design
                      </>
                    )}
                  </Button>
                </div>
              </Card>

              {/* Quick Suggestions */}
              <Card className="p-8 bg-card/50 border-primary/20">
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-primary" />
                  Quick Edit Suggestions
                </h2>

                <div className="grid md:grid-cols-2 gap-3">
                  {editSuggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      onClick={() => handleApplySuggestion(suggestion)}
                      variant="outline"
                      className={`justify-start h-auto py-3 px-4 border-primary/20 hover:bg-primary/10 transition ${
                        selectedSuggestion === suggestion ? 'bg-primary/10 border-primary/50' : ''
                      }`}
                    >
                      <span className="text-sm text-foreground text-left">{suggestion}</span>
                    </Button>
                  ))}
                </div>
              </Card>

              {/* Preview Info */}
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                <h3 className="font-bold text-foreground mb-3">Real-time Preview</h3>
                <p className="text-foreground/70 mb-4">
                  When you regenerate your design, a preview will appear here showing the updated layout with your requested modifications.
                </p>
                <div className="bg-card/30 border border-border rounded-lg p-12 text-center text-foreground/50">
                  <Sparkles className="w-8 h-8 mx-auto mb-3 opacity-50" />
                  <p>Design preview will appear here</p>
                </div>
              </Card>
            </TabsContent>

            {/* Design Variations Tab */}
            <TabsContent value="variations" className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Design Variations
                </h2>
                <p className="text-foreground/60">
                  Explore 6 different design variations. Each offers unique features and optimizations for different priorities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {designVariations.map((variation) => (
                  <Card
                    key={variation.id}
                    className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition cursor-pointer group"
                  >
                    <div className="mb-4">
                      <Badge className="bg-primary/80 text-primary-foreground mb-3">
                        Variation {variation.id}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {variation.name}
                      </h3>
                      <p className="text-sm text-foreground/60">
                        {variation.description}
                      </p>
                    </div>

                    <div className="bg-foreground/5 rounded-lg p-4 mb-4">
                      <p className="text-sm text-foreground/70">
                        <span className="font-semibold text-foreground">Changes: </span>
                        {variation.changes}
                      </p>
                    </div>

                    <Button
                      onClick={() => handleSelectVariation(variation.id)}
                      className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold group-hover:shadow-lg group-hover:shadow-primary/20 transition"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Select & View
                    </Button>
                  </Card>
                ))}
              </div>

              {/* Bonus Feature Info */}
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                <Sparkles className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-xl font-bold text-foreground mb-3">Hackathon Bonus Feature</h3>
                <p className="text-foreground/70">
                  This design variations feature allows users to see multiple architectural approaches side-by-side. Each variation can be selected, viewed in 3D, and its materials/costs analyzed independently. This comparison feature helps users make informed decisions about which design best fits their needs and budget.
                </p>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Bottom Navigation */}
          <div className="flex gap-4 mt-12 pt-8 border-t border-border">
            <Link href="/3d-view" className="flex-1">
              <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10 py-6 text-base">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to 3D View
              </Button>
            </Link>
            <Link href="/final-output" className="flex-1">
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold py-6 text-base">
                View Final Output
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
