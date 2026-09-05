import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Selected Works & Sanctuaries | Moire Studio Mia" },
      { name: "description", content: "A curated archive of private residences, boutique commercial ateliers, and luxury hospitality destinations crafted across India and abroad." },
      { property: "og:title", content: "Portfolio — Selected Works & Sanctuaries | Moire Studio Mia" },
      { property: "og:description", content: "A curated archive of private residences, boutique commercial ateliers, and luxury hospitality destinations crafted across India and abroad." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    category: "residential",
    year: "2024",
    index: "01 / 08",
    title: "The Vasant Vihar Residence",
    description: "Minimalist Courtyard Villa celebrating inward-facing introspection and monolithic Jodhpur sandstone.",
    location: "New Delhi",
    size: "7,400 sq.ft",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHsSLu6Rc3PubiNaN3bW9w7-h0mxdCOZFGSdHBTsZNLC9TWYRccY_y7QNAhQSR10_iUk6zMPUfGAiO2nTDAXbmp57ma2VXHfdNUWGqM2AMokfrRG25zovhkSoIr-TRq3XqX758AbvSStnFXrwSgppU0VA0-FEo469xscc3NGGCJN3NhVviE3B_n7Tj_APe_GLDK2sX8DXXljLdeTRxCix9biBHNNDjGUsDtUQqQP7U_QOfoSB9sZda",
    alt: "Minimalist luxury residential courtyard villa in New Delhi with double height glass walls, fluted sandstone pillars, reflection pool with floating stepping stones, diffused morning light, quiet wabi sabi aesthetic, interior styling with bespoke low timber furniture and raw linen.",
  },
  {
    category: "residential",
    year: "2023",
    index: "02 / 08",
    title: "Alibaug Stone House",
    description: "Monolithic Basalt & Teak Beach House rooted organically into coastal terrain.",
    location: "Alibaug, MH",
    size: "11,200 sq.ft",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4wHDotCtmn8tvThywx3SRDiEG4jEmctWq6FAabjEjynpzLUnt2QKjnRQZLhJMdwXZyDdm52dhZLjAwoK3RFpv6M_DrmGz_fLGyXuEYGOk_KHspQJ_SjaAU0pZxnNgi-7qSjwBZnLjkmQH7_di4d_tUpamV8TmOH2qzZfrScO2uxJo0VP-Kiheud9D5YZlKUs22YchYii7Od0yUp94K8DqmvCW9EG4eVQSUdXRdssL3NKw_dre6ipd",
    alt: "Monolithic basalt stone and reclaimed teak modern beach sanctuary in Alibaug India, architectural brutalist massing with warm earthy timber ceilings, tropical palm shadows falling across textured dark stone walls, ambient golden hour coastal light.",
  },
  {
    category: "commercial",
    year: "2024",
    index: "03 / 08",
    title: "Maison Rose Atelier",
    description: "High-Jewellery Salon & Curated Vault exploring tactile rose plaster and brass joinery.",
    location: "Colaba, Mumbai",
    size: "3,800 sq.ft",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzCJVE3-4zj5uNtOsF1gxJ8Fat-OwNM-bfZrK88s2DNBFcsKo673KsVM2Rr72frcRvYEz8XzSFTha3he-LhcNg21IxBj0C5Qff3Z0q6yqFk-I64vWV5MwhTAN-rQOUqNpRmcJgIVqE7wL8RQ71rjFYeZfo-fyrckXM9yc9iQbOjXgIDLoL8e17TYfblR84VveZ7sdjdowFUSaeRS2ZQKeRcCfEg39Fkr-cr3JAZF-oJ1oikhykT5Ym",
    alt: "Intimate high-jewellery private salon in Colaba Mumbai with brushed brass vitrines, fluted rose plaster walls, soft diffused cove lighting, sculptural travertine tables with archival velvet trays, refined haute couture architectural aesthetic.",
  },
  {
    category: "hospitality",
    year: "2023",
    index: "04 / 08",
    title: "The Nilgiri Retreat",
    description: "Heritage Boutique Chalet wrapped in cedarwood, local slate, and panoramic mountain fog.",
    location: "Ooty, TN",
    size: "9 Keys / 14,000 sq.ft",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhbCVYm4wvRF-eSGTcyCiAce42Y7tOELRY5vb7fcgwVpwc8WEZVc28yZdgAPmHhKfNKfuSbr0IRyaIezrcxZVEB1CQ7KcfuLFIvDpjO0dov3SKeChUiAJrY0BogFI6_imGdMtFE0Zvtzbcif-2fz7wOkfFMkJLsK2QuhT5gIcdjyQK_zNFIZXiMXcGsDxGHotCLYm1gqer-wLNix_QwWBwtdzoF7sQxZx78Ra4eEylkYkmxh-W4rjD",
    alt: "Atmospheric boutique mountain chalet in Nilgiri Hills Ooty, exposed stone fireplace, deep cedarwood panelling, handwoven wool throws, floor to ceiling windows overlooking misty blue tea plantations at dusk with warm lantern illumination.",
  },
  {
    category: "residential",
    year: "2024",
    index: "05 / 08",
    title: "Jor Bagh Penthouse",
    description: "Mid-Century Modern dialogues with Mughal archetypes, overlooking historic Lodi tombs.",
    location: "New Delhi",
    size: "6,200 sq.ft",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9WYjBcelFdYJc932lio9QvOXrUJ5WibxhcCB6pMqFZr-bXw4OvcCBRdAimU5Cg6NXFNwRJFYirkLDo3El2zM_BBSaItRmX3WNzMTOXTBYo7yIePDn8X-FVdmfU9X5C0cBFfFA-dDGnavAyX7G2VTWL-cFQze_cKFnqfnrlRPImi_1UCkeEjqpv8VzK9C27OjjLrOZnotE18RWmWyex8xON_RHusuiN74AiIIzvCd86WdlS3sRhgQF",
    alt: "Editorial luxury penthouse living salon in Jor Bagh New Delhi with slender modern Mughal-inspired arched portals, custom terrazzo floors with brass inlays, vintage Pierre Jeanneret chairs, bespoke raw silk drapery, tranquil sunbeams filtered through sheer linen.",
  },
  {
    category: "hospitality",
    year: "2022",
    index: "06 / 08",
    title: "Aura Wellness Sanctuary",
    description: "Ayurvedic Spa & Pavilion sculpted from rammed earth alongside the foothills of Rishikesh.",
    location: "Rishikesh, UK",
    size: "18,500 sq.ft",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCe6Jh0sGnw-nFBN1cZ-3bz9b0uNsRns8ak37aveXhf7KDaaGaeReaJUUgAyr_DKwMEKHPOsCQA3cL-xPDapksrqoVGgpau2sneXKiKkqGuGlJWFx6bTgTb9uAcdcvwphxfNRtnHYawAtb9aYss24qonnH1UBtsnRiw_-MLGImawps2j0zYOUW4lGyX8_bLu7tk3El7Efm2ALgI4GfdjUhVy1q_9dMLnJQ0kxRSbxEDyCixeBfMIzF",
    alt: "Serene luxury Ayurvedic spa pavilion in Rishikesh on the banks of the Ganges River, raw rammed earth curved walls, sunken circular meditation bath with stone rim, diffused natural overhead skylights, aromatic cedar accents and minimal monastic serenity.",
  },
  {
    category: "commercial",
    year: "2023",
    index: "07 / 08",
    title: "Studio Kanso Workspace",
    description: "Raw Concrete & Fluted Glass Workspace calibrated for deep creative contemplation.",
    location: "Bengaluru, KA",
    size: "8,000 sq.ft",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgcjQuox5Rhj2Kr8zzbt-P7VAfNc0SW4kBSFrpt_OjjbmK8-Lph3TugtOvknl7R9iN_nCaHrdT2rgD5eJe0543JCCkW0ho1657C-9s_MTxL_RDQcASOpmEro3wUd3CxeUCEYOK4gIZiuAJyal7xAr3Y8cbTJRrAsj-A7b1e1yVIeMIFslDHHobT4S1BdqcUR23T1Okp-jgtiDdWqNGfce5zF_L8I5k2xiV_n-QNM9m2ylAiDFDDtty",
    alt: "Modern architectural design office in Bengaluru featuring board-formed raw concrete walls, fluted acoustical glass partitions, monolithic blackened steel work tables, indoor ficus tree planter, precise linear brass pendant lights and quiet spatial focus.",
  },
  {
    category: "residential",
    year: "2024",
    index: "08 / 08",
    title: "The Malabar Coast Villa",
    description: "Tropical Modernism attuned to Arabian sea breezes, traditional oxide floors, and teak louvers.",
    location: "Kochi, KL",
    size: "9,800 sq.ft",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP1tqy3IsB7xGvmp8xXz-7X6Vq0SSJIrlsezduMcGkKj35HEYypiff_gPmQ4qFLBe_ZzBnfQFWx-YG6g1aDjc3UhdSeQ_q0-UWWvw8WVpkovQ9x4p_oWTCLqbt962SqQknvNMtIzj2P6cBZCrsY6-P-ugFkwJEjeHw7M2UeVDOx99UV0q-hWbKBclzRIZFTd2FrvnIIn-GEf8R3naL4bqJoNqsHmn_R-16rfNoZGhH51lvgqrHPL84",
    alt: "Tropical modern villa in Kochi Kerala, cantilevered terracotta tiled roof, deep shaded verandas with slatted teak louver screens, polished oxide floors, lush tropical courtyard garden with banana palms and monsoon ambient softness.",
  },
];

const filters = [
  { key: "all", label: "All Projects", count: 8 },
  { key: "residential", label: "Residential", count: 4 },
  { key: "commercial", label: "Commercial", count: 2 },
  { key: "hospitality", label: "Hospitality", count: 2 },
];

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <main className="w-full pt-20 bg-background">
      <div className="flex flex-col w-full">
        {/* Top Curatorial Header Section */}
        <section className="relative w-full pt-space-xl pb-space-lg px-margin-mobile lg:px-margin-desktop max-w-[88rem] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
            <div className="max-w-2xl">
              <div className="flex items-center gap-space-xs mb-space-2xs">
                <span className="w-8 h-px bg-secondary"></span>
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Monograph Vol. IV</span>
              </div>
              <h1 className="font-display text-display lg:text-display text-primary tracking-tight leading-none mb-space-xs">
                Selected Works &amp; Sanctuaries
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
                A curated archive of private residences, boutique commercial ateliers, and luxury hospitality destinations crafted across India and abroad.
              </p>
            </div>
            {/* Live Spatial Statistics Counter */}
            <div className="flex items-center gap-space-lg lg:gap-space-xl pt-space-xs lg:pt-0">
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-primary font-normal">24+</span>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant text-[0.7rem] tracking-wider">Spatial Compositions</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-secondary font-normal">100%</span>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant text-[0.7rem] tracking-wider">Artisanal Tailored</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-primary font-normal">08</span>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant text-[0.7rem] tracking-wider">Honor Awards</span>
              </div>
            </div>
          </div>
          {/* Architectural Index Bar / Filter Row */}
          <div className="mt-space-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md pb-space-xs">
            <div className="flex flex-wrap items-center gap-space-xs" id="filter-container">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={
                    activeFilter === f.key
                      ? "filter-btn active-filter px-space-md py-space-2xs font-label-caps text-label-caps uppercase text-on-primary bg-primary shadow-sm transition-all duration-300"
                      : "filter-btn px-space-md py-space-2xs font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary bg-surface-container-low hover:bg-surface-container transition-all duration-300"
                  }
                  data-filter={f.key}
                >
                  {f.label} <span className="ml-1.5 opacity-60 text-[0.65rem]">({f.count})</span>
                </button>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-space-sm text-on-surface-variant font-label-caps text-label-caps">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
              <span className="text-[0.7rem] uppercase tracking-wider">Curated by Moire Studio Mia</span>
            </div>
          </div>
        </section>
        {/* Architectural Gallery Grid */}
        <section className="w-full px-margin-mobile lg:px-margin-desktop max-w-[88rem] mx-auto pb-space-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md lg:gap-gutter-desktop transition-all duration-500" id="projects-grid">
            {visibleProjects.map((p) => (
              <article
                key={p.title}
                className="project-card group flex flex-col bg-surface-container-low overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                data-category={p.category}
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    alt={p.alt}
                    src={p.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-space-md">
                    <span className="font-label-caps text-label-caps uppercase text-on-primary tracking-widest inline-flex items-center gap-2">
                      View Project Details
                      <span className="material-symbols-outlined text-secondary text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                    </span>
                  </div>
                  <div className="absolute top-space-xs right-space-xs bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1">
                    <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-secondary font-medium">{p.year}</span>
                  </div>
                </div>
                <div className="p-space-md flex flex-col flex-1 justify-between gap-space-xs bg-surface-container-low">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-label-caps text-label-caps uppercase text-secondary font-medium tracking-widest text-[0.7rem]">
                        {p.category.charAt(0).toUpperCase() + p.category.slice(1)}
                      </span>
                      <span className="font-label-caps text-[0.7rem] uppercase text-on-surface-variant">{p.index}</span>
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight group-hover:text-secondary transition-colors">
                      {p.title}
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1 font-light">
                      {p.description}
                    </p>
                  </div>
                  <div className="pt-space-xs flex items-center justify-between font-label-caps text-[0.7rem] uppercase text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[0.9rem] text-secondary">location_on</span>
                      {p.location}
                    </span>
                    <span>{p.size}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        {/* Architectural Narrative Feature & Materiality Sparkline */}
        <section className="w-full bg-surface-container-low py-space-2xl my-space-lg">
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              <div className="lg:col-span-5 flex flex-col gap-space-sm">
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Philosophy of Tectonics</span>
                <h3 className="font-headline-lg text-headline-lg text-primary tracking-tight leading-tight">
                  Every room begins with the weight of quietude.
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light">
                  Our archive reflects an unhurried dialog between indigenous Indian stonework, seasoned timbers, and contemporary negative space. We reject ornament for ornamentation's sake—curating only that which deepens human connection to light and tactile memory.
                </p>
                <div className="pt-space-xs flex items-center gap-space-md">
                  <a className="font-label-caps text-label-caps uppercase text-primary inline-flex items-center gap-2 group" href="#">
                    Read Our Monograph
                    <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-7 bg-surface p-space-lg shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between pb-space-md">
                  <span className="font-label-caps text-label-caps uppercase text-primary tracking-wider">Spatial Material Allocation</span>
                  <span className="font-label-caps text-[0.7rem] uppercase text-secondary">Natural &amp; Hand-hewn Only</span>
                </div>
                {/* Materiality Distribution Spark/Bar Graphic */}
                <div className="space-y-space-md">
                  <div>
                    <div className="flex justify-between font-label-caps text-label-caps text-[0.75rem] mb-1.5">
                      <span className="text-on-surface">Basalt, Travertine &amp; Sandstone</span>
                      <span className="text-secondary font-medium">42%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container overflow-hidden">
                      <div className="h-full bg-primary transition-all duration-1000" style={{ width: "42%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-label-caps text-label-caps text-[0.75rem] mb-1.5">
                      <span className="text-on-surface">Reclaimed Teak &amp; Cedar Millwork</span>
                      <span className="text-secondary font-medium">31%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container overflow-hidden">
                      <div className="h-full bg-secondary transition-all duration-1000" style={{ width: "31%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-label-caps text-label-caps text-[0.75rem] mb-1.5">
                      <span className="text-on-surface">Lime Plaster &amp; Earth Finishes</span>
                      <span className="text-secondary font-medium">18%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container overflow-hidden">
                      <div className="h-full bg-surface-tint transition-all duration-1000" style={{ width: "18%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-label-caps text-label-caps text-[0.75rem] mb-1.5">
                      <span className="text-on-surface">Aged Architectural Brass</span>
                      <span className="text-secondary font-medium">9%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container overflow-hidden">
                      <div className="h-full bg-secondary-container transition-all duration-1000" style={{ width: "9%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="pt-space-md mt-space-md flex items-center justify-between text-on-surface-variant font-label-sm text-[0.75rem]">
                  <span>Calibrated across 8 retrospective projects</span>
                  <span className="italic font-subheading">Studio Standards 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Bottom Project Commission Inquiry Banner */}
        <section className="w-full px-margin-mobile lg:px-margin-desktop max-w-[88rem] mx-auto pt-space-xl pb-space-3xl">
          <div className="relative bg-primary text-on-primary p-space-lg lg:p-space-2xl overflow-hidden shadow-2xl">
            {/* Architectural faint geometric accents in background */}
            <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-surface-container-highest/5 pointer-events-none blur-2xl"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-on-primary/5 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
              <div className="max-w-2xl">
                <div className="flex items-center gap-space-2xs mb-space-xs">
                  <span className="inline-block w-2 h-2 bg-secondary"></span>
                  <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Limited Intake</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight mb-space-xs">
                  Have a distinctive space in mind?
                </h2>
                <p className="font-body-lg text-body-lg text-inverse-primary font-light">
                  Explore collaborative commissions with Studio Mia. We accept a bespoke, strictly selective cohort of private residential and boutique hospitality projects each calendar year.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-sm">
                <Link
                  className="inline-flex items-center justify-center px-space-lg py-space-sm bg-secondary text-on-secondary font-label-caps text-label-caps uppercase tracking-wider hover:bg-secondary-fixed transition-all duration-300 shadow-md"
                  to="/contact"
                >
                  Inquire for 2025/2026 Projects
                </Link>
                <a className="inline-flex items-center justify-center px-space-md py-space-sm text-on-primary hover:text-secondary font-label-caps text-label-caps uppercase tracking-wider transition-colors" href="#">
                  Download Lookbook
                  <span className="material-symbols-outlined text-sm ml-1.5">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
