import { ProductDemo } from "@/components/product-demo";
import Image from "next/image";
import FinalCtaSection from "./components/FinalCtaSection";

export default function Home() {
  return (
    <div>
      <FinalCtaSection />
       <ProductDemo />
    </div>
  );
}
