import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email:String,
  name:String,
  phone:String,
  personal:String,
  prefer:String,
  pwd:String,
  og: {
    title:String,
    url:String,
    image:String
  }
})

export const User = mongoose.model("User", userSchema)
