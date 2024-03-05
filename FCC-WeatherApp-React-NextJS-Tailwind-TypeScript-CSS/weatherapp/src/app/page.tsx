import Image from "next/image";
import Navbar from "./components/Navbar";

// Below Boilerplate for API Key:
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// Below Working Copy for API Key NEXT_PUBLIC_API_KEY found in .env.local file:
// http://api.openweathermap.org/geo/1.0/direct?q=Tokyo&appid={process.env.NEXT_PUBLIC_API_KEY}
// Above did not work, had to change the URL for the API key to pull data from the forecast endpoint:
// http://api.openweathermap.org/data/2.5/forecast?q=Tokyo,JP&appid={process.env.NEXT_PUBLIC_API_KEY}&cnt=56
// var format = require('date-format');
// format('hh:mm:ss.SSS', new Date()); // just the time
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
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
    </div>
  );
}
