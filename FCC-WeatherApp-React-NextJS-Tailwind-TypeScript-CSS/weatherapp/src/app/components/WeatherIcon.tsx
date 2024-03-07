import Image from 'next/image';
import React from 'react';
import { cn } from '../utils/cn';

type Props = {}

export default function WeatherIcon(props: React.HTMLProps<HTMLDivElement> & {iconName: string}) {
  return (
    <div {...props}className={cn("relative h-20 w-20")}>
        <Image 
        height={100}
        width={100}
        alt="weather-icon"
        className="absolute h-full w-full"
        src={`https://openweathermap.org/img/wn/${props.iconName}@4x.png`} />
    </div>
  )
}