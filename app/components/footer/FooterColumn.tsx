// import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <div
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              {link.label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
