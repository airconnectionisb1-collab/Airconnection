import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-16 md:mb-24 ${center ? "text-center mx-auto max-w-4xl" : ""}`}>
      {eyebrow && (
        <Reveal>
          <div className={`flex items-center gap-4 mb-6 ${center ? "justify-center" : ""}`}>
            <div className="h-px w-8 bg-primary/20" />
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </span>
            <div className="h-px w-8 bg-primary/20" />
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-4xl font-black tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1] text-foreground mb-6">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="text-base text-muted-foreground/80 md:text-lg leading-relaxed max-w-2xl font-medium mx-auto">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
