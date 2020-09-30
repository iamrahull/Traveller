const trips = {};

const storeTrip = async (req, res) => {
  const { place, date, high_temp, low_temp, image } = req.body;
  const tripData = {
    place,
    date,
    high_temp,
    low_temp,
    image,
  };

  const currentTripId = create_UUID();
  tripData["tripId"] = currentTripId;
  trips[currentTripId] = tripData;

  console.log("Pushed trip");

  res.send("Success");
};

const listTrips = async (req, res) => {
  res.send(JSON.stringify(trips));
};

const deleteTrip = (req, res) => {
  const { id } = req.body;

  delete trips[id];

  res.send("Success");
};

const create_UUID = () => {
  // returns a unique id
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
    c
  ) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

exports.storeTrip = storeTrip;
exports.listTrips = listTrips;
exports.deleteTrip = deleteTrip;
