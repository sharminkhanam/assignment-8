import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductsCard = ({brand}) => {
    return (
        <Card className='border rounded-xl space-y-4'>
            <div className='relative w-full aspect-square'>
             
              <Image src={brand.image} 
              fill
              alt={brand.name}
              className='rounded-xl object-cover'></Image>
            </div>
            <Chip className='absolute text-sm px-2 py-1 bg-amber-200'>
                {brand.category}
            </Chip>
            <p>{brand.brand}</p>
            <div className='flex gap-2'>
                 <p className='bg-amber-200 px-3 py-2 rounded-md'>Rating: {brand.rating}</p>
                 <p className='bg-blue-200 px-3 py-2 rounded-md'>Price: {brand.price}</p>
            </div>
           
           <Link href={`/all-products/${brand.id}`}> 
           <button 
           className={'w-full bg-purple-800 text-white px-2 py-1 rounded-full hover:scale-110 transition  '}>
            Product Details</button></Link>
            
           
        </Card>
    );
};

export default ProductsCard;