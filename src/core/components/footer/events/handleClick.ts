import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import React from 'react';

export const handleClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  router: AppRouterInstance
) => {
  e.preventDefault();
  if (href.startsWith('/#')) {

    if (window.location.pathname === '/') {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
     
      router.push('/');
  
      setTimeout(() => {
        const id = href.substring(2);
        const element = document.getElementById(id);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  } else {
    router.push(href);
  }
};
