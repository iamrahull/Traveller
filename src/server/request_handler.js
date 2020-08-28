const fetch = require("node-fetch");

const handleAPIRequest = async (url) => {
  console.log(`Fetching ${url}`);

  let response = await fetch(url);

  response = await response.json();

  console.log(response);

  return response;
};

exports.handleAPIRequest = handleAPIRequest;
