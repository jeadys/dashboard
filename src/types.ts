// types/weather.ts
export interface Forecast {
    day: string;
    temperature: string;
    wind: string;
}

export interface WeatherData {
    temperature: string;
    wind: string;
    description: string;
    forecast: Forecast[];
}