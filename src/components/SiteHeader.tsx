import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const LOGO_SRC =
  "https://lh3.googleusercontent.com/aida/AEtjO1XJTrDxtHY09zFA8ieWpLv_c8fis0r27iXofHxzLNAJdI6ZVWCFSgiZwNQurNdlINYjk8I47pHh21CD_ukOpCpuXeGIdlFqsv2hIq3E92n0AhcHps-N73DB4UNYRNE_H8yD1Km2f-eVg0cx9yzHqzw-IHUguwoLgxvSCh2ZYrTHAZLfiY110LzltILwiuBZ_CrSB0UADAR7rgA7GfR41SMA5EQfTV5ni4vELdbeYUnKXv0_wX4pjPezAPs";
const AVATAR_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDUCd5phSsCcgJMyiPQfsKcX9TGxV0f6pZt1ABA3DOuB6rResBzpT_8gxhEBzwPFwx89lhjJxh2OkWFsBieYEtdG7ph3depuRWe5y6Y8YAuDCqf3_5z88iQnvDfyCos_aOC35XRT4V_FXL5SvbvNT2VXBWwoW6fpXEwRCWGinpIlH8Tv0nntmHlasPWPehZmITw3JmtZAIgPicZMW2jkW-hyv1KIFt8WObm0lzeIn5JefqXV73ya7ZZ";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-md shadow-[0_1px_8px_rgba(44,44,44,0.03)] transition-all duration-300">
        <div className="max-w-[88rem] mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="h-20 flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                alt="Moire Studio Mia Logo"
                className="h-8 w-auto object-contain"
                src={LOGO_SRC}
              />
              <Link to="/" className="flex flex-col text-left">
                <span className="font-headline-sm text-headline-sm tracking-tight text-primary leading-none">
                  Moire Studio Mia
                </span>
                <span className="font-label-caps uppercase text-secondary tracking-widest text-[0.65rem] mt-1">
                  Architectural Curation
                </span>
              </Link>
            </div>
            <nav className="hidden lg:flex items-center gap-space-lg">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary transition-colors py-1"
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{
                    className: "text-primary font-medium border-b border-secondary",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-space-md">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center justify-center px-space-md py-space-2xs border border-secondary text-secondary hover:bg-secondary hover:text-on-secondary font-label-caps text-label-caps uppercase transition-all duration-300"
              >
                Inquire
              </Link>
              <div className="flex items-center pl-space-xs">
                <img
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                  src={AVATAR_SRC}
                />
              </div>
              <button
                aria-label="Toggle Navigation Menu"
                aria-controls="mobile-navigation"
                aria-expanded={open}
                onClick={() => setOpen(true)}
                type="button"
                className="lg:hidden p-space-2xs text-primary hover:text-secondary transition-colors focus:outline-none"
              >
                <span className="material-symbols-outlined text-[1.75rem]">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
        className={`fixed inset-0 z-40 bg-primary/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          id="mobile-navigation"
          aria-hidden={!open}
          className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-surface-container-low shadow-2xl transition-transform duration-500 ease-out flex flex-col p-space-lg justify-between ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between pb-space-md">
            <span className="font-headline-sm text-headline-sm text-primary">
              Moire Studio Mia
            </span>
            <button
              aria-label="Close Menu"
              onClick={() => setOpen(false)}
              type="button"
              className="p-space-2xs text-on-surface-variant hover:text-primary"
            >
              <span className="material-symbols-outlined text-[1.5rem]">close</span>
            </button>
          </div>
          <nav className="flex flex-col gap-space-md my-auto py-space-lg">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-headline-sm text-headline-sm text-on-surface-variant hover:text-primary transition-colors"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary font-medium" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-space-md flex flex-col gap-space-sm">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="w-full text-center py-space-xs border border-secondary text-secondary hover:bg-secondary hover:text-on-secondary font-label-caps text-label-caps uppercase transition-colors"
            >
              Inquire Online
            </Link>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
              New Delhi • Mumbai
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
