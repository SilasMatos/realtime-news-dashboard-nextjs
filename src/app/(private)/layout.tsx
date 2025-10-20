import { Navbar } from "@/components/navbar-app"

export default function PrivateLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (

        <div className="flex h-screen flex-col bg-[#f2f2f2]">
    
          <Navbar />
            {children}
     
        </div>

  )
}
