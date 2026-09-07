import { useState, useEffect } from 'react'
import foodGrid1 from '@/imports/Screenshot_2026-08-23_194106.png'
import foodGrid2 from '@/imports/Screenshot_2026-08-23_194114.png'
import foodGrid3 from '@/imports/Screenshot_2026-08-23_194120.png'
import foodGrid4 from '@/imports/Screenshot_2026-08-23_194128.png'
import chessGarden from '@/imports/Screenshot_2026-08-23_194159.png'
import cafeExterior from '@/imports/Screenshot_2026-08-23_194215.png'
import outdoorTerrace from '@/imports/Screenshot_2026-08-23_194238.png'
import foodWithView from '@/imports/Screenshot_2026-08-23_194304.png'

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=Bir+Schiir+1056%2C+3825+M%C3%BCrren%2C+Switzerland'
const PHONE = '+41 76 213 73 05'
const PHONE_HREF = 'tel:+41762137305'

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <span
      className="inline-flex gap-0.5 text-[#C4A07A]"
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Visit', href: '#visit' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#F8F4EE]/96 backdrop-blur-sm shadow-sm border-b border-[#E2D9CE]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-xl font-medium tracking-wide text-[#252018]" aria-label="Café LIV — back to top">
          Café LIV
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-[#3D3830] hover:text-[#5A7055] transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-5 py-2 bg-[#5A7055] text-white rounded-full hover:bg-[#4a5f46] transition-colors tracking-wide"
            aria-label="Get directions to Café LIV in Mürren (opens Google Maps)"
          >
            Get Directions
          </a>
        </div>

        <button
          className="md:hidden p-2 text-[#252018]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#F8F4EE] border-t border-[#E2D9CE] px-6 py-6 flex flex-col gap-5" role="navigation" aria-label="Mobile navigation">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-[#3D3830] hover:text-[#5A7055] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center text-sm font-medium px-5 py-3 bg-[#5A7055] text-white rounded-full hover:bg-[#4a5f46] transition-colors"
          >
            Get Directions
          </a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end" id="home">
      <img
        src={foodWithView}
        alt="Sandwich and pumpkin soup on Café LIV outdoor terrace with Eiger mountain and Mürren village in the background, Switzerland"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        decoding="async"
        width="1200"
        height="800"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#161310]/85 via-[#161310]/30 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C4A07A" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-[#C4A07A] text-sm font-medium tracking-widest uppercase">
              Mürren, Switzerland
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.6rem,7vw,5rem)] font-medium text-white leading-[1.08] mb-5">
            Coffee, Cake &amp;<br />Alpine Moments
          </h1>

          <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-xl">
            A cozy café in the heart of Mürren, surrounded by the beauty of the Swiss Alps.
          </p>

          <div className="flex items-center gap-2 mb-8">
            <StarRating />
            <span className="text-white text-sm font-medium">4.7 on Google</span>
            <span className="text-white/50">·</span>
            <span className="text-white/70 text-sm">637+ Reviews</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-[#5A7055] text-white text-sm font-medium rounded-full hover:bg-[#4a5f46] transition-colors tracking-wide"
            >
              Get Directions
            </a>
            <a
              href="#menu"
              className="px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white border border-white/30 text-sm font-medium rounded-full hover:bg-white/20 transition-colors tracking-wide"
            >
              Explore the Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function StorySection() {
  const highlights = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
      title: 'Great Coffee',
      body: 'Thoughtfully prepared coffee and café favorites.',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: 'Fresh & Delicious',
      body: 'Cakes, pastries, sandwiches and comforting meals.',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M3 7v4a1 1 0 0 0 1 1h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h3a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4z" />
          <line x1="12" y1="14" x2="12" y2="20" />
          <line x1="8" y1="20" x2="16" y2="20" />
        </svg>
      ),
      title: 'Vegan-Friendly',
      body: 'A selection of vegan and vegetarian choices.',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" />
        </svg>
      ),
      title: 'Alpine Atmosphere',
      body: 'A relaxing place surrounded by spectacular mountain scenery.',
    },
  ]

  return (
    <section id="story" className="py-20 md:py-32 bg-[#F8F4EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={cafeExterior}
              alt="Café LIV exterior in Mürren — traditional Swiss chalet building with café sign, plants and outdoor menu board"
              className="w-full aspect-[4/5] object-cover rounded-sm"
              loading="lazy"
              decoding="async"
              width="600"
              height="750"
            />
            <div className="absolute -bottom-5 -right-5 bg-white border border-[#E2D9CE] px-6 py-4 shadow-md hidden md:block">
              <div className="flex items-center gap-2 mb-1">
                <StarRating />
                <span className="text-sm font-semibold text-[#252018]">4.7</span>
              </div>
              <p className="text-xs text-[#7A7068]">637+ Google Reviews</p>
            </div>
          </div>

          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-[#5A7055] mb-4 block">
              Our Story
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-medium text-[#252018] leading-tight mb-6">
              A little café in a remarkable place.
            </h2>
            <p className="text-[#3D3830] leading-relaxed text-[1.05rem] mb-10">
              Café LIV is a welcoming spot in Mürren for good coffee, fresh treats, light meals
              and a moment to slow down while enjoying the beauty of the Swiss Alps.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((h) => (
                <div key={h.title} className="flex gap-3.5">
                  <div className="mt-0.5 text-[#5A7055] shrink-0">{h.icon}</div>
                  <div>
                    <h3 className="font-medium text-[#252018] text-sm mb-1">{h.title}</h3>
                    <p className="text-[#7A7068] text-sm leading-relaxed">{h.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MenuSection() {
  const categories = [
    {
      name: 'Coffee & Drinks',
      items: ['Cappuccino', 'Café Melange', 'Hot Chocolate', 'Ein Süßer Traum Von Café'],
    },
    {
      name: 'Sweet Treats',
      items: ['Carrot Cake', 'Croissant', 'GF Peanut Chocolate Chip Cookie'],
    },
    {
      name: 'Light Meals',
      items: ['Pumpkin Soup', 'Cranberry Toast', 'Vegan Toast', 'Cheese Sandwich', 'Veggie Sandwich'],
    },
  ]

  return (
    <section id="menu" className="py-20 md:py-32 bg-[#EFE9E0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-[#5A7055] mb-4 block">
            Menu Highlights
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium text-[#252018] leading-tight">
            Something delicious for every kind of day.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-14">
          {categories.map((cat, ci) => {
            const img = ci === 0 ? foodGrid2 : ci === 1 ? foodGrid1 : foodGrid3
            const imgAlt =
              ci === 0
                ? 'Coffee and drinks at Café LIV'
                : ci === 1
                ? 'Fresh cakes and pastries at Café LIV'
                : 'Light meals at Café LIV'
            return (
              <div key={cat.name} className="group">
                <div className="overflow-hidden mb-5">
                  <img
                    src={img}
                    alt={imgAlt}
                    className="w-full aspect-square object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                  />
                </div>
                <h3 className="font-display text-lg font-medium text-[#252018] mb-4 pb-3 border-b border-[#E2D9CE]">
                  {cat.name}
                </h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-[#3D3830]">
                      <span className="w-1 h-1 rounded-full bg-[#8B6645] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-xs text-[#7A7068] mb-5 italic">
            Menu highlights — ask staff for the full selection and daily specials.
          </p>
          <a
            href="#visit"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5A7055] border border-[#5A7055] px-7 py-3 rounded-full hover:bg-[#5A7055] hover:text-white transition-colors"
          >
            Visit & Explore the Menu
          </a>
        </div>
      </div>
    </section>
  )
}

function VeganSection() {
  return (
    <section className="py-20 md:py-32 bg-[#F8F4EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <span className="text-xs font-medium tracking-widest uppercase text-[#5A7055] mb-4 block">
              Vegan &amp; Vegetarian
            </span>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-medium text-[#252018] leading-tight mb-6">
              Good food, your way.
            </h2>
            <p className="text-[#3D3830] leading-relaxed mb-8 text-[1.05rem]">
              Café LIV offers a thoughtful selection of vegetarian and vegan-friendly choices,
              so everyone can enjoy something delicious during their visit.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {['Vegan Toast', 'Veggie Sandwich', 'Pumpkin Soup', 'Vegan-friendly treats'].map((item) => (
                <div
                  key={item}
                  className="bg-[#D4DFD2] px-4 py-3 text-sm font-medium text-[#3D3830] rounded-sm"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#7A7068] mt-5 italic">
              Ask staff for the current vegan selection and daily specials.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={foodGrid3}
              alt="Vegan and vegetarian options at Café LIV including veggie sandwich and hot chocolate"
              className="w-full aspect-[4/5] object-cover rounded-sm"
              loading="lazy"
              decoding="async"
              width="600"
              height="750"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="relative py-0">
      <div className="relative h-[65vh] min-h-[450px] flex items-center">
        <img
          src={outdoorTerrace}
          alt="Guests enjoying coffee and cake at Café LIV outdoor terrace with green bistro chairs and the Eiger mountain in the background, Mürren Switzerland"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          width="1200"
          height="800"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#161310]/80 via-[#161310]/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-lg">
            <span className="text-xs font-medium tracking-widest uppercase text-[#C4A07A] mb-5 block">
              The Experience
            </span>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-medium text-white leading-tight mb-6">
              More than coffee.<br />{"It's"} Mürren.
            </h2>
            <p className="text-white/80 text-lg leading-relaxed italic font-display">
              &ldquo;Take a break from exploring. Enjoy something warm, something sweet,
              and the view outside.&rdquo;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F8F4EE] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src={chessGarden}
              alt="Giant outdoor chess board in the garden at Café LIV, Mürren — with traditional Swiss chalet buildings behind"
              className="w-full aspect-square object-cover rounded-sm"
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
            />
            <img
              src={foodGrid4}
              alt="Hot chocolate, croissant and GF peanut cookie served at Café LIV"
              className="w-full aspect-square object-cover rounded-sm"
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
            />
            <img
              src={foodGrid1}
              alt="Carrot cake and cappuccino at Café LIV — two of the most popular items — with mountain view visible through the window"
              className="w-full aspect-square object-cover rounded-sm"
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
            />
            <img
              src={cafeExterior}
              alt="Café LIV storefront in Mürren village with chalet architecture, string lights and potted plants"
              className="w-full aspect-square object-cover rounded-sm"
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ReviewsSection() {
  const reviews = [
    {
      text: 'Customer review — replace with verified Google review.',
      theme: 'delicious coffee · friendly staff',
    },
    {
      text: 'Customer review — replace with verified Google review.',
      theme: 'fresh cakes · mountain views',
    },
    {
      text: 'Customer review — replace with verified Google review.',
      theme: 'vegan options · relaxing atmosphere',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-[#EFE9E0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-[#5A7055] mb-4 block">
            Reviews
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium text-[#252018] leading-tight mb-4">
            Loved by visitors.
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="font-display text-5xl font-medium text-[#252018]">4.7</span>
            <div>
              <StarRating count={5} />
              <p className="text-sm text-[#7A7068] mt-1">637+ Google Reviews</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white border border-[#E2D9CE] p-7 rounded-sm">
              <StarRating count={5} />
              <p className="mt-4 text-[#3D3830] text-sm leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-5 pt-5 border-t border-[#E2D9CE] flex flex-wrap gap-2">
                {r.theme.split(' · ').map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-[#D4DFD2] text-[#5A7055] font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#7A7068] mt-8 italic">
          Placeholder reviews — to be replaced with verified Google reviews provided by the business.
        </p>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=Café+LIV+Mürren+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5A7055] hover:underline"
          >
            Read all reviews on Google
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#F8F4EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12">
          <span className="text-xs font-medium tracking-widest uppercase text-[#5A7055] mb-4 block">
            Gallery
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium text-[#252018] leading-tight">
            A glimpse of Café LIV.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-4">
          <div className="col-span-12 md:col-span-7 row-span-2">
            <img
              src={foodWithView}
              alt="Sandwich and pumpkin soup on Café LIV outdoor terrace with snow-capped Eiger and Mürren village in the background"
              className="w-full h-full min-h-[300px] object-cover rounded-sm"
              style={{ maxHeight: '560px' }}
              loading="lazy"
              decoding="async"
              width="840"
              height="560"
            />
          </div>
          <div className="col-span-6 md:col-span-5">
            <img
              src={cafeExterior}
              alt="Café LIV exterior — Swiss chalet building with café sign, string lights and outdoor specials board"
              className="w-full aspect-[4/3] object-cover rounded-sm"
              loading="lazy"
              decoding="async"
              width="600"
              height="450"
            />
          </div>
          <div className="col-span-6 md:col-span-5">
            <img
              src={outdoorTerrace}
              alt="Guests enjoying coffee at Café LIV green bistro terrace with the Swiss Alps visible in the distance"
              className="w-full aspect-[4/3] object-cover rounded-sm"
              loading="lazy"
              decoding="async"
              width="600"
              height="450"
            />
          </div>
          <div className="col-span-6 md:col-span-4">
            <img
              src={foodGrid1}
              alt="Popular Carrot Cake and Cappuccino served at Café LIV Mürren"
              className="w-full aspect-square object-cover rounded-sm"
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
            />
          </div>
          <div className="col-span-6 md:col-span-4">
            <img
              src={chessGarden}
              alt="Giant chess board in the outdoor garden area adjacent to Café LIV, Mürren Switzerland"
              className="w-full aspect-square object-cover rounded-sm"
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <img
              src={foodGrid2}
              alt="Vegan Toast and Café Melange coffee at Café LIV"
              className="w-full aspect-square object-cover rounded-sm"
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
            />
          </div>
        </div>

        <p className="text-xs text-[#7A7068] mt-5 italic text-center">
          Images may be replaced with approved original photographs by the business owner.
        </p>
      </div>
    </section>
  )
}

function InstagramSection() {
  const gridImages = [foodGrid1, foodGrid2, foodGrid3, foodGrid4, outdoorTerrace, foodWithView]

  return (
    <section className="py-20 md:py-24 bg-[#EFE9E0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <span className="text-xs font-medium tracking-widest uppercase text-[#5A7055] mb-4 block">
            Instagram
          </span>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-medium text-[#252018]">
            Follow along
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 mb-8">
          {gridImages.map((img, i) => (
            <div key={i} className="group overflow-hidden cursor-pointer">
              <img
                src={img}
                alt={`Café LIV — photo ${i + 1} from Instagram @cafeliv_muerren`}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-400"
                loading="lazy"
                decoding="async"
                width="200"
                height="200"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/cafeliv_muerren"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-sm font-medium text-[#252018] border border-[#E2D9CE] px-7 py-3 rounded-full hover:bg-[#252018] hover:text-white hover:border-[#252018] transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @cafeliv_muerren
          </a>
        </div>
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section id="visit" className="py-20 md:py-32 bg-[#F8F4EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-[#5A7055] mb-4 block">
              Find Us
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium text-[#252018] leading-tight mb-8">
              Find us in Mürren.
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="mt-1 text-[#5A7055] shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[#252018] text-sm mb-1">Address</p>
                  <address className="not-italic text-[#3D3830] text-sm leading-relaxed">
                    Bir Schiir 1056<br />
                    3825 Mürren<br />
                    Switzerland
                  </address>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-[#5A7055] shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[#252018] text-sm mb-1">Phone</p>
                  <a
                    href={PHONE_HREF}
                    className="text-[#3D3830] text-sm hover:text-[#5A7055] transition-colors"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-[#5A7055] shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[#252018] text-sm mb-1">Opening Hours</p>
                  <p className="text-[#3D3830] text-sm">
                    Open until approximately 5:30 PM
                  </p>
                  <p className="text-xs text-[#7A7068] mt-1 italic">
                    Hours subject to change — please call ahead to confirm.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-[#5A7055] text-white text-sm font-medium rounded-full hover:bg-[#4a5f46] transition-colors text-center tracking-wide"
              >
                Get Directions
              </a>
              <a
                href={PHONE_HREF}
                className="px-7 py-3.5 border border-[#252018] text-[#252018] text-sm font-medium rounded-full hover:bg-[#252018] hover:text-white transition-colors text-center tracking-wide"
              >
                Call Café LIV
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#D4DFD2] rounded-sm overflow-hidden aspect-[4/3] flex flex-col">
              <div className="flex-1 relative">
                <img
                  src={outdoorTerrace}
                  alt="Café LIV outdoor terrace area with Swiss Alps backdrop — Mürren, Switzerland"
                  className="w-full h-full object-cover opacity-60"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="450"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="bg-white/90 backdrop-blur-sm px-8 py-6 rounded-sm shadow-lg border border-[#E2D9CE] max-w-xs">
                    <div className="text-[#5A7055] mb-3">
                      <svg
                        className="mx-auto"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <p className="font-display font-medium text-lg text-[#252018] mb-1">Café LIV</p>
                    <p className="text-xs text-[#7A7068] leading-relaxed">
                      Bir Schiir 1056<br />
                      3825 Mürren, Switzerland
                    </p>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block text-xs font-medium text-[#5A7055] hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-[#252018] text-white text-sm rounded-sm flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#C4A07A]">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-white/80">
                Mürren is car-free — accessible by cable car and mountain train from Lauterbrunnen.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaBanner() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <img
        src={foodWithView}
        alt="Swiss Alps backdrop with Café LIV food on outdoor terrace — Mürren, Switzerland"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
        width="1200"
        height="800"
      />
      <div className="absolute inset-0 bg-[#161310]/75" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-medium text-white leading-tight mb-5">
          Make Café LIV part of your Mürren day.
        </h2>
        <p className="text-white/75 text-lg leading-relaxed mb-10">
          Coffee, something delicious and a beautiful place to pause.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#5A7055] text-white text-sm font-medium rounded-full hover:bg-[#4a5f46] transition-colors tracking-wide"
          >
            Get Directions
          </a>
          <a
            href={PHONE_HREF}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 text-sm font-medium rounded-full hover:bg-white/20 transition-colors tracking-wide"
          >
            Call Café LIV
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#252018] text-white/70 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-display text-xl font-medium text-white mb-3">Café LIV</h3>
            <address className="not-italic text-sm leading-relaxed text-white/60">
              Bir Schiir 1056<br />
              3825 Mürren<br />
              Switzerland
            </address>
            <a
              href={PHONE_HREF}
              className="block mt-3 text-sm text-white/60 hover:text-white transition-colors"
            >
              {PHONE}
            </a>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-white/40 mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Menu', href: '#menu' },
                { label: 'Our Story', href: '#story' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Visit', href: '#visit' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-white/40 mb-4">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/cafeliv_muerren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Café LIV on Instagram — @cafeliv_muerren (opens in new tab)"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Café LIV on Google Maps — Mürren, Switzerland (opens in new tab)"
                >
                  Google Maps
                </a>
              </li>
              <li>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Get directions to Café LIV in Mürren (opens Google Maps)"
                >
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/40">
          <p>&copy; {year} Café LIV. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function MobileStickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-[#252018] border-t border-white/10 px-4 py-3 flex gap-3" role="navigation" aria-label="Quick actions">
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 bg-[#5A7055] text-white text-sm font-medium rounded-full text-center hover:bg-[#4a5f46] transition-colors"
          aria-label="Get directions to Café LIV (opens Google Maps)"
        >
          Get Directions
        </a>
        <a
          href={PHONE_HREF}
          className="flex-1 py-3 border border-white/20 text-white text-sm font-medium rounded-full text-center hover:bg-white/10 transition-colors"
          aria-label={`Call Café LIV at ${PHONE}`}
        >
          Call Now
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <StorySection />
        <MenuSection />
        <VeganSection />
        <ExperienceSection />
        <ReviewsSection />
        <GallerySection />
        <InstagramSection />
        <LocationSection />
        <CtaBanner />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  )
}
