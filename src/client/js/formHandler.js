import { tripItem } from "./components";
import { getTripsFromAPI } from "./trip_handler";

const handleSubmit = async (event) => {
  event.preventDefault();

  // Getting place and date from [index.html]
  const place = document.getElementById("place").value;
  const date = document.getElementById("date").value;

  const submit = document.getElementById("submit");
  const trips = document.getElementById("trips");

  if (!place || !date) {
    return; // If its empty return null
  }

  // Indicating status and disabling button
  submit.innerHTML = "Please wait..";
  submit.style = "cursor: progress;";
  submit.disabled = true;

  const response = await getTripsFromAPI(place, date);

  trips.innerHTML = tripItem(response);

  // Indicating status and enabling button
  submit.innerHTML = "Submit";
  submit.style = "cursor: pointer;";
  submit.disabled = false;
};

export { handleSubmit };
