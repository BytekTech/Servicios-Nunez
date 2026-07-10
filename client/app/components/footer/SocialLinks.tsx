import { CONTACT } from "../../lib/trades";
import Social from "./Social";

export default function SocialLinks({ waHref }: { waHref: string }) {
  const social: string[][] = [
    ["WHATSAPP", waHref],
    ["INSTAGRAM", CONTACT.instagram],
    ["FACEBOOK", CONTACT.facebook],
  ];

  return (
    <div className="flex gap-2">
      {social.map(([content, contact]) => (
        <Social key={content} content={content} contact={contact} />
      ))}
    </div>
  );
}
