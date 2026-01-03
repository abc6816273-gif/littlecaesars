'use client'

import { DollarSign, Heart, Users, Sparkles } from 'lucide-react'

export default function TemplateButtons() {
  const templates = [
    {
      id: 'budget-friendly-week',
      title: 'Budget-Friendly Week',
      description: 'Complete 7-meal plan under $100 total',
      icon: DollarSign,
      gradient: 'from-green-400 to-green-600',
      features: [
        'Grilled Chicken options',
        'Value combinations',
        'Shared appetizers',
        'Smart side choices'
      ]
    },
    {
      id: 'health-conscious-week',
      title: 'Health-Conscious Week',
      description: 'Balanced nutrition, ~2000 calories/day',
      icon: Heart,
      gradient: 'from-blue-400 to-blue-600',
      features: [
        'Grilled proteins',
        'Fresh vegetable sides',
        'Portion-controlled options',
        'Lighter appetizers'
      ]
    },
    {
      id: 'family-fun-week',
      title: 'Family Fun Week',
      description: 'Perfect for 4+ people sharing',
      icon: Users,
      gradient: 'from-purple-400 to-purple-600',
      features: [
        'Shareable appetizers',
        'Kid-friendly options',
        'Group-size portions',
        'Variety for all tastes'
      ]
    }
  ]

  const handleTemplateClick = (templateId: string) => {
    console.log(`${templateId} template button clicked`)
    if (typeof window !== 'undefined' && (window as any).loadTemplate) {
      ;(window as any).loadTemplate(templateId)
    } else {
      alert('⚠️ Template system not ready. Please wait a moment and try again.')
    }
  }

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            Quick Start Templates
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get Started Instantly
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our expertly crafted meal plans designed for different needs, budgets, and family sizes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {templates.map((template) => {
            const IconComponent = template.icon
            return (
              <div
                key={template.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                {/* Header with Icon and Gradient */}
                <div className={`bg-gradient-to-r ${template.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{template.title}</h3>
                    <p className="text-white/90 text-lg">{template.description}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">What's Included:</h4>
                    <ul className="space-y-3">
                      {template.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className={`w-2 h-2 bg-gradient-to-r ${template.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button
                    onClick={() => handleTemplateClick(template.id)}
                    className={`w-full bg-gradient-to-r ${template.gradient} text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 group-hover:scale-105`}
                  >
                    Use This Template
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              How Templates Work
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <p className="text-gray-600">Choose your preferred template based on your needs and budget</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold text-xl">2</span>
                </div>
                <p className="text-gray-600">Template automatically populates your meal plan with curated items</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold text-xl">3</span>
                </div>
                <p className="text-gray-600">Customize, adjust, and download your personalized meal plan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
