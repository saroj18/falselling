import Hero from "@/components/hero";
import ProductShowcase from "@/components/product-showcase";
import WhyChooseUs from "@/components/why-choose-us";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <WhyChooseUs />
      <ProductShowcase />
    </div>
  );
};

export default Index;
