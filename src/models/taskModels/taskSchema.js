import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    hr: {
      type: Number,
      required: true,
      min: 1,
      max: [100, "Are you sure boss, it seems too much hours"],
    },
    type: {
      type: String,
      default: "entry",
      enum: ["entry", "bad"],
    },
  },
  {
    timestamps: true,
  },

  { strict: false },
);
const taskCollection = mongoose.model("Task", taskSchema);

export const insertTask = (taskObj) => {
  return taskCollection(req.body).save();
};
export const getTask = () => {
  return taskCollection.find();
};
export const updateTask = (_id, rest) => {
  return taskCollection.findByIdAndUpdate(_id, rest, {
    new: true,
  });
};
export const deleteTask = (_id) => {
  return taskCollection.findByIdAndDelete(_id);
};
