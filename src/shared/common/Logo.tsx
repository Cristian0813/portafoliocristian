import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex lg:flex-1">
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Cristian Arias</span>
        <Image
          alt="Cristian Arias"
          src="/IsoTipoCA.svg"
          className="dark:brightness-0 dark:invert hover:contrast-150 hover:dark:invert-0 hover:dark:brightness-100"
          width={50}
          height={50}
          priority
        />
      </Link>
    </div>
  );
}
