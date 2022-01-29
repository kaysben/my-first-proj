const express = require("express");
const connectDb = require("./config/connectDb");
const AuthRoute = require("./routes/auth");

require("dotenv").config();
const CampsRoutes = require("./routes/camps");
const app = express();
connectDb();

app.use(express.json());
app.use("/api/auth", AuthRoute);
app.use("/api/camps", CampsRoutes);

app.listen(process.env.port, () =>
  console.log(`server is running onport ${process.env.port}`)
);
