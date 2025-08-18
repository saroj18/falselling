import { getAllCategory } from "@/actions/category";
import Hero from "@/components/hero";
import ProductShowcase from "@/components/product-showcase";
import WhyChooseUs from "@/components/why-choose-us";
import { ICategory } from "@/types/category";

const page = async () => {
  const { data } = await getAllCategory();
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <WhyChooseUs />
      <ProductShowcase products={data as ICategory[]} />
    </div>
  );
};

export default page;
