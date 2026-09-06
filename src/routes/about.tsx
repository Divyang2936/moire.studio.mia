import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Studio — Moire Studio Mia" },
      { name: "description", content: "About the Studio — Moire Studio Mia" },
      { property: "og:title", content: "About the Studio — Moire Studio Mia" },
      { property: "og:description", content: "About the Studio — Moire Studio Mia" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="w-full pt-20 bg-background">
      <div className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="relative w-full bg-surface-container-lowest overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-low/40 via-transparent to-surface-container-lowest pointer-events-none"></div>
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl lg:py-space-3xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter-desktop items-end">
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="w-8 h-[1px] bg-secondary"></span>
                  <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">The Soul of Moire Studio Mia</span>
                </div>
                <h1 className="font-display text-headline-lg lg:text-display text-primary max-w-4xl tracking-tight">
                  Designing with quiet intention, authentic materials, and enduring grace.
                </h1>
              </div>
              <div className="lg:col-span-4 flex flex-col justify-end lg:pb-space-xs">
                <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
                  We sculpt environments that cultivate stillness—marrying ancient Indian craft vernaculars with distilled European spatial sensibilities.
                </p>
                <div className="flex items-center gap-space-md pt-space-md text-secondary">
                  <div className="flex flex-col">
                    <span className="font-display text-headline-sm text-primary">02</span>
                    <span className="font-label-caps text-[0.65rem] tracking-widest text-on-surface-variant uppercase">Ateliers (DEL / BOM)</span>
                  </div>
                  <div className="w-[1px] h-8 bg-surface-variant"></div>
                  <div className="flex flex-col">
                    <span className="font-display text-headline-sm text-primary">10+</span>
                    <span className="font-label-caps text-[0.65rem] tracking-widest text-on-surface-variant uppercase">Years of Curation</span>
                  </div>
                  <div className="w-[1px] h-8 bg-surface-variant"></div>
                  <div className="flex flex-col">
                    <span className="font-display text-headline-sm text-primary">48</span>
                    <span className="font-label-caps text-[0.65rem] tracking-widest text-on-surface-variant uppercase">Private Sanctuaries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Vignette & Philosophy */}
        <section className="w-full bg-surface-container-low relative">
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl lg:py-space-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-gutter-desktop items-center">
              {/* Portrait Frame */}
              <div className="lg:col-span-6 relative">
                <div className="relative bg-surface p-space-sm sm:p-space-md shadow-xl">
                  <div className="aspect-square w-full overflow-hidden relative bg-surface-container">
                    <img
                      alt="Mia, Founder & Lead Interior Architect at Moire Studio Mia"
                      className="w-full h-full object-cover grayscale-[15%] contrast-[1.03] transition-transform duration-700 ease-out hover:scale-[1.02]"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUCd5phSsCcgJMyiPQfsKcX9TGxV0f6pZt1ABA3DOuB6rResBzpT_8gxhEBzwPFwx89lhjJxh2OkWFsBieYEtdG7ph3depuRWe5y6Y8YAuDCqf3_5z88iQnvDfyCos_aOC35XRT4V_FXL5SvbvNT2VXBWwoW6fpXEwRCWGinpIlH8Tv0nntmHlasPWPehZmITw3JmtZAIgPicZMW2jkW-hyv1KIFt8WObm0lzeIn5JefqXV73ya7ZZ"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="pt-space-md flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-space-xs">
                    <div>
                      <p className="font-headline-sm text-headline-sm text-primary">Mia</p>
                      <p className="font-label-caps text-[0.7rem] uppercase tracking-widest text-secondary">Founder & Lead Interior Architect</p>
                    </div>
                    <span className="font-label-caps text-[0.65rem] text-on-surface-variant uppercase tracking-wider">New Delhi Atelier • 2024</span>
                  </div>
                </div>
                {/* Material Accent Swatch Overlay */}
                <div className="hidden sm:block absolute -bottom-8 -right-6 bg-surface-container-highest p-space-md shadow-lg max-w-[220px]">
                  <span className="font-label-caps text-[0.6rem] uppercase tracking-widest text-secondary block mb-1">Tactile Archive</span>
                  <p className="font-body-sm text-[0.75rem] text-on-surface-variant leading-snug">
                    Unpolished Dholpur sandstone, hand-rubbed brass, raw silk slub.
                  </p>
                </div>
              </div>
              {/* Narrative Column */}
              <div className="lg:col-span-6 flex flex-col gap-space-lg lg:pl-space-md">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Genesis & Philosophy</span>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    The Architecture of Stillness
                  </h2>
                </div>
                <div className="flex flex-col gap-space-md font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  <p>
                    Founded by lead interior architect Mia, Moire Studio Mia was born from a desire to strip away visual clutter and uncover the emotional resonance of spatial design. Trained in Milan and rooted in the artisanal heritage of India, Mia approaches every project as an intimate dialogue between light, stone, and human presence.
                  </p>
                  <p className="text-body-md text-on-surface-variant font-light">
                    Rather than prescribing trends, each layout emerges organically from geographical site microclimates, ancestral construction techniques, and the quiet tactile interactions of everyday habitation.
                  </p>
                </div>
                {/* Handwritten / Editorial Quote Block */}
                <div className="bg-surface-container p-space-lg shadow-sm relative overflow-hidden">
                  <div className="text-secondary/15 font-display text-[6rem] absolute -top-8 -left-2 select-none pointer-events-none">“</div>
                  <p className="font-subheading text-subheading italic text-primary relative z-10 leading-snug">
                    “True luxury is the quiet presence of thoughtful space.”
                  </p>
                  <div className="flex items-center justify-between pt-space-sm relative z-10">
                    <span className="font-headline-sm text-headline-sm text-secondary font-normal italic">— Mia</span>
                    <span className="font-label-caps text-[0.65rem] text-on-surface-variant uppercase tracking-widest">Principal Vision</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Studio Values Section */}
        <section className="w-full bg-surface-container-lowest">
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl lg:py-space-3xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
              <div className="flex flex-col gap-space-xs max-w-xl">
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Guiding Pillars</span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Our Curatorial Tenets</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                A commitment to timeless form, tactile sincerity, and the silent poetry of unadorned volumes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md lg:gap-gutter-desktop">
              {/* Value 1 */}
              <div className="group bg-surface-container-low hover:bg-surface-container-high transition-all duration-500 p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md">
                <div>
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-container-lowest text-secondary mb-space-lg shadow-sm">
                    <span className="material-symbols-outlined text-[1.75rem]">texture</span>
                  </div>
                  <span className="font-label-caps text-[0.65rem] tracking-widest uppercase text-on-surface-variant block mb-space-2xs">Pillar I</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm">Integrity of Material</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Celebrating raw travertine, lime wash, handwoven linens, and reclaimed teak. We honor raw surfaces that patina gracefully with decades of sunlight and human touch.
                  </p>
                </div>
                <div className="pt-space-lg flex items-center gap-space-2xs text-secondary font-label-caps text-[0.7rem] uppercase tracking-widest">
                  <span>Material Honesty</span>
                  <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                </div>
              </div>
              {/* Value 2 */}
              <div className="group bg-surface-container-low hover:bg-surface-container-high transition-all duration-500 p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md">
                <div>
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-container-lowest text-secondary mb-space-lg shadow-sm">
                    <span className="material-symbols-outlined text-[1.75rem]">nature_people</span>
                  </div>
                  <span className="font-label-caps text-[0.65rem] tracking-widest uppercase text-on-surface-variant block mb-space-2xs">Pillar II</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm">Spatial Silence & Restraint</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Designing negative space and acoustic serenity into every layout. We compose corridors, sightlines, and voids that allow the mind to decompress and breathe.
                  </p>
                </div>
                <div className="pt-space-lg flex items-center gap-space-2xs text-secondary font-label-caps text-[0.7rem] uppercase tracking-widest">
                  <span>Volumetric Peace</span>
                  <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                </div>
              </div>
              {/* Value 3 */}
              <div className="group bg-surface-container-low hover:bg-surface-container-high transition-all duration-500 p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md">
                <div>
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-container-lowest text-secondary mb-space-lg shadow-sm">
                    <span className="material-symbols-outlined text-[1.75rem]">handyman</span>
                  </div>
                  <span className="font-label-caps text-[0.65rem] tracking-widest uppercase text-on-surface-variant block mb-space-2xs">Pillar III</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm">Soulful Craftsmanship</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Collaborating directly with master Indian stone masons and textile weavers. Every architectural installation preserves and champions generational handicraft guilds.
                  </p>
                </div>
                <div className="pt-space-lg flex items-center gap-space-2xs text-secondary font-label-caps text-[0.7rem] uppercase tracking-widest">
                  <span>Living Heritage</span>
                  <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Timeline / Journey Section */}
        <section className="w-full bg-surface-container-low">
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl lg:py-space-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-gutter-desktop mb-space-2xl">
              <div className="lg:col-span-4 flex flex-col gap-space-xs">
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Decade of Practice</span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Studio Chronology</h2>
                <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">
                  Tracing our continuous path of architectural inquiry from an intimate studio in South Delhi to international recognition.
                </p>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-space-lg">
                {/* Milestone 1 */}
                <div className="group bg-surface p-space-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-space-md items-start">
                  <div className="flex flex-col">
                    <span className="font-display text-headline-md text-secondary">2014</span>
                    <span className="font-label-caps text-[0.65rem] tracking-widest uppercase text-on-surface-variant">Inception</span>
                  </div>
                  <div className="flex flex-col gap-space-2xs max-w-xl">
                    <h3 className="font-headline-sm text-headline-sm text-primary">Studio Inception in New Delhi</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Moire Studio Mia opens its doors in Chhatarpur, New Delhi with initial residential commissions focusing on courtyard homes and restored vernacular brick estates.
                    </p>
                  </div>
                </div>
                {/* Milestone 2 */}
                <div className="group bg-surface p-space-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-space-md items-start">
                  <div className="flex flex-col">
                    <span className="font-display text-headline-md text-secondary">2017</span>
                    <span className="font-label-caps text-[0.65rem] tracking-widest uppercase text-on-surface-variant">Critique</span>
                  </div>
                  <div className="flex flex-col gap-space-2xs max-w-xl">
                    <h3 className="font-headline-sm text-headline-sm text-primary">Architectural Digest India Recognition</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Named as an ‘Emerging Voice in Sustainable Modernism’ by AD India, celebrated for balancing tropical passive cooling with refined monochromatic textures.
                    </p>
                  </div>
                </div>
                {/* Milestone 3 */}
                <div className="group bg-surface p-space-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-space-md items-start">
                  <div className="flex flex-col">
                    <span className="font-display text-headline-md text-secondary">2021</span>
                    <span className="font-label-caps text-[0.65rem] tracking-widest uppercase text-on-surface-variant">Expansion</span>
                  </div>
                  <div className="flex flex-col gap-space-2xs max-w-xl">
                    <h3 className="font-headline-sm text-headline-sm text-primary">Coastal Studio Atelier in Bandra, Mumbai</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Establishment of our western coastal atelier in Mumbai to cater to sea-facing penthouses, private art collectors’ retreats, and bespoke hospitality suites across Goa and Maharashtra.
                    </p>
                  </div>
                </div>
                {/* Milestone 4 */}
                <div className="group bg-surface p-space-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-space-md items-start">
                  <div className="flex flex-col">
                    <span className="font-display text-headline-md text-secondary">2024</span>
                    <span className="font-label-caps text-[0.65rem] tracking-widest uppercase text-on-surface-variant">Objects</span>
                  </div>
                  <div className="flex flex-col gap-space-2xs max-w-xl">
                    <h3 className="font-headline-sm text-headline-sm text-primary">Launch of Moire Editions</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Inaugural launch of our bespoke furniture & sculptural craft line—hand-carved marble consoles, brass luminescence, and hand-loomed organic weaves created with artisanal communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multidisciplinary Leadership Team */}
        <section className="w-full bg-surface-container-lowest">
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl lg:py-space-3xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">The Studio Practice</span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Multidisciplinary Leadership</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                A collective of architects, interior sculptors, and material researchers working seamlessly from concept through bespoke manufacture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg lg:gap-gutter-desktop">
              {/* Mia */}
              <div className="group flex flex-col bg-surface-container-low shadow-sm">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container">
                  <img
                    alt="Mia, Founder and Lead Architect"
                    className="w-full h-full object-cover grayscale-[20%] transition-transform duration-700 ease-out group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUCd5phSsCcgJMyiPQfsKcX9TGxV0f6pZt1ABA3DOuB6rResBzpT_8gxhEBzwPFwx89lhjJxh2OkWFsBieYEtdG7ph3depuRWe5y6Y8YAuDCqf3_5z88iQnvDfyCos_aOC35XRT4V_FXL5SvbvNT2VXBWwoW6fpXEwRCWGinpIlH8Tv0nntmHlasPWPehZmITw3JmtZAIgPicZMW2jkW-hyv1KIFt8WObm0lzeIn5JefqXV73ya7ZZ"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-space-md">
                    <span className="font-label-caps text-on-primary text-[0.65rem] tracking-widest uppercase">Milan / Delhi</span>
                  </div>
                </div>
                <div className="p-space-md flex flex-col gap-space-2xs">
                  <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-secondary">Founder & Lead Interior Architect</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Mia</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">
                    Steers overall spatial direction, programmatic clarity, and conceptual philosophy across all commissioned residential and commercial projects.
                  </p>
                </div>
              </div>
              {/* Arjun Kapur */}
              <div className="group flex flex-col bg-surface-container-low shadow-sm">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container">
                  <img
                    alt="Editorial portrait of an Indian male architect in his late 30s named Arjun Kapur, dressed in an understated charcoal architectural tunic, warm daylight pouring through floor-to-ceiling windows, serene studio library background with stone models and architectural blueprints, refined luxury minimalism, natural skin tones"
                    className="w-full h-full object-cover grayscale-[20%] transition-transform duration-700 ease-out group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6iT3wO8DgWMTBAxan03pWpFoBxE9IRTxkWmLJiIbmmm4q12xwVHkIelX1WYIFfj5ELMgslqCuAlxwl65_IPNEmMhMGWQcsERnzbo6u_BIlaGVxkxHM4AlRGcdYTjSAsOx0WIHYtOcV_bK21ZOyN-fLyklqwipu8rBKNq6kMRezvV1KDBwkxpWoOmu-0oFMqOAmWYm3QE9op8GY6lFbxNUOJyKrSvPtVcqL638zVyCNaj4jhZjOgej"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-space-md">
                    <span className="font-label-caps text-on-primary text-[0.65rem] tracking-widest uppercase">Structural Integrity</span>
                  </div>
                </div>
                <div className="p-space-md flex flex-col gap-space-2xs">
                  <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-secondary">Director of Architecture & Spatial Planning</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Arjun Kapur</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">
                    Oversees tectonic coordination, climatic fenestration, and complex structural transitions, ensuring architectural longevity and environmental empathy.
                  </p>
                </div>
              </div>
              {/* Tara Sen */}
              <div className="group flex flex-col bg-surface-container-low shadow-sm">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container">
                  <img
                    alt="Editorial portrait of an Indian woman textile curator in her mid 30s named Tara Sen, holding draped natural handloom cashmere fabrics, serene expression, warm soft natural lighting in an airy studio with tactile lime plaster walls, architectural minimalism, muted earth tone color palette"
                    className="w-full h-full object-cover grayscale-[20%] transition-transform duration-700 ease-out group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrb7DcCBfYNfcakpkq8Yya67IWTPXMDZZldyh7DSLrYSHBYqITnSzH4pnG5WjpLM_19lG9pF-nMti5U95JrhXjJQeqY7iznIGCbvxnIqrg11L9GFJfJNSJ5aCD2sHgQ5OckKnP__E8_Q_2wrnqE4ZLdH2MUQXgfcykpvpgrongwQdjYkwayYCRLw-9yUySheko_qz3GAqHRIM-1WwITfAD2bUn71mHtawYCwoBSIoTVOdBpN7t5rox"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-space-md">
                    <span className="font-label-caps text-on-primary text-[0.65rem] tracking-widest uppercase">Tactile Archaeology</span>
                  </div>
                </div>
                <div className="p-space-md flex flex-col gap-space-2xs">
                  <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-secondary">Head of Furniture & Textile Curation</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Tara Sen</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">
                    Directs the Moire Editions line and curates vintage collectible design, sourcing bespoke hand-woven fibers and master stone carvings across rural craft clusters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architectural Workshop / Atelier Atmosphere Section */}
        <section className="w-full bg-surface-container-low">
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Material Atelier</span>
                <h2 className="font-headline-md text-headline-md text-primary">Where Concept Meets Hand</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Our atelier houses over six hundred material samples—from river-washed pebbles gathered in Uttarakhand to raw block-printed organic cottons from Bagru. Every design commission begins not on a digital screen, but across our 14-foot teak curation table.
                </p>
                <div className="pt-space-xs flex items-center gap-space-sm">
                  <div className="p-space-xs bg-surface shadow-sm">
                    <span className="font-display text-subheading text-secondary block">600+</span>
                    <span className="font-label-caps text-[0.6rem] text-on-surface-variant uppercase">Material Samples</span>
                  </div>
                  <div className="p-space-xs bg-surface shadow-sm">
                    <span className="font-display text-subheading text-secondary block">100%</span>
                    <span className="font-label-caps text-[0.6rem] text-on-surface-variant uppercase">Artisan Traceability</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="aspect-[16/10] w-full bg-surface-container overflow-hidden shadow-lg">
                  <img
                    alt="Minimalist architectural studio atelier table displaying stone samples of travertine, slate, textured lime plaster swatches, handmade brass hardware, architectural drawings, warm afternoon sun casting soft shadows, peaceful and serene studio ambiance with neutral warm beige tones"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6-hwCtphNlZ_boLrfqjjYlpXU7ti3Y6hQb3ET6e8l6JjwhPu8fxGLYFZhV9KuELqgdRT12VzSaZJF0ZmjALu6MF6XFTsJT52hfxoOCyb8o3OGB5a-IhkXHWfiQSBNGl3IPLIHcPs8RGZZCdyO05BFMGzEaXHTMXluFF88ion7yfvbu681F_LDpjriuVtKYyPQ8rCwk7wSSxdHA5YR3Uk5eZ6vhNTzJsEE8AJgcaNyuyglXzj47Wsb"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Studio Walkthrough CTA Banner */}
        <section className="w-full bg-primary text-on-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fedb9b_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl lg:py-space-3xl relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-6 h-[1px] bg-secondary-fixed"></span>
                <span className="font-label-caps text-label-caps uppercase text-secondary-fixed tracking-widest">Private Atelier Sessions</span>
                <span className="w-6 h-[1px] bg-secondary-fixed"></span>
              </div>
              <h2 className="font-display text-headline-lg lg:text-display text-on-primary tracking-tight">
                Experience our design ethos firsthand.
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container font-light max-w-xl">
                Schedule an intimate studio walkthrough in New Delhi or Mumbai to review material archives, bespoke furniture prototypes, and spatial narratives.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-space-md pt-space-md w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-space-xl py-space-xs bg-secondary hover:bg-secondary-fixed text-on-secondary hover:text-on-secondary-fixed font-label-caps text-label-caps uppercase transition-colors duration-300 shadow-md text-center"
                >
                  Schedule a Studio Walkthrough
                </Link>
                <Link
                  to="/portfolio"
                  className="w-full sm:w-auto px-space-lg py-space-xs bg-transparent hover:bg-surface-container-highest/20 text-inverse-primary font-label-caps text-label-caps uppercase transition-colors duration-300 text-center"
                >
                  Explore Completed Residences
                </Link>
              </div>
              <div className="pt-space-lg flex flex-wrap items-center justify-center gap-space-lg text-on-primary-container font-label-caps text-[0.7rem] uppercase tracking-widest">
                <div className="flex items-center gap-space-2xs">
                  <span className="material-symbols-outlined text-[1rem] text-secondary-fixed">pin_drop</span>
                  <span>The Dhan Mill, New Delhi</span>
                </div>
                <div className="flex items-center gap-space-2xs">
                  <span className="material-symbols-outlined text-[1rem] text-secondary-fixed">pin_drop</span>
                  <span>Bandra West, Mumbai</span>
                </div>
                <div className="flex items-center gap-space-2xs">
                  <span className="material-symbols-outlined text-[1rem] text-secondary-fixed">schedule</span>
                  <span>By Appointment Only</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
