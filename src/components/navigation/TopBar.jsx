import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: "https://img.icons8.com/color/48/instagram-new.png",
  },
  {
    name: "Facebook",
    href: "#",
    icon: "https://img.icons8.com/color/48/facebook-new.png",
  },
  {
    name: "YouTube",
    href: "#",
    icon: "https://img.icons8.com/color/48/youtube-play.png",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/9174150777724",
    icon: "https://img.icons8.com/color/48/whatsapp.png",
  },
];

const TopBar = () => {
  return (
    <div className="hidden border-b border-[var(--satt-border)]/30 bg-[var(--satt-bg-primary)] lg:block">
      <div className="mx-auto flex h-9 max-w-[1600px] items-center justify-between px-6 text-xs text-[var(--satt-text-secondary)] xl:px-10">

        {/* Contact Information */}
        <div className="flex items-center gap-6">

          <a
            href="mailto:visit.sattevents@gmail.com"
            className="flex items-center gap-2 transition-colors hover:text-[var(--satt-gold-dark)]"
          >
            <Mail size={13} />
            <span>visit.sattevents@gmail.com</span>
          </a>

          <a
            href="tel:+9174150777724"
            className="flex items-center gap-2 transition-colors hover:text-[var(--satt-gold-dark)]"
          >
            <Phone size={13} />
            <span>+91 74150-77724</span>
          </a>

        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">

          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className="flex items-center justify-center transition-transform duration-200 hover:scale-110"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
            </a>
          ))}

        </div>

      </div>
    </div>
  );
};

export default TopBar;