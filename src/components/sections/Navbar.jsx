import React from 'react'
import { navbarLinks } from '../../data/data.js';
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";

const Navbar = ()=> {
    return (
        <>
            <nav>
                {/* secciones */}
                <div className='container flex justify-between font-bolditems-center py-8'>
                    {
                        <div className='text-2xl flex items-center gap-2 uppercase'>
                        <p>LUMINA</p>
                        <p className='text-secondary'>By Fernanda</p>
                        </div>     
                    }
                    {
                        <div className="hidden md:block">
                            <ul className="flex items-center gap-7 text-gray-600">
                                {navbarLinks.map((item) => (
                                <li key={item.id}>
                                    <a href={item.url} className="inline-block py-1 px-3 hover:text-primary">
                                    {item.title}
                                    </a>
                                </li>
                            ))}
                            </ul>
                        </div>

                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar

