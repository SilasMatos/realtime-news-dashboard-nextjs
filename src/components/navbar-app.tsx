'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Menu,
  Moon,
  Sun,
  Search,
  Globe,
  Newspaper,
  Trophy,
  TrendingUp,
  Cpu,
  Clapperboard,
  FlaskConical,
  Heart,
  Landmark
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { useI18n } from '@/i18n/i18n-provider'
import { LOCALE_LABELS } from '@/i18n/config'
import type { Locale } from '@/i18n/config'
import { SearchCommand } from '@/components/search-command'

interface MegaMenuCategory {
  icon: React.ReactNode
  titleKey: string
  items: { labelKey: string; href: string }[]
}

function useMegaMenuCategories(): {
  news: MegaMenuCategory
  sports: MegaMenuCategory
  economy: MegaMenuCategory
  technology: MegaMenuCategory
  entertainment: MegaMenuCategory
  more: MegaMenuCategory[]
} {
  return {
    news: {
      icon: <Newspaper className="size-5 text-primary" />,
      titleKey: 'navbar.news',
      items: [
        { labelKey: 'navbar.breakingNews', href: '/?category=breaking' },
        { labelKey: 'navbar.latestHeadlines', href: '/?category=headlines' },
        { labelKey: 'navbar.worldNews', href: '/?category=world' },
        { labelKey: 'navbar.localNews', href: '/?category=local' }
      ]
    },
    sports: {
      icon: <Trophy className="size-5 text-primary" />,
      titleKey: 'navbar.sports',
      items: [
        { labelKey: 'navbar.football', href: '/?category=football' },
        { labelKey: 'navbar.basketball', href: '/?category=basketball' },
        { labelKey: 'navbar.tennis', href: '/?category=tennis' },
        { labelKey: 'navbar.formula1', href: '/?category=f1' }
      ]
    },
    economy: {
      icon: <TrendingUp className="size-5 text-primary" />,
      titleKey: 'navbar.economy',
      items: [
        { labelKey: 'navbar.markets', href: '/?category=markets' },
        { labelKey: 'navbar.stocks', href: '/?category=stocks' },
        { labelKey: 'navbar.crypto', href: '/?category=crypto' },
        { labelKey: 'navbar.finance', href: '/?category=finance' }
      ]
    },
    technology: {
      icon: <Cpu className="size-5 text-primary" />,
      titleKey: 'navbar.technology',
      items: [
        { labelKey: 'navbar.ai', href: '/?category=ai' },
        { labelKey: 'navbar.gadgets', href: '/?category=gadgets' },
        { labelKey: 'navbar.startups', href: '/?category=startups' },
        { labelKey: 'navbar.apps', href: '/?category=apps' }
      ]
    },
    entertainment: {
      icon: <Clapperboard className="size-5 text-primary" />,
      titleKey: 'navbar.entertainment',
      items: [
        { labelKey: 'navbar.movies', href: '/?category=movies' },
        { labelKey: 'navbar.music', href: '/?category=music' },
        { labelKey: 'navbar.gaming', href: '/?category=gaming' },
        { labelKey: 'navbar.celebrities', href: '/?category=celebrities' }
      ]
    },
    more: [
      {
        icon: <FlaskConical className="size-5 text-primary" />,
        titleKey: 'navbar.science',
        items: []
      },
      {
        icon: <Heart className="size-5 text-primary" />,
        titleKey: 'navbar.health',
        items: []
      },
      {
        icon: <Landmark className="size-5 text-primary" />,
        titleKey: 'navbar.politics',
        items: []
      }
    ]
  }
}

function MegaMenuPanel({
  category,
  t
}: {
  category: MegaMenuCategory
  t: (key: string) => string
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 px-3 py-2">
        {category.icon}
        <span className="text-sm font-semibold">{t(category.titleKey)}</span>
      </div>
      {category.items.map(item => (
        <NavigationMenuLink key={item.labelKey} asChild>
          <Link
            href={item.href}
            className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {t(item.labelKey)}
          </Link>
        </NavigationMenuLink>
      ))}
    </div>
  )
}

export function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { t, locale, setLocale } = useI18n()
  const categories = useMegaMenuCategories()

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    aria-label="Menu"
                  >
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle className="font-serif text-xl font-light tracking-wide">
                      matos<span className="italic">news.</span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 flex flex-col gap-4">
                    {Object.values(categories)
                      .flat()
                      .filter(
                        (cat): cat is MegaMenuCategory =>
                          'titleKey' in cat && 'items' in cat
                      )
                      .map(cat => (
                        <div key={cat.titleKey}>
                          <div className="flex items-center gap-2 px-2 py-1">
                            {cat.icon}
                            <span className="text-sm font-semibold">
                              {t(cat.titleKey)}
                            </span>
                          </div>
                          {cat.items.map(item => (
                            <Link
                              key={item.labelKey}
                              href={item.href}
                              className="block rounded-md px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              {t(item.labelKey)}
                            </Link>
                          ))}
                          <Separator className="my-2" />
                        </div>
                      ))}
                  </div>
                </SheetContent>
              </Sheet>

              <Link href="/" className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-primary" />
                <span className="font-serif text-xl font-light tracking-wide">
                  matos<span className="italic">news.</span>
                </span>
              </Link>
            </div>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {t('navbar.news')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] grid-cols-2 gap-2 p-4">
                      <MegaMenuPanel category={categories.news} t={t} />
                      <div className="flex flex-col gap-3 rounded-lg bg-muted/50 p-4">
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {t('navbar.categories')}
                        </p>
                        {categories.more.map(cat => (
                          <Link
                            key={cat.titleKey}
                            href={`/?category=${t(cat.titleKey).toLowerCase()}`}
                            className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
                          >
                            {cat.icon}
                            {t(cat.titleKey)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {t('navbar.sports')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-4">
                      <MegaMenuPanel category={categories.sports} t={t} />
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {t('navbar.economy')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-4">
                      <MegaMenuPanel category={categories.economy} t={t} />
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {t('navbar.technology')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-4">
                      <MegaMenuPanel category={categories.technology} t={t} />
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {t('navbar.entertainment')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-4">
                      <MegaMenuPanel
                        category={categories.entertainment}
                        t={t}
                      />
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                aria-label={t('common.search')}
              >
                <Search className="size-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={t('common.language')}
                  >
                    <Globe className="size-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {(Object.entries(LOCALE_LABELS) as [Locale, string][]).map(
                    ([key, label]) => (
                      <DropdownMenuItem
                        key={key}
                        onClick={() => setLocale(key)}
                        className={
                          locale === key ? 'bg-accent font-medium' : ''
                        }
                      >
                        {label}
                      </DropdownMenuItem>
                    )
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={t('common.theme')}
              >
                {isDark ? (
                  <Sun className="size-5" />
                ) : (
                  <Moon className="size-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}
