import USER from "../models/user.js";
import { createToken } from "../service/auth.js";

export const handleSignup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("All fields are required");
  }

  try {
    //user already exists
    const existingUser = await USER.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

   
    const newUser = new USER({ name, email, password });
    await newUser.save();

    
    return res.status(201).send({ message: "Signup successful" });
  } catch (error) {
    console.error("Signup error:", error); 
    res.status(500).send("Internal Server Error");
  }
};


export const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }
  try {
   
    const user = await USER.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).send("Invalid email or password");
    }

    const token = createToken(user);
    res.cookie("Atoken", token, { httpOnly: true });
    return res.redirect("/products");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const handleLogout = (req, res) => {
  res.clearCookie("Atoken").send("Logged out successfully");
};

export const getAllUsers = async (req, res) => {
  const allUsers = await USER.find({});
  res.status(200).json(allUsers);
};

export const getAuthUserId = async (req, res) => {
  const user = req.user;
  res.status(200).json(user);


}
