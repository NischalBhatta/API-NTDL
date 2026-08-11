import express from "express";
import mongoose from "mongoose";
const router = express.Router();

// router.all("/", (req, res, next) => {
//   // res.json({
//   //   status: "success",
//   //   message: "Server running",
//   // });
//   // next();
// });

// selecting the database tables
const taskSchema = new mongoose.Schema({},{statics=false});
const taskCollection = mongoose.model("students",taskSchema);

router.post("/", async(req, res, next) => {

  //inserting the task
  const result = await taskCollection(req.body).save()
  console.log(result) 

  res.json({
    status: "success",
    message: "New task succesfully added"
  })
});

router.get("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "Here are the task List",
  });
});
router.patch("/", (req, res, next) => {
  const { id, type } = req.body;

  
  res.json({
    status: "success",
    message: "Your task has been updated",
  });
});
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  console.log(id);
  res.json({
    status: "success",
    message: "Your task has been deleted",
  });
});

export default router;
