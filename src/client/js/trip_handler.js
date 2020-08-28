import { savedTripItem } from "./components";

const storeTrip = async (event) => {
  event.preventDefault();

  // Getting required fields
  const result_image = document
    .getElementById("result_image")
    .getAttribute("src");
  const result_place = document.getElementById("result_place").innerHTML;
  const result_date = document.getElementById("result_date").innerHTML;
  const result_temp_high = document.getElementById("result_temp_high")
    .innerHTML;
  const result_temp_low = document.getElementById("result_temp_low").innerHTML;

  let data = {
    place: result_place,
    date: result_date,
    high_temp: result_temp_high,
    low_temp: result_temp_low,
    image: result_image,
  };

  console.log(data);

  await fetch("/store", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  alert("Saved Your Trip Successfully");
};

const deleteTrip = async (id) => {
  await fetch("/delete", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  alert("Trip Deleted Successfully");

  await getTripsfromSever();
};

const getTripsfromSever = async (event) => {
  let response = await fetch("/list", {
    mode: "cors",
  });

  response = await response.json();
  console.log(response);

  let tripData = "";

  for (const eachTrip in response) {
    const tripItemData = response[eachTrip];
    tripData += savedTripItem(tripItemData);
  }

  document.getElementById("trips").innerHTML = tripData;
};

const getTripsFromAPI = async (place, date) => {
  let response = await fetch("/getTrip", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ place, date }),
  });

  response = await response.json();

  return response;
};

export { storeTrip, deleteTrip, getTripsFromAPI, getTripsfromSever };
