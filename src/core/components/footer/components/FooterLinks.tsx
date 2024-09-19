import { useRouter } from 'next/navigation'
import { footerLink } from '../data/footerData';
import { handleClick } from '../events/handleClick';

export const FooterLinks = () => {
    const router = useRouter()

  return (
    <div className="text-center md:text-left">
      <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
      <ul className="space-y-2">
        {footerLink.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={(e) => handleClick(e, link.href, router)}
              className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors duration-300 cursor-pointer"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
