import { cn } from '@/lib/utils';

const themeStyles = {
  dark: {
    description: 'text-white/72',
    eyebrow: 'text-[#C9A54C]',
    title: 'text-white',
  },
  light: {
    description: 'text-slate-600',
    eyebrow: 'text-[#C9A54C]',
    title: 'text-[#0B1E3C]',
  },
};

function SectionHeading({
  align = 'left',
  className,
  description,
  eyebrow,
  theme = 'light',
  title,
}) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';
  const themeStyle = themeStyles[theme];

  return (
    <div className={cn('max-w-2xl', alignment, className)}>
      {eyebrow ? (
        <p className={cn('text-xs font-semibold tracking-[0.32em] uppercase', themeStyle.eyebrow)}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'font-heading mt-3 text-[clamp(1.8rem,4vw,3rem)] leading-tight font-semibold tracking-tight',
          themeStyle.title
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-4 text-sm leading-7 sm:text-base', themeStyle.description)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
