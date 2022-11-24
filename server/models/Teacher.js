import mongoose from "mongoose";

const teacherSchema = mongoose.Schema(
  {
    fullName: { type: String, max: 300, required: true },
    address: { type: String, max: 200, required: true },
    contact: { type: String, required: true },
    email: {
      type: String,
      min: 5,
      max: 50,
      required: true,
      unique: true,
      trim: true,
    },
    qualification: { type: String},
    achievements: { type: String},
    subjects: { type: String, required: true },
    birth: { type: String, required: true },
  },
  { timestamps: true }
);

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
