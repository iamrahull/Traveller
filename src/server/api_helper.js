// Secure storage where the API keys are stored
const secureStorage = require("dotenv");
secureStorage.config();

const { handleAPIRequest } = require("./request_handler");

const weatherBaseURL = "https://api.weatherbit.io/v2.0/forecast/daily?";
const geonameBaseURL = "http://api.geonames.org/geocodeJSON?q=";
const pixabayBaseURL = "https://pixabay.com/api/";

const fetchGeoLocation = async (place) => {
 // env loc const API_KEY = process.env.GEONAME_API_KEY;
  const API_KEY ="cesur";
  const url = `${geonameBaseURL}${place}&username=${API_KEY}`;
  const result = await handleAPIRequest(url);

  return result.geoCoderResult;
};

const fetchWeather = async (lat, lon, days) => {
 // env loc const API_KEY = process.env.WEATHER_API_KEY;
  const API_KEY = "9290d95703a84037a6ab7b1886d095d8";
  const url = `${weatherBaseURL}lat=${lat}&lon=${lon}&days=${days}&key=${API_KEY}`;
  const result = await handleAPIRequest(url);

  return result.data.slice(-1)[0];
};

const fetchImage = async (place) => {
  //env loc const API_KEY = process.env.PIXABAY_API_KEY;
  const API_KEY = "17711924-c7e31f3b452ce1df400b210e4";
  const url = `${pixabayBaseURL}?key=${API_KEY}&q=${place}&per_page=3&page=1`;
  const result = await handleAPIRequest(url);

  return result.hits.slice(-1)[0];
};

const generateDuration = (date) => {
  const presentDate = Date.now();

  const futureDate = Date.parse(date);

  let timeDifference = Math.abs(futureDate - presentDate);

  timeDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  if (timeDifference > 16) {
    return 16;
  }

  return timeDifference;
};

exports.generateDuration = generateDuration;
exports.fetchGeoLocation = fetchGeoLocation;
exports.fetchImage = fetchImage;
exports.fetchWeather = fetchWeather;
