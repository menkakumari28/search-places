const express = require("express");
const axios = require("axios");
const https = require('https');
const router = express.Router();

router.get("/", async (req, res, next) => {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });
  const options = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    headers: {
      "x-rapidapi-key": "77a86388a1mshdf41c2fc6ae6f08p17d2dejsne0b546c1db8a", // get your key from https://rapidapi.com/wirefreethought/api/geodb-cities
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options, { httpsAgent });
    res.send(response.data)
  } catch (error) {
    res.send(error?.msg)
  }
});

module.exports = router;
