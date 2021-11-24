import { readFile, writeFile } from "fs";
import http from "http";

const server = http.createServer(async (req, res) => {
  // API for getting all the users data
  // getting the route and method of the request
  if (req.url == "/" && req.method == "GET") {
    // reading the db data from the json file
    readFile("src/db.json", "utf8", (err, data) => {
      if (err) throw err;
      const json = JSON.parse(data);
      const dbData = JSON.stringify(json);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(dbData);
    });
  }

  // API for adding new user in the db
  if (req.url == "/" && req.method == "POST") {
    // this will get the data from the buffer
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }

    // here the buffers is now converted to strings
    const data = Buffer.concat(buffers).toString();
    const body = JSON.parse(data);

    const newUser = body;

    // read the old data form the db and then update the db with new file
    readFile("src/db.json", "utf8", (err, data) => {
      if (err) throw err;
      const json = JSON.parse(data);
      json.push(newUser);
      let newInsertedData = JSON.stringify(newUser);
      writeFile("src/db.json", JSON.stringify(json), "utf8", (err) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(newInsertedData);
      });
    });
  }
});

server.listen(3300, () => console.log("Listining on 3300..."));
