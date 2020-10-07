const tripItem = (result) => {
  return `
    <div class="card_container">
      <img src="${result.image}" alt="card_image" id="result_image" />
      <div class="card_content">
        <span>
          Your trip to <strong id="result_place">${result.place}</strong>
        </span>
        <br />
        <span id="result_date">Departing: ${result.date}</span>
        <br />
        <br />
        <span>⛅ Typical Weather on Visiting day:</span>
        <br />
        <span>
          High: <span id="result_temp_high">${result.high_temp}</span> | Low:
          <span id="result_temp_low">${result.low_temp}</span>
        </span>
        <br />
        <br />
        <button class="primary_cta" onclick="return Capstone.storeTrip(event)">
          Save Trip
        </button>
      </div>
    </div>
    `;
};

const savedTripItem = (result) => {
  return `
    <div class="card_container">
      <img src="${result.image}" alt="card_image" id="result_image" />
      <div class="card_content">
        <span>
          Your trip to <strong id="result_place">${result.place}</strong>
        </span>
        <br />
        <span id="result_date">Departing: ${result.date}</span>
        <br />
        <br />
        <span>⛅ Typical Weather for then:</span>
        <br />
        <span>
          High: <span id="result_temp_high">${result.high_temp}</span> | Low:
          <span id="result_temp_low">${result.low_temp}</span>
        </span>
        <br />
        <br />
        <button class="primary_cta" id = "remove_trip" onclick = "Capstone.deleteTrip('${result.tripId}');">
          Remove Trip
        </button>
      </div>
    </div>
    `;
};

export { tripItem, savedTripItem };
