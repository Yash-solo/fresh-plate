import mongoose ,{Schema} from 'mongoose';

const recipeSchema = new Schema({
    id:{
        type:Number,
        unique: true,
    },
    Name: {
        type: String,
        required: true,
        lowercase: true,
        minlength:2,
    },
    method: {
        type: String,
        required:[true,"you can't pass anything without recipe's method "],
        trim: true,
        minlength:200,
    },
    Pic: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    category:{
        type: String,
        required: true,
        unique: false,
    }
});

export const Recipe = mongoose.model("Recipe",recipeSchema);