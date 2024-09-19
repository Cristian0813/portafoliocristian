export type FooterText = string;

export type LinkItem = {
    name: string;
    href: string
  }
  export type FooterLink = LinkItem[];

export type SocialItem = {
  icon: React.ElementType;
  href: string;
  label: string;
}

export type FooterSocial = SocialItem[];