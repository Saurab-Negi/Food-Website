import mongoose from "mongoose";

export const connectDB= async () =>{
    await mongoose.connect('mongodb+srv://saurabnegi17:2486@cluster0.lpsndbi.mongodb.net/food')
    .then(() =>{
        console.log("DB connected");
    })
}