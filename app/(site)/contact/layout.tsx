import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Little Caesars Menu Support 2026',
  description: 'Contact Little Caesars Menu for website feedback, menu updates, technical support, and general inquiries. Get help with your questions about our independent menu guide.',
  keywords: [
    'Contact Little Caesars Menu',
    'Menu website support',
    'Little Caesars feedback',
    'Menu information contact',
    'Pizza menu help 2026'
  ],
  alternates: {
    canonical: 'https://littlecaesarsmenu.us/contact',
  },
  openGraph: {
    title: 'Contact Us | Little Caesars Menu Support',
    description: 'Contact Little Caesars Menu for website feedback, menu updates, technical support, and general inquiries.',
    url: 'https://littlecaesarsmenu.us/contact',
    siteName: 'Little Caesars Menu',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Little Caesars Menu Support',
    description: 'Contact Little Caesars Menu for website feedback, menu updates, technical support, and general inquiries.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
