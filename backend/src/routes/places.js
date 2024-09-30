/* eslint-disable consistent-return */
const express = require("express");
const axios = require("axios");
const https = require('https');
const router = express.Router();

/* Get all employees */
router.get("/", async (req, res, next) => {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });
  const options = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    headers: {
      "x-rapidapi-key": "API_KEY", // get your key from https://rapidapi.com/wirefreethought/api/geodb-cities
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options, { httpsAgent });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
