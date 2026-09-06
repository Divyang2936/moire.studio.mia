import { createFileRoute, Link } from "@tanstack/react-router";
import { MotionConfig, motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moire Studio Mia — Timeless Interiors & Soulful Spaces" },
      { name: "description", content: "Moire Studio Mia crafts timeless interiors and soulful spaces, blending Indian vernacular geometries with uncompromising minimalism." },
      { property: "og:title", content: "Moire Studio Mia — Timeless Interiors & Soulful Spaces" },
      { property: "og:description", content: "Moire Studio Mia crafts timeless interiors and soulful spaces, blending Indian vernacular geometries with uncompromising minimalism." },
    ],
  }),
  component: HomePage,
});

const testimonials = [
  {
    quote: "“Mia orchestrated an atmosphere of pure serenity. Every corner of our home feels like poetry.”",
    name: "Ananya & Kabir Singhania",
    role: "Private Estate, Vasant Vihar",
  },
  {
    quote: "“The rare balance between uncompromising modernist restraint and deep Indian tactile soul.”",
    name: "Rohan Mehra",
    role: "Founder, Mehra Capital",
  },
  {
    quote: "“Working with Moire Studio was transformative; our Mumbai duplex became an authentic sanctuary.”",
    name: "Dr. Priyamvada Rao",
    role: "Duplex Residence, Worli Sea Face",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const revealTransition = {
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1] as const,
};

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [requested, setRequested] = useState(false);
  const totalSlides = testimonials.length;

  const updateSlide = (index: number) => {
    setCurrentIndex((index + totalSlides) % totalSlides);
  };

  return (
    <MotionConfig reducedMotion="user">
      <main className="w-full pt-20 bg-background">
      <div className="flex flex-col w-full">
        {/* Immersive Architectural Hero */}

<section className="-mt-20 relative w-full min-h-[680px] sm:min-h-[720px] lg:min-h-[942px] flex items-end justify-start overflow-hidden bg-primary">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 hover:scale-100 opacity-85"
    style={{
      backgroundImage:
        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDu147eFCQypojYw3UuTaGcfKVQuPpTrGg9XnFYIamRSHU4KeQvMYcCsjymUxw3gEt-VEP7yfzkmmA0c85I13h7MWZtaKZ_ctmgMH3X-Xy56WnUzA9YBE-f5leRPbQ9Ftnw9EVPUqxQlxuZjVL22ra-1mtv7WX6fHQ7uTYxsQbeR8eWlcNQoq3yFo_DsXFdZL1g55MJdr-F0sjd2DlPJauY1YlP7ZzqTJvBpvopYuL7wz9a49813DLX')",
    }}
  />

  {/* Dark overlays */}
  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/45 to-transparent"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent"></div>

  {/* Main Content */}
  <div className="relative z-10 w-full max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop pb-space-xl lg:pb-space-2xl pt-32 lg:pt-44">

    <motion.div
      animate="visible"
      className="w-full max-w-4xl flex flex-col items-start"
      initial="hidden"
      transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
    >

      {/* Location Badge */}
      <motion.div
        variants={reveal}
        transition={revealTransition}
        className="inline-flex max-w-full items-center gap-space-xs px-space-sm py-space-3xs bg-surface-container-low/90 backdrop-blur-md text-secondary shadow-md mb-space-md"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>

        <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary font-medium">
          Studio Mia • New Delhi & Mumbai
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        variants={reveal}
        transition={revealTransition}
        className="font-display text-display-mobile lg:text-display text-on-primary tracking-tight mb-space-xs leading-none"
      >
        Moire Studio Mia
      </motion.h1>

      {/* Tagline */}
      <motion.p
        variants={reveal}
        transition={revealTransition}
        className="font-headline-sm text-headline-sm text-surface-variant font-light max-w-xl mb-space-md italic"
      >
        Timeless Interiors. Soulful Spaces.
      </motion.p>

      {/* Description */}
      <motion.p
        variants={reveal}
        transition={revealTransition}
        className="text-on-primary/80 text-base lg:text-lg leading-relaxed font-light max-w-2xl mb-space-lg"
      >
        We create deeply personal interiors where architecture,
        materiality and everyday living come together with quiet
        sophistication. From intimate residences to refined
        hospitality spaces, every project is designed to feel
        considered, effortless and distinctly yours.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={reveal}
        transition={revealTransition}
        className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm sm:gap-space-md mb-space-xl"
      >

        <Link
          className="w-full sm:w-auto justify-center px-space-lg py-space-sm bg-secondary text-on-secondary font-label-caps text-label-caps uppercase tracking-widest shadow-xl transition-all duration-300 hover:bg-secondary-container hover:text-on-secondary-container flex items-center gap-space-xs group"
          to="/portfolio"
        >
          <span>View Our Work</span>

          <span className="material-symbols-outlined text-[1rem] transition-transform duration-300 group-hover:translate-x-1">
            arrow_forward
          </span>
        </Link>

        <Link
          className="w-full sm:w-auto justify-center px-space-lg py-space-sm bg-surface-container-lowest/15 backdrop-blur-sm text-on-primary font-label-caps text-label-caps uppercase tracking-widest transition-all duration-300 hover:bg-surface-container-lowest hover:text-primary"
          to="/contact"
        >
          Consult With Mia
        </Link>

      </motion.div>

      {/* Studio Stats */}
      <motion.div
        variants={reveal}
        transition={revealTransition}
        className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-8 lg:gap-12 border-t border-on-primary/20 pt-6 w-full sm:w-auto"
      >

        <div>
          <span className="block font-display text-2xl lg:text-3xl text-on-primary">
            12+
          </span>
            <span className="font-label-caps text-[0.6rem] sm:text-[0.65rem] uppercase tracking-widest text-on-primary/60 leading-tight">
            Years of Craft
          </span>
        </div>

        <div className="hidden sm:block w-px h-10 bg-on-primary/20"></div>

        <div>
          <span className="block font-display text-2xl lg:text-3xl text-on-primary">
            80+
          </span>
            <span className="font-label-caps text-[0.6rem] sm:text-[0.65rem] uppercase tracking-widest text-on-primary/60 leading-tight">
            Spaces Designed
          </span>
        </div>

        <div className="hidden sm:block w-px h-10 bg-on-primary/20"></div>

        <div>
          <span className="block font-display text-2xl lg:text-3xl text-on-primary">
            06
          </span>
            <span className="font-label-caps text-[0.6rem] sm:text-[0.65rem] uppercase tracking-widest text-on-primary/60 leading-tight">
            Cities
          </span>
        </div>

      </motion.div>

    </motion.div>
  </div>

  {/* Featured Project Label */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1, duration: 0.8 }}
    className="absolute right-6 lg:right-12 bottom-20 lg:bottom-24 z-20 hidden md:flex flex-col items-end"
  >
    <span className="font-label-caps text-[0.65rem] uppercase tracking-[0.3em] text-on-primary/50 mb-2">
      Featured Residence
    </span>

    <span className="font-display text-lg lg:text-xl text-on-primary">
      The Quiet House
    </span>

    <span className="text-xs text-on-primary/50 mt-1">
      New Delhi · 2025
    </span>
  </motion.div>

  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.4, duration: 1 }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
  >
    <span className="font-label-caps text-[0.6rem] uppercase tracking-[0.35em] text-on-primary/50">
      Explore
    </span>

    <motion.span
      animate={{ y: [0, 6, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="material-symbols-outlined text-on-primary/60 text-lg"
    >
      keyboard_arrow_down
    </motion.span>
  </motion.div>

</section>



        {/* Editorial Metrics Bar */}
        <section className="w-full bg-surface-container-low shadow-sm">
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop py-space-xl">
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-space-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.div variants={reveal} transition={revealTransition} className="flex flex-col gap-space-3xs">
                <span className="font-headline-lg text-headline-lg text-primary tracking-tight">12<span className="text-secondary font-light">+</span></span>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest">Years Crafting Sanctuaries</span>
              </motion.div>
              <motion.div variants={reveal} transition={revealTransition} className="flex flex-col gap-space-3xs">
                <span className="font-headline-lg text-headline-lg text-primary tracking-tight">85<span className="text-secondary font-light">+</span></span>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest">Curated Residences</span>
              </motion.div>
              <motion.div variants={reveal} transition={revealTransition} className="flex flex-col gap-space-3xs">
                <span className="font-headline-lg text-headline-lg text-primary tracking-tight">14</span>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest">International Awards</span>
              </motion.div>
              <motion.div variants={reveal} transition={revealTransition} className="flex flex-col gap-space-3xs">
                <span className="font-headline-lg text-headline-lg text-primary tracking-tight">100<span className="text-secondary font-light">%</span></span>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest">Bespoke Craftsmanship</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="w-full py-space-3xl overflow-hidden">
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div className="flex items-center gap-space-xs text-secondary">
                  <span className="font-label-caps text-label-caps uppercase tracking-widest">Our Spatial Creed</span>
                  <span className="h-[1px] w-8 bg-secondary"></span>
                </div>
                <blockquote className="font-headline-lg text-headline-lg text-primary tracking-tight leading-snug">
                  "Spaces should breathe with quiet reverence and timeless stillness."
                </blockquote>
                <div className="flex items-center gap-space-sm pt-space-xs">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
                    <img className="w-full h-full object-cover" alt="Editorial portrait of Mia, lead architect and interior curator, dressed in neutral ivory khadi linen, contemplative expression, soft studio natural daylight, minimalist aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmUjFaBMpnIpeCeW5HCWxMnVCw1wdLMnTMQZq14-XGs9iaq575ghgQzApSIju0EPexin41S0EtLAD8lR_oeDGrYqHNVVNMiTDSr4gD3Cv1k4I5MTvB6_q1z9r6ILAVrXJApjFKpxfdYtPVh1lV44J6iAaCl1SmHVo3nc-NaG-HiA2Qc8ybA0CU67Xc6Ob8-bjxHrIRmvw4qGU8sUzN37d8r7wY3CvuErf9BJKixgsTXbkESMOwn7L-" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase font-semibold text-primary">Mia Verma</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Principal Architect & Founder</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-space-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg">
                  <div className="bg-surface-container-lowest p-space-lg shadow-sm flex flex-col justify-between">
                    <span className="material-symbols-outlined text-secondary text-3xl mb-space-md">architecture</span>
                    <p className="font-body-lg text-body-lg text-on-surface-variant">
                      We anchor our practice in the living dialogue between historical Indian vernacular geometries and uncompromising European minimalism. Raw wabi-sabi textures meet hand-finished Makrana marble.
                    </p>
                  </div>
                  <div className="bg-surface-container p-space-lg flex flex-col justify-between">
                    <span className="material-symbols-outlined text-secondary text-3xl mb-space-md">spa</span>
                    <p className="font-body-lg text-body-lg text-on-surface-variant">
                      Every proportion is conceived to calm the sensory nervous system. Reclaimed Burma teakwood, lime-washed courtyards, and filtered cross-breezes create holistic residential poetry.
                    </p>
                  </div>
                </div>
                <div className="relative h-72 w-full overflow-hidden shadow-md">
                  <img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Tactile architectural detail showing handcrafted lime plaster wall texture, carved teak screen jaali, and polished brass joint detail in soft shadow, high-end interior editorial photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN3x4PZ6v3SVSSI00W2HXiCCHxpqLahObw_ZW8yyVeiF97sPu2vp9MZVJ2clI4HeGdpjIOM-o0hhAHkSY_ijkYZU9K97zZGasDKu6I_0jfjeY1RriaW4UHsGsHLbMc-KkUonp9D56YeWmSMkZNAGqLCh5JPyjQhH_qCNwRkMcW2Vf3zc__SMwVTrhTCEeUEBHzVrIPaWpXcZM3z9Lc6dVCVo697qSTr7-GXEeY7t-NQr4HnDDCIj6Q" />
                  <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-md px-space-sm py-space-3xs text-secondary font-label-caps text-label-caps uppercase tracking-wider">
                    Materiality Monograph • Series 04
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="w-full py-space-2xl bg-surface-container-low">
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
              <div>
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest block mb-space-3xs">Curated Portfolio</span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Selected Monographs</h2>
              </div>
              <Link className="inline-flex items-center gap-space-xs text-primary hover:text-secondary font-label-caps text-label-caps uppercase tracking-widest transition-colors" to="/portfolio">
                <span>Explore All Works</span>
                <span className="material-symbols-outlined text-sm">north_east</span>
              </Link>
            </div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ staggerChildren: 0.14 }}
            >
              {/* Project 1 */}
              <motion.article variants={reveal} transition={revealTransition} className="group flex flex-col bg-surface shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Interior view of The Vasant Vihar Sanctuary estate in New Delhi, featuring earth plaster textured walls, custom fluted dark teakwood paneling, central courtyard with a tranquil reflecting pool, soft ambient architectural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhWuzpQSpHtUMNvFdw-I3jF5XKod0Ikdekbnl4nAz22eOivxuBeAEikFOCHAxuEW-OR4aINTXxW0H7Xj56imsK8fww1oQKA9FSsJ9cyAfXLknEGa0YgiU4uKOqO9MfBrybFanRPMbQqpFMcuL5KfCIG1Ss-xhHT2wNMYGrh8h46-kzklV1UPUiEkz81FedUDN8HhIu_c3CfQJkH_hUBxlBFpUC4Wn3jDW3jkBg655P_5HC80V75-IX" />
                  <div className="absolute top-space-sm left-space-sm bg-primary/80 backdrop-blur-sm text-on-primary font-label-caps text-label-caps uppercase px-space-xs py-space-3xs">
                    Private Estate
                  </div>
                </div>
                <div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
                  <div>
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant block mb-1">New Delhi • 2024</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                      The Vasant Vihar Sanctuary
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs line-clamp-2">
                      A 14,000 sq.ft private retreat rooted in terracotta earth plasters, recessed fluted teak wood, and inward-looking water courtyards.
                    </p>
                  </div>
                  <Link className="inline-flex items-center gap-space-xs text-secondary font-label-caps text-label-caps uppercase tracking-widest group-hover:translate-x-1 transition-transform" to="/portfolio">
                    <span>View Case Study</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </motion.article>
              {/* Project 2 */}
              <motion.article variants={reveal} transition={revealTransition} className="group flex flex-col bg-surface shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Luxurious Bandra sea-facing penthouse in Mumbai with high ceiling panoramic ocean views, monolithic beige travertine kitchen island, brushed antique bronze fixtures, and low-slung custom modular seating." src="https://lh3.googleusercontent.com/aida-public/AB6AXuByuUW116b3Oe2okOkKyjnH21ymelOXGiyPVoIlK7z5Jh3K6xsfjlH9zy_yot8BbRX20ZvkJqX_ASFaF9wSH4G_8T4jPKj2ebjEdvPY2ucq2SiNkTjGpuJHLSFLLTxbwd95gU6kQbD04aiAYvlay49D6X13l4QZYIhBNfJCHkegrc_Fg5cOWtQlvHNx4dRHzn7AIClCQQcL_XDZbPm6XfnIR7Be8WaAKXP0jAECkkz3cnnSOQfgUn-y" />
                  <div className="absolute top-space-sm left-space-sm bg-primary/80 backdrop-blur-sm text-on-primary font-label-caps text-label-caps uppercase px-space-xs py-space-3xs">
                    Coastal Minimal
                  </div>
                </div>
                <div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
                  <div>
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant block mb-1">Mumbai • 2024</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                      Bandra Sea-Facing Penthouse
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs line-clamp-2">
                      Unobstructed Arabian Sea horizons framed by monolithic travertine slabs, hand-patinated bronze joinery, and seamless acoustics.
                    </p>
                  </div>
                  <Link className="inline-flex items-center gap-space-xs text-secondary font-label-caps text-label-caps uppercase tracking-widest group-hover:translate-x-1 transition-transform" to="/portfolio">
                    <span>View Case Study</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </motion.article>
              {/* Project 3 */}
              <motion.article variants={reveal} transition={revealTransition} className="group flex flex-col bg-surface shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Interior of The Nilgiri Glass Pavilion retreat in Ooty, featuring dark hand-chiseled slate stonework, organic undyed linen textures, an open hearth fireplace, and floor-to-ceiling glass looking onto misty tea plantations." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhNaN-TBZB9Y9fDJFIJ4bzSCs7hhfyG3zrhDy-v0KSd6_9ObcTLN6fNWkZ6Od84BGP1v-S3FdPlQg1bLHwwgncpab6im9tdGhLzKTjcoz-wQz651LQwkBfIucIFnc0sKERzOfKm8PdmTCVoB6qczVifsjsYK0_XrYImmqmHonUMuGAQGKsEWsdh1-eWMumAoiHfSgcVwK6QI4EjjRdMcgWyNCteQFw3VphF41UprOlxyMrHyFP-VFb" />
                  <div className="absolute top-space-sm left-space-sm bg-primary/80 backdrop-blur-sm text-on-primary font-label-caps text-label-caps uppercase px-space-xs py-space-3xs">
                    Retreat Architecture
                  </div>
                </div>
                <div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
                  <div>
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant block mb-1">Ooty • 2023</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                      The Nilgiri Glass Pavilion
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs line-clamp-2">
                      Elevated high-altitude haven built around local slate stonework, custom loomed organic silks, and a floating granite hearth.
                    </p>
                  </div>
                  <Link className="inline-flex items-center gap-space-xs text-secondary font-label-caps text-label-caps uppercase tracking-widest group-hover:translate-x-1 transition-transform" to="/portfolio">
                    <span>View Case Study</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </motion.article>
            </motion.div>
          </div>
        </section>

        {/* Studio Process Section */}
        <section className="w-full py-space-3xl bg-primary text-on-primary">
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.12 }}
            >
              <motion.div variants={reveal} transition={revealTransition} className="lg:col-span-4 lg:sticky lg:top-32">
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest block mb-space-sm">
                  The Studio Method
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight leading-tight mb-space-md">
                  From first light to final detail.
                </h2>
                <p className="font-body-lg text-body-lg text-surface-variant max-w-md">
                  Each project is shaped slowly, through attentive listening, material study, and a close reading of how a place wants to be lived in.
                </p>
              </motion.div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-space-xl gap-y-space-xl">
                {[
                  ["01", "Listen", "We begin with the rituals, memories, and rhythms that make a space feel like yours."],
                  ["02", "Distil", "Plans, proportions, and palettes are edited until only what matters remains."],
                  ["03", "Make", "Our atelier partners translate the design into stone, timber, metal, and textile."],
                  ["04", "Settle", "The final room is composed for real life, with room for quiet change over time."],
                ].map(([number, title, description]) => (
                  <motion.div variants={reveal} transition={revealTransition} className="border-t border-on-primary/20 pt-space-md" key={number}>
                    <span className="font-label-caps text-label-caps text-secondary tracking-widest">{number}</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-primary mt-space-sm mb-space-xs">{title}</h3>
                    <p className="font-body-md text-body-md text-surface-variant">{description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Materiality Section */}
        <section className="w-full py-space-3xl overflow-hidden">
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop">
            <motion.div
              className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={reveal}
              transition={revealTransition}
            >
              <div>
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest block mb-space-3xs">
                  Material Studies
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">A vocabulary of touch.</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Earth, mineral, fibre, and light are selected together to create spaces that grow more beautiful with use.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-space-sm lg:gap-space-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {[
                ["Lime plaster", "Quiet surfaces, softened by hand", "https://lh3.googleusercontent.com/aida-public/AB6AXuAN3x4PZ6v3SVSSI00W2HXiCCHxpqLahObw_ZW8yyVeiF97sPu2vp9MZVJ2clI4HeGdpjIOM-o0hhAHkSY_ijkYZU9K97zZGasDKu6I_0jfjeY1RriaW4UHsGsHLbMc-KkUonp9D56YeWmSMkZNAGqLCh5JPyjQhH_qCNwRkMcW2Vf3zc__SMwVTrhTCEeUEBHzVrIPaWpXcZM3z9Lc6dVCVo697qSTr7-GXEeY7t-NQr4HnDDCIj6Q"],
                ["Makrana marble", "Veins that hold the memory of stone", "https://lh3.googleusercontent.com/aida-public/AB6AXuDhWuzpQSpHtUMNvFdw-I3jF5XKod0Ikdekbnl4nAz22eOivxuBeAEikFOCHAxuEW-OR4aINTXxW0H7Xj56imsK8fww1oQKA9FSsJ9cyAfXLknEGa0YgiU4uKOqO9MfBrybFanRPMbQqpFMcuL5KfCIG1Ss-xhHT2wNMYGrh8h46-kzklV1UPUiEkz81FedUDN8HhIu_c3CfQJkH_hUBxlBFpUC4Wn3jDW3jkBg655P_5HC80V75-IX"],
                ["Burma teak", "Warm grain, precise joinery", "https://lh3.googleusercontent.com/aida-public/AB6AXuByuUW116b3Oe2okOkKyjnH21ymelOXGiyPVoIlK7z5Jh3K6xsfjlH9zy_yot8BbRX20ZvkJqX_ASFaF9wSH4G_8T4jPKj2ebjEdvPY2ucq2SiNkTjGpuJHLSFLLTxbwd95gU6kQbD04aiAYvlay49D6X13l4QZYIhBNfJCHkegrc_Fg5cOWtQlvHNx4dRHzn7AIClCQQcL_XDZbPm6XfnIR7Be8WaAKXP0jAECkkz3cnnSOQfgUn-y"],
                ["Handwoven linen", "Light filtered through texture", "https://lh3.googleusercontent.com/aida-public/AB6AXuDhNaN-TBZB9Y9fDJFIJ4bzSCs7hhfyG3zrhDy-v0KSd6_9ObcTLN6fNWkZ6Od84BGP1v-S3FdPlQg1bLHwwgncpab6im9tdGhLzKTjcoz-wQz651LQwkBfIucIFnc0sKERzOfKm8PdmTCVoB6qczVifsjsYK0_XrYImmqmHonUMuGAQGKsEWsdh1-eWMumAoiHfSgcVwK6QI4EjjRdMcgWyNCteQFw3VphF41UprOlxyMrHyFP-VFb"],
              ].map(([title, description, image]) => (
                <motion.article variants={reveal} transition={revealTransition} className="group" key={title}>
                  <div className="aspect-[4/5] overflow-hidden bg-surface-container mb-space-sm">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={image} alt={`${title} material study`} />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">{title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">{description}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Client Testimonials Carousel */}
        <section className="w-full py-space-3xl overflow-hidden">
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-xl">
              <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest mb-space-3xs">Patron Voices</span>
              <h2 className="font-headline-md text-headline-md text-primary">Private Living Testimonials</h2>
            </div>
            {/* Testimonial Slider Container */}
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden">
                <motion.div
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  animate={{ x: `-${currentIndex * 100}%` }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {testimonials.map((t) => (
                    <div className="w-full flex-shrink-0 px-space-md flex flex-col items-center text-center" key={t.name}>
                      <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-space-md">
                        <span className="material-symbols-outlined text-3xl">format_quote</span>
                      </div>
                      <p className="font-headline-md text-headline-md text-primary font-normal leading-relaxed max-w-3xl mb-space-lg italic">
                        {t.quote}
                      </p>
                      <div className="flex flex-col items-center">
                        <span className="font-headline-sm text-headline-sm text-primary">{t.name}</span>
                        <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest mt-1">{t.role}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
              {/* Carousel Navigation Controls */}
              <div className="flex items-center justify-center gap-space-md mt-space-xl">
                <button aria-label="Previous quote" className="w-10 h-10 rounded-full bg-surface-container hover:bg-secondary hover:text-on-secondary transition-colors flex items-center justify-center text-primary" onClick={() => updateSlide(currentIndex - 1)}>
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                </button>
                <div className="flex gap-2">
                  {testimonials.map((t, idx) => (
                    <button
                      aria-label={`Slide ${idx + 1}`}
                      className={idx === currentIndex ? "w-2.5 h-2.5 rounded-full bg-secondary transition-all" : "w-2.5 h-2.5 rounded-full bg-outline-variant hover:bg-secondary transition-all"}
                      key={t.name}
                      onClick={() => updateSlide(idx)}
                    ></button>
                  ))}
                </div>
                <button aria-label="Next quote" className="w-10 h-10 rounded-full bg-surface-container hover:bg-secondary hover:text-on-secondary transition-colors flex items-center justify-center text-primary" onClick={() => updateSlide(currentIndex + 1)}>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup / Atelier Journal Dispatch */}
        <section className="w-full pb-space-2xl">
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop">
            <div className="bg-surface-container-low p-space-xl lg:p-space-2xl shadow-sm relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
              <div className="max-w-2xl mx-auto flex flex-col items-center text-center relative z-10">
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest mb-space-2xs">The Curated Archive</span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-space-sm">
                  Request the Atelier Journal
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                  A quarterly print & digital dispatch of material retrospectives, artisanal studio diaries, and unreleased spatial drawings.
                </p>
                <form
                  className="w-full flex flex-col sm:flex-row gap-space-xs"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setRequested(true);
                  }}
                >
                  <input className="flex-grow bg-surface-container-lowest px-space-md py-space-sm text-body-md font-body-md text-primary placeholder:text-outline shadow-sm focus:outline-none focus:ring-1 focus:ring-secondary transition-all" placeholder="Enter your email address" required type="email" />
                  <button className="px-space-lg py-space-sm bg-secondary text-on-secondary font-label-caps text-label-caps uppercase tracking-widest shadow-md hover:bg-secondary-container hover:text-on-secondary-container transition-all flex-shrink-0" type="submit">
                    {requested ? "Requested" : "Request Atelier Journal"}
                  </button>
                </form>
                <span className="font-label-sm text-label-sm text-on-surface-variant mt-space-sm">
                  Discreet & strictly confidential correspondence. No solicitation.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      </main>
    </MotionConfig>
  );
}
