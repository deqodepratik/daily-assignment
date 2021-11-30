import express from "express";
import { login, register } from "./controller";
const router = express.Router();

router.get("/", (req, res) => {
  // this will fetch all the user's email and will show it here in a table
});

// for loading the login page
router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

// for loading the login page
router.get("/register", (req, res) => {
  res.render("signup", { title: "Register" });
});

// registering new user
router.post("/register", register);

// login user here
router.post("/login", login);

export default router;
