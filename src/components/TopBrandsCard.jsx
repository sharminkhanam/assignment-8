import React from 'react';
import ProductsCard from './ProductsCard';

const TopBrandsCard = async () => {
    const res = await fetch("https://assignment-8-zeta-two.vercel.app/data.json");
    
    const brandsCard = await res.json();
    const topBrands = brandsCard.slice(0, 9);
    console.log(topBrands)
    //console.log(brandsCard)
    return (
        <div>
            <h2>Top brands</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    topBrands.map((brand) => <ProductsCard key={brand.id} brand={brand}/>)
                }
            </div>
          
        </div>
    );
};

export default TopBrandsCard;