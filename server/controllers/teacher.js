import Teacher from "../models/Teacher.js";
import tryCatch from "../controllers/utils/tryCatch.js";

export const createTeacher = tryCatch(async (req, res) => {
  const { fullName, address, contact } = req.body;
  const newTeacher = new Teacher({
    ...req.body,
    fullName,
    address,
    contact,
  });

  await newTeacher.save();
  res.status(200).json({ success: true, result: newTeacher });
});

// get all teachers
export const getTeachers = tryCatch(async (req, res) => {
  const teachers = await Teacher.find().sort({ _id: -1 });
  res.status(200).json({ success: true, result: teachers });
});

// delete a teacher
export const deleteTeacher = tryCatch(async (req, res) => {
  const { _id } = await Teacher.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true, result: { _id } });
});

// update a teacher

export const updateTeacher = tryCatch(async (req, res) => {
  const updateTeacher = await Teacher.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({ success: true, result: updateTeacher });
});
