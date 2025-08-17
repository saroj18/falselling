import { getAllServices } from "@/actions/service";
import ServicesContent from "./_components/service-content";
import { IService } from "@/types/service";

export default async function page() {
  const { data } = await getAllServices();
  return <ServicesContent services={data as IService[]} />;
}
