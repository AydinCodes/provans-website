import Link from 'next/link';

interface PartnershipCardProps {
  title: string;
  description: string;
  href: string;
}

export default function PartnershipCard({ title, description, href }: PartnershipCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-[#231f20] mb-3 group-hover:text-[#0061af] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}
