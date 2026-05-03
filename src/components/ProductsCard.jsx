import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductsCard = ({brand}) => {
    return (
        <Card className='border rounded-xl'>
            <div className='relative w-full aspect-square'>
             
              <Image src={brand.imageUrl} 
              fill
              sizes ="(max-width:768px) 100vw 33vw"
              alt={brand.title}
              className='rounded-xl object-cover'></Image>
            </div>
            <Chip className='absolute'>
                {brand.category}
            </Chip>
           <Link href={`/all-products/${brand.id}`}> <button variant = 'outline ' className={'w-full'}>Product Details</button></Link>
           
        </Card>
    );
};

export default ProductsCard;