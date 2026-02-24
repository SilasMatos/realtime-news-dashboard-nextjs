import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

function FeaturedCardSkeleton() {
  return (
    <Card className="overflow-hidden border-border/50">
      <div className="grid gap-0 lg:grid-cols-2">
        <Skeleton className="aspect-video lg:aspect-auto lg:min-h-[320px]" />
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-4 w-28" />
            </div>
            <Skeleton className="mb-2 h-8 w-full" />
            <Skeleton className="mb-2 h-8 w-3/4" />
            <Skeleton className="mb-6 h-8 w-1/2" />
            <Skeleton className="mb-1 h-4 w-full" />
            <Skeleton className="mb-1 h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <div className="flex items-center justify-between border-t border-border/50 pt-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </div>
    </Card>
  )
}

function RegularCardSkeleton() {
  return (
    <Card className="flex h-full flex-col overflow-hidden border-border/50">
      <Skeleton className="aspect-video w-full" />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="mb-1 h-6 w-full" />
        <Skeleton className="mb-3 h-6 w-3/4" />
        <Skeleton className="mb-1 h-4 w-full" />
        <Skeleton className="mb-1 h-4 w-full" />
        <Skeleton className="mb-4 h-4 w-1/2" />
        <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-4">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-3 w-12" />
        </div>
      </div>
    </Card>
  )
}

export function NewsListSkeleton() {
  return (
    <main className="container mx-auto px-4 py-8 lg:py-12">
      <div className="mb-12">
        <Skeleton className="mb-4 h-12 w-2/3 lg:h-16" />
        <Skeleton className="h-6 w-96 max-w-full" />
      </div>

      <div className="space-y-10">
        <section>
          <Skeleton className="mb-6 h-4 w-32" />
          <FeaturedCardSkeleton />
        </section>

        <section>
          <Skeleton className="mb-6 h-4 w-40" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <RegularCardSkeleton key={i} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
