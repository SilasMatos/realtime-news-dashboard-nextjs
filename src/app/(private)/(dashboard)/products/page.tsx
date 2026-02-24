import { Card } from '@/components/ui/card'

interface User {
  id: number
  name: string
  email: string
}

export default async function ProductsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    cache: 'no-store'
  })
  const users: User[] = await res.json()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-6 font-serif text-3xl font-light tracking-tight">
        Users
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map(user => (
          <Card key={user.id} className="border-border/50 p-6">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </Card>
        ))}
      </div>
    </main>
  )
}

// Função SSR (executada no servidor a cada requisição)
