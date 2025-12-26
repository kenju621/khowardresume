'use client';

import React, { useState } from 'react';

type LinkItem = {
  label: string;
  href: string;
};

type Experience = {
  company: string;
  title: string;
  location?: string;
  start: string;
  end: string;
  current: boolean;
  category: 'product-ux' | 'frontend' | 'operations';
  summary: string;
};

type Education = {
  school: string;
  degree: string;
  discipline: string;
  start?: string;
  end?: string;
  isCurrent?: boolean;
  type: 'bachelor' | 'certificate';
};

const profile = {
  fullName: 'Kenneth Howard',
  preferredName: 'Kenju',
  headline: 'Product Manager & Senior UX Engineer',
  company: 'Kenju Management & Design (KMD)',
  location: 'Mexico, Missouri, United States',
  phone: '(626) 366-1663',
  email: 'kenjumanagementdesign@gmail.com',
};

const links: LinkItem[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kennyjunior',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/kenju621',
  },
  {
    label: 'Portfolio',
    href: 'https://kmd-entertainment-portfolio.vercel.app/',
  },
  {
    label: 'Website',
    href: 'https://www.kennyjunior.com/',
  },
];

const experiences: Experience[] = [
  {
    company: 'Kenju Management & Design (KMD)',
    title: 'Product Manager & Senior UX Engineer',
    location: 'Remote / Mexico, Missouri',
    start: 'Sep 2015',
    end: 'Present',
    current: true,
    category: 'product-ux',
    summary:
      'Founder-led studio building games, social products, and continuous-improvement tools with a Lean Six Sigma mindset. Owns product strategy, UX, and front-end implementation across multiple KMD hubs.',
  },
  {
    company: 'Exfolatte',
    title: 'Frontend Developer',
    location: 'Remote',
    start: 'Sep 2014',
    end: 'Jul 2023',
    current: false,
    category: 'frontend',
    summary:
      'Led front-end development for a growing brand, implementing responsive web experiences, design systems, and performance improvements.',
  },
  {
    company: 'Hewlett-Packard (HP)',
    title: 'Database Specialist',
    location: '',
    start: 'Jan 2013',
    end: 'Jan 2014',
    current: false,
    category: 'operations',
    summary:
      'Supported database operations and reporting, focusing on data accuracy, performance, and internal stakeholder support.',
  },
  {
    company: 'Airgas',
    title: 'Assistant Branch Manager',
    location: '',
    start: 'Feb 2004',
    end: 'Apr 2008',
    current: false,
    category: 'operations',
    summary:
      'Managed branch operations, customer relationships, and frontline problem-solving in a fast-paced environment.',
  },
  {
    company: 'EarthLink',
    title: 'DSL / Web Hosting Specialist',
    location: '',
    start: 'Sep 2007',
    end: 'Feb 2008',
    current: false,
    category: 'operations',
    summary:
      'Supported customers with DSL and web hosting services, troubleshooting technical issues and helping small businesses stay online.',
  },
];

const education: Education[] = [
  {
    school: 'Arizona State University',
    degree: "Bachelor\'s Degree",
    discipline: 'Project Management (Organizational Leadership)',
    start: 'Nov 2024',
    end: 'Dec 2026',
    isCurrent: true,
    type: 'bachelor',
  },
  {
    school: '',
    degree: 'Certificate',
    discipline: 'Lean Six Sigma Black Belt',
    type: 'certificate',
  },
  {
    school: '',
    degree: 'Certificate',
    discipline: 'Google Business Intelligence',
    type: 'certificate',
  },
  {
    school: '',
    degree: 'Certificate',
    discipline: 'Microsoft AI Product Manager',
    type: 'certificate',
  },
  {
    school: '',
    degree: 'Certificate',
    discipline: 'Product Management',
    type: 'certificate',
  },
  {
    school: '',
    degree: 'Certificate',
    discipline: 'UX/UI Design',
    type: 'certificate',
  },
  {
    school: '',
    degree: 'Certificate',
    discipline: 'Front-End Development (React)',
    type: 'certificate',
  },
];

const experienceFilters = [
  { id: 'all', label: 'All' },
  { id: 'product-ux', label: 'Product & UX' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'operations', label: 'Operations' },
] as const;

type ExperienceFilterId = (typeof experienceFilters)[number]['id'];

export default function Page() {
  const [viewMode, setViewMode] = useState<'person' | 'studio'>('person');
  const [experienceFilter, setExperienceFilter] =
    useState<ExperienceFilterId>('all');
  const [openExperienceIndex, setOpenExperienceIndex] = useState<number | null>(
    0
  );
  const [eduOpen, setEduOpen] = useState(true);
  const [certsOpen, setCertsOpen] = useState(true);

  const filteredExperiences =
    experienceFilter === 'all'
      ? experiences
      : experiences.filter((exp) => exp.category === experienceFilter);

  const bachelorEd = education.filter((e) => e.type === 'bachelor');
  const certEd = education.filter((e) => e.type === 'certificate');

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0F1A] via-[#141A2E] to-[#0B0F1A] text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-8 md:px-8 lg:px-10">
        {/* Top section: hero + quick facts */}
        <header className="mb-8 grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] md:items-stretch">
          {/* Identity / Hero */}
          <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen">
              <div className="absolute -top-24 -left-10 h-40 w-40 rounded-full bg-[#FF218C]/30 blur-3xl" />
              <div className="absolute -bottom-20 right-0 h-40 w-40 rounded-full bg-[#21B1FF]/30 blur-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#FFD80033,_transparent_55%)]" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between gap-6">
              <div>
                <p className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[#C7C9D1]">
                  Interactive Resume • KMD
                </p>

                <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  <span className="block text-sm font-normal text-[#C7C9D1]">
                    Kenneth “{profile.preferredName}”
                  </span>
                  <span className="block">{profile.fullName}</span>
                </h1>

                <p className="mt-3 text-lg text-[#C7C9D1]">
                  {profile.headline} @ {profile.company}
                </p>

                <p className="mt-1 text-sm text-[#9EA2B5]">
                  {profile.location}
                </p>

                {/* View toggle */}
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 p-1 text-xs">
                  <button
                    onClick={() => setViewMode('person')}
                    className={`rounded-full px-3 py-1 transition ${
                      viewMode === 'person'
                        ? 'bg-white text-[#0B0F1A]'
                        : 'text-[#C7C9D1]'
                    }`}
                  >
                    View as Person
                  </button>
                  <button
                    onClick={() => setViewMode('studio')}
                    className={`rounded-full px-3 py-1 transition ${
                      viewMode === 'studio'
                        ? 'bg-white text-[#0B0F1A]'
                        : 'text-[#C7C9D1]'
                    }`}
                  >
                    View as Studio
                  </button>
                </div>

                <p className="mt-4 max-w-xl text-sm text-[#C7C9D1]">
                  {viewMode === 'person'
                    ? 'Product manager, UX engineer, and Lean Six Sigma Black Belt building games, social products, and continuous-improvement tools that actually ship.'
                    : 'KMD is a lean-minded studio designing and shipping games, social experiences, and ops tools. This resume doubles as a live hub for how KMD builds and iterates.'}
                </p>
              </div>

              {/* Contact buttons */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center rounded-full bg-[#FF218C] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-[#FF218C33] transition hover:bg-[#ff3e9c]"
                >
                  Email Kenju
                </a>
                <a
                  href={`tel:+16263661663`}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm font-medium text-white/90 hover:border-[#21B1FF] hover:text-[#21B1FF]"
                >
                  Call / Text • {profile.phone}
                </a>
              </div>
            </div>
          </section>

          {/* Quick Links + Snapshot */}
          <aside className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-4">
              <h2 className="text-sm font-semibold text-white">
                Quick Links
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-[#C7C9D1] transition hover:border-[#21B1FF] hover:text-white"
                    >
                      <span>{link.label}</span>
                      <span className="text-[10px] uppercase tracking-[0.14em] text-[#9EA2B5]">
                        Open
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/40 p-4 text-xs text-[#C7C9D1]">
              <h3 className="text-sm font-semibold text-white">
                Snapshot
              </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <span className="font-medium text-white">Experience:</span>{' '}
                  Product, UX, Frontend, Ops
                </li>
                <li>
                  <span className="font-medium text-white">Certs:</span>{' '}
                  Lean Six Sigma Black Belt, BI, AI PM, Product, UX/UI, React
                </li>
                <li>
                  <span className="font-medium text-white">Education:</span> ASU
                  – Project Management (Organizational Leadership)
                </li>
                <li>
                  <span className="font-medium text-white">Base:</span>{' '}
                  Mexico, Missouri • Remote-ready
                </li>
              </ul>
            </div>
          </aside>
        </header>

        {/* Main grid: Experience + Education */}
        <div className="grid flex-1 gap-6 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.4fr)]">
          {/* Experience */}
          <section className="rounded-3xl border border-white/10 bg-black/30 p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Experience Timeline
                </h2>
                <p className="text-xs text-[#9EA2B5]">
                  Tap a role to expand. Filter by focus area.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {experienceFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setExperienceFilter(filter.id)}
                    className={`rounded-full px-3 py-1 transition ${
                      experienceFilter === filter.id
                        ? 'bg-[#21B1FF] text-[#0B0F1A]'
                        : 'border border-white/15 bg-black/40 text-[#C7C9D1] hover:border-[#21B1FF]'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {filteredExperiences.map((exp, idx) => {
                const isOpen =
                  openExperienceIndex ===
                  experiences.findIndex(
                    (e) =>
                      e.company === exp.company &&
                      e.title === exp.title &&
                      e.start === exp.start
                  );

                const globalIndex = experiences.findIndex(
                  (e) =>
                    e.company === exp.company &&
                    e.title === exp.title &&
                    e.start === exp.start
                );

                return (
                  <article
                    key={`${exp.company}-${exp.title}-${exp.start}`}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenExperienceIndex(
                          isOpen ? null : globalIndex
                        )
                      }
                      className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          {exp.current && (
                            <span className="inline-flex items-center rounded-full bg-[#21B1FF] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0B0F1A]">
                              Current
                            </span>
                          )}
                          <span className="text-xs text-[#9EA2B5]">
                            {exp.start} – {exp.end}
                          </span>
                        </div>
                        <h3 className="mt-1 text-sm font-semibold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-xs text-[#C7C9D1]">
                          {exp.company}
                          {exp.location ? ` • ${exp.location}` : ''}
                        </p>
                      </div>
                      <span className="mt-1 text-xs text-[#9EA2B5]">
                        {isOpen ? 'Hide' : 'Details'}
                      </span>
                    </button>

                    {/* Accent line */}
                    <div className="h-0.5 w-full bg-gradient-to-r from-[#FF218C] via-[#21B1FF] to-[#FFD800]" />

                    {isOpen && (
                      <div className="px-4 pb-4 pt-3 text-xs text-[#C7C9D1]">
                        <p>{exp.summary}</p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>

          {/* Education + Certs */}
          <aside className="space-y-4">
            {/* Education */}
            <section className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
              <button
                type="button"
                onClick={() => setEduOpen((prev) => !prev)}
                className="flex w-full items-center justify-between px-4 py-3"
              >
                <div>
                  <h2 className="text-sm font-semibold text-white">
                    Education
                  </h2>
                  <p className="text-[11px] text-[#9EA2B5]">
                    Arizona State University
                  </p>
                </div>
                <span className="text-xs text-[#9EA2B5]">
                  {eduOpen ? 'Collapse' : 'Expand'}
                </span>
              </button>
              {eduOpen && (
                <>
                  <div className="h-px w-full bg-white/10" />
                  <div className="space-y-3 px-4 py-4 text-xs text-[#C7C9D1]">
                    {bachelorEd.map((item) => (
                      <div key={item.discipline}>
                        <p className="text-sm font-semibold text-white">
                          {item.degree}
                        </p>
                        <p>{item.discipline}</p>
                        <p className="mt-1 text-[11px] text-[#9EA2B5]">
                          {item.start} – {item.end}{' '}
                          {item.isCurrent && '• In progress'}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </section>

            {/* Certificates */}
            <section className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
              <button
                type="button"
                onClick={() => setCertsOpen((prev) => !prev)}
                className="flex w-full items-center justify-between px-4 py-3"
              >
                <div>
                  <h2 className="text-sm font-semibold text-white">
                    Certificates & Specializations
                  </h2>
                  <p className="text-[11px] text-[#9EA2B5]">
                    Stacked skills for product, UX, data & AI.
                  </p>
                </div>
                <span className="text-xs text-[#9EA2B5]">
                  {certsOpen ? 'Collapse' : 'Expand'}
                </span>
              </button>
              {certsOpen && (
                <>
                  <div className="h-px w-full bg-white/10" />
                  <div className="grid gap-2 px-4 py-4 text-xs text-[#C7C9D1]">
                    {certEd.map((item) => (
                      <div
                        key={item.discipline}
                        className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
                      >
                        <p className="text-[13px] font-semibold text-white">
                          {item.discipline}
                        </p>
                        <p className="text-[11px] text-[#9EA2B5]">
                          {item.degree}
                          {item.discipline === 'Lean Six Sigma Black Belt'
                            ? ' '
                            : ''}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </section>
          </aside>
        </div>

        {/* Footer */}
        <footer className="mt-6 border-t border-white/10 pt-4 text-[11px] text-[#9EA2B5]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p>
              Built as an interactive resume for{' '}
              <span className="font-medium text-white">
                Kenju / KMD
              </span>
              .
            </p>
            <p className="text-[10px]">
              Optimized for desktop, TV, and recruiter screens.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
