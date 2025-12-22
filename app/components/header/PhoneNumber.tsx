import { PhoneIcon } from '../icons';

export default function PhoneNumber() {
  return (
    <a
      href="tel:0394898255"
      className="flex items-center gap-2 text-white hover:text-[#0061af] transition-colors whitespace-nowrap"
    >
      <PhoneIcon className="w-5 h-5" />
      <span className="font-semibold whitespace-nowrap">03 9489 8255</span>
    </a>
  );
}
