const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const allowedOrigins = [
  "https://topner.herokuapp.com",
  "https://poseidonzeus.herokuapp.com"
];

const corsOption = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(orgin) === -1) {
      return callback(new Error("not allowed hoss"), false);
    }
    return callback(null, true);
  },
  credentials: true
};

app.use(cors(corsOption));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("http://localhost:8000");
});
