import express from "express";
const router = express.Router();

// router.all("/", (req, res, next) => {
//   // res.json({
//   //   status: "success",
//   //   message: "Server running",
//   // });
//   // next();
// });

let fakeDB = [
  {
    id: 1,
    task: "Coding",
    hr: 20,
    type: "entry",
  },
  {
    id: 2,
    task: "Coding",
    hr: 20,
    type: "entry",
  },
  {
    id: 3,
    task: "Cooking",
    hr: 20,
    type: "entry",
  },
];

router.post("/", (req, res, next) => {
  fakeDB.push(req.body);
  console.log(fakeDB);
  res.json({
    status: "success",
    message: "New Task Added",
  });
});
router.get("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "Here are the task List",
    task: fakeDB,
  });
});
router.patch("/", (req, res, next) => {
  const { id, type } = req.body;

  fakeDB.forEach((item) => {
    if (item.id === id) {
      item.type = type;
    }
  });
  res.json({
    status: "success",
    message: "Your task has been updated",
    task: fakeDB,
  });
});
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  fakeDB = fakeDB.filter((item) => item.id !== +id);
  console.log(id);
  res.json({
    status: "success",
    message: "Your task has been deleted",
  });
});

export default router;
