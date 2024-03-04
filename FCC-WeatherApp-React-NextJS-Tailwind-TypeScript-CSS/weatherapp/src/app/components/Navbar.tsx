import React from 'react'
import { MdWbSunny } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";


type Props = {}

export default function Navbar({}: Props) {
    return (
        <nav className='shadow-sm sticky top-0 left-0 z-50 bg-white'>
            <div className="h-[80px] w-full flex justify-between items-center max-w-7x1 px-3 mx-auto">
                <div className="flex items-center justify-center gap-2">
                    <h2 className="text-gray-500 text-3x1">Weather</h2>
                    <MdWbSunny className="text-3x1 mt-1 text-yellow-500"/>
                </div>
                <section className="flex gap-2 items-center">
                    <MdMyLocation className='text-3x1 text-gray-400 hover:opacity-80 cursor-pointer' />
                    <MdOutlineLocationOn className='text-3x1 text-gray-400 hover:opacity-80 cursor-pointer' />
                </section>
            </div>
        </nav>
    )
}