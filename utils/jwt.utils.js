import jwt from "jsonwebtoken";

export const generateToken = (clientId) => {
  return jwt.sign({ _id: clientId }, process.env.TOKEN_SECRET, {
    expiresIn: "1h",
  });
};