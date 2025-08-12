import { getAllContacts } from "@/actions/contact";
import ContactsContent from "./_components/contact-response";
import { IContact } from "@/types/contact";

export default async function page() {
  const { data } = await getAllContacts();
  return <ContactsContent contacts={data as IContact[]} />;
}
