const User = require("../models/user");
const { Op } = require("sequelize");

module.exports = {
  loginUser: async (req, res) => {
    // console.log("inside loginUser ctrl function");
    // console.log(req.body);
    const { email, password } = req.body;
    //check password logic here with db
    const validUser = await User.findOne({ where: { email: email } });
    // if (validUser !== null && validUser.password === password) {
    if (validUser !== null) {
      console.log(validUser.password);

      // console.log("user is valid and found");
      // console.log(validUser);
      return res.status(200).send(validUser);
    }

    // const validUser = await User.findOne({
    //   where: { [Op.and]: [{ email: email }, { password: password }] },
    // });
    // if (validUser !== null) {
    //   console.log("user is valid and found");
    //   console.log(validUser);

    //   return res.status(200).send(validUser);
    // }
    else {
      console.log("in else of login fn");
      return res.status(200).send(false);
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
    // if (User.findOne({ where: { email: email } }) === null) {
    const newUser = await User.create({ fname, lname, email, password });
    console.log("user successfully added");
    // } else {
    //   console.log("user already exists");
    // }
    return res.status(200).send(newUser);
  },
};
