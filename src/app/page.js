import Banner from "@/components/Banner";
import CareTips from "@/components/CareTips";
import TopBrandsCard from "@/components/TopBrandsCard";

import TopBrands from "@/components/TopBrands";


export default function Home() {
  return (
    <div >
      <Banner/>
      <TopBrandsCard/>
      <CareTips/>
      <TopBrands/>
    </div>
  );
}
