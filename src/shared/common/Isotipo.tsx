import Link from 'next/link';
import Image from 'next/image';

export default function Isotipo() {
  return (
    <div>
      <Link href="/" className="inline-block mb-4">
        <span className="sr-only">Cristian Arias</span>
        <Image
          alt="Cristian Arias"
          src="/IsoCA.svg"
          className="mx-auto md:mx-0 hover:opacity-80 transition-opacity duration-300 dark:invert dark:brightness-0 hover:dark:invert-0 hover:dark:brightness-150"
          width={150}
          height={150}
          priority
        />
      </Link>
    </div>
  );
}
