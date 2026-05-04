"use client"
import {  authClient} from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavLink from './NavLink';


const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user
    //console.log(user)
    const handelSignOut = async () => {
        await authClient.signOut()
    }
  


    return (
        
        <div className='bg-base-200 py-4 shadow-lg'>
            <div className='container mx-auto  items-center  '>
                 <div className='flex justify-between'>
            <h2 className='text-2xl'> 🌞 SunCart</h2>
            <ul className='flex gap-5'>
                   <li>
                     <NavLink href={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={'/all-products'}> Products</NavLink>
                </li>
                <li>
                    <NavLink href={'/profile'} >profile</NavLink>
                </li>
                </ul>
                <div className='flex'>
                    {
                      !user &&   <ul className='flex gap-2'><li>
                    <Link href={'/register'} className='bg-green-500 border px-3 py-2 rounded-md text-white'>Register</Link>
                </li>
                <li>
                    <Link href={'/login'} className='bg-indigo-600 border px-3 py-2 rounded-md text-white'>LogIn</Link>
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
        <button onClick={handelSignOut} className='bg-red-500 text-white text-sm 
        p-3 font-bold rounded-full'>SignOut</button></div>
                }
                
           
           </div>
            </div>
          
        </div>
    );
};

export default Navbar;