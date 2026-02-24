'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Trophy,
  TrendingUp,
  Cpu,
  Clapperboard,
  Heart,
  Landmark,
  Search,
  Clock
} from 'lucide-react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/components/ui/command'
import { useI18n } from '@/i18n/i18n-provider'

interface SearchCommandProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const SEARCH_CATEGORIES = [
  { key: 'search.technology', icon: Cpu, query: 'technology' },
  { key: 'search.sports', icon: Trophy, query: 'sports' },
  { key: 'search.economy', icon: TrendingUp, query: 'economy' },
  { key: 'search.politics', icon: Landmark, query: 'politics' },
  { key: 'search.entertainment', icon: Clapperboard, query: 'entertainment' },
  { key: 'search.health', icon: Heart, query: 'health' }
]

const STORAGE_KEY = 'recent-searches'
const MAX_RECENT = 5

function getRecentSearches(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function saveRecentSearch(query: string) {
  const recent = getRecentSearches().filter(s => s !== query)
  recent.unshift(query)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recent.slice(0, MAX_RECENT)))
}

export function SearchCommand({ open, onOpenChange }: SearchCommandProps) {
  const { t } = useI18n()
  const router = useRouter()
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  useEffect(() => {
    if (open) {
      setRecentSearches(getRecentSearches())
    }
  }, [open])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        onOpenChange(!open)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onOpenChange])

  const handleSelect = useCallback(
    (query: string) => {
      saveRecentSearch(query)
      onOpenChange(false)
      router.push(`/?q=${encodeURIComponent(query)}`)
    },
    [onOpenChange, router]
  )

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title={t('common.search')}
      description={t('common.searchPlaceholder')}
    >
      <CommandInput placeholder={t('common.searchPlaceholder')} />
      <CommandList>
        <CommandEmpty>{t('common.noResults')}</CommandEmpty>

        {recentSearches.length > 0 && (
          <>
            <CommandGroup heading={t('search.recentSearches')}>
              {recentSearches.map(search => (
                <CommandItem
                  key={search}
                  value={search}
                  onSelect={() => handleSelect(search)}
                >
                  <Clock className="mr-2 size-4 text-muted-foreground" />
                  <span>{search}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
          </>
        )}

        <CommandGroup heading={t('search.suggestions')}>
          {SEARCH_CATEGORIES.map(category => (
            <CommandItem
              key={category.key}
              value={t(category.key)}
              onSelect={() => handleSelect(category.query)}
            >
              <category.icon className="mr-2 size-4 text-muted-foreground" />
              <span>{t(category.key)}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading={t('search.trending')}>
          <CommandItem
            value="artificial intelligence"
            onSelect={() => handleSelect('artificial intelligence')}
          >
            <Search className="mr-2 size-4 text-muted-foreground" />
            <span>{t('navbar.ai')}</span>
          </CommandItem>
          <CommandItem value="crypto" onSelect={() => handleSelect('crypto')}>
            <Search className="mr-2 size-4 text-muted-foreground" />
            <span>{t('navbar.crypto')}</span>
          </CommandItem>
          <CommandItem
            value="startups"
            onSelect={() => handleSelect('startups')}
          >
            <Search className="mr-2 size-4 text-muted-foreground" />
            <span>{t('navbar.startups')}</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
