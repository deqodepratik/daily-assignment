import flash from "connect-flash";
import express from "express";
import Routes from "./routes";

const app = express();

// for parsing application/json
app.use(express.json());

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true }));

// serving static files here
app.use(express.static("public"));

// setting the views as ejs
app.set("view engine", "ejs");

// setting up flash message here
app.use(flash());

// routes
app.use("/", Routes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
