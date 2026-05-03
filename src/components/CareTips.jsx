import Image from 'next/image';
import React from 'react';

const CareTips = () => {
    return (
        <div className='my-16 bg-base-300 p-12 rounded-3xl shadow-lg '>
            <h2 className='text-3xl font-fold text-center my-10 text-orange-500'>Summer Care</h2>
            <div className='flex justify-center gap-12'>
                <Image src="/images/care.png" alt="care"  width={400}
             height={400}>
            </Image>
           
              
            <div className='space-y-5 mt-10'>
                 <h2 className='text-3xl font-bold'>Summer Care Tips:</h2>
                 <ul className='space-y-4'>
                    <li>Drink 2-3 liters of water </li>
                    <li>Use sunscreen before going outside</li>
                    <li>Eat fresh fruits like watermelon & mango</li>
                    <li>Avoid direct sun from 11am-4am</li>
                </ul>
            </div>
            </div>
            
               
         

      
        </div>
    );
};

export default CareTips;