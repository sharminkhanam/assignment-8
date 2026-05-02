import ProductsCard from "@/components/ProductsCard";


const AllProductsOAge = async () => {
        const res = await fetch("https://assignment-8-zeta-two.vercel.app/data.json");
    const brandsCard = await res.json();
    console.log(brandsCard)
    return (
        <div>
            All products 
            <div className="grid grid-cols-4 gap-5">
                  {
                brandsCard.map((brand)=> <ProductsCard key={brand.id} brand={brand}/>)
            }
            </div>
          
        </div>
    );
};

export default AllProductsOAge;