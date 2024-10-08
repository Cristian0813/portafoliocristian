import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex lg:flex-1">
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Cristian Arias</span>
        <Image
          alt="Cristian Arias"
          src="/LogoCA.svg"
          className="h-14 hover:brightness-150 dark:invert dark:brightness-0 hover:dark:invert-0 hover:dark:brightness-150"
          width={100}
          height={100}
          priority
        />
      </Link>
    </div>
  );
}
