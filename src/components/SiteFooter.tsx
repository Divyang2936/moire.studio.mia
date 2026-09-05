import { Link } from "@tanstack/react-router";

const FOOTER_NAV = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About Studio" },
  { to: "/services", label: "Spatial Services" },
  { to: "/contact", label: "Private Inquiries" },
] as const;

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface mt-space-3xl">
      <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg lg:gap-gutter-desktop mb-space-2xl">
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <span className="font-headline-md text-headline-md text-primary tracking-tight">
              Moire Studio Mia
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              High-end interior architecture rooted in tactile Indian artisanship and quiet
              contemporary minimalism. Curating bespoke spatial narratives for private
              residences and boutique retreats.
            </p>
            <div className="flex items-center gap-space-md pt-space-xs">
              <a
                className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-secondary transition-colors"
                href="#"
              >
                Instagram
              </a>
              <span className="text-outline-variant text-xs">•</span>
              <a
                className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-secondary transition-colors"
                href="#"
              >
                Pinterest
              </a>
              <span className="text-outline-variant text-xs">•</span>
              <a
                className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-secondary transition-colors"
                href="#"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">
              Navigation
            </span>
            <nav className="flex flex-col gap-space-2xs">
              {FOOTER_NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary font-medium" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">
              Ateliers
            </span>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <div>
                <p className="font-medium text-primary">New Delhi Studio</p>
                <p>The Dhan Mill, 100 Feet Road, Chhatarpur</p>
                <p>New Delhi 110074, India</p>
              </div>
              <div>
                <p className="font-medium text-primary">Mumbai Atelier</p>
                <p>Laxmi Industrial Estate, Off Link Road, Andheri West</p>
                <p>Mumbai 400053, India</p>
              </div>
              <div className="pt-space-2xs">
                <p className="text-primary">contact@moirestudiomia.com</p>
                <p>+91 (0) 11 4982 7700</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">
              Private Dispatch
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Receive seasonal monographs, private exhibition previews, and material
              retrospective notes.
            </p>
            <form
              className="flex flex-col gap-space-xs pt-space-2xs"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex bg-surface border-b border-primary/20 focus-within:border-secondary transition-colors">
                <input
                  className="w-full bg-transparent px-space-xs py-space-2xs text-body-sm font-body-sm text-on-surface placeholder:text-outline focus:outline-none"
                  placeholder="Enter your correspondence email"
                  type="email"
                />
                <button
                  className="px-space-xs py-space-2xs text-secondary hover:text-primary transition-colors font-label-caps text-label-caps uppercase"
                  type="submit"
                >
                  Join
                </button>
              </div>
              <span className="font-label-sm text-[0.7rem] text-on-surface-variant">
                Discretion assured. Strictly bespoke communication.
              </span>
            </form>
          </div>
        </div>
        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant">
          <p className="font-label-caps text-label-caps uppercase text-[0.7rem]">
            © 2025 Moire Studio Mia Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-space-md font-label-caps text-label-caps uppercase text-[0.7rem]">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy Statement
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Terms of Commission
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Craft Guild
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
