import axios from "axios";

const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

export const getWeather = async (city) => {
  try {
    const response = await axios.get(`${WEATHER_API_URL}&q=${city}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
