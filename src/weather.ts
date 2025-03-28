import axios from "axios";

const BASE_URL = "";
const API_KEY = "";

async function getWeather(city: string) {
    try {
        const response = await axios.get(`${BASE_URL}?q=${city}&appid-${API_KEY}&units=metric`);
        const data = response.data;
    } catch (error) {
        console.error("Error fetching weather data", error);
    }
}


getWeather("Dublin");