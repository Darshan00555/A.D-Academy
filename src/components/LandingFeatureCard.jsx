import { createElement } from 'react';

import { cn } from '@/lib/utils';

const toneStyles = {
  light: {
    card: 'border-[#0B1E3C]/10 bg-white shadow-[0_24px_60px_rgba(11,30,60,0.08)]',
    icon: 'bg-[#C9A54C]/14 text-[#0B1E3C]',
    title: 'text-[#0B1E3C]',
    description: 'text-slate-600',
  },
  dark: {
    card: 'border-white/10 bg-white/6 backdrop-blur-sm',
    icon: 'bg-[#C9A54C]/16 text-[#f4df9e]',
    title: 'text-white',
    description: 'text-white/72',
  },
};

function LandingFeatureCard({ className, description, icon, title, tone = 'light' }) {
  const toneStyle = toneStyles[tone];

  return (
    <article
      className={cn(
        'rounded-[24px] border p-5 transition duration-300 hover:-translate-y-1 sm:p-6',
        toneStyle.card,
        className
      )}
    >
      <div
        className={cn(
          'mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl',
          toneStyle.icon
        )}
      >
        {createElement(icon, { className: 'h-5 w-5', 'aria-hidden': 'true' })}
      </div>
      <h3 className={cn('font-heading text-lg font-semibold tracking-tight', toneStyle.title)}>
        {title}
      </h3>
      <p className={cn('mt-2 text-sm leading-6', toneStyle.description)}>{description}</p>
    </article>
  );
}

export default LandingFeatureCard;
