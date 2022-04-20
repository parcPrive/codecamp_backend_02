import mongoose from 'mongoose'

const starbucksSchema = new mongoose.Schema({
  menu: String,
  img: String
})

export const Starbucks = mongoose.model("Starbucks", starbucksSchema)