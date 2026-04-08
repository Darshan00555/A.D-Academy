import { useState } from 'react';

import { ArrowRight, Menu, X } from 'lucide-react';

import ActionLink from './ActionLink';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#courses', label: 'Courses' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
];

function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-3 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-2">
        <div className="rounded-[24px] border border-white/10 bg-[#081528]/86 px-4 py-3 shadow-[0_24px_60px_rgba(5,15,35,0.26)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <a href="#home" className="flex min-w-0 items-center gap-3" onClick={closeMenu}>
              <img
                src="/logo.png"
                alt="A.D Academy logo"
                className="h-11 w-11 shrink-0 rounded-full ring-1 ring-white/10"
              />
              <div className="min-w-0">
                <p className="font-heading truncate text-sm font-semibold tracking-[0.08em] text-white sm:text-base">
                  A.D Academy
                </p>
                <p className="hidden text-[0.68rem] tracking-[0.3em] text-white/60 uppercase sm:block">
                  Learn • Grow • Succeed
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/76 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ActionLink
                href="#contact"
                variant="secondary"
                className="hidden min-h-10 border-white/12 bg-white/6 px-5 lg:inline-flex"
              >
                Enquire
              </ActionLink>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
                onClick={() => setIsOpen((open) => !open)}
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="rounded-[28px] border border-white/14 bg-[#081528]/94 p-4 shadow-[0_24px_60px_rgba(5,15,35,0.28)] backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-white/82 transition hover:bg-white/6 hover:text-white"
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </nav>
            <ActionLink
              href="#contact"
              variant="primary"
              className="mt-4 flex w-full"
              onClick={closeMenu}
            >
              Contact A.D Academy
            </ActionLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default LandingHeader;
