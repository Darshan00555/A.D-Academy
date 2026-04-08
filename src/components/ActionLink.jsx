import { cn } from '@/lib/utils';

const variants = {
  primary:
    'bg-[#C9A54C] text-[#0B1E3C] shadow-[0_20px_40px_rgba(201,165,76,0.25)] hover:-translate-y-0.5 hover:bg-[#d6b561]',
  secondary:
    'border border-white/18 bg-white/8 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/14',
  dark: 'bg-[#0B1E3C] text-white shadow-[0_16px_30px_rgba(11,30,60,0.16)] hover:-translate-y-0.5 hover:bg-[#142a52]',
  subtle:
    'border border-[#0B1E3C]/10 bg-white text-[#0B1E3C] hover:-translate-y-0.5 hover:border-[#C9A54C]/40 hover:bg-[#fffaf0]',
};

function ActionLink({ children, className, href, target, rel, variant = 'primary', ...props }) {
  const resolvedRel = target === '_blank' ? (rel ?? 'noreferrer') : rel;

  return (
    <a
      href={href}
      target={target}
      rel={resolvedRel}
      className={cn(
        'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 focus-visible:ring-2 focus-visible:ring-[#C9A54C] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-none sm:px-6',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export default ActionLink;
