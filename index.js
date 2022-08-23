var express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
var app = express();
app.use(cors());



app.get("/test", (req, res) => {
  res.send("hello from server");
});


app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
