import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium text-white hover:text-[#0061af] transition-colors whitespace-nowrap cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
}
