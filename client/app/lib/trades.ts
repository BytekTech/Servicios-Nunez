import contactData from "@/public/data/contact.json";
import type { Contact } from "../types/contact";

const CONTACT = contactData as Contact;

export function waLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappDigits}?text=${encodeURIComponent(message)}`;
}
