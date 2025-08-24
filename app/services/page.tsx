import { getAllServices } from "@/actions/service";
import Services from "./_components/service-list";
import { IService } from "@/types/service";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "False Ceiling & Acoustic Services in Nepal | Installation Experts",
  description:
    "Expert false ceiling, acoustic treatment, and thermal insulation services in Nepal. Free consultation and professional installation.",
  keywords: [
    "false ceiling installation Nepal",
    "acoustic treatment services",
    "ceiling design Nepal",
  ],
};

export default async function page() {
  const { data } = await getAllServices();
  return <Services services={data as IService[]} />;
}