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
    result?._id
      ? res.json({
          status: "success",
          message: "New task has been added successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to add new task",
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

  return res.json({
    status: "success",
    message: "Here are the task list",
    tasks,
  });
});

router.patch("/", async (req, res, next) => {
  // do your code
  try {
    const { _id, ...rest } = req.body;
    // return console.log(req.body);
    const result = await updateTask(_id, rest);

    result?._id
      ? res.json({
          status: "success",
          message: "Your task has been updated",
          result,
        })
      : res.json({
          status: "error",
          message: "Not able to update task, please try again",
          result,
        });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/", async (req, res, next) => {
  // do your code

  try {
    console.log(req.body);
    const result = await deleteTask(req.body);
    console.log(result.deletedCount);
    result?.deletedCount > 0
      ? res.json({
          status: "success",
          message: "Your task has been deleted",
        })
      : res.json({
          status: "error",
          message: "Unable to delete task, please try again later",
        });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
