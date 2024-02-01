const express = require("express");
const app = express();

app.set("view engine", "ejs");
const publicRouter = express.Router();
publicRouter.use(express.static('public'));
app.use('/public', publicRouter)

app.get("/", (req, res) => {
  res.render("index", { title: "Forumo aplikacija", username: "savmantas3" });
});

app.listen(3000, function () {
  console.log("Serveris paleistas, jo adresas: http://localhost:3000");
});
