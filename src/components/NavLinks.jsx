"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = () => {
    const pathname = usePathname();
    const links = (path) => {
        pathname === path ? "bg-green-500 border botrder-b-green-400"
        : ""

    }
    return (
        <div>
              <ul className='flex gap-5'>
                <li>
                    <Link href="/" className={links('/')}>Home</Link>
                </li>
                <li>
                    <Link href={'/all-products'}>All Products</Link>
                </li>
                <li>
                    <Link href={'/profile'}>profile</Link>
                </li>
                </ul>
        </div>
    );
};

export default NavLinks;