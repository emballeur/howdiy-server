const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const recipeSchema = new Schema(
  {
    funName: String,
    category: {
      type: String,
      enum: ["facecare", "bodycare", "housecare", "play", "food", "drink"],
    },
    isGiftable: {
      type: Boolean,
    },
    descriptiveName: String, // max 6 words in form?
    ingredients: [
      {
        name: String,
        quantity: String,
      },
    ],
    preparation: [String],
    productImg: String,
    gallery: [String],
    timeOfPreparation: Number, // specify mins in form
    costRating: Number, // TIP on how to calculate in form
    difficultyRating: Number, // TIP on how to calculate in form
    createdBy: String,
    isOwner: {
      type: Boolean,
      default: false,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
