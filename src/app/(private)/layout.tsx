import { Navbar } from '@/components/navbar-app'

export default function PrivateLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col bg-background">
      <Navbar />
      {children}
    </div>
  )
}
