import Image from 'next/image';
import React from 'react';
import { FaArrowAltCircleRight, FaArrowCircleRight } from 'react-icons/fa';

const CareTips = () => {
    return (
        <div className='my-16 bg-base-300 p-12 rounded-3xl shadow-lg '>
            <h2 className='text-4xl font-bold text-center my-10 '>Summer Care</h2>
            <div className='flex justify-center gap-12'>
                <Image src="/images/care.png" alt="care"  width={400}
             height={400}>
            </Image>
           
              
            <div className='space-y-5 mt-10'>
                 <h2 className='text-3xl font-bold'>Summer Care Tips:</h2>
                 <div className='space-y-4 p-4 rounded-md shadow-md'>
                   
                <p className='flex items-center gap-2'>
                        <FaArrowAltCircleRight />
                        Drink 2-3 liters of water 
                    </p>
                    <p className='flex items-center gap-2'> <FaArrowAltCircleRight />Use sunscreen before going outside</p>
                    <p className='flex items-center gap-2'> <FaArrowCircleRight />Eat fresh fruits like watermelon & mango</p>
                    <p className='flex items-center gap-2'> <FaArrowCircleRight />Avoid direct sun from 11am-4am</p>
                   
                   
                </div>
            </div>
            </div>
            
               
         

      
        </div>
    );
};

export default CareTips;