import { getAllCategory } from "@/actions/category";
import Hero from "@/components/hero";
import ProductShowcase from "@/components/product-showcase";
import WhyChooseUs from "@/components/why-choose-us";
import { ICategory } from "@/types/category";
import { prisma } from "@/utils/prisma";

const page = async () => {
  const { data } = await getAllCategory();

  await prisma.product.createMany({
    data: [
      {
        name: "Tiny Hole Calcium Silicate Tiles",
        category_id: "cmeivsxyf0000jr040d0fa9v6",
        price: 140,
        discount: 0,
        stock: 100,
        status: "in_stock",
        description:
          "Perforated calcium silicate tiles with excellent NRC, lightweight, non-combustible, moisture resistant, termite resistant, and eco-friendly.",
        weight: 0,
        dimensions: "595 x 595 & 595 x 1195 mm",
        sku: "RK-29",
        brand: "Shera",
        warranty: "0",
        images: [
          "https://res.cloudinary.com/dp4vn6jd7/image/upload/v1755628371/products/gbsm5tqzdjxg3q93tti7.webp",
        ],
        tags: ["calcium silicate", "ceiling", "tiny hole"],
        specification: [
          "Material: Gypsum",
          "Thickness: 20 mm",
          "Surface Treatment: Ceramic",
          "Country of Origin: Made in India",
        ],
        benefits: [
          "Lightweight but rigid",
          "Non-combustible",
          "Moisture and water resistant",
          "Fungus free",
          "Termite resistant",
          "Eco-friendly",
          "Sound and heat insulation",
          "Durable",
        ],
        applications: ["Residential", "Commercial", "Office ceilings"],
        installation: [],
      },
      {
        name: "Aerolite Calcium Silicate Ceiling Tiles",
        category_id: "cmeivsxyf0000jr040d0fa9v6",
        price: 260,
        discount: 0,
        stock: 100,
        status: "in_stock",
        description:
          "High-strength, fire-resistant, moisture-proof calcium silicate tiles with easy installation and environmental protection.",
        weight: 0,
        dimensions: "2x2",
        sku: null,
        brand: "Aerolite",
        warranty: "0",
        images: [
          "https://res.cloudinary.com/dp4vn6jd7/image/upload/v1755628371/products/gbsm5tqzdjxg3q93tti7.webp",
        ],
        tags: ["calcium silicate", "ceiling", "aerolite"],
        specification: [
          "Material: Calcium",
          "Thickness: 15mm",
          "Color: White",
          "Surface Treatment: Coated",
          "Fire and moisture resistant",
        ],
        benefits: [
          "Heat insulation",
          "Incombustible",
          "Sound proof",
          "Environmentally friendly",
          "Waterproof",
          "High strength",
          "Easy installation",
          "Durable",
        ],
        applications: [
          "Hospitals",
          "Government sectors",
          "Residential buildings",
        ],
        installation: [],
      },
      {
        name: "Round Hole Calcium Silicate Tiles",
        category_id: "cmeivsxyf0000jr040d0fa9v6",
        price: 140,
        discount: 0,
        stock: 100,
        status: "in_stock",
        description:
          "Round perforated calcium silicate tiles with excellent NRC, lightweight, termite resistant, and moisture-proof.",
        weight: 0,
        dimensions: "595 x 595 & 595 x 1195 mm",
        sku: "RK-27",
        brand: "none",
        warranty: "0",
        images: [
          "https://res.cloudinary.com/dp4vn6jd7/image/upload/v1755628371/products/gbsm5tqzdjxg3q93tti7.webp",
        ],
        tags: ["calcium silicate", "ceiling", "round hole"],
        specification: [
          "Material: Gypsum",
          "Thickness: 12 mm",
          "Surface Treatment: Color Coated",
          "Country of Origin: Made in India",
        ],
        benefits: [
          "Lightweight but rigid",
          "Non-combustible",
          "Moisture and water resistant",
          "Fungus free",
          "Termite resistant",
          "Eco-friendly",
          "Sound and heat insulation",
          "Durable",
        ],
        applications: ["Residential", "Commercial", "Office ceilings"],
        installation: [],
      },
      {
        name: "Square Hole Calcium Silicate Tiles",
        category_id: "cmeivsxyf0000jr040d0fa9v6",
        price: 140,
        discount: 0,
        stock: 100,
        status: "in_stock",
        description:
          "Square perforated calcium silicate tiles with high NRC, lightweight, moisture-proof, and termite resistant.",
        weight: 0,
        dimensions: "595 x 595 & 595 x 1195 mm",
        sku: "RK-28",
        brand: "none",
        warranty: "0",
        images: [
          "https://res.cloudinary.com/dp4vn6jd7/image/upload/v1755628371/products/gbsm5tqzdjxg3q93tti7.webp",
        ],
        tags: ["calcium silicate", "ceiling", "square hole"],
        specification: [
          "Material: Asbestos Cement",
          "Thickness: 16 mm",
          "Surface Treatment: Color Coated",
          "Country of Origin: Made in India",
        ],
        benefits: [
          "Lightweight but rigid",
          "Non-combustible",
          "Moisture and water resistant",
          "Fungus free",
          "Termite resistant",
          "Eco-friendly",
          "Sound and heat insulation",
          "Durable",
        ],
        applications: ["Residential", "Commercial", "Office ceilings"],
        installation: [],
      },
      {
        name: "Night Star Calcium Silicate Perforated Tile",
        category_id: "cmeivsxyf0000jr040d0fa9v6",
        price: 0,
        discount: 0,
        stock: 100,
        status: "in_stock",
        description:
          "Industrial-grade calcium silicate perforated tiles with excellent impact strength, thermal insulation, and moisture resistance.",
        weight: 0,
        dimensions: "595 x 595 & 595 x 1195 mm",
        sku: null,
        brand: "RKC",
        warranty: "0",
        images: [
          "https://res.cloudinary.com/dp4vn6jd7/image/upload/v1755628371/products/gbsm5tqzdjxg3q93tti7.webp",
        ],
        tags: ["calcium silicate", "industrial", "night star"],
        specification: [
          "Material: Calcium Silicate",
          "Thickness: 6/8/10 mm",
          "Density: 900-950 Kg/cm2",
          "Impact Strength: 1200-1700 J/m2",
          "Moisture Content: 12-15%",
          "Thermal Conductivity: 0.13 Kcal/hr m Deg °C",
          "Shrinkage Dimension: 0.1-0.2%",
          "Alkalinity: pH = 100",
          "Fire Propagation Index: 4.0",
        ],
        benefits: [
          "High strength",
          "Durable",
          "Thermal insulation",
          "Impact resistant",
        ],
        applications: ["Industrial use"],
        installation: [],
      },
      {
        name: "Nano Square Calcium Silicate Perforated Tile",
        category_id: "cmeivsxyf0000jr040d0fa9v6",
        price: 0,
        discount: 0,
        stock: 100,
        status: "in_stock",
        description:
          "Industrial nano square calcium silicate perforated tiles with high density, impact strength, and thermal insulation.",
        weight: 0,
        dimensions: "595 x 595 & 595 x 1195 mm",
        sku: null,
        brand: "RKC",
        warranty: "0",
        images: [
          "https://res.cloudinary.com/dp4vn6jd7/image/upload/v1755628371/products/gbsm5tqzdjxg3q93tti7.webp",
        ],
        tags: ["calcium silicate", "industrial", "nano square"],
        specification: [
          "Material: Calcium Silicate",
          "Thickness: 6/8/10 mm",
          "Density: 900-950 Kg/cm2",
          "Impact Strength: 1200-1700 J/m2",
          "Moisture Content: 12-15%",
          "Thermal Conductivity: 0.13 Kcal/hr m Deg °C",
          "Shrinkage Dimension: 0.1-0.2%",
          "Alkalinity: pH = 100",
          "Fire Propagation Index: 4.0",
        ],
        benefits: [
          "High strength",
          "Durable",
          "Thermal insulation",
          "Impact resistant",
        ],
        applications: ["Industrial use"],
        installation: [],
      },
    ],
  });

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <WhyChooseUs />
      <ProductShowcase products={data as ICategory[]} />
    </div>
  );
};

export default page;
