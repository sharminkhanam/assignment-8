import React from 'react';

const ProductDetailsPage =async ({params}) => {
    const {id} = await params;
         const res = await fetch("https://assignment-8-zeta-two.vercel.app/data.json");
    const detailsCard = await res.json();

    const singelCard = detailsCard.find(details => details.id == id)
    console.log(id, detailsCard, singelCard)
    return (
        <div>
            productDetail
            {singelCard.name}
        </div>
    );
};

export default ProductDetailsPage;