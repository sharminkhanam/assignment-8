
import React from 'react';

const TopProducts = async() => {
      const res = await fetch("https://assignment-8-zeta-two.vercel.app/data.json")
        
    ;
    const brandsCard = await res.json();
     const topBrands = brandsCard.slice(0, 3);
   
    return (
        <div>
            top
            {
                topBrands.map((s)=> <h2 key={s.id}>{s.name}</h2>)
            }
        </div>
    );
};

export default TopProducts;