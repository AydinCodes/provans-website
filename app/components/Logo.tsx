import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/provans-logo.png"
        alt="Provans Timber & Hardware"
        width={160}
        height={48}
        className="w-40 h-auto"
        priority
        unoptimized
      />
    </Link>
  );
}
