import express from 'express';
import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://Madhusudan:Madh62@#@mern-estate.n9r2fax.mongodb.net/?retryWrites=true&w=majority&appName=mern-estate")




const app = express();


app.listen(3000, () => {
    console.log('Server is running on pat 3000!');
}
);