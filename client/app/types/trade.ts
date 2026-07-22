export type Faq = {
  q: string;
  a: string;
};

export type Trade = {
  slug: string;
  code: string;
  name: string;
  line: string;
  tagline: string;
  seoTitle: string;
  keywords: string[];
  background: string;
  cred: string;
  urgent: string;
  waMsg: string;
  services: string[];
  faqs: Faq[];
};
