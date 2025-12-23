import FooterColumn from './FooterColumn';
import FooterContact from './FooterContact';
import FooterBottom from './FooterBottom';

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'News & Tips', href: '/news' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Showroom', href: '/showroom' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Catalogue', href: '/catalogue' },
  { label: 'Contact', href: '/contact' },
];

const productLinks = [
  { label: 'Timber', href: '/products/timber' },
  { label: 'Mouldings', href: '/products/mouldings' },
  { label: 'Decking & Screening', href: '/products/decking' },
  { label: 'Building Materials', href: '/products/building-materials' },
  { label: 'Doors', href: '/products/doors' },
  { label: 'Flooring', href: '/products/flooring' },
  { label: 'Hardware', href: '/products/hardware' },
  { label: 'Paint', href: '/products/paint' },
];

export default function Footer() {
  return (
    <footer className="bg-[#231f20] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FooterContact />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Products" links={productLinks} />
          <div>
            <h3 className="font-semibold text-white mb-4">Provans</h3>
            <p className="text-gray-400 text-sm mb-6">
              Independent, family-owned timber yard, hardware store and showroom serving Melbourne since 1903.
            </p>
            <div className="flex flex-col gap-4">
              <img
                src="/provans-logo.png"
                alt="Provans Timber & Hardware"
                className="w-40 h-auto"
              />
              <img
                src="/mitre-10-logo.png"
                alt="Mitre 10"
                className="w-32 h-auto"
              />
            </div>
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}
