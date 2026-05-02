"use client"
import {  authClient} from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user
    //console.log(user)
    const handelSignOut = async () => {
        await authClient.signOut()
    }
    return (
        <div className='container mx-auto bg-sky-200 py-4 items-center shadow-lg '>
           <div className='flex justify-between'>
            <h2 className='text-2xl'> 🌞 SunCart</h2>
            <ul className='flex gap-5'>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/all-products'}>All Products</Link>
                </li>
                <li>
                    <Link href={'/profile'}>profile</Link>
                </li>
                </ul>
                <div className='flex'>
                    {
                      !user &&   <ul className='flex gap-2'><li>
                    <Link href={'/signup'} className='bg-green-500 border px-3 py-2 rounded-md text-white'>Sign Up</Link>
                </li>
                <li>
                    <Link href={'/signin'} className='bg-indigo-600 border px-3 py-2 rounded-md text-white'>Sign In</Link>
                </li>
                </ul>
                    }
                </div>
                {
                    user && <div className='flex gap-2'> 
                    <Avatar size="sm">
        <Avatar.Image alt="John Doe" size="sm" src={user?.image}
        referrerPolicy='no-referrer'/>
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      
      </Avatar>
        <button onClick={handelSignOut} variant="danger" size="sm">SignOut</button></div>
                }
                
           
           </div>
        </div>
    );
};

export default Navbar;