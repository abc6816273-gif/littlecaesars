'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const faqData = [
  {
    question: "What are the current Little Caesars menu prices?",
    answer: "Little Caesars Hot-N-Ready pizzas start at $5.55 for cheese and pepperoni. Specialty pizzas range from $8.99 to $10.99. Crazy Bread is $3.99, and beverages range from $1.49 to $2.29. Prices may vary by location and are subject to change."
  },
  {
    question: "How many calories are in a Little Caesars pizza slice?",
    answer: "Calories vary by pizza type. A slice of Hot-N-Ready cheese pizza has about 250 calories, while pepperoni has 280 calories. Specialty pizzas like the 3 Meat Treat have around 340 calories per slice. These are estimates based on standard recipes and large pizza slices."
  },
  {
    question: "What ingredients are in Little Caesars pizza?",
    answer: "Little Caesars uses fresh dough made daily in-store, vine-ripened tomato sauce, and 100% real mozzarella cheese that's never frozen. Toppings include pepperoni, Italian sausage, fresh vegetables, and premium meats. All ingredients are selected for quality and freshness."
  },
  {
    question: "Are Little Caesars Hot-N-Ready pizzas always available?",
    answer: "Hot-N-Ready pizzas are typically available during peak hours (usually lunch and dinner times). Availability may vary by location and time of day. If they're not ready, most locations can prepare them within 8-10 minutes."
  },
  {
    question: "Does Little Caesars offer gluten-free or vegetarian options?",
    answer: "Little Caesars offers several vegetarian options including cheese pizza, veggie pizza with fresh vegetables, and Crazy Bread. While they don't currently offer gluten-free crust, they do provide detailed allergen information for customers with dietary restrictions."
  },
  {
    question: "What's the difference between Hot-N-Ready and ExtraMostBestest pizzas?",
    answer: "ExtraMostBestest pizzas have more pepperoni and cheese than regular Hot-N-Ready pizzas. They cost about $1 more but offer significantly more toppings. The crust and sauce remain the same high-quality ingredients used in all Little Caesars pizzas."
  },
  {
    question: "How can I find nutritional information for Little Caesars menu items?",
    answer: "Complete nutritional information is available on the Little Caesars website and in-store. This includes calories, fat content, sodium levels, and allergen information. You can also ask restaurant staff for printed nutritional guides."
  },
  {
    question: "Does Little Caesars offer delivery and online ordering?",
    answer: "Most Little Caesars locations offer online ordering through their website and mobile app. Delivery is available through third-party services like DoorDash, Uber Eats, and Grubhub in many areas. Check with your local store for specific services available."
  }
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq, index) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
}

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="w-10 h-10 text-little-caesars-orange mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Got questions about Little Caesars menu, prices, or nutrition? We've got answers to help you make the best choices for your next order.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-gray-900 text-lg pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-little-caesars-orange flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div 
                    id={`faq-answer-${index}`}
                    className="px-4 pb-6 text-gray-700 leading-relaxed"
                  >
                    <p className="text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Help Section */}
          <div className="mt-8 text-center bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Still Have Questions?</h3>
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? Contact your local Little Caesars restaurant or visit our contact page for more help.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/contact"
                className="bg-little-caesars-orange text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/store-locator"
                className="bg-white text-little-caesars-orange border-2 border-little-caesars-orange px-6 py-2 rounded-lg font-semibold hover:bg-little-caesars-orange hover:text-white transition-colors"
              >
                Find Store
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
