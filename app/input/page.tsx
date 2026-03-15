'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { ArrowLeft, ArrowRight, Home, Zap } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface FormData {
  plotLength: string
  plotWidth: string
  floors: string
  bedrooms: string
  bathrooms: string
  hasKitchen: boolean
  parking: string
  hasGarden: boolean
  houseStyle: string
}

export default function InputPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    plotLength: '',
    plotWidth: '',
    floors: '',
    bedrooms: '',
    bathrooms: '',
    hasKitchen: true,
    parking: 'single',
    hasGarden: false,
    houseStyle: 'modern',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Store form data in sessionStorage for the next page
    sessionStorage.setItem('houseDesignData', JSON.stringify(formData))

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    router.push('/designs')
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 py-4 md:px-12 border-b border-border flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
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
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-foreground mb-3">Design Your House</h1>
            <p className="text-lg text-foreground/60">
              Provide details about your dream house and let AI generate multiple design options for you.
            </p>
          </div>

          {/* Form */}
          <Card className="p-8 bg-card/50 border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Plot Dimensions */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Plot Dimensions
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="plotLength" className="text-foreground">
                      Plot Length (meters)
                    </Label>
                    <Input
                      id="plotLength"
                      name="plotLength"
                      type="number"
                      placeholder="e.g., 50"
                      value={formData.plotLength}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border text-foreground placeholder:text-foreground/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="plotWidth" className="text-foreground">
                      Plot Width (meters)
                    </Label>
                    <Input
                      id="plotWidth"
                      name="plotWidth"
                      type="number"
                      placeholder="e.g., 40"
                      value={formData.plotWidth}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border text-foreground placeholder:text-foreground/40"
                    />
                  </div>
                </div>
              </div>

              {/* Building Configuration */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Home className="w-5 h-5 text-primary" />
                  Building Configuration
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="floors" className="text-foreground">
                      Number of Floors
                    </Label>
                    <Input
                      id="floors"
                      name="floors"
                      type="number"
                      placeholder="e.g., 2"
                      value={formData.floors}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border text-foreground placeholder:text-foreground/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms" className="text-foreground">
                      Bedrooms
                    </Label>
                    <Input
                      id="bedrooms"
                      name="bedrooms"
                      type="number"
                      placeholder="e.g., 3"
                      value={formData.bedrooms}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border text-foreground placeholder:text-foreground/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bathrooms" className="text-foreground">
                      Bathrooms
                    </Label>
                    <Input
                      id="bathrooms"
                      name="bathrooms"
                      type="number"
                      placeholder="e.g., 2"
                      value={formData.bathrooms}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border text-foreground placeholder:text-foreground/40"
                    />
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Amenities & Options</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="kitchen"
                      checked={formData.hasKitchen}
                      onCheckedChange={(checked) => handleCheckboxChange('hasKitchen', checked as boolean)}
                      className="border-primary/50"
                    />
                    <Label htmlFor="kitchen" className="text-foreground font-normal cursor-pointer">
                      Kitchen
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="garden"
                      checked={formData.hasGarden}
                      onCheckedChange={(checked) => handleCheckboxChange('hasGarden', checked as boolean)}
                      className="border-primary/50"
                    />
                    <Label htmlFor="garden" className="text-foreground font-normal cursor-pointer">
                      Garden
                    </Label>
                  </div>
                </div>
              </div>

              {/* Parking Option */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Parking</h2>
                <RadioGroup value={formData.parking} onValueChange={(value) => setFormData(prev => ({ ...prev, parking: value }))}>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="single" id="parking-single" className="border-primary/50 text-primary" />
                    <Label htmlFor="parking-single" className="text-foreground font-normal cursor-pointer">
                      Single Garage
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="double" id="parking-double" className="border-primary/50 text-primary" />
                    <Label htmlFor="parking-double" className="text-foreground font-normal cursor-pointer">
                      Double Garage
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="none" id="parking-none" className="border-primary/50 text-primary" />
                    <Label htmlFor="parking-none" className="text-foreground font-normal cursor-pointer">
                      No Parking
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* House Style */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">House Style</h2>
                <RadioGroup value={formData.houseStyle} onValueChange={(value) => setFormData(prev => ({ ...prev, houseStyle: value }))}>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="modern" id="style-modern" className="border-primary/50 text-primary" />
                    <Label htmlFor="style-modern" className="text-foreground font-normal cursor-pointer">
                      Modern
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="traditional" id="style-traditional" className="border-primary/50 text-primary" />
                    <Label htmlFor="style-traditional" className="text-foreground font-normal cursor-pointer">
                      Traditional
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="duplex" id="style-duplex" className="border-primary/50 text-primary" />
                    <Label htmlFor="style-duplex" className="text-foreground font-normal cursor-pointer">
                      Duplex
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-8">
                <Link href="/" className="flex-1">
                  <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10 py-6 text-base">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back
                  </Button>
                </Link>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold py-6 text-base"
                >
                  {isLoading ? (
                    <>
                      <span className="inline-block animate-spin mr-2">⏳</span>
                      Generating...
                    </>
                  ) : (
                    <>
                      Generate AI Designs
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </main>
  )
}
