import jwt from "jsonwebtoken";

export const createToken = (user) =>{
  return jwt.sign({ id: user._id , email: user.email}, process.env.JWT_SECRET, {
    expiresIn: 3600, 
  });
}

export const verifyToken = (token) =>{
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
}

