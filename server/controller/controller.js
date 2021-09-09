const User = require("../models/user");
const { Op } = require("sequelize");

module.exports = {
  loginUser: (req, res) => {
    console.log("inside loginUser ctrl function");
    console.log(req.body);
    const { email, password } = req.body;
    //check password logic here with db
    const foundEmail = User.findOne({ where: { email: email } });
    if (foundEmail !== null) {
      const validUser = User.findOne({
        where: { [Op.and]: [{ email: email }, { password: password }] },
      });
      if (validUser !== null) {
        return res.status(200).send(req.body);
      } else {
        return res.status(200).send(false);
      }
    }
    // const fakePass = "1234";
    // if (password == fakePass) {
    //   return res.status(200).send(req.body);
    // } else {
    //   return res.status(200).send(false);
    // }
  },
  signUpUser: async (req, res) => {
    console.log(req.body);
    const { fname, lname, email, password } = req.body;
    console.log("in ctrl sign up function");
    //by setting variable to instance, you can update using currentUser.lname etc.

    const currentUser = await User.create({ fname, lname, email, password });

    console.log(currentUser.id);
    return res.status(200).send(req.body);
  },
};
