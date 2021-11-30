import { loginService, registerUserService } from "./services";

export let register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // now we have the data from the body of the form
    // we can now register our user
    let isRegistered = await registerUserService({ email, password });
    console.log(isRegistered);
    if (!isRegistered) {
      return res.status(400).json({ msg: "User already registered" });
    } else {
      return res.status(201).json({ msg: "User registered" });
    }
  } catch (error) {
    next(error);
  }
};

export let login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let isLogin = await loginService({ email, password });
    console.log(isLogin);
    if (!isLogin) {
      return res.status(400).json({ msg: "Wrong password" });
    } else {
      res.redirect("/");
    }
  } catch (error) {
    next(error);
  }
};
