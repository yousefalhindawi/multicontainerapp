const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 4000
console.log(process.env.PORT);
// const corsOption = {
//   origin: ["http://localhost:3000"],
// };
app.use(cors());

app.get("/", (req, res) => {
  res.status(200);
  res.json([
    {
      id: "1",
      title: "مقدمة ابن خلدون",
    },
    {
      id: "2",
      title: "النبي | جبران خليل جبران",
    },
    {
      id: "3",
      title: "ديوان المتنبي",
    },
    {
      id: "4cat",
      title: "كَلِيلَة ودِمْنَة",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`listening for requests on port ${PORT}`);
});
