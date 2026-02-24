'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function DashboardError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="container mx-auto flex min-h-[60vh] items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md border-border/50 p-8 text-center">
        <AlertTriangle className="mx-auto size-10 text-destructive" />
        <h2 className="mt-4 text-xl font-semibold">Error Loading News</h2>
        <p className="mb-6 mt-2 text-sm text-muted-foreground">
          Something went wrong while loading news articles. Please try again.
        </p>
        <Button onClick={reset} variant="outline" className="gap-2">
          <RefreshCw className="size-4" />
          Try Again
        </Button>
      </Card>
    </main>
  )
}
