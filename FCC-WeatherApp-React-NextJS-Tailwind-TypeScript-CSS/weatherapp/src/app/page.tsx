import Image from "next/image";
import Navbar from "./components/Navbar";

// Below Boilerplate for API Key:
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// Below Working Copy for API Key NEXT_PUBLIC_API_KEY found in .env.local file:
// http://api.openweathermap.org/geo/1.0/direct?q=Tokyo&appid={process.env.NEXT_PUBLIC_API_KEY}

export default function Home() {
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
    </div>
  );
}
