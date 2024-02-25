const Users = require("../models/user");
const { sign } = require("../utils/jwt");

exports.getMe = async (req, res) => {
  try {
    const { userId } = req.headers;
    const findUser = await Users.findById(userId);
    if (!findUser) {
      return res.status(404).json({
        message: "User Not Found!",
      });
    }
    return res.json({
      data: {
        token: sign(findUser._id),
        login: findUser.login,
      },
    });
  } catch (err) {
    return res.json(err);
  }
};

exports.login = async (req, res) => {
  try {
    const findUser = await Users.findOne({
      login: req.body.login,
      password: req.body.password,
    });
    if (!findUser) {
      return res.status(404).json({
        message: "User Not Found!",
      });
    }
    return res.json({
      data: {
        token: sign(findUser._id),
        login: findUser.login,
      },
    });
  } catch (err) {
    return res.json(err);
  }
};
