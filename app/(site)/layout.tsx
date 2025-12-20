import { Header, Footer } from '@/components/layout'
import { StickyHeader } from '@/components/layout/StickyHeader'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <StickyHeader>
        <Header />
      </StickyHeader>
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  )
}
