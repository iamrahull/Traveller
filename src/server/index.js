// For setting up server
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { listTrips, storeTrip, deleteTrip } = require("./trips_helper");
const { getTravelDataFromAPI } = require("./app");

// For Starting the server
const PORT = 6580;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("dist"));

app.get("/", (req, res) => res.sendFile("index.html"));

app.post("/store", storeTrip);

app.get("/list", listTrips);

app.post("/delete", deleteTrip);

app.post("/getTrip", getTravelDataFromAPI);

app.listen(PORT, () => console.log(`Server running at PORT : ${PORT}!`));
