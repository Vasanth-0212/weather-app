"use client";
import React, { useEffect, useState } from 'react';

const Weather = () => {


    const [data, setData] = useState([]);
    const [city, setCity] = useState('Suryapet');

    const fetchData = async () => {
        if(city === "") {
            return;
        };
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=420dad522eb1e6f9f4f64eb0f934ea90&units=metric`
        );
        const data = await response.json();
        console.log(data);
        setData(data);
        setCity("");
    };

    useEffect(() => {
        fetchData();
    }, []);

    
    return (
        <div className='relative h-screen w-screen p-2 bg-gradient-to-b from-blue-100 to-blue-400'>
            <h1 className='absolute font-extrabold top-[20px] left-[20%] text-white text-6xl'>Know Weather In Your Location</h1>
            <div className='absolute top-[150px] left-[44%] flex justify-center space-x-3'>
                <input type="text"
                    placeholder='Enter City Name'
                    value={city}
                    className="h-14 w-36 rounded-lg border border-white p-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    className="h-14 w-36 rounded-full font-serif font-semibold text-lg text-white border border-white p-1"
                    onClick={fetchData}>
                    Search</button>
            </div>
            <div className='absolute top-[230px] left-[35%] h-auto w-1/3 bg-white rounded-lg p-3 bg-gradient-to-b from-blue-100 to-blue-400 shadow-2xl'>
                <div className='flex justify-between'>
                    <div className='space-y-2'>
                        <h1 className='text-5xl text-white font-sans font-bold'>{data.name}</h1>
                        <h1 className='text-2xl text-white font-serif font-semibold'>{data.weather ? data.weather[0].main : ""}</h1>
                        <h1 className='text-1xl text-white font-sans font-medium'>{data.main ? "Feels like - " + data.main.feels_like + "°C" : ""}</h1>
                    </div>
                    <div>
                        <h1 className='text-6xl text-white font-normal'>{data.main ? data.main.temp + "°C" : ""}</h1>
                    </div>
                </div>
                <div className='flex  space-x-2 mt-2'>
                    <div className='flex items-center justify-center h-16 w-1/2 border shadow-2xl rounded-lg bg-transparent'>
                        <h1 className='text-white font-bold text-1xl'>{data.main ? "Pressue - " + data.main.pressure + "Pa" : ""}</h1>
                    </div>
                    <div className='flex items-center justify-center h-16 w-1/2 border shadow-2xl rounded-lg bg-transparent'>
                        <h1 className='text-white font-bold text-1xl'>{data.main ? "Humidity - " + data.main.humidity + "" : ""}</h1>
                    </div>
                </div>
                <div className='flex  space-x-2 mt-2'>
                    <div className='flex items-center justify-center h-16 w-1/2 border shadow-2xl rounded-lg bg-transparent'>
                        <h1 className='text-white font-bold text-1xl'>{data.main ? "Max Temp - " + data.main.temp_max + "°C" : ""}</h1>
                    </div>
                    <div className='flex items-center justify-center h-16 w-1/2 border shadow-2xl rounded-lg bg-transparent'>
                        <h1 className='text-white font-bold text-1xl'>{data.main ? "Min Temp - " + data.main.temp_min + "°C" : ""}</h1>
                    </div>
                </div>
                <div className='flex  space-x-2 mt-2'>
                    <div className='flex items-center justify-center h-16 w-1/2 border shadow-2xl rounded-lg bg-transparent'>
                        <h1 className='text-white font-bold text-1xl'>{data.wind ? "Wind Speed - " + data.wind.speed + " m/s" : ""}</h1>
                    </div>
                    
                </div>


            </div>
        </div>
    )
}

export default Weather;