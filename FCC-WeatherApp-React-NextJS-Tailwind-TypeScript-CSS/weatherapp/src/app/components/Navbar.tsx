'use client'

import React, { useState } from 'react'
import { MdWbSunny } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import SearchBox from './SearchBox';
import axios from 'axios';


type Props = {}

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

export default function Navbar({}: Props) {
    const [city, setCity] = useState("");
    const [error, setError] = useState("");

    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSiggestions, setShowSuggestions] = useState(false);

    async function handInputChange(value: string) {
        setCity(value);
        if (value.length >= 3) {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${API_KEY}&cnt=56`
                );
                const suggestions = response.data.list.map((item:any)=>item.name); //will store all suggestions in a variable
                setSuggestions(suggestions);
                setError('');
                setShowSuggestions(true);
            } catch (error) {
                setSuggestions([])
                setShowSuggestions(false);
            }   
        }
        else {
            setSuggestions([])
            setShowSuggestions(false);
        }
    }

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
                    <p className="text-slate-900/80 text-sm">  Failed State canada  </p>
                    <div>
                        <SearchBox 
                            value={city}
                            //onSubmit={}
                            onChange = {(e)=>handInputChange(e.target.value)}
                        />
                    </div>
                </section>
            </div>
        </nav>
    )
}

function SuggestionBox(){
    return <ul className="mb-4"><li></li></ul>
}