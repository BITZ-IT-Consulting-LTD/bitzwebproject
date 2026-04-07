'use client';

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

type DropdownItem = {
  title: string;
  description: string;
  href: string;
};

type NavLink = {
  href: string;
  label: string;
  dropdown?: DropdownItem[];
};

const navLinks: NavLink[] = [
  {
    href: '/services',
    label: 'Services',
    dropdown: [
      { title: 'AI and Automation', description: 'Document processing, conversational interfaces, workflow automation', href: '/services#ai-automation' },
      { title: 'Data Infrastructure', description: 'Data pipelines, warehouses, and legacy system integration', href: '/services#data-infrastructure' },
      { title: 'Cloud and Operations', description: 'Cloud architecture, DevOps, 24/7 operations support', href: '/services#cloud-operations' },
      { title: 'Digital Assessment', description: 'Maturity assessment, feasibility studies, roadmap development', href: '/services#digital-assessment' },
    ],
  },
  {
    href: '/solutions',
    label: 'Solutions',
    dropdown: [
      { title: 'Government & Social Protection', description: 'National helpline platforms and crisis response', href: '/solutions#government' },
      { title: 'Healthcare', description: 'Electronic medical records and inventory management', href: '/solutions#healthcare' },
      { title: 'Financial Services', description: 'CRM and call center platforms for cooperatives', href: '/solutions#financial' },
      { title: 'International Development', description: 'Real-time monitoring and donor reporting', href: '/solutions#development' },
    ],
  },
  {
    href: '/case-studies',
    label: 'Case Studies',
    dropdown: [
      { title: 'Child Helpline Systems (116)', description: '5 countries, 10,000+ monthly calls, 24/7 operations', href: '/case-studies#helpline' },
      { title: 'Tower SACCO', description: '5,000+ members, loan processing from 5 days to 1 day', href: '/case-studies#sacco' },
      { title: 'OPENHMIS', description: '50,000+ patient records digitized across facilities', href: '/case-studies#openhmis' },
    ],
  },
  { href: '/about', label: 'About Us' },
  { href: '/team', label: 'Team' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const startClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); setMobileExpanded(null); }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E2E8F0]">
        <div style={{ maxWidth: 1216, margin: '0 auto', padding: '0 24px' }} className="flex items-center justify-between h-[90px]">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="font-serif font-light text-[#051C2C] text-[26px] leading-[1.1] block">
              BITZ
              <span className="block text-[16px]">IT Consulting</span>
            </span>
          </Link>

          {/* Desktop Nav — only show above 1024px */}
          <nav className="hidden lg:flex items-center h-full">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative h-full"
                onMouseEnter={() => link.dropdown ? openMenu(link.label) : undefined}
                onMouseLeave={startClose}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "h-full flex items-center gap-1 px-4 text-[16px] font-light text-[#333] hover:text-[#2251FF] transition-colors",
                    isActive(link.href) && "text-[#2251FF]"
                  )}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown className={cn(
                      "h-3 w-3 transition-transform duration-200",
                      openDropdown === link.label && "rotate-180"
                    )} />
                  )}
                </Link>

                {/* Active indicator */}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#2251FF]" />
                )}

                {/* Dropdown */}
                {link.dropdown && openDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 pt-0"
                    style={{ width: 460, zIndex: 100 }}
                    onMouseEnter={() => openMenu(link.label)}
                    onMouseLeave={startClose}
                  >
                    <div className="bg-white border border-[#E2E8F0]" style={{ boxShadow: '0px 4px 16px rgba(5,28,44,0.12)' }}>
                      <div className="py-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-start justify-between gap-4 px-6 py-4 hover:bg-[#F7F7F7] transition-colors group"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div>
                              <p className="text-[16px] font-medium text-[#000] group-hover:text-[#2251FF] transition-colors">
                                {item.title}
                              </p>
                              <p className="text-[14px] font-light text-[#666] mt-1">
                                {item.description}
                              </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-[#ddd] group-hover:text-[#2251FF] shrink-0 mt-1 transition-colors" />
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-[#E2E8F0] px-6 py-3">
                        <Link
                          href={link.href}
                          className="text-[14px] font-medium text-[#2251FF] hover:underline inline-flex items-center gap-1"
                          onClick={() => setOpenDropdown(null)}
                        >
                          View all {link.label.toLowerCase()} <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-block bg-[#2251FF] text-white px-5 py-2 text-[16px] font-normal hover:bg-[#1E32E6] transition-colors"
            >
              Request Consultation
            </Link>
            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen
                ? <X className="h-6 w-6 text-[#051C2C]" />
                : <Menu className="h-6 w-6 text-[#051C2C]" />
              }
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[90px] z-40 bg-[#051C2C] text-white overflow-y-auto lg:hidden">
          <nav className="px-6 py-8">
            {navLinks.map((link) => (
              <div key={link.href} className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    className="py-4 text-[20px] font-light text-white/90 hover:text-white flex-1"
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <button
                      className="p-3"
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                    >
                      <ChevronDown className={cn(
                        "h-5 w-5 text-white/40 transition-transform duration-200",
                        mobileExpanded === link.label && "rotate-180"
                      )} />
                    </button>
                  )}
                </div>
                {link.dropdown && mobileExpanded === link.label && (
                  <div className="pb-4 pl-4">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-3 border-b border-white/5"
                      >
                        <p className="text-[16px] text-white">{item.title}</p>
                        <p className="text-[13px] text-white/40 mt-0.5">{item.description}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-8 block text-center bg-[#2251FF] text-white px-6 py-3 text-[16px] font-normal"
            >
              Request Consultation
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
