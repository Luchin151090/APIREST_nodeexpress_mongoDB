import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type : String,
        required : true
    },
    apellido:{
        type : String,
        required : true
    },
    edad:{
        type : Number,
        required : true
    }
});

export const modelouser = mongoose.model('USER',userSchema);

