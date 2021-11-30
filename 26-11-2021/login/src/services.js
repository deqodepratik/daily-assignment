import { readFile, writeFile } from "fs";
import { find } from "lodash";

export let registerUserService = (userObject) => {
  try {
    let { email, password } = userObject;
    // we can now push the data to the json
    readFile("src/db.json", "utf8", (err, data) => {
      if (err) throw err;
      const json = JSON.parse(data);
      // fetching if the user is in the database using lodash
      let user = find(json, { email });
      if (user && user.email == email) return false;

      json.push({ email, password });
      writeFile("src/db.json", JSON.stringify(json), "utf8", (err) => {
        if (err) throw err;
        return true;
      });
    });
  } catch (error) {
    throw error;
  }
};

export let loginService = (userObject) => {
  try {
    let { email, password } = userObject;
    // we can now push the data to the json
    readFile("src/db.json", "utf8", (err, data) => {
      if (err) throw err;
      const json = JSON.parse(data);
      // fetching if the user is in the database using lodash
      let user = find(json, { email });

      if (user) {
        console.log(user, password);
        if (user.password == password) return true;
        return false;
      }

      return false;
    });
  } catch (error) {
    throw error;
  }
};
