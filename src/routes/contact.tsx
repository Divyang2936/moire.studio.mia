import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Begin a Conversation — Contact Moire Studio Mia" },
      { name: "description", content: "We accept a limited number of residential and commercial commissions each year to ensure uncompromising focus and artisanal depth." },
      { property: "og:title", content: "Begin a Conversation — Contact Moire Studio Mia" },
      { property: "og:description", content: "We accept a limited number of residential and commercial commissions each year to ensure uncompromising focus and artisanal depth." },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  {
    q: "How far in advance should we engage the studio?",
    a: "We recommend initiating conversations four to six months prior to scheduled site possession or architectural breaking. Because we preserve a low project-to-partner ratio, our annual commission registry typically commits one to two quarters ahead of scheduled construction.",
  },
  {
    q: "Do you undertake spatial commissions outside of India?",
    a: "Yes. Moire Studio Mia actively curates residences, boutique penthouses, and hospitality spaces across London, Dubai, Singapore, and New York. International assignments leverage our core architectural guild in New Delhi for bespoke joinery and specialized Indian stonework, paired with licensed local project managers for on-site structural execution.",
  },
  {
    q: "What is the typical lifecycle and duration of a project?",
    a: "A comprehensive residential interior architecture endeavor typically spans eight to fourteen months from concept blueprints to final handover. This encompasses rigorous physical mockups, rare stone procurement from Rajasthan and Italy, bespoke walnut joinery fabrication, and final curation of art and lighting.",
  },
  {
    q: "How are artisan collaborations structured within projects?",
    a: "Our studio maintains longstanding relationships with generational stone carvers in Agra, hand-loomed textile ateliers in Kashmir, and bronze-casters in Moradabad. Every project integrates custom artisanal features specified exclusively for the patron, authenticated via our studio monograph.",
  },
];

function ContactPage() {
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientLocation: "",
    budgetTier: "",
    projectScope: "",
    projectVision: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  function toggleFaq(index: number) {
    setOpenFaq((prev) => (prev === index ? null : index));
  }

  return (
    <main className="w-full pt-20 bg-background">
      <div className="flex flex-col w-full">
        <section className="relative w-full overflow-hidden bg-surface py-space-2xl">
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop">
            <div className="flex flex-col max-w-3xl">
              <div className="flex items-center gap-space-xs mb-space-sm">
                <span className="w-8 h-[1px] bg-secondary"></span>
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Inquiries &amp; Commissions</span>
              </div>
              <h1 className="font-display text-display-mobile lg:text-display text-primary tracking-tight mb-space-sm">Begin a Conversation</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                We accept a limited number of residential and commercial commissions each year to ensure uncompromising focus and artisanal depth.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl mt-space-2xl items-start">
              <div className="lg:col-span-7 bg-surface-container-low p-space-md sm:p-space-xl rounded shadow-sm">
                <div className="flex flex-col gap-space-2xs mb-space-lg">
                  <span className="font-label-caps text-label-caps uppercase text-secondary">Spatial Prospectus</span>
                  <h2 className="font-headline-md text-headline-md text-primary">Commission Details</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Share your spatial vision with our senior partners. Discretion assured across all stages.</p>
                </div>
                <form className="flex flex-col gap-space-lg" id="inquiry-form" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-space-3xs">
                      <label className="font-label-caps text-label-caps uppercase text-on-surface-variant" htmlFor="clientName">Full Name *</label>
                      <input
                        className="w-full bg-surface-container-lowest px-space-sm py-space-xs text-body-md font-body-md text-primary placeholder:text-outline/60 focus:outline-none focus:bg-surface transition-colors shadow-sm rounded"
                        id="clientName"
                        placeholder="e.g. Rohini Singhania"
                        required
                        type="text"
                        value={formData.clientName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col gap-space-3xs">
                      <label className="font-label-caps text-label-caps uppercase text-on-surface-variant" htmlFor="clientEmail">Email Address *</label>
                      <input
                        className="w-full bg-surface-container-lowest px-space-sm py-space-xs text-body-md font-body-md text-primary placeholder:text-outline/60 focus:outline-none focus:bg-surface transition-colors shadow-sm rounded"
                        id="clientEmail"
                        placeholder="r.singhania@domain.com"
                        required
                        type="email"
                        value={formData.clientEmail}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-space-3xs">
                      <label className="font-label-caps text-label-caps uppercase text-on-surface-variant" htmlFor="clientPhone">Phone / WhatsApp *</label>
                      <input
                        className="w-full bg-surface-container-lowest px-space-sm py-space-xs text-body-md font-body-md text-primary placeholder:text-outline/60 focus:outline-none focus:bg-surface transition-colors shadow-sm rounded"
                        id="clientPhone"
                        placeholder="+91 98000 00000"
                        required
                        type="tel"
                        value={formData.clientPhone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col gap-space-3xs">
                      <label className="font-label-caps text-label-caps uppercase text-on-surface-variant" htmlFor="clientLocation">Project Location *</label>
                      <input
                        className="w-full bg-surface-container-lowest px-space-sm py-space-xs text-body-md font-body-md text-primary placeholder:text-outline/60 focus:outline-none focus:bg-surface transition-colors shadow-sm rounded"
                        id="clientLocation"
                        placeholder="New Delhi, London, Alibaug"
                        required
                        type="text"
                        value={formData.clientLocation}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-space-3xs">
                      <label className="font-label-caps text-label-caps uppercase text-on-surface-variant" htmlFor="budgetTier">Estimated Budget Tier *</label>
                      <select
                        className="w-full bg-surface-container-lowest px-space-sm py-space-xs text-body-md font-body-md text-primary focus:outline-none focus:bg-surface transition-colors shadow-sm rounded appearance-none cursor-pointer"
                        id="budgetTier"
                        required
                        value={formData.budgetTier}
                        onChange={handleChange}
                      >
                        <option disabled value="">Select investment scope</option>
                        <option value="tier-1">₹50L — ₹1 Crore</option>
                        <option value="tier-2">₹1 Crore — ₹3 Crore</option>
                        <option value="tier-3">₹3 Crore+ / Bespoke Monograph</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-space-3xs">
                      <label className="font-label-caps text-label-caps uppercase text-on-surface-variant" htmlFor="projectScope">Scope of Work *</label>
                      <select
                        className="w-full bg-surface-container-lowest px-space-sm py-space-xs text-body-md font-body-md text-primary focus:outline-none focus:bg-surface transition-colors shadow-sm rounded appearance-none cursor-pointer"
                        id="projectScope"
                        required
                        value={formData.projectScope}
                        onChange={handleChange}
                      >
                        <option disabled value="">Select typology</option>
                        <option value="residential">Comprehensive Residential</option>
                        <option value="commercial">Commercial Atelier / Studio</option>
                        <option value="penthouse">Penthouse Renovation</option>
                        <option value="furniture">Artisanal Furniture &amp; Curation</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-3xs">
                    <label className="font-label-caps text-label-caps uppercase text-on-surface-variant" htmlFor="projectVision">Vision for the Space *</label>
                    <textarea
                      className="w-full bg-surface-container-lowest p-space-sm text-body-md font-body-md text-primary placeholder:text-outline/60 focus:outline-none focus:bg-surface transition-colors shadow-sm rounded resize-none"
                      id="projectVision"
                      placeholder="Detail square footage, architectural nuances, historical context, or bespoke finishes you seek to incorporate."
                      required
                      rows={4}
                      value={formData.projectVision}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md pt-space-xs">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">All client conversations are protected by NDA.</span>
                    <button className="group inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary hover:text-on-secondary transition-colors duration-300 font-label-caps text-label-caps uppercase rounded" type="submit">
                      <span>Send Private Inquiry</span>
                      <span className="material-symbols-outlined text-[1.125rem] group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
                    </button>
                  </div>
                </form>
                {submitted && (
                  <div className="mt-space-md p-space-md bg-secondary-container text-on-secondary-container rounded shadow-sm" id="form-success-banner">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary">verified</span>
                      <span className="font-headline-sm text-headline-sm">Inquiry Received</span>
                    </div>
                    <p className="font-body-sm text-body-sm mt-space-2xs">Our principal architects review submissions within two business days. A tailored dossier and preliminary consultation invite will be dispatched.</p>
                  </div>
                )}
              </div>
              <div className="lg:col-span-5 flex flex-col gap-space-xl">
                <div className="bg-surface-container-lowest p-space-lg rounded shadow-sm flex flex-col gap-space-lg">
                  <div>
                    <span className="font-label-caps text-label-caps uppercase text-secondary tracking-wider">Direct Channels</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mt-space-3xs mb-space-md">Studio Concierge</h3>
                    <div className="flex flex-col gap-space-sm font-body-md text-body-md">
                      <a className="flex items-center gap-space-xs text-on-surface hover:text-secondary transition-colors" href="mailto:contact@moirestudiomia.com">
                        <span className="material-symbols-outlined text-secondary">alternate_email</span>
                        <span>contact@moirestudiomia.com</span>
                      </a>
                      <a className="flex items-center gap-space-xs text-on-surface hover:text-secondary transition-colors" href="tel:+919810045678">
                        <span className="material-symbols-outlined text-secondary">call</span>
                        <span>+91 98100 45678</span>
                      </a>
                      <a className="flex items-center gap-space-xs text-on-surface hover:text-secondary transition-colors" href="https://wa.me/919810045678" rel="noopener noreferrer" target="_blank">
                        <span className="material-symbols-outlined text-secondary">chat</span>
                        <span>WhatsApp Concierge (Private Desk)</span>
                      </a>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-space-md rounded">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant block mb-space-3xs">Atelier Operating Hours</span>
                    <p className="font-body-sm text-body-sm text-primary font-medium">Monday – Friday, 10:00 AM – 6:30 PM IST</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Visits, material archive reviews, and spatial walkthroughs by prior appointment only.</p>
                  </div>
                  <div>
                    <span className="font-label-caps text-label-caps uppercase text-secondary tracking-wider">Social Retrospectives</span>
                    <div className="flex flex-wrap gap-space-md mt-space-xs">
                      <a className="flex items-center gap-space-3xs font-label-caps text-label-caps uppercase text-primary hover:text-secondary transition-colors" href="https://instagram.com" rel="noopener" target="_blank">
                        <span>Instagram</span>
                        <span className="material-symbols-outlined text-xs">north_east</span>
                      </a>
                      <a className="flex items-center gap-space-3xs font-label-caps text-label-caps uppercase text-primary hover:text-secondary transition-colors" href="https://pinterest.com" rel="noopener" target="_blank">
                        <span>Pinterest</span>
                        <span className="material-symbols-outlined text-xs">north_east</span>
                      </a>
                      <a className="flex items-center gap-space-3xs font-label-caps text-label-caps uppercase text-primary hover:text-secondary transition-colors" href="https://linkedin.com" rel="noopener" target="_blank">
                        <span>LinkedIn</span>
                        <span className="material-symbols-outlined text-xs">north_east</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-low p-space-lg rounded shadow-sm flex flex-col gap-space-md">
                  <span className="font-label-caps text-label-caps uppercase text-secondary">Flagship Ateliers</span>
                  <div className="flex flex-col gap-space-md">
                    <div className="bg-surface-container-lowest p-space-md rounded shadow-sm">
                      <div className="flex flex-wrap items-start justify-between gap-space-xs">
                        <h4 className="font-headline-sm text-headline-sm text-primary">New Delhi Studio</h4>
                        <span className="font-label-caps text-label-caps uppercase text-secondary bg-secondary-container px-space-2xs py-1 rounded">Primary Design Desk</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">18 Shanti Niketan, Crescent Avenue, New Delhi 110021, India</p>
                      <div className="flex items-center gap-space-2xs mt-space-xs text-secondary font-label-caps text-label-caps uppercase">
                        <span className="material-symbols-outlined text-[1rem]">schedule</span>
                        <span>Curated Walkthroughs Daily</span>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded shadow-sm">
                      <div className="flex flex-wrap items-start justify-between gap-space-xs">
                        <h4 className="font-headline-sm text-headline-sm text-primary">Mumbai Studio</h4>
                        <span className="font-label-caps text-label-caps uppercase text-secondary bg-secondary-container px-space-2xs py-1 rounded">Coastal Works</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">4th Floor, Horizon House, Bandra West, Mumbai 400050, India</p>
                      <div className="flex items-center gap-space-2xs mt-space-xs text-secondary font-label-caps text-label-caps uppercase">
                        <span className="material-symbols-outlined text-[1rem]">villa</span>
                        <span>Material Library Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-surface-container-high py-space-2xl">
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
              <div>
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Geographic Footprint</span>
                <h2 className="font-headline-lg text-headline-lg text-primary mt-space-3xs">Our Regional Presence</h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">Private retreats and residential architecture anchored in the distinct climatic landscapes of North and West India.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
              <div className="lg:col-span-6 relative rounded overflow-hidden shadow-sm bg-surface-container">
                <div
                  className="w-full h-80 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzqoTp5HmBhRyxiuHcBXOc5_1hNxDDPOUAevUXZV9qeIwfReBFqqaUh9v1lqMztItOyD0yvBZLVqeebSn9He_sBPhuW6fURlkR_iWpO70m8cKgsx7K1RF9axMgizQUpiV2Seyl3C9GEklCYNzGw9KIJKNwcdrHMj2whZriiCLKvq445QELE36Z9HroY88VBmKMAI687IbZtR8f9lVRrJZ74k_KkVaYoHCrTKlDOEKov6hDfymg9KBh')" }}
                ></div>
                <div className="absolute bottom-0 inset-x-0 bg-primary/80 backdrop-blur-md p-space-md text-on-primary flex items-center justify-between">
                  <div>
                    <p className="font-headline-sm text-headline-sm">New Delhi Flagship Atelier</p>
                    <p className="font-body-sm text-body-sm text-inverse-primary">Shanti Niketan • Material Archives &amp; Fabrication Studio</p>
                  </div>
                  <div className="flex items-center gap-space-3xs bg-secondary px-space-xs py-space-3xs rounded text-on-secondary font-label-caps text-label-caps uppercase">
                    <span className="material-symbols-outlined text-sm">pin_drop</span>
                    <span>28.5833° N</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 relative rounded overflow-hidden shadow-sm bg-surface-container">
                <div
                  className="w-full h-80 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAI11fwCfkwrxp2xlCmHoGf694Qp2Jb8MafbnHAob3J21tfV7fQK92fho6OYBDTAvKweJsPqEojcXoV-Thmg1jU_hLAhDbeNxiCiS-69tOhO4ia4Qeedyj93EUV3z2jREEVqut9yN8kMJ6gipfRickYEkkRMHFePZjwAOetMf3zFfQ6a4O96gKakU4rAl4PJg9gT1FL6MV-0SX14G3MvPWahmzHh3zZD1Mh_-YMyhF2KPeUGTvHPH6O')" }}
                ></div>
                <div className="absolute bottom-0 inset-x-0 bg-primary/80 backdrop-blur-md p-space-md text-on-primary flex items-center justify-between">
                  <div>
                    <p className="font-headline-sm text-headline-sm">Mumbai Atelier &amp; Gallery</p>
                    <p className="font-body-sm text-body-sm text-inverse-primary">Horizon House, Bandra West • Residential &amp; Coastal Curation</p>
                  </div>
                  <div className="flex items-center gap-space-3xs bg-secondary px-space-xs py-space-3xs rounded text-on-secondary font-label-caps text-label-caps uppercase">
                    <span className="material-symbols-outlined text-sm">pin_drop</span>
                    <span>19.0596° N</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-surface py-space-3xl">
          <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
              <div className="lg:col-span-4 flex flex-col gap-space-sm">
                <span className="font-label-caps text-label-caps uppercase text-secondary">Engagement Protocol</span>
                <h2 className="font-headline-lg text-headline-lg text-primary">Frequently Addressed Inquiries</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">We maintain complete transparency regarding our intake quotas, architectural cadence, and international spatial commissions.</p>
                <div className="mt-space-md p-space-md bg-surface-container-low rounded shadow-sm flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-2xl">architecture</span>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary">Single Point of Counsel</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Each commissioned patron works directly with a principal architect from conceptualization through hand-finishing.</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-space-sm" id="faq-accordion">
                {faqs.map((faq, index) => {
                  const expanded = openFaq === index;
                  return (
                    <div className="bg-surface-container-low rounded p-space-md shadow-sm transition-all duration-300" key={faq.q}>
                      <button
                        aria-expanded={expanded}
                        className="faq-toggle w-full flex items-center justify-between text-left focus:outline-none"
                        onClick={() => toggleFaq(index)}
                        type="button"
                      >
                        <span className="font-headline-sm text-headline-sm text-primary pr-space-md">{faq.q}</span>
                        <span className={`material-symbols-outlined text-secondary transition-transform duration-300 transform ${expanded ? "rotate-180" : ""}`}>expand_more</span>
                      </button>
                      {expanded && (
                        <div className="faq-content mt-space-sm pt-space-xs text-on-surface-variant font-body-md text-body-md leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
