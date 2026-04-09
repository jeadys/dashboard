import { type WeatherData } from './types';

export const getWeather = async (city: string): Promise<WeatherData> => {
    const response = await fetch(`http://localhost:3000/weather/${city}`);

    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }

    const data: WeatherData = await response.json();
    return data;
};