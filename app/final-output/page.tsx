'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Download, FileText, Home, Zap, AlertCircle, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function FinalOutputPage() {
  const [exportFormat, setExportFormat] = useState<'dwg' | 'pdf' | 'dxf' | null>(null)
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async (format: 'dwg' | 'pdf' | 'dxf') => {
    setExportFormat(format)
    setIsExporting(true)

    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Create a simple download link
    const link = document.createElement('a')
    link.href = '#'
    link.download = `house-design.${format === 'dwg' ? 'dwg' : format === 'dxf' ? 'dxf' : 'pdf'}`
    link.click()

    setIsExporting(false)
    setExportFormat(null)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 py-4 md:px-12 border-b border-border flex items-center justify-between">
        <Link href="/edit-design" className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition">
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
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-3">Final Design Output</h1>
            <p className="text-lg text-foreground/60">
              Complete design package with blueprints, analysis reports, and export options for professional use.
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="blueprint" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-card/50 border border-border p-1">
              <TabsTrigger value="blueprint" className="data-[state=active]:bg-primary/10">
                2D Blueprint
              </TabsTrigger>
              <TabsTrigger value="analysis" className="data-[state=active]:bg-primary/10">
                Reports
              </TabsTrigger>
              <TabsTrigger value="export" className="data-[state=active]:bg-primary/10">
                Export
              </TabsTrigger>
            </TabsList>

            {/* Blueprint Tab */}
            <TabsContent value="blueprint" className="space-y-6">
              <Card className="p-0 border-primary/20 overflow-hidden bg-card/50">
                <div className="relative bg-white/5 aspect-video md:aspect-auto md:h-96 flex items-center justify-center">
                  <svg viewBox="0 0 1000 800" className="w-full h-full text-primary opacity-20">
                    {/* Grid background */}
                    <defs>
                      <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="1000" height="800" fill="url(#grid)" />

                    {/* Floor plan */}
                    <g fill="none" stroke="currentColor" strokeWidth="3">
                      {/* Outer walls */}
                      <rect x="100" y="100" width="800" height="600" />

                      {/* Internal walls */}
                      <line x1="350" y1="100" x2="350" y2="400" />
                      <line x1="650" y1="100" x2="650" y2="700" />
                      <line x1="100" y1="400" x2="900" y2="400" />

                      {/* Windows */}
                      <rect x="150" y="95" width="50" height="10" />
                      <rect x="250" y="95" width="50" height="10" />
                      <rect x="700" y="95" width="50" height="10" />
                      <rect x="800" y="95" width="50" height="10" />

                      {/* Door */}
                      <path d="M 400 700 L 450 700" strokeWidth="4" />

                      {/* Rooms labels */}
                      <text x="150" y="200" fontSize="24" fill="currentColor" opacity="0.5">Living</text>
                      <text x="550" y="200" fontSize="24" fill="currentColor" opacity="0.5">Kitchen</text>
                      <text x="150" y="550" fontSize="24" fill="currentColor" opacity="0.5">Bedroom</text>
                      <text x="550" y="550" fontSize="24" fill="currentColor" opacity="0.5">Bath</text>
                    </g>
                  </svg>

                  {/* Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Ground Floor Plan</h3>
                      <p className="text-sm text-foreground/60">Total Area: 250 sqm</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Blueprint Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-card/50 border-primary/20">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Specifications
                  </h3>
                  <ul className="space-y-3 text-foreground/70">
                    <li className="flex justify-between">
                      <span>Total Area</span>
                      <span className="font-semibold text-foreground">500 sqm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Number of Floors</span>
                      <span className="font-semibold text-foreground">2</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Bedrooms</span>
                      <span className="font-semibold text-foreground">3</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Bathrooms</span>
                      <span className="font-semibold text-foreground">2</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Parking Spaces</span>
                      <span className="font-semibold text-foreground">2</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-card/50 border-primary/20">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Key Features
                  </h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Open-plan living and kitchen
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Master bedroom with ensuite
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Spacious covered patio
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Energy-efficient design
                    </li>
                  </ul>
                </Card>
              </div>
            </TabsContent>

            {/* Analysis Reports Tab */}
            <TabsContent value="analysis" className="space-y-6">
              {/* Safety Report */}
              <Card className="p-8 bg-card/50 border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  Structural Safety Report
                </h2>

                <div className="space-y-6">
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <p className="text-foreground font-semibold mb-2">Overall Safety Rating: 94%</p>
                    <p className="text-foreground/70 text-sm">
                      This design meets all international building codes and safety standards. Structural analysis indicates excellent load distribution and stability.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Compliance Standards</h3>
                      <ul className="space-y-2 text-sm text-foreground/70">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          Building Code Compliance
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          Seismic Design Standards
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          Fire Safety Regulations
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          Environmental Guidelines
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Material Specifications</h3>
                      <ul className="space-y-2 text-sm text-foreground/70">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          Grade A Concrete Mix
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          Fire-Resistant Materials
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          High-Quality Steel Reinforcement
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          Eco-Friendly Finishes
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Cost Analysis Report */}
              <Card className="p-8 bg-card/50 border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Cost Estimation Report
                </h2>

                <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-lg p-6 mb-6">
                  <p className="text-sm text-foreground/70 mb-2">Estimated Total Cost</p>
                  <p className="text-4xl font-bold text-primary mb-2">$450,000 - $550,000</p>
                  <p className="text-sm text-foreground/60">Based on current market rates and material availability</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="text-foreground/70 text-sm mb-1">Materials</p>
                    <p className="text-2xl font-bold text-foreground">$203,750</p>
                    <p className="text-xs text-foreground/50 mt-1">45% of total</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="text-foreground/70 text-sm mb-1">Labor</p>
                    <p className="text-2xl font-bold text-foreground">$157,500</p>
                    <p className="text-xs text-foreground/50 mt-1">35% of total</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="text-foreground/70 text-sm mb-1">Equipment & Other</p>
                    <p className="text-2xl font-bold text-foreground">$90,000</p>
                    <p className="text-xs text-foreground/50 mt-1">20% of total</p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Export Tab */}
            <TabsContent value="export" className="space-y-6">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Download className="w-6 h-6 text-primary" />
                  Export Your Design
                </h2>
                <p className="text-foreground/70 mb-6">
                  Download your complete design package in professional formats compatible with CAD software, architectural tools, and construction planning applications.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  {/* AutoCAD DWG */}
                  <Button
                    onClick={() => handleExport('dwg')}
                    disabled={isExporting}
                    className="h-auto py-6 flex flex-col items-center justify-center gap-3 bg-card border border-primary/30 hover:border-primary/50 hover:bg-card/80 text-foreground"
                  >
                    <Download className="w-8 h-8 text-primary" />
                    <div className="text-center">
                      <p className="font-semibold">AutoCAD (DWG)</p>
                      <p className="text-xs text-foreground/60 mt-1">Professional CAD format</p>
                    </div>
                    {isExporting && exportFormat === 'dwg' ? (
                      <span className="text-xs text-primary">Preparing...</span>
                    ) : null}
                  </Button>

                  {/* DXF Format */}
                  <Button
                    onClick={() => handleExport('dxf')}
                    disabled={isExporting}
                    className="h-auto py-6 flex flex-col items-center justify-center gap-3 bg-card border border-primary/30 hover:border-primary/50 hover:bg-card/80 text-foreground"
                  >
                    <Download className="w-8 h-8 text-primary" />
                    <div className="text-center">
                      <p className="font-semibold">DXF Format</p>
                      <p className="text-xs text-foreground/60 mt-1">Universal CAD format</p>
                    </div>
                    {isExporting && exportFormat === 'dxf' ? (
                      <span className="text-xs text-primary">Preparing...</span>
                    ) : null}
                  </Button>

                  {/* PDF Report */}
                  <Button
                    onClick={() => handleExport('pdf')}
                    disabled={isExporting}
                    className="h-auto py-6 flex flex-col items-center justify-center gap-3 bg-card border border-primary/30 hover:border-primary/50 hover:bg-card/80 text-foreground"
                  >
                    <Download className="w-8 h-8 text-primary" />
                    <div className="text-center">
                      <p className="font-semibold">PDF Report</p>
                      <p className="text-xs text-foreground/60 mt-1">Complete design report</p>
                    </div>
                    {isExporting && exportFormat === 'pdf' ? (
                      <span className="text-xs text-primary">Preparing...</span>
                    ) : null}
                  </Button>
                </div>
              </Card>

              {/* Export Contents */}
              <Card className="p-8 bg-card/50 border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-6">What's Included in Your Export</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">CAD Files (DWG/DXF)</h4>
                    <ul className="space-y-3 text-foreground/70">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>All floor plans with detailed dimensions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Elevation views from all sides</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Construction details and sections</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Material schedules and specifications</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-4">PDF Report</h4>
                    <ul className="space-y-3 text-foreground/70">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Complete design summary and overview</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Safety analysis and compliance report</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Material estimation and cost breakdown</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Construction timeline recommendations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Success Message */}
              <Card className="p-6 bg-green-500/10 border border-green-500/30">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <p className="text-foreground">
                    Your design files are ready for professional use. Download in your preferred format and share with contractors or architects.
                  </p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Bottom Navigation */}
          <div className="flex gap-4 mt-12 pt-8 border-t border-border">
            <Link href="/edit-design" className="flex-1">
              <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10 py-6 text-base">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Editing
              </Button>
            </Link>
            <Link href="/" className="flex-1">
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold py-6 text-base">
                Create Another Design
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
