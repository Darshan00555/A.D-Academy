import { createElement } from 'react';

import { ArrowUpRight, BadgeCheck, BookOpen, Laptop, Users } from 'lucide-react';

const miniCards = [
  { icon: BookOpen, title: 'Academic coaching' },
  { icon: Laptop, title: 'Computer skills' },
  { icon: Users, title: 'Small batches' },
];

function HeroVisual({ formUrl }) {
  return (
    <>
      <div className="rounded-[24px] border border-[#dde5ee] bg-white p-3.5 shadow-[0_20px_50px_rgba(11,30,60,0.08)] lg:hidden">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="A.D Academy logo"
            className="h-12 w-12 rounded-full border border-[#d9e2ee]"
          />
          <div className="min-w-0">
            <p className="text-[0.68rem] font-semibold tracking-[0.24em] text-[#b58b2d] uppercase">
              Coaching Center
            </p>
            <p className="font-heading mt-1 text-base font-semibold text-[#0B1E3C]">
              Academics + computer learning
            </p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {miniCards.map(({ icon, title }) => (
            <div key={title} className="rounded-[18px] bg-[#f7f2ea] px-2.5 py-3 text-center">
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0B1E3C] shadow-sm">
                {createElement(icon, { className: 'h-4 w-4', 'aria-hidden': 'true' })}
              </div>
              <p className="mt-2 text-[0.7rem] leading-4 font-medium text-slate-600">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="relative mx-auto w-full max-w-[430px]">
          <div className="relative overflow-hidden rounded-[34px] border border-[#e0e7ef] bg-white p-5 shadow-[0_28px_80px_rgba(11,30,60,0.12)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,30,60,0.08),transparent_26%),radial-gradient(circle_at_left_center,rgba(86,145,133,0.1),transparent_30%)]" />

            <div className="relative z-10 grid gap-4">
              <div className="rounded-[24px] bg-[#f8fbff] p-4 shadow-[0_14px_35px_rgba(11,30,60,0.08)]">
                <p className="text-sm font-semibold text-[#0B1E3C]">Trusted learning environment</p>
                <p className="mt-2 text-[0.84rem] leading-5 text-slate-600">
                  Focused classes, concept clarity, and practical guidance for real student
                  progress.
                </p>
                <div className="mt-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#fff1d2] text-[#c58f16]">
                  <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>

              <div className="rounded-[30px] bg-white p-5 shadow-[0_24px_60px_rgba(11,30,60,0.12)]">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="A.D Academy mark"
                    className="h-14 w-14 rounded-full border border-[#dce5ef]"
                  />
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold tracking-[0.24em] text-[#b58b2d] uppercase">
                      A.D Academy
                    </p>
                    <p className="font-heading mt-1 text-lg leading-tight font-semibold text-[#0B1E3C]">
                      Keep learning on track
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {miniCards.map(({ icon, title }) => (
                    <div
                      key={title}
                      className="flex items-center gap-3 rounded-[18px] bg-[#f8fbff] px-4 py-3"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf1fb] text-[#0B1E3C]">
                        {createElement(icon, { className: 'h-5 w-5', 'aria-hidden': 'true' })}
                      </div>
                      <p className="text-sm font-semibold text-[#0B1E3C]">{title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_76px] xl:items-end">
                <div className="rounded-[24px] bg-white p-4 shadow-[0_18px_45px_rgba(11,30,60,0.1)]">
                  <p className="text-sm font-semibold text-[#0B1E3C]">
                    Admissions open for enquiry
                  </p>
                  <p className="mt-2 text-[0.84rem] leading-5 text-slate-600">
                    Connect with us for batches, courses, and admission guidance.
                  </p>
                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#c58f16] transition hover:text-[#0B1E3C]"
                  >
                    Open enquiry form
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>

                <div className="hidden justify-self-end xl:flex xl:gap-3 xl:text-[#ffab00]">
                  <span className="block h-10 w-2 rotate-[-24deg] rounded-full bg-current" />
                  <span className="mt-3 block h-8 w-2 rotate-[18deg] rounded-full bg-current" />
                  <span className="mt-6 block h-7 w-2 rotate-[72deg] rounded-full bg-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroVisual;
