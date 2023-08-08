import React, { useState } from 'react'
import { navItems } from '../data/navItems'
import { MenuIcon } from '../icons';

export const Nav = () => {
    const [isActive, setIsActive] = useState(false)

    console.log(isActive)

    return (
        <nav className="relative flex justify-between h-full w-[90%] md:w-[60%] m-auto">
            <span onClick={() => setIsActive(!isActive)} 
            className="select-none cursor-pointer md:hidden h-full grid place-content-center">
                <MenuIcon className={`${isActive ? "bg-rose-600 w-7 h-7 p-1 text-zinc-900" : "w-6 h-6"} duration-300  rounded-full  text-zinc-300`} />
            </span>
            <a href="#home" className="hover:text-rose-500 duration-300 text-zinc-300 text-base lg:text-lg font-medium px-3 grid place-content-center h-full">Yesid</a>

            <ul className={`   
                ${isActive === true ? "w-1/2" : 'w-0 -left-1/4'}             
                md:flex md:static md:bg-transparent md:rounded-none md:w-fit
                absolute top-11 -left-[5.5%] bg-zinc-900 rounded-br-md duration-300 will-change-auto overflow-hidden`}>
                {
                    navItems.map((navItem) => {
                        return (
                            <li key={navItem.url}>
                                <a className="hover:bg-zinc-950 text-zinc-300 duration-300 grid place-content-center h-full text-sm py-4 border-b-[.0625rem] border-zinc-950/50
                                lg:text-base md:py-0 md:px-3 md:border-none"
                                    href={navItem.url}>{navItem.title}</a>
                            </li>
                        )

                    })
                }
            </ul>


        </nav>
    )
}
