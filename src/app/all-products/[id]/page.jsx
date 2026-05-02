import React from 'react';

const ProductDetailsPage =async ({params}) => {
    const {id} = await params;
         const res = await fetch("https://assignment-8-zeta-two.vercel.app/data.json");
    const brandsCard = await res.json();

    const brandCard = brandsCard.find(details => details.id == id)
    console.log(id, brandsCard, brandCard)
    return (
        <div>
            productDetail
        </div>
    );
};

export default ProductDetailsPage;