import { NewsHeader } from "@/feactures/dashboard/components/news-header"
import { NewsList } from "@/feactures/dashboard/components/news-list"
import { NewsStats } from "@/feactures/dashboard/components/news-starts"

// Mock data baseado na estrutura fornecida
const mockNews = [
  {
    source: { id: "the-verge", name: "The Verge" },
    author: "Jess Weatherbed",
    title: "Apple TV Plus is being rebranded to… Apple TV",
    description:
      "The Apple TV Plus streaming service is being rebranded with a vibrant new identity that aims to compete with major streaming platforms.",
    url: "https://www.theverge.com/apple-tv-rebrand",
    urlToImage: "/apple-tv-streaming-interface-modern.jpg",
    publishedAt: "2025-10-13T16:38:44Z",
    content:
      "Apple says its given the streaming service a vibrant new identity that better reflects its premium content offerings and user experience...",
  },
  {
    source: { id: "techcrunch", name: "TechCrunch" },
    author: "Sarah Perez",
    title: "Meta announces new AI features for Instagram and WhatsApp",
    description:
      "Meta is rolling out several AI-powered features across its platforms, including advanced image generation and smart replies.",
    url: "https://techcrunch.com/meta-ai-features",
    urlToImage: "/meta-ai-technology-interface-futuristic.jpg",
    publishedAt: "2025-10-13T14:22:10Z",
    content:
      "The social media giant is doubling down on artificial intelligence with new features that promise to transform how users interact...",
  },
  {
    source: { id: "wired", name: "Wired" },
    author: "Lauren Goode",
    title: "The Future of Electric Vehicles: What to Expect in 2026",
    description:
      "From longer ranges to faster charging, the next generation of EVs promises significant improvements over current models.",
    url: "https://wired.com/ev-future-2026",
    urlToImage: "/electric-vehicle-charging-station-modern-design.jpg",
    publishedAt: "2025-10-13T12:15:33Z",
    content:
      "As battery technology advances and charging infrastructure expands, electric vehicles are becoming more practical for everyday use...",
  },
  {
    source: { id: "ars-technica", name: "Ars Technica" },
    author: "Ron Amadeo",
    title: "Google announces major updates to Android 15",
    description:
      "The latest version of Android brings improved privacy controls, better battery management, and enhanced AI capabilities.",
    url: "https://arstechnica.com/android-15-updates",
    urlToImage: "/android-smartphone-interface-colorful.jpg",
    publishedAt: "2025-10-13T10:45:22Z",
    content:
      "Google has unveiled Android 15 with a focus on user privacy and AI integration, marking a significant evolution in mobile operating systems...",
  },
  {
    source: { id: "engadget", name: "Engadget" },
    author: "Devindra Hardawar",
    title: "Sony reveals PlayStation 6 development details",
    description:
      "The next generation gaming console promises 8K gaming, ray tracing improvements, and revolutionary haptic feedback.",
    url: "https://engadget.com/playstation-6-details",
    urlToImage: "/gaming-console-futuristic-design.jpg",
    publishedAt: "2025-10-13T09:30:15Z",
    content:
      "Sony has shared exciting details about the PlayStation 6, which is expected to launch in late 2026 with groundbreaking features...",
  },
  {
    source: { id: "the-verge", name: "The Verge" },
    author: "Tom Warren",
    title: "Microsoft unveils new Surface devices with AI chips",
    description:
      "The latest Surface lineup features dedicated AI processors for enhanced productivity and creative workflows.",
    url: "https://www.theverge.com/surface-ai-chips",
    urlToImage: "/microsoft-surface-laptop-sleek-design.jpg",
    publishedAt: "2025-10-13T08:20:44Z",
    content:
      "Microsoft is betting big on AI with its new Surface devices, which include custom silicon designed specifically for machine learning tasks...",
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />

      <main className="container mx-auto px-4 py-8 lg:py-12">
        <div className="mb-12">
          <h1 className="font-serif text-4xl lg:text-6xl font-light tracking-tight text-balance mb-4">Latest News</h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Stay informed with the latest technology news and updates from around the world
          </p>
        </div>

        <NewsStats articles={mockNews} />

        <NewsList articles={mockNews} />
      </main>
    </div>
  )
}
