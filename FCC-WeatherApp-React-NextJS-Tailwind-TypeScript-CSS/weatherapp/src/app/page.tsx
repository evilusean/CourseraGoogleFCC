'use client'

import Image from "next/image";
import Navbar from "./components/Navbar";
import { useQuery } from "react-query";
import axios from "axios";
import { format, parseISO } from "date-fns";
import Container from "./components/container";
import { convertKelvinToCelsius } from "./utils/convertKelvinToCelsius";

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
  

    const firstData = data?.list[0];
    console.log("data", data);

    if (isLoading) return <div className="flex items-center min-h-screen justify-center">
      <p className="animate-bounce">Loading...</p>
    </div>;
  

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
      <main className="px-3 max-w-7x1 mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
        {/* TODAYS DATA */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="flex gap-1 text-2x1 items-end">
              <p>{format(parseISO(firstData?.dt_txt ?? ""), "EEEE")}</p>
              <p className="text-lg">
                ({ format(parseISO(firstData?.dt_txt ?? ''), "dd.MM.yyyy" )})
              </p>
            </h2>
            <Container className="gap-10 px-6 items-center">
              {/* TEMPERATURE */}
              <div className="flex flex-col px-4">
                <span className="text-5x1">
                  {convertKelvinToCelsius(firstData?.main.temp ?? 296.15)}°
                </span>
                <p className="text-xs space-x-1 whitespace-nowrap">
                  <span> Feels Like</span>
                  <span>
                    {convertKelvinToCelsius(firstData?.main.feels_like ?? 296.15)}°
                  </span>
                </p>
                <p className="text-xs space-x-2">
                  <span>
                    {" "}
                    {convertKelvinToCelsius(firstData?.main.temp_min ?? 296.15)}°↓
                  </span>
                  <span>
                    {" "}
                    {convertKelvinToCelsius(firstData?.main.temp_max ?? 296.15)}°↑
                  </span>
                </p>
              </div>
              {/* TIME AND WEATHER ICON */}
              <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3">

                {data?.list.map(() => (
                  <div 
                    key={i}
                    className="flex flex-col justify-between gap-2 items-center text-xs font-semibold">
                      <p className="whitespace-nowrap">
                        {format(parseISO(firstData?.dt_txt ?? ""), "hh:mm a")}
                      </p>
                      <p>
                        {convertKelvinToCelsius(firstData?.main.temp ?? 296.15)}°
                      </p>
                    </div>
                ))}
              </div>
            </Container>
          </div>

        </section>
        {/* 7 DAY FORECAST */}
        <section>
          
        </section>
      </main>
    </div>
  );
}

