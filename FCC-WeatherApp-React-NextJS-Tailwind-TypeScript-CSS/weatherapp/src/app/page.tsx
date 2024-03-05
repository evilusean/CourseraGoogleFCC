'use client'

import Image from "next/image";
import Navbar from "./components/Navbar";
import { useQuery } from "react-query";
import axios from "axios";

// Below Boilerplate for API Key:
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// Below Working Copy for API Key NEXT_PUBLIC_API_KEY found in .env.local file:
// http://api.openweathermap.org/geo/1.0/direct?q=Tokyo&appid={process.env.NEXT_PUBLIC_API_KEY}
// Above did not work, had to change the URL for the API key to pull data from the forecast endpoint:
// http://api.openweathermap.org/data/2.5/forecast?q=Tokyo,JP&appid={process.env.NEXT_PUBLIC_API_KEY}&cnt=56
// var format = require('date-format');
// format ('hh:mm:ss.SSS', new Date()); // just the time
interface WeatherDetail {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherDetail[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export default function Home() {
    const { isLoading, error, data } = useQuery<WeatherData>(
      'repoData', 
      async () =>
    {
      const {data} = await axios.get(
      'http://api.openweathermap.org/data/2.5/forecast?q=Tokyo,JP&appid=${process.env.NEXT_PUBLIC_API_KEY}=56');
      return data;
    }
      //OLD METHOD: if you are using axios, you don't need to use fetch, or convert it into a json, with axios it will do it automatically
      //fetch('http://api.openweathermap.org/data/2.5/forecast?q=Tokyo,JP&appid=${process.env.NEXT_PUBLIC_API_KEY}&cnt=56').then(res =>
      //  res.json()
      //)
    );
  
    console.log("data", data?.city);

    if (isLoading) return <div className="flex items-center min-h-screen justify-center">
      <p className="animate-bounce">Loading...</p>
    </div>;
  

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
      <main className="px-3 max-w-7x1 mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
        {/* TODAYS DATA */}
        <section>
          <div>
            <h2 className="flex gap-1 text-2x1 items-end">
              <p></p>
              
            </h2>
            <div></div>
          </div>

        </section>
        {/* 7 DAY FORECAST */}
        <section>
          
        </section>
      </main>
    </div>
  );
}

