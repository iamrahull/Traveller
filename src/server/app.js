const {
  fetchGeoLocation,
  fetchImage,
  fetchWeather,
  generateDuration,
} = require("./api_helper");

const getTravelDataFromAPI = async (req, res) => {
  console.log("API Requested");

  const { place, date } = req.body;

  const image_result = await fetchImage(place);

  const result = await fetchGeoLocation(place);

  const { lat, lng } = result;

  const days = generateDuration(date);

  const weatherResult = await fetchWeather(lat, lng, days);

  const { high_temp, low_temp } = weatherResult;
  const { largeImageURL } = image_result;

  const tripData = {
    place,
    date,
    high_temp,
    low_temp,
    image: largeImageURL,
  };

  res.send(JSON.stringify(tripData));
};

exports.getTravelDataFromAPI = getTravelDataFromAPI;
