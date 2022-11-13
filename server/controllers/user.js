import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import tryCatch from "./utils/tryCatch.js";

export const register = tryCatch(async (req, res) => {
  const { firstName,lastName, email, password } = req.body;
  if (password.length < 6)
    return res.status(400).json({
      success: false,
      message: "Password must be 6 characters or more",
    });
  const emailLowerCase = email.toLowerCase();
  const existedUser = await User.findOne({ email: emailLowerCase });
  if (existedUser)
    return res
      .status(400)
      .json({ success: false, message: "User already exists!" });
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    firstName,
    lastName,
    email: emailLowerCase,
    password: hashedPassword,
  });
  const { _id: id, photoURL } = user;
  const token = jwt.sign({ id, firstName,lastName, photoURL }, process.env.JWT_SECRET, {
    expiresIn: "8h",
  });
  res.status(201).json({
    success: true,
    result: { id, firstName, lastName, email: user.email, photoURL, token },
  });
});

export const login = tryCatch(async (req, res) => {
  const { email, password } = req.body;

  const emailLowerCase = email.toLowerCase();
  const existedUser = await User.findOne({ email: emailLowerCase });
  if (!existedUser)
    return res
      .status(404)
      .json({ success: false, message: "User does not exist!" });
  const correctPassword = await bcrypt.compare(password, existedUser.password);
  if (!correctPassword)
    return res
      .status(400)
      .json({ success: false, message: "Invalid credentials" });

  const { _id: id, firstName,lastName, photoURL } = existedUser;

  const token = jwt.sign({ id, firstName, lastName, photoURL },
    process.env.JWT_SECRET,
    {
      expiresIn: "8h",
    }
  );
  res.status(200).json({
    success: true,
    result: { id, firstName, lastName, email: emailLowerCase, photoURL, token },
  });
});

export const updateProfile = tryCatch(async (req, res) => {
  const fields = req.body?.photoURL
    ? {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        photoURL: req.body.photoURL,
      }
    : { firstName: req.body.firstName, lastName: req.body.lastName };

  const updatedUser = await User.findByIdAndUpdate(req.user.id, fields, {
    new: true,
  });
  const { _id: id, firstName,lastName, photoURL } = updatedUser;

  const token = jwt.sign({ id, firstName,lastName, photoURL }, process.env.JWT_SECRET, {
    expiresIn: "8h",
  });
  res.status(200).json({ success: true, result: { firstName,lastName, photoURL, token } });
});

export const getUsers = tryCatch(async (req, res) => {
  const users = await User.find().sort({ _id: -1 });
  res.status(200).json({ success: true, result: users });
});

//delete a user from the database by its ID
export const deleteUser = tryCatch(async (req, res) => {
  const { _id } = await User.findByIdAndDelete(req.params.userId);
  res.status(200).json({ success: true, result: { _id } });
});