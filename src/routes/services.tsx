import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Bespoke Services — Moire Studio Mia" },
      { name: "description", content: "Comprehensive architectural interior solutions from initial spatial conceptualization through master artisan execution." },
      { property: "og:title", content: "Bespoke Services — Moire Studio Mia" },
      { property: "og:description", content: "Comprehensive architectural interior solutions from initial spatial conceptualization through master artisan execution." },
    ],
  }),
  component: ServicesPage,
});

const faqs = [
  {
    q: "What is the studio's minimum project engagement scale?",
    a: "We focus primarily on full-scope residential commissions starting from 3,000 square feet, bespoke hospitality suites, and comprehensive private family office restorations. For focused advisory or art curation, standalone consultations are available subject to calendar capacity.",
  },
  {
    q: "Do you accept commissions outside of Delhi and Mumbai?",
    a: "Yes. While our primary ateliers reside in Delhi and Mumbai, our execution team regularly manages turnkey residences across Goa, Alibaug, Bengaluru, Dubai, and London with vetted local construction partners.",
  },
  {
    q: "How are artisan procurement costs structured?",
    a: "We operate with complete financial transparency through an open-book policy. Clients receive direct guild invoices with an agreed atelier oversight and commissioning fee, ensuring full accountability without hidden markups.",
  },
];

function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="w-full pt-20 bg-background">
      <div className="flex flex-col w-full">
        {/* Top Editorial Header & Hero Statement */}
        <section className="relative w-full px-margin-mobile lg:px-margin-desktop pt-space-xl pb-space-2xl overflow-hidden">
          <div className="max-w-[88rem] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-2xl">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-space-xs mb-space-sm">
                  <span className="w-8 h-[1px] bg-secondary"></span>
                  <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Atelier Expertise & Discipline</span>
                </div>
                <h1 className="font-display text-display-mobile lg:text-display tracking-tight text-primary leading-[1.05] mb-space-md">
                  Bespoke Services
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light">
                  Comprehensive architectural interior solutions from initial spatial conceptualization through master artisan execution.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-space-2xs text-left lg:text-right pb-space-xs">
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant text-[0.7rem] tracking-wider">Geographic Footprint</span>
                <span className="font-headline-sm text-headline-sm text-primary italic">Delhi • Mumbai • Dubai</span>
                <span className="font-body-sm text-body-sm text-secondary font-medium">Bespoke Commissions Worldwide</span>
              </div>
            </div>
            {/* Atmospheric Spatial Banner */}
            <div className="relative w-full h-[32rem] sm:h-[38rem] overflow-hidden rounded-none shadow-xl bg-surface-container-low">
              <img className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105" alt="Editorial architectural photograph of a minimalist brutalist penthouse interior with limewash plaster walls, floor to ceiling windows showing quiet morning light, custom raw teak low furniture, handcrafted brass vessel on a stone plinth, warm neutral charcoal and beige tones, serene atmospheric living space." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrJTVdppP8XGjTRhddTc4b1oBBcB54K4SpfVUL-Cx9_5zhABm0XvVMNMGwP0hR_Wd-zVbrFKZHE-EcbiQ0BqGcb_wqbppFSY1Cy5C6NdvzT1_ZqiWTxvjwe343ZjOTKSNEVk_Ds0PSxvltO5F9ZPS4ICr-J8XG-kVQ6ONKWZ2FmJ959yY2bA6HL1JE050aEYa9brlXvADxVnjSdAp2Px8y1IJQvsLbh1IFiCRwauAWUcEDqU-qdRAV" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-space-md sm:p-space-xl text-on-primary">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md max-w-4xl backdrop-blur-md bg-surface/10 p-space-md rounded-none">
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-secondary-fixed text-[0.68rem]">Philosophic Stance</span>
                    <span className="font-subheading text-subheading text-on-primary mt-1">Spatial Sensorialism</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-secondary-fixed text-[0.68rem]">Material Integrity</span>
                    <span className="font-subheading text-subheading text-on-primary mt-1">Sourced Artisanship</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-secondary-fixed text-[0.68rem]">Execution Rigor</span>
                    <span className="font-subheading text-subheading text-on-primary mt-1">Millimeter Precision</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Pillars of Spatial Practice */}
        <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-2xl bg-surface-container-low">
          <div className="max-w-[88rem] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-space-xl gap-space-sm">
              <div>
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest block mb-space-2xs">Curated Core Capabilities</span>
                <h2 className="font-headline-lg text-headline-lg text-primary">Core Architectural Services</h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                Structured methodologies crafted over a decade of private commissions, bridging classical spatial heritage with silent, ultra-modern living requirements.
              </p>
            </div>
            {/* Asymmetrical 2x2 Editorial Architectural Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
              {/* Service 01 */}
              <div className="group flex flex-col bg-surface-container-lowest p-space-lg sm:p-space-xl shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex items-start justify-between mb-space-md">
                  <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Index / 01</span>
                  <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors duration-300">architecture</span>
                </div>
                <div className="relative w-full h-64 overflow-hidden mb-space-md bg-surface-container">
                  <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" alt="Monochrome architectural line drawing and interior structural blueprints superimposed against a textural beige linen cloth, precise architectural drafting tools, brass scale ruler, warm studio morning sunlight, high end architectural design process." src="https://lh3.googleusercontent.com/aida-public/AB6AXuACbfvzYhYiz22bAbm3qoEPZ4nAdWjFuBLAN3YzR4q6DX403vCAQv3_jYWseABsCau3w1AGAIALCn1eN84EcD0rKRjqUZc1lNilScyBHHlfhvjF36CKUN6KJTM0eGXFDgOEmAKiQabGBW4dXKBy-berMadR-07blGeLuCWhxjqmuuc9y5aomeud48gwsUoFhYeTEfaD5IRA6nXUSAlfc2dSWNElfXIXWAPdNee38Z8TRC5az6noMxZs" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-space-xs group-hover:text-secondary transition-colors">
                  Interior Architecture & Spatial Planning
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light mb-space-lg">
                  Holistic structural reconfiguration, spatial flow choreography, custom architectural detailing, lighting design, and MEP coordination for new builds and comprehensive heritage renovations.
                </p>
                <div className="mt-auto pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg sm:-mx-space-xl sm:-mb-space-xl p-space-md">
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant text-[0.65rem] tracking-wider block mb-space-2xs">Distinguished Deliverables</span>
                  <div className="flex flex-wrap gap-space-2xs">
                    <span className="px-space-xs py-space-3xs bg-surface-container-lowest text-primary font-body-sm text-body-sm text-xs">3D Spatial Visualizations</span>
                    <span className="px-space-xs py-space-3xs bg-surface-container-lowest text-primary font-body-sm text-body-sm text-xs">Comprehensive Cad Drawings</span>
                    <span className="px-space-xs py-space-3xs bg-surface-container-lowest text-primary font-body-sm text-body-sm text-xs">Bespoke Millwork Detailing</span>
                  </div>
                </div>
              </div>
              {/* Service 02 */}
              <div className="group flex flex-col bg-surface-container-lowest p-space-lg sm:p-space-xl shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex items-start justify-between mb-space-md">
                  <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Index / 02</span>
                  <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors duration-300">chair</span>
                </div>
                <div className="relative w-full h-64 overflow-hidden mb-space-md bg-surface-container">
                  <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" alt="Curated textile palette featuring raw tussar silk, heavy Belgian natural linen swatches, hand-chiselled dark walnut timber, and aged patinated bronze cabinet hardware arranged in an editorial composition on an off-white stone table." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEIfzXwA04jbnQd15Q0XGR1M5q6GScKAfVGePKRk_Jr0UVl7FBjG6u_6lhQCARCDjv0nHFJndntkNe_YsRWwhjcm9jru3YbRBnMIEJnOT5r0GU1UGVp9eayvfOcnGFMjlL1k9th7crdpVjM-zY4gyrhImUJUfW4kEp1PNSi8h2DwWRYdeg4qwjwFm7_M6uWqPFLdWtyNyVrdVuYzS1AWmsbGckcdjIUvgK-aFWntvpr4Ve5rQpdHcP" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-space-xs group-hover:text-secondary transition-colors">
                  Custom Furniture & Textile Curation
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light mb-space-lg">
                  Bespoke furniture designed exclusively for your space in collaboration with master woodcrafters and Italian ateliers. Rare natural fiber textile selection, hand-knotted rugs, and custom bronze hardware.
                </p>
                <div className="mt-auto pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg sm:-mx-space-xl sm:-mb-space-xl p-space-md">
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant text-[0.65rem] tracking-wider block mb-space-2xs">Distinguished Deliverables</span>
                  <div className="flex flex-wrap gap-space-2xs">
                    <span className="px-space-xs py-space-3xs bg-surface-container-lowest text-primary font-body-sm text-body-sm text-xs">Material Boards</span>
                    <span className="px-space-xs py-space-3xs bg-surface-container-lowest text-primary font-body-sm text-body-sm text-xs">Custom Prototype Drawings</span>
                    <span className="px-space-xs py-space-3xs bg-surface-container-lowest text-primary font-body-sm text-body-sm text-xs">Textile Swatchbooks</span>
                  </div>
                </div>
              </div>
              {/* Service 03 */}
              <div className="group flex flex-col bg-surface-container-lowest p-space-lg sm:p-space-xl shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex items-start justify-between mb-space-md">
                  <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Index / 03</span>
                  <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors duration-300">verified</span>
                </div>
                <div className="relative w-full h-64 overflow-hidden mb-space-md bg-surface-container">
                  <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" alt="Interior architectural construction site in advanced finishing phase, precision floor joinery installation of Italian travertine, clean dustless workspace with modern task lights, artisans verifying millimeter alignment with brass measuring tools." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ_baY7_zhooLqCSsNZNv5tDBsJu1M5bOjHpqUa-i4kmIxTJ9x-tDxtQ3UMOpwBGlxZ9nReSV6tP7lEKTJsgBlKrmSJs3_X4KUf4AE6hgqjNLVZl_oCyXUGDXQBpdrcv-C5ARMw2VcguJE5Mt4j40IQzuZ58L6CD0c2m8UTOtz8vD2NYUDuTTo09FuEhrjaDK3kLvm5M2iZeAMvPEBwbQ2QiBsoR8e_NQQypQ1Y0pTMcOxkVadjIQr" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-space-xs group-hover:text-secondary transition-colors">
                  Turnkey Project Execution & Management
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light mb-space-lg">
                  End-to-end oversight ensuring zero compromise on design integrity. Rigorous budget transparency, procurement management, contractor vetting, and meticulous on-site quality control.
                </p>
                <div className="mt-auto pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg sm:-mx-space-xl sm:-mb-space-xl p-space-md">
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant text-[0.65rem] tracking-wider block mb-space-2xs">Distinguished Deliverables</span>
                  <div className="flex flex-wrap gap-space-2xs">
                    <span className="px-space-xs py-space-3xs bg-surface-container-lowest text-primary font-body-sm text-body-sm text-xs">Weekly Site Milestones</span>
                    <span className="px-space-xs py-space-3xs bg-surface-container-lowest text-primary font-body-sm text-body-sm text-xs">Financial Ledger Tracking</span>
                    <span className="px-space-xs py-space-3xs bg-surface-container-lowest text-primary font-body-sm text-body-sm text-xs">Complete White-Glove Installation</span>
                  </div>
                </div>
              </div>
              {/* Service 04 */}
              <div className="group flex flex-col bg-surface-container-lowest p-space-lg sm:p-space-xl shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex items-start justify-between mb-space-md">
                  <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Index / 04</span>
                  <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors duration-300">palette</span>
                </div>
                <div className="relative w-full h-64 overflow-hidden mb-space-md bg-surface-container">
                  <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" alt="Editorial still life of a gallery niche inside a private residence, modern South Asian minimalist ceramic sculpture on an ebony wood console, subtle contemporary canvas painting bathed in soft warm museum floodlight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaJGrQoy1CLRL_WwgoN4BFH6qeMepFbkNVIuPUXRSrfPLKRPMkehbSZxtpZc87whfCZVAb4sU40-Q15C5ws1c5nP4NDd3gl9aKLttnWAIaJY1kP-twsR9SfLKFbwGUz7nQh-VhG8o_rnZ3YgnDbpPBeXzMAQ6rAmj9CVBCpdsVqG19002nW8TZsg28ddfhxra-guifAZ-kCUg2MLNkWKkyePRYOGnRnK3FUqJ0oYnJoDz1X9oHWHE_" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-space-xs group-hover:text-secondary transition-colors">
                  Design Advisory & Art Styling
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light mb-space-lg">
                  High-level consultation for existing residences and commercial developments. Sourcing contemporary South Asian fine art, collector antiquities, sculptural ceramics, and bespoke olfactory curation.
                </p>
                <div className="mt-auto pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg sm:-mx-space-xl sm:-mb-space-xl p-space-md">
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant text-[0.65rem] tracking-wider block mb-space-2xs">Distinguished Deliverables</span>
                  <div className="flex flex-wrap gap-space-2xs">
                    <span className="px-space-xs py-space-3xs bg-surface-container-lowest text-primary font-body-sm text-body-sm text-xs">Curated Art Dossiers</span>
                    <span className="px-space-xs py-space-3xs bg-surface-container-lowest text-primary font-body-sm text-body-sm text-xs">Styling Days</span>
                    <span className="px-space-xs py-space-3xs bg-surface-container-lowest text-primary font-body-sm text-body-sm text-xs">Atmospheric Finishing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Project Cost & Timeline Visualizer Matrix */}
        <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-2xl bg-surface">
          <div className="max-w-[88rem] mx-auto">
            <div className="p-space-lg sm:p-space-xl bg-surface-container rounded-none">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md mb-space-xl">
                <div>
                  <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Execution Dynamics</span>
                  <h2 className="font-headline-md text-headline-md text-primary mt-1">Spatial Engagement Parameters</h2>
                </div>
                <div className="flex items-center gap-space-sm bg-surface-container-lowest px-space-md py-space-xs">
                  <span className="material-symbols-outlined text-secondary text-sm">tune</span>
                  <span className="font-label-caps text-label-caps uppercase text-on-surface text-xs">Typical Commission Benchmarks</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Metric 1 */}
                <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant text-[0.7rem]">Phase Scope</span>
                    <span className="text-secondary font-medium font-body-sm text-body-sm">Residential</span>
                  </div>
                  <span className="font-headline-lg text-headline-lg text-primary leading-none mb-space-xs">4,500+</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Average square footage under holistic architectural curation per commission.</p>
                  <div className="w-full bg-surface-container-high h-1 mt-space-md overflow-hidden">
                    <div className="bg-secondary h-full w-[78%]"></div>
                  </div>
                </div>
                {/* Metric 2 */}
                <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant text-[0.7rem]">Artisan Guild</span>
                    <span className="text-secondary font-medium font-body-sm text-body-sm">Direct</span>
                  </div>
                  <span className="font-headline-lg text-headline-lg text-primary leading-none mb-space-xs">42+</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Generational stone carvers, brass smiths, and master weavers retained across India.</p>
                  <div className="w-full bg-surface-container-high h-1 mt-space-md overflow-hidden">
                    <div className="bg-secondary h-full w-[92%]"></div>
                  </div>
                </div>
                {/* Metric 3 */}
                <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant text-[0.7rem]">Cadence</span>
                    <span className="text-secondary font-medium font-body-sm text-body-sm">Timeline</span>
                  </div>
                  <span className="font-headline-lg text-headline-lg text-primary leading-none mb-space-xs">6-14</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Months of rigorous technical oversight from schematic sketch to final key handover.</p>
                  <div className="w-full bg-surface-container-high h-1 mt-space-md overflow-hidden">
                    <div className="bg-secondary h-full w-[65%]"></div>
                  </div>
                </div>
                {/* Metric 4 */}
                <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant text-[0.7rem]">Accuracy</span>
                    <span className="text-secondary font-medium font-body-sm text-body-sm">Quality</span>
                  </div>
                  <span className="font-headline-lg text-headline-lg text-primary leading-none mb-space-xs">99.4%</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Adherence to initial budget ceilings and specified material grade certifications.</p>
                  <div className="w-full bg-surface-container-high h-1 mt-space-md overflow-hidden">
                    <div className="bg-secondary h-full w-[99%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Walkthrough (4 Phases) */}
        <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-2xl bg-surface-container-lowest">
          <div className="max-w-[88rem] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-space-2xl">
              <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest block mb-space-2xs">The Atelier Methodology</span>
              <h2 className="font-headline-lg text-headline-lg text-primary">Spatial Walkthrough</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs font-light">
                A disciplined, four-phase choreography ensuring absolute creative synergy and technical fidelity at every crossroad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
              {/* Connecting Line for Desktop */}
              <div className="hidden lg:block absolute top-10 left-12 right-12 h-[1px] bg-primary/10 z-0"></div>
              {/* Phase 1 */}
              <div className="relative z-10 flex flex-col bg-surface p-space-md sm:p-space-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary text-on-primary font-headline-sm text-headline-sm flex items-center justify-center mb-space-md">
                  01
                </div>
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest text-[0.7rem] mb-1">Inception</span>
                <h3 className="font-subheading text-subheading text-primary mb-space-xs">Discovery & Spatial Audit</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light mb-space-md">
                  Comprehensive on-site spatial assessment, solar angle evaluation, architectural shell diagnosis, lifestyle audit, and initial scope crystallization.
                </p>
                <ul className="font-label-sm text-label-sm text-on-surface-variant flex flex-col gap-1 mt-auto">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary"></span>Site Dimension Scan</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary"></span>Client Habitation Brief</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary"></span>Budgetary Alignment</li>
                </ul>
              </div>
              {/* Phase 2 */}
              <div className="relative z-10 flex flex-col bg-surface p-space-md sm:p-space-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary text-on-primary font-headline-sm text-headline-sm flex items-center justify-center mb-space-md">
                  02
                </div>
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest text-[0.7rem] mb-1">Exploration</span>
                <h3 className="font-subheading text-subheading text-primary mb-space-xs">Concept & Material Schema</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light mb-space-md">
                  Translating the narrative into volumetric arrangements, lighting gestures, custom tactile mood assemblies, and bespoke stone and wood finishes.
                </p>
                <ul className="font-label-sm text-label-sm text-on-surface-variant flex flex-col gap-1 mt-auto">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary"></span>Photorealistic Renderings</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary"></span>Physical Material Trays</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary"></span>Spatial Flow Plans</li>
                </ul>
              </div>
              {/* Phase 3 */}
              <div className="relative z-10 flex flex-col bg-surface p-space-md sm:p-space-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary text-on-primary font-headline-sm text-headline-sm flex items-center justify-center mb-space-md">
                  03
                </div>
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest text-[0.7rem] mb-1">Realization</span>
                <h3 className="font-subheading text-subheading text-primary mb-space-xs">Technical Development</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light mb-space-md">
                  Production of tender-ready drawing packages, structural calculations, artisan guild commissions, and precise material procurement schedules.
                </p>
                <ul className="font-label-sm text-label-sm text-on-surface-variant flex flex-col gap-1 mt-auto">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary"></span>GFC Working Drawings</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary"></span>Artisan Joinery Specs</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary"></span>Tender & Vendor Vetting</li>
                </ul>
              </div>
              {/* Phase 4 */}
              <div className="relative z-10 flex flex-col bg-surface p-space-md sm:p-space-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary text-on-secondary font-headline-sm text-headline-sm flex items-center justify-center mb-space-md">
                  04
                </div>
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest text-[0.7rem] mb-1">Culmination</span>
                <h3 className="font-subheading text-subheading text-primary mb-space-xs">Master Handover</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light mb-space-md">
                  Full white-glove site deployment, acoustic calibration, custom art curation installation, sensory atmospheric scenting, and client residency orientation.
                </p>
                <ul className="font-label-sm text-label-sm text-on-surface-variant flex flex-col gap-1 mt-auto">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary"></span>Defect-Free Signoff</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary"></span>Art Installation & Lighting</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary"></span>Living Care Dossier</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Artisan Guild Showcase / Materiality Detail Strip */}
        <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-xl bg-surface-container-low">
          <div className="max-w-[88rem] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-5 flex flex-col gap-space-sm">
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Sourced Craftsmanship</span>
                <h3 className="font-headline-md text-headline-md text-primary">The Heritage Collaborators</h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light">
                  Every Moire Studio Mia environment breathes with hand-planed timber, sand-cast bronzes, and naturally pigmented lime plasters. We bridge regional Indian craft clusters directly with contemporary high-performance architecture.
                </p>
                <div className="flex items-center gap-space-md pt-space-2xs">
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary">Jaipur</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Carved Sandstone</span>
                  </div>
                  <div className="h-8 w-[1px] bg-outline-variant"></div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary">Moradabad</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Lost-wax Brass</span>
                  </div>
                  <div className="h-8 w-[1px] bg-outline-variant"></div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary">Varanasi</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Handloom Silks</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-space-sm">
                <div className="h-44 sm:h-56 overflow-hidden bg-surface">
                  <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Extreme macro close up of handcrafted patinated bronze hardware detailing, hand-hammered texture with dark golden highlights against deep charcoal shadows, tactile architectural luxury." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpSIGb_GmZ2ZmoJAeB3_VpjmgCeQlrkDOK5tyeF8YgXpI2wu5ZeSWsOzisMIgZjrAuMKfsBkMABSrUvodMH62twriEl6LEWZNmtf5bqvKjZe1Wp05UnXfZXT0Dncu0JPn2wAQP6iueG-bM9d6T7kUFlDKOY1bjji_qC0Qj3hrFbMHEIcGQQtXRqGDZsCuMASs0GG-4-vaYZhv4c0vF5P_QGSaj97adKWvhPi59UgGwgYa-lLY-Z5ss" />
                </div>
                <div className="h-44 sm:h-56 overflow-hidden bg-surface">
                  <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Close up architectural detail of artisanal fluted sandstone wall cladding, gentle geometric shadows from low side light, earthy warm neutral tones, timeless Indian masonry." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnwGAWUtHaZYQbgaiOzAp-uHP-RHs9yOcSHdUQVleRXn4FlKK8MWYbqzSKRhJb14JkWuBP0X-vzSs0-oh0c7yMzLD_TxS_eKIrKleXFpW_hMsPO8qbWnEL4spk0SOyUGoCKVRTIJ2DIVoLXO8LsfiMBh6LCHUzQlJ9jG2vH3MEG0HtfM0A9OS_tw2vu2weSHgd1WsznqIHRCDKgVD5vhJ8nEt0C2vvZU_m3lRwoHuEUSkvvnD0m-Py" />
                </div>
                <div className="h-44 sm:h-56 overflow-hidden bg-surface col-span-2 sm:col-span-1">
                  <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Artisanal raw teak wood joint interlocking with precision Japanese style joinery, natural rich matte wood grain, studio lit architectural craftsmanship sample." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7c-gd9UnlgScG0CsYyKzr4dE8XRJHXoBFjUYs6CBM_6MBJiQ6maPddaXg93fRZjSx5y0bXdiy2YTrYwHO4v0pOWNh_ibyHNvXprBG0K4zNPSZzOhzOyIbh320LsOCD4Ah9jKpiI0S0394hcgKW11VfYyJxxBE1lqaFawxXiONadBaLdiPL3OEtBiltb3rW1rnetaQ0HqC1v7CWAMjYvx1dqMLjZY6VMFUWBTalpfQzoEcwHlx7FWX" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curated FAQ / Clarifications Section */}
        <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-2xl bg-surface">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-space-xl">
              <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest block mb-space-2xs">Engagement Protocol</span>
              <h2 className="font-headline-md text-headline-md text-primary">Frequently Addressed Inquiries</h2>
            </div>
            <div className="flex flex-col gap-space-sm" id="services-faq">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={faq.q} className="faq-item bg-surface-container-low p-space-md transition-colors duration-300">
                    <button
                      aria-expanded={isOpen}
                      className="faq-trigger w-full flex items-center justify-between text-left gap-space-sm focus:outline-none"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className="font-subheading text-subheading text-primary">{faq.q}</span>
                      <span
                        className="material-symbols-outlined text-secondary transition-transform duration-300 faq-icon"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        expand_more
                      </span>
                    </button>
                    <div className={`faq-content ${isOpen ? "" : "hidden"} pt-space-sm font-body-sm text-body-sm text-on-surface-variant font-light`}>
                      {faq.a}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Grand Prominent CTA Section */}
        <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-3xl bg-primary text-on-primary relative overflow-hidden">
          <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-surface-tint/10 blur-3xl pointer-events-none"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-space-xs mb-space-sm justify-center">
              <span className="w-8 h-[1px] bg-secondary-fixed"></span>
              <span className="font-label-caps text-label-caps uppercase text-secondary-fixed tracking-widest">Commence Dialogue</span>
              <span className="w-8 h-[1px] bg-secondary-fixed"></span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-primary mb-space-md max-w-3xl mx-auto leading-tight">
              Ready to transform your space into a work of living art?
            </h2>
            <p className="font-body-lg text-body-lg text-primary-fixed font-light max-w-2xl mx-auto mb-space-xl">
              We limit our active commissions annually to guarantee intimate principal attention and uncompromising artisan craftsmanship for every residence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md">
              <Link className="w-full sm:w-auto px-space-xl py-space-sm bg-secondary text-on-secondary hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all duration-300 font-label-caps text-label-caps uppercase tracking-widest shadow-lg hover:shadow-2xl" to="/contact">
                Initiate a Consultation
              </Link>
              <Link className="w-full sm:w-auto px-space-lg py-space-sm border border-on-primary/20 text-on-primary hover:border-secondary hover:text-secondary-fixed transition-all duration-300 font-label-caps text-label-caps uppercase tracking-widest" to="/portfolio">
                Examine Portfolio
              </Link>
            </div>
            <div className="mt-space-xl pt-space-lg border-t border-on-primary/10 flex flex-wrap justify-center items-center gap-space-lg text-on-primary/60 font-body-sm text-body-sm">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-sm">lock</span>
                Strict Discretion Assured
              </span>
              <span className="text-on-primary/30">•</span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-sm">schedule</span>
                Consultation response within 48 Hours
              </span>
              <span className="text-on-primary/30">•</span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-sm">verified_user</span>
                Principal-Led Engagements
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
