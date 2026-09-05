import { Mail, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="hidden border-b border-[var(--satt-border)]/30 bg-[var(--satt-bg-primary)] lg:block">
      <div className="mx-auto flex h-9 max-w-[1600px] items-center justify-between px-6 text-xs text-[var(--satt-text-secondary)] xl:px-10">

        {/* Contact Information */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:hello@satteventplanners.com"
            className="flex items-center gap-2 transition-colors hover:text-[var(--satt-gold-dark)]"
          >
            <Mail size={13} />
            <span>visit.sattevents@gmail.com</span>
          </a>

          <a
            href="tel:+910000000000"
            className="flex items-center gap-2 transition-colors hover:text-[var(--satt-gold-dark)]"
          >
            <Phone size={13} />
            <span>+91 74150-77724</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">

          <a
            href="#"
            aria-label="Instagram"
            className="text-[10px] uppercase tracking-[0.16em] transition-colors hover:text-[var(--satt-gold)]"
          >
            Instagram
          </a>

          <a
            href="#"
            aria-label="Facebook"
            className="text-[10px] uppercase tracking-[0.16em] transition-colors hover:text-[var(--satt-gold)]"
          >
            Facebook
          </a>

          <a
            href="#"
            aria-label="YouTube"
            className="text-[10px] uppercase tracking-[0.16em] transition-colors hover:text-[var(--satt-gold)]"
          >
            YouTube
          </a>

        </div>
      </div>
    </div>
  );
};

export default TopBar;