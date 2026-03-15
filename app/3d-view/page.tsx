'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ArrowRight, Home, Hammer, AlertCircle, Zap } from 'lucide-react'
import Link from 'next/link'
import { House3DViewer } from '@/components/3d-house-viewer'

const materials = [
  { name: 'Concrete', quantity: 250, unit: 'cubic meters', cost: '$12,500' },
  { name: 'Steel Reinforcement', quantity: 50, unit: 'metric tons', cost: '$8,500' },
  { name: 'Brick/Block', quantity: 15000, unit: 'units', cost: '$18,000' },
  { name: 'Cement', quantity: 100, unit: 'metric tons', cost: '$6,500' },
  { name: 'Sand', quantity: 180, unit: 'cubic meters', cost: '$4,200' },
  { name: 'Roofing Tiles', quantity: 8000, unit: 'units', cost: '$22,000' },
  { name: 'Electrical Wiring', quantity: 5000, unit: 'meters', cost: '$8,500' },
  { name: 'Plumbing Pipes', quantity: 3000, unit: 'meters', cost: '$7,500' },
  { name: 'Paint & Finishing', quantity: 1500, unit: 'liters', cost: '$9,000' },
  { name: 'Windows & Glass', quantity: 12, unit: 'units', cost: '$15,000' },
  { name: 'Doors', quantity: 8, unit: 'units', cost: '$6,000' },
  { name: 'HVAC System', quantity: 1, unit: 'system', cost: '$18,000' },
]

const safetyAnalysis = {
  structuralIntegrity: 96,
  foundationStability: 94,
  earthquakeResistance: 92,
  fireResistance: 95,
  windResistance: 93,
  overallScore: 94,
  notes: [
    'Excellent structural design with proper load distribution',
    'Foundation meets seismic resistance standards',
    'Fire-resistant materials used throughout',
    'Wind resistance optimized for 200+ km/h winds',
    'Regular maintenance recommended every 5 years',
  ],
}

export default function ThreeDViewPage() {
  const [selectedTab, setSelectedTab] = useState('3d')

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 py-4 md:px-12 border-b border-border flex items-center justify-between">
        <Link href="/designs" className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition">
          <ArrowLeft className="w-5 h-5" />
          Back to Designs
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Home className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-foreground">AI Architect</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8 md:px-12 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Modern Open Plan - 3D Visualization
            </h1>
            <p className="text-foreground/60">
              Explore the design in 3D, view materials, and analyze safety metrics.
            </p>
          </div>

          {/* Tabs */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-card/50 border border-border p-1">
              <TabsTrigger value="3d" className="data-[state=active]:bg-primary/10">
                3D Model
              </TabsTrigger>
              <TabsTrigger value="materials" className="data-[state=active]:bg-primary/10">
                Materials & Cost
              </TabsTrigger>
              <TabsTrigger value="safety" className="data-[state=active]:bg-primary/10">
                Safety Analysis
              </TabsTrigger>
            </TabsList>

            {/* 3D Model Tab */}
            <TabsContent value="3d" className="space-y-6">
              <Card className="p-0 border-primary/20 overflow-hidden">
                <div className="h-96 md:h-[600px] w-full bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                  <House3DViewer />
                </div>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-card/50 border-primary/20">
                  <Zap className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Rotate & Zoom</h3>
                  <p className="text-sm text-foreground/60">
                    Click and drag to rotate. Use scroll wheel to zoom in and out.
                  </p>
                </Card>

                <Card className="p-6 bg-card/50 border-primary/20">
                  <Zap className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Auto Rotation</h3>
                  <p className="text-sm text-foreground/60">
                    The model rotates automatically. Click to stop and manually explore.
                  </p>
                </Card>

                <Card className="p-6 bg-card/50 border-primary/20">
                  <Zap className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Full Detail</h3>
                  <p className="text-sm text-foreground/60">
                    View architectural details including windows, doors, and roofing.
                  </p>
                </Card>
              </div>
            </TabsContent>

            {/* Materials Tab */}
            <TabsContent value="materials" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Total Cost Card */}
                <Card className="p-8 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Total Estimated Cost</h2>
                  <p className="text-4xl font-bold text-primary mb-4">$450,000 - $550,000</p>
                  <div className="space-y-2 text-sm text-foreground/70">
                    <p>• Labor: ~35% of total cost</p>
                    <p>• Materials: ~45% of total cost</p>
                    <p>• Equipment & Other: ~20% of total cost</p>
                  </div>
                </Card>

                {/* Cost Breakdown Card */}
                <Card className="p-8 bg-card/50 border-primary/20">
                  <h3 className="text-xl font-bold text-foreground mb-6">Cost Breakdown</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/70">Structural Materials</span>
                      <span className="font-semibold text-foreground">$85,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/70">Finishing Materials</span>
                      <span className="font-semibold text-foreground">$78,500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/70">Utilities & Systems</span>
                      <span className="font-semibold text-foreground">$73,000</span>
                    </div>
                    <div className="border-t border-border pt-4 flex justify-between items-center">
                      <span className="text-foreground font-semibold">Materials Subtotal</span>
                      <span className="font-bold text-primary text-lg">$236,500</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Materials List */}
              <Card className="p-8 bg-card/50 border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Hammer className="w-6 h-6 text-primary" />
                  Complete Materials List
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-foreground font-semibold">Material</th>
                        <th className="text-right py-3 px-4 text-foreground font-semibold">Quantity</th>
                        <th className="text-left py-3 px-4 text-foreground font-semibold">Unit</th>
                        <th className="text-right py-3 px-4 text-foreground font-semibold">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {materials.map((material, index) => (
                        <tr key={index} className="border-b border-border/50 hover:bg-primary/5 transition">
                          <td className="py-4 px-4 text-foreground">{material.name}</td>
                          <td className="py-4 px-4 text-right text-foreground/70">{material.quantity}</td>
                          <td className="py-4 px-4 text-foreground/70">{material.unit}</td>
                          <td className="py-4 px-4 text-right font-semibold text-primary">{material.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

            {/* Safety Tab */}
            <TabsContent value="safety" className="space-y-6">
              {/* Overall Score */}
              <Card className="p-8 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Overall Safety Score</h2>
                    <p className="text-foreground/70">Comprehensive structural and safety analysis</p>
                  </div>
                  <div className="text-6xl font-bold text-primary">{safetyAnalysis.overallScore}%</div>
                </div>

                <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent"
                    style={{ width: `${safetyAnalysis.overallScore}%` }}
                  />
                </div>
              </Card>

              {/* Safety Metrics */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: 'Structural Integrity', score: safetyAnalysis.structuralIntegrity },
                  { label: 'Foundation Stability', score: safetyAnalysis.foundationStability },
                  { label: 'Earthquake Resistance', score: safetyAnalysis.earthquakeResistance },
                  { label: 'Fire Resistance', score: safetyAnalysis.fireResistance },
                  { label: 'Wind Resistance', score: safetyAnalysis.windResistance },
                ].map((metric) => (
                  <Card key={metric.label} className="p-6 bg-card/50 border-primary/20">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-foreground">{metric.label}</h3>
                      <span className="font-bold text-primary">{metric.score}%</span>
                    </div>
                    <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent"
                        style={{ width: `${metric.score}%` }}
                      />
                    </div>
                  </Card>
                ))}
              </div>

              {/* Safety Notes */}
              <Card className="p-8 bg-card/50 border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  Safety Recommendations
                </h3>

                <ul className="space-y-4">
                  {safetyAnalysis.notes.map((note, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{note}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Bottom Navigation */}
          <div className="flex gap-4 mt-12 pt-8 border-t border-border">
            <Link href="/designs" className="flex-1">
              <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10 py-6 text-base">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Designs
              </Button>
            </Link>
            <Link href="/edit-design" className="flex-1">
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold py-6 text-base">
                Edit Design
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
