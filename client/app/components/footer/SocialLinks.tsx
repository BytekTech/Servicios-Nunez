import contactData from "@/public/data/contact.json";
import type { Contact } from "../../types/contact";
import SocialItem from "./SocialItem";


export default function SocialLinks({ waHref }: Readonly<{ waHref: string }>) {
  const CONTACT = contactData as Contact;
  const social: string[][] = [
    ["WHATSAPP", waHref],
    ["INSTAGRAM", CONTACT.instagram]
  ];

  return (
    <div className="flex gap-2">
      {social.map(([content, contact]) => (
        <SocialItem key={content} content={content} contact={contact} />
      ))}
    </div>
  );
}
