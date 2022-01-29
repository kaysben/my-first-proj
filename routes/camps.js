const CampsSchema = require("../models/camps");
const express = require("express");
const { isAuth } = require("../middlewares/isAuth");
const auth = require("../models/auth");
const { upload } = require("../middlewares/upload");
const CampsRoutes = express.Router();

CampsRoutes.post(
  "/addCamps",
  isAuth,
  upload.single("image"),
  async (req, res) => {
    const user = await auth.findById(req.user._id);

    try {
      const camps = new CampsSchema({
        ...req.body,
        image: req.file.filename,
        userId: req.user._id,
      });
      //   if (user.role != "admin") {
      //     return res.send("your are not authorized");
      //   }
      console.log(req.file);
      await camps.save();

      res.status(200).send({ msg: "Camps added", camps });
    } catch (error) {
      res.status(500).send({ msg: "could not add Camps", error });
    }
  }
);
CampsRoutes.get("/", async (req, res) => {
  try {
    const camps = await CampsSchema.find();
    res.status(200).send({ msg: "list of camps", camps });
  } catch (error) {
    res.status(500).send({ msg: "could not get list", error });
  }
});

CampsRoutes.get("/mycamps", isAuth, async (req, res) => {
  try {
    const mycamps = await campschema.find({ userId: req.user._id }).populate(
      "userId"
    );
    res.status(200).send({ msg: "my list", mycamps });
  } catch (error) {
    res.status(500).send({ msg: "could not my list", error });
  }
});
module.exports = CampsRoutes;
