export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
//enter rapi api key in the below "X-RapidAPI-Key"
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
// Enter your api key below (from openweather api)
export const WEATHER_API_KEY = ""; 