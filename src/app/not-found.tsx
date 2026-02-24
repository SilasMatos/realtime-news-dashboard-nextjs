import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border border-border p-8 text-center">
        <AlertTriangle className="mx-auto size-8 text-destructive" />
        <h2 className="mt-4 text-xl font-semibold">Página não encontrada</h2>
        <p className="mb-6 mt-2 text-muted-foreground">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button asChild variant="outline">
          <Link href="/">Voltar para o início</Link>
        </Button>
      </div>
    </div>
  )
}
