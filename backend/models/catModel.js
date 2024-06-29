const mongoose = require("mongoose");
const carSchema = new mongoose.Schema(
  {
    imageUri: { type: String, required: true },
    additionalImages: [],
    title: { type: String },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    year: { type: Number, required: true },
    mileage: { type: String, required: true },
    fuelType: { type: String, required: true },
    transmission: { type: String, required: true },
    location: { type: String, required: true },
    seller: { type: String, required: true },
    contact: { type: String, required: true },
    kilometer: { type: Number, required: true },
    color: { type: String, required: true },
    vin: { type: String, required: true },
    postedDate: { type: String, required: true },
    insurance: {},
    rc: {},
    owner: {},
    serviceHistory: [],
    ownerType: { type: String, required: true },
    inspection: {},
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model('Car', carSchema)
module.exports = Car