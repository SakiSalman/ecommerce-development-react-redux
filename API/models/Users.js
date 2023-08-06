import mongoose from "mongoose";

/**
 * User Schema Design
 */
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    password : {
      type: String,
      required: true,
      trim: true,
    },
    role : {
      type : String,
      trim : true,
      default : 'author'
    },
    avatar : {
      type : String,
      default : null

    },
    order: {
      type: Array,
      default : []
    },
    isAdmin : {
      type : Boolean,
      default : false
    },
    active: {
      type: Boolean,
      default : false
    },
    access_token: {
      type: String,
      trim : true
    },
  },
  {
    timestamps: true,
  }
);

// export model
export default mongoose.model("User", userSchema);