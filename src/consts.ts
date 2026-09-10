export interface LinkItem {
  label: string;
  href: string;
}

export interface FooterItem {
  label: string;
  href?: string;
}

export interface DateFormat {
  locale: string;
  options: Intl.DateTimeFormatOptions;
  template: string;
}

// Site-wide configuration.
export const SITE_TITLE = "Yellow Rose ʕ•ᴥ•ʔ";
export const SITE_DESCRIPTION = "here i rant, i cope, i hope, i i i...";
export const SITE_URL = "https://yr5094552.github.io/";
export const SITE_LANG = "en";

export const DATE_FORMAT: DateFormat = {
  locale: "en-GB",
  options: { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" },
  template: "{day} {month}, {year}",
};

export const SITE_FAVICON = "/favicon.svg";
// Optional stylesheet in public/, e.g. "/custom.css".
export const CUSTOM_STYLESHEET: string | undefined = undefined;

// Add navigation and footer links here without editing components.
export const NAV_ITEMS: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog/" },
];
export const FOOTER_ITEMS: FooterItem[] = [
  { label: "Made with" },
  {
    label: "Astro ʕ•ᴥ•ʔ Bear",
    href: "https://github.com/harleyjwilson/astro-bearblog",
  },
];
