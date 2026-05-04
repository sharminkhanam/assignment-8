import Image from 'next/image';
import React from 'react';

const ProductDetailsPage =async ({params}) => {
    const {id} = await params;
         const res = await fetch("https://assignment-8-zeta-two.vercel.app/data.json");
    const detailsCard = await res.json();

    const singelCard = detailsCard.find(details => details.id == id)
    console.log(id, detailsCard, singelCard)
    return (
        <div>
            ProductDetail
            <div>
                <h2 className='text-2xl font-bold'>{singelCard.name}</h2>
                <div>
                  <Image src={singelCard.image} alt={singelCard.name}
            height={400} width={400}></Image>
             <p className='text-xl font-bold'>Description :{singelCard.description}</p>
            </div>
           
            <div className='space-y-3 font-bold'>
                <p>Rating : {singelCard.rating}</p>
                <p>Price : {singelCard.price}</p>
                <p>Brand : {singelCard.brand}</p>
                <p>Stock : {singelCard.stock}</p>
                <p>Category :{singelCard.category}</p>
            </div>
            </div>
            
           
        </div>
    );
};

export default ProductDetailsPage;