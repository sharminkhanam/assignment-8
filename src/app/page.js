import Banner from "@/components/Banner";
import CareTips from "@/components/CareTips";
import TopBrandsCard from "@/components/TopBrandsCard";
import TopProducts from "@/components/TopProducts";


export default function Home() {
  return (
    <div >
      <Banner/>
      <TopBrandsCard/>
      <CareTips/>
      <TopProducts/>
    </div>
  );
}
