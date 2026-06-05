import { Star, Quote } from "lucide-react";

export function TestimonialCard({
  author,
  role,
  content,
  image,
}: {
  author: string;
  role: string;
  content: string;
  image: string;
}) {
  return (
    <div className="relative h-full rounded-[3rem] bg-white p-10 border border-border/40 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.05)] hover:-translate-y-1 group">
      <div className="absolute top-10 right-10 text-primary/10 transition-colors group-hover:text-primary/20">
        <Quote size={80} strokeWidth={1} />
      </div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-primary text-primary" />
          ))}
        </div>

        <blockquote className="flex-1">
          <p className="text-xl font-medium leading-relaxed tracking-tight text-foreground/80 italic">
            &ldquo;{content}&rdquo;
          </p>
        </blockquote>

        <div className="mt-10 flex items-center gap-5">
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border-2 border-primary/10 transition-all group-hover:border-primary/30">
            <img src={image} alt={author} className="h-full w-full object-cover" />
          </div>
          <div>
            <h4 className="text-lg font-black text-foreground tracking-tight">{author}</h4>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mt-1">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
