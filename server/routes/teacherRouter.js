import { Router } from "express";
import {
  updateTeacher,
  createTeacher,
  deleteTeacher,
  getTeachers,
} from "../controllers/teacher.js";
import auth from "../middleware/auth.js";

const teacherRouter = Router();

teacherRouter.post("/", auth, createTeacher);
teacherRouter.get("/", auth, getTeachers);
teacherRouter.delete("/:id", auth, deleteTeacher);
teacherRouter.patch("/:id", auth, updateTeacher);

export default teacherRouter;
