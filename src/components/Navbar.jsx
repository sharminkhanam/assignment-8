"use client"
import {  authClient} from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user
    //console.log(user)
    const handelSignOut = async () => {
        await authClient.signOut()
    }
    const pathname = usePathname();
      const links = (path)=>{
        return pathname === path ? " border-b-2 border-b-red-500 text-purple-500 font-bold text-xl": ""
      }


    return (
        
        <div className='container mx-auto bg-sky-200 py-4 items-center shadow-lg '>
           <div className='flex justify-between'>
            <h2 className='text-2xl'> 🌞 SunCart</h2>
            <ul className='flex gap-5'>
                   <li>
                    <Link href={'/'} className={links("/")}>Home</Link>
                </li>
                <li>
                    <Link href={'/all-products'} className={links("/all-products")}> Products</Link>
                </li>
                <li>
                    <Link href={'/profile'} className={links("/profile")}>profile</Link>
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
    );
};

export default Navbar;