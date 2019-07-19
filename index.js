const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOption = {
  origin: "http://localhost:8000",
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
