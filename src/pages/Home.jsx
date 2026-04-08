import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Laptop,
  MessageCircle,
  Phone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';

import ActionLink from '@/components/ActionLink';
import HeroVisual from '@/components/HeroVisual';
import LandingFeatureCard from '@/components/LandingFeatureCard';
import LandingFooter from '@/components/LandingFooter';
import LandingHeader from '@/components/LandingHeader';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const formUrl = 'https://forms.gle/MmM22JsDJoNWNq5T9';
const qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(formUrl)}&size=260&margin=1&format=svg`;

const heroHighlights = ['3rd-12th Coaching', 'Basic Computer', 'Web Development'];

const aboutCards = [
  {
    description:
      'Topics are broken down into simple, understandable lessons so students build real confidence instead of short-term memorization.',
    icon: Sparkles,
    title: 'Concept clarity first',
  },
  {
    description:
      'Small groups make it easier to ask questions, stay consistent, and receive meaningful support every week.',
    icon: Users,
    title: 'Small batches',
  },
  {
    description:
      'Every student gets close attention, progress tracking, and the right balance of discipline and encouragement.',
    icon: BadgeCheck,
    title: 'Personal attention',
  },
];

const courseGroups = [
  {
    description:
      'Strong school support from foundation classes to board-focused preparation with regular revision and doubt solving.',
    icon: BookOpen,
    items: [
      '3rd-12th coaching for Maths, Science, English, Accounts, Economics, and more.',
      'Concept-building classes with tests, practice work, and revision support.',
      'Structured help for school performance, exams, and academic consistency.',
    ],
    title: 'Academic Coaching',
  },
  {
    description:
      'Skill-based computer training designed to make students practical, comfortable, and ready for modern digital work.',
    icon: Laptop,
    items: [
      'Basic Computer fundamentals for confidence with files, typing, internet, and office tools.',
      'Web Development basics with real practical learning, projects, and creative problem solving.',
      'Hands-on sessions that connect learning directly to useful skills.',
    ],
    title: 'Computer Courses',
  },
];

const whyChooseUs = [
  {
    description:
      'Closer teacher-student interaction means better attention, fewer gaps, and stronger progress.',
    icon: Users,
    title: 'Small Batches',
  },
  {
    description:
      'Guidance from teachers who know how to simplify concepts and keep students accountable.',
    icon: BadgeCheck,
    title: 'Experienced Teachers',
  },
  {
    description:
      'Academic lessons and computer training both focus on doing the work, not just hearing about it.',
    icon: Sparkles,
    title: 'Practical Learning',
  },
  {
    description:
      'Every class is designed around improvement, consistency, and outcomes that matter.',
    icon: Target,
    title: 'Result Focused',
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-[#f4f6fb] text-slate-900">
      <LandingHeader />

      <main>
        <section
          id="home"
          className="relative overflow-hidden bg-[#f7f2ea] px-4 pt-[4.8rem] pb-8 sm:px-6 sm:pt-[5.4rem] sm:pb-10 lg:px-8 lg:pt-[5.6rem] lg:pb-10"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,165,76,0.08),transparent_28%),radial-gradient(circle_at_right_center,rgba(86,145,133,0.1),transparent_34%)]" />
            <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(rgba(11,30,60,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(11,30,60,0.04)_1px,transparent_1px)] [background-size:44px_44px] opacity-40" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-6 lg:min-h-[calc(100svh-5.9rem)] lg:grid-cols-[minmax(0,0.96fr)_minmax(340px,0.82fr)] lg:items-center xl:gap-10">
            <Reveal className="max-w-[560px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e4d5aa] bg-white px-4 py-2 text-[0.68rem] font-semibold tracking-[0.24em] text-[#a67f24] uppercase sm:text-xs">
                A.D Academy | Academic Coaching & Computer Education
              </div>

              <h1 className="font-heading mt-4 max-w-[11ch] text-[clamp(2rem,5.4vw,4rem)] leading-[0.96] font-semibold tracking-tight text-[#0B1E3C]">
                Build Your Future with A.D Academy
              </h1>

              <div className="mt-3 h-1.5 w-24 rounded-full bg-[#ffb018]" />

              <p className="mt-4 max-w-[48ch] text-[0.92rem] leading-6 text-slate-600 sm:text-base sm:leading-7">
                A structured learning academy for students who need stronger academics, practical
                computer skills, and disciplined guidance in a professional teaching environment.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#dde4ec] bg-white px-3 py-1.5 text-[0.72rem] font-medium text-slate-600 sm:px-4 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ActionLink
                  href={formUrl}
                  target="_blank"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Enroll Now
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ActionLink>
                <ActionLink href="#contact" variant="dark" className="w-full sm:w-auto">
                  Contact Us
                </ActionLink>
              </div>

              <div className="mt-5 rounded-[22px] border border-[#e2e7ef] bg-white px-4 py-3.5 shadow-[0_18px_40px_rgba(11,30,60,0.05)]">
                <div className="flex flex-wrap items-center gap-2.5 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-[#ffb018]" aria-hidden="true" />
                    Concept clarity
                  </span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
                  <span className="inline-flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-[#ffb018]" aria-hidden="true" />
                    Small batches
                  </span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
                  <span className="inline-flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-[#ffb018]" aria-hidden="true" />
                    Practical skill learning
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:justify-self-center xl:justify-self-end">
              <HeroVisual formUrl={formUrl} />
            </Reveal>
          </div>
        </section>

        <section id="about" className="px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="About A.D Academy"
                title="A modern education space designed for steady, confident progress."
                description="A.D Academy combines academic coaching with practical skill development so students get more than classroom support. The goal is simple: clearer understanding, better discipline, and the confidence to perform well."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8">
              <Reveal className="rounded-[30px] border border-[#0B1E3C]/8 bg-white p-6 shadow-[0_24px_60px_rgba(11,30,60,0.08)] sm:p-8">
                <p className="text-xs font-semibold tracking-[0.28em] text-[#C9A54C] uppercase">
                  Our approach
                </p>
                <h3 className="font-heading mt-4 text-[clamp(1.55rem,4vw,2.5rem)] leading-tight font-semibold text-[#0B1E3C]">
                  Personal teaching, practical support, and a learning culture students can trust.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  We keep the environment disciplined but approachable, so students stay engaged,
                  ask questions freely, and receive close support. Whether the goal is stronger
                  school performance or hands-on computer skills, the experience is built around
                  consistency and visible improvement.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] bg-[#f7f3e8] p-5">
                    <p className="text-sm font-semibold text-[#0B1E3C]">Concept-based learning</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Clear explanations, regular practice, and steady reinforcement.
                    </p>
                  </div>
                  <div className="rounded-[24px] bg-[#edf2ff] p-5">
                    <p className="text-sm font-semibold text-[#0B1E3C]">Accountability</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Small batch discipline keeps students focused and visible.
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-4">
                {aboutCards.map((card, index) => (
                  <Reveal key={card.title} delay={index * 90}>
                    <LandingFeatureCard {...card} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Courses"
                title="Programs built for both academic excellence and real-world digital skills."
                description="Students can strengthen their school subjects while also building confidence in practical computer learning. Each track is taught in a focused, supportive classroom environment."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {courseGroups.map((course, index) => {
                const Icon = course.icon;

                return (
                  <Reveal key={course.title} delay={index * 100}>
                    <article className="rounded-[30px] border border-[#0B1E3C]/8 bg-[#fbfcff] p-6 shadow-[0_24px_60px_rgba(11,30,60,0.08)] sm:p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C9A54C]/14 text-[#0B1E3C]">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-[0.24em] text-[#C9A54C] uppercase">
                            Structured Track
                          </p>
                          <h3 className="font-heading mt-2 text-2xl font-semibold text-[#0B1E3C]">
                            {course.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                            {course.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 space-y-3">
                        {course.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 rounded-[22px] border border-[#0B1E3C]/8 bg-white px-4 py-3"
                          >
                            <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C9A54C]/16 text-[#0B1E3C]">
                              <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                            <p className="text-sm leading-6 text-slate-600">{item}</p>
                          </div>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="why-us"
          className="bg-[linear-gradient(135deg,#081528_0%,#0B1E3C_60%,#122F66_100%)] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Why Choose Us"
                theme="dark"
                title="Everything about the academy is built around sharper learning outcomes."
                description="The teaching model stays intentionally focused: fewer students per batch, experienced instruction, practical learning habits, and clear attention to results."
                className="max-w-3xl"
              />
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {whyChooseUs.map((item, index) => (
                <Reveal key={item.title} delay={index * 90}>
                  <LandingFeatureCard {...item} tone="dark" className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.85fr)] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Ready to learn more or reserve your seat?"
                description="Speak with A.D Academy directly, message on WhatsApp, or submit the enquiry form. We’ll help you choose the right academic or computer course path."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[26px] border border-[#0B1E3C]/8 bg-white p-5 shadow-[0_24px_60px_rgba(11,30,60,0.08)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C9A54C]/14 text-[#0B1E3C]">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm font-semibold tracking-[0.2em] text-[#C9A54C] uppercase">
                    Phone
                  </p>
                  <a
                    href="tel:+919773817031"
                    className="font-heading mt-2 block text-2xl font-semibold text-[#0B1E3C] transition hover:text-[#8d6e2e]"
                  >
                    +91 9773817031
                  </a>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Call for admissions, course details, and general queries.
                  </p>
                </div>

                <div className="rounded-[26px] border border-[#0B1E3C]/8 bg-white p-5 shadow-[0_24px_60px_rgba(11,30,60,0.08)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C9A54C]/14 text-[#0B1E3C]">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm font-semibold tracking-[0.2em] text-[#C9A54C] uppercase">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919773817031"
                    target="_blank"
                    rel="noreferrer"
                    className="font-heading mt-2 block text-2xl font-semibold text-[#0B1E3C] transition hover:text-[#8d6e2e]"
                  >
                    Chat instantly
                  </a>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Quick responses for parents, students, and course enquiries.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ActionLink href="tel:+919773817031" variant="dark" className="w-full sm:w-auto">
                  Call Now
                </ActionLink>
                <ActionLink
                  href="https://wa.me/919773817031"
                  target="_blank"
                  variant="subtle"
                  className="w-full sm:w-auto"
                >
                  WhatsApp Now
                </ActionLink>
              </div>

              <div className="mt-8 rounded-[28px] border border-[#0B1E3C]/8 bg-white p-5 shadow-[0_24px_60px_rgba(11,30,60,0.08)]">
                <p className="text-sm font-semibold tracking-[0.26em] text-[#C9A54C] uppercase">
                  Enquiry form
                </p>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  Prefer to share details online? Use the academy enquiry form and we’ll get back to
                  you with the right guidance for academics or computer courses.
                </p>
                <ActionLink
                  href={formUrl}
                  target="_blank"
                  variant="subtle"
                  className="mt-5 w-full sm:w-auto"
                >
                  Open Google Form
                  <TrendingUp className="h-4 w-4" aria-hidden="true" />
                </ActionLink>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <aside className="mx-auto max-w-[430px] rounded-[32px] border border-[#0B1E3C]/8 bg-white p-5 shadow-[0_28px_70px_rgba(11,30,60,0.1)] sm:p-6">
                <div className="rounded-[28px] bg-[linear-gradient(135deg,#081528_0%,#0B1E3C_65%,#122F66_100%)] p-5 text-white">
                  <div className="flex items-center gap-3">
                    <img
                      src="/logo.png"
                      alt="A.D Academy logo"
                      className="h-14 w-14 rounded-full border border-white/12"
                    />
                    <div>
                      <p className="text-[0.7rem] font-semibold tracking-[0.26em] text-[#f2df9a] uppercase">
                        Enquiry Desk
                      </p>
                      <p className="font-heading mt-1 text-xl font-semibold">
                        Reach the academy in the way that suits you.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                      <p className="text-sm font-semibold">Call or WhatsApp</p>
                      <p className="mt-1 text-sm leading-6 text-white/72">
                        Fast responses for admissions and course guidance.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                      <p className="text-sm font-semibold">Google Form</p>
                      <p className="mt-1 text-sm leading-6 text-white/72">
                        Share your query anytime and we will follow up.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-[28px] border border-[#0B1E3C]/8 bg-[#fbfcff] p-4">
                  <p className="text-xs font-semibold tracking-[0.24em] text-[#C9A54C] uppercase">
                    Scan to enquire
                  </p>
                  <div className="mt-4 flex flex-col items-center gap-4">
                    <div className="relative w-full max-w-[240px] rounded-[28px] bg-white p-4 ring-1 ring-[#0B1E3C]/10">
                      <img
                        src={qrUrl}
                        alt="QR code for the A.D Academy enquiry form"
                        className="aspect-square w-full rounded-[20px]"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <span className="rounded-full bg-white p-1.5 shadow-lg ring-1 ring-[#0B1E3C]/10">
                          <img
                            src="/logo.png"
                            alt=""
                            aria-hidden="true"
                            className="h-10 w-10 rounded-full"
                          />
                        </span>
                      </div>
                    </div>

                    <a
                      href={formUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full rounded-2xl border border-[#0B1E3C]/10 bg-white px-4 py-3 text-center text-xs font-medium break-all text-slate-600 transition hover:border-[#C9A54C]/40 hover:text-[#0B1E3C] sm:text-sm"
                    >
                      forms.gle/MmM22JsDJoNWNq5T9
                    </a>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}

export default Home;
