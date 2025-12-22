// import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  return (
    <div
      className={`text-sm font-medium text-white hover:text-[#0061af] transition-colors whitespace-nowrap ${className}`}
    >
      {children}
    </div>
  );
}
