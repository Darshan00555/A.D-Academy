import { createElement } from 'react';

import { ArrowUpRight, BookOpen, GraduationCap, Laptop, Phone } from 'lucide-react';

import { cn } from '@/lib/utils';

const offerings = [
  {
    description: '3rd to 12th support with strong fundamentals and revision habits.',
    icon: BookOpen,
    title: 'Academic Coaching',
  },
  {
    description: 'Basic computer skills to practical web development learning.',
    icon: Laptop,
    title: 'Computer Courses',
  },
  {
    description: 'Experienced guidance with concept-focused teaching.',
    icon: GraduationCap,
    title: 'Expert Faculty',
  },
];

function LaunchPoster({ className, formUrl }) {
  const qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(formUrl)}&size=260&margin=1&format=svg`;

  return (
    <aside
      className={cn(
        'relative overflow-hidden rounded-[28px] border border-[#d6dee9] bg-[#f8fafc] p-4 text-[#0B1E3C] shadow-[0_28px_70px_rgba(5,15,35,0.2)] sm:p-5',
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,247,252,0.92))]" />
      <div className="relative">
        <div className="rounded-[24px] bg-[linear-gradient(135deg,#081528_0%,#0B1E3C_68%,#14315f_100%)] px-4 py-4 text-white">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <img
                src="/logo.png"
                alt="A.D Academy brand mark"
                className="h-12 w-12 rounded-full border border-white/12"
              />
              <div className="min-w-0">
                <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-[#C9A54C] uppercase">
                  Academy Overview
                </p>
                <p className="font-heading mt-1 text-base font-semibold text-white sm:text-lg">
                  Academic coaching and practical skill learning
                </p>
              </div>
            </div>

            <a
              href={formUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 text-sm font-semibold text-white transition hover:bg-white/12"
            >
              Enquire
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/7 p-3.5">
              <p className="text-[0.68rem] tracking-[0.24em] text-[#f0d799] uppercase">Programs</p>
              <p className="mt-1 text-sm font-semibold text-white">
                3rd-12th coaching + computer education
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/7 p-3.5">
              <p className="text-[0.68rem] tracking-[0.24em] text-[#f0d799] uppercase">
                Teaching Style
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Small batches with close personal guidance
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          {offerings.map(({ description, icon, title }) => (
            <div
              key={title}
              className="flex items-start gap-3 rounded-[20px] border border-[#dbe3ef] bg-white px-4 py-3.5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f8f1df] text-[#0B1E3C]">
                {createElement(icon, { className: 'h-5 w-5', 'aria-hidden': 'true' })}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#0B1E3C]">{title}</h4>
                <p className="mt-1 text-xs leading-5 text-slate-600">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,1fr)_160px] sm:items-stretch">
          <div className="rounded-[22px] border border-[#dbe3ef] bg-[#fffaf0] p-4">
            <p className="text-[0.7rem] font-semibold tracking-[0.24em] text-[#8d6e2e] uppercase">
              Admissions & Contact
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Submit your query through the academy form or connect directly for admission details.
            </p>

            <div className="mt-4 space-y-2.5">
              <a
                href="tel:+919773817031"
                className="flex items-center gap-2 text-sm font-semibold text-[#0B1E3C] transition hover:text-[#8d6e2e]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                +91 9773817031
              </a>
              <a
                href={formUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-sm break-all text-slate-600 transition hover:text-[#0B1E3C]"
              >
                forms.gle/MmM22JsDJoNWNq5T9
              </a>
            </div>
          </div>

          <div className="rounded-[22px] border border-[#dbe3ef] bg-white p-3.5">
            <p className="text-[0.68rem] font-semibold tracking-[0.24em] text-[#8d6e2e] uppercase">
              Scan to Enquire
            </p>
            <div className="mt-3 flex flex-col items-center gap-3">
              <div className="relative w-full max-w-[118px] rounded-[18px] bg-white p-2.5 ring-1 ring-[#0B1E3C]/10">
                <img
                  src={qrUrl}
                  alt="QR code linking to the A.D Academy enquiry form"
                  className="aspect-square w-full rounded-[14px]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="rounded-full bg-white p-1 shadow-lg ring-1 ring-[#0B1E3C]/10">
                    <img
                      src="/logo.png"
                      alt=""
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full"
                    />
                  </span>
                </div>
              </div>

              <a
                href="tel:+919773817031"
                className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[#0B1E3C] px-4 text-sm font-semibold text-white transition hover:bg-[#142a52]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default LaunchPoster;
