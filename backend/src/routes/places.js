const express = require("express");
const axios = require("axios");
const https = require("https");
const router = express.Router();

router.get("/all", async (req, res, next) => {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });
  const options = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options, { httpsAgent });
    res.json({
      status: 200,
      data: response.data,
    });
  } catch (error) {
    res.json({
      status: 500,
      data: error?.message,
    });
  }
});

module.exports = router;
