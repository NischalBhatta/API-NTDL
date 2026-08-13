import express from "express";

const router = express.Router();

import {
  deleteTask,
  getTask,
  insertTask,
  updateTask,
} from "../models/taskModels/taskSchema.js";

// router.all("/", (req, res, next) => {
//   // res.json({
//   //   status: "success",
//   //   message: "Server running",
//   // });
//   // next();
// });

// selecting the database tables

router.post("/", async (req, res, next) => {
  try {
    //inser task
    const result = await insertTask(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: "New task has been added successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.get("/", async (req, res, next) => {
  // do your code
  // db.c.find()
  const tasks = await getTask();

  res.json({
    status: "success",
    message: "Here are the task list",
    tasks,
  });
});

router.patch("/", async (req, res, next) => {
  // do your code
  const { _id, ...rest } = req.body;
  console.log(req.body);
  const result = await updateTask(_id, rest);

  res.json({
    status: "success",
    message: "Your task has been updated",
    result,
  });
});

router.delete("/:_id", async (req, res, next) => {
  // do your code

  const { _id } = req.params;

  const result = await deleteTaskk(_id);
  res.json({
    status: "success",
    message: "Your task has been deleted",
    result,
  });
});

export default router;
