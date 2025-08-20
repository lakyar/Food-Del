import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:67896789@cluster0.ibp5ucj.mongodb.net/food-del').then(()=>console.log("DB connected"));
}