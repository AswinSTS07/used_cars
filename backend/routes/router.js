const express = require("express");
const Car = require("../models/catModel");
const cars = require("../data");

const router = express.Router();

router.get("/car", async (req, res) => {
  try {
    await Car.create(cars);
  } catch (error) {
    res.send(error);
  }
});

router.get("/all-cars", async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    const searchFilter = search
      ? {
          $or: [
            { make: { $regex: search, $options: "i" } },
            { model: { $regex: search, $options: "i" } },
            { year: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    const cars = await Car.find(searchFilter)
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);

    const totalCars = await Car.countDocuments(searchFilter);

    res.send({
      page: pageNumber,
      limit: limitNumber,
      totalCars,
      totalPages: Math.ceil(totalCars / limitNumber),
      cars,
    });
  } catch (error) {
    res.send({ error });
  }
});

module.exports = router;
