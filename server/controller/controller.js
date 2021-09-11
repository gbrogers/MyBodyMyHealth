const User = require("../models/user");
const { Op } = require("sequelize");
const Birth_control = require("../models/birth_control");

module.exports = {
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    //check password logic here with db
    const validUser = await User.findOne({ where: { email: email } });
    // if (validUser !== null && validUser.password === password) {
    if (validUser !== null) {
      console.log(validUser.password);
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
  },
  signUpUser: async (req, res) => {
    console.log(req.body);
    const { fname, lname, email, password } = req.body;
    console.log("in ctrl sign up function");
    const newUser = await User.create({ fname, lname, email, password });
    console.log("user successfully added");
    return res.status(200).send(newUser);
  },

  addBC: async (req, res) => {
    console.log(req.body);
    const { birth_control_id, user_id } = req.body;
    console.log(user_id);
    console.log(birth_control_id);

    // const foundUser = await User.findOne({ where: { id: user_id } });
    // console.log(foundUser.dataValues);
    // foundUser.dataValues.birth_control_id = birth_control_id;
    // console.log(foundUser.dataValues.birth_control_id);
    // console.log(foundUser.dataValues);
    // foundUser.save();

    await User.update(
      { birth_control_id: birth_control_id },
      { where: { id: user_id } }
    );
    let updatedUser = await User.findOne({ where: { id: user_id } });
    // const birthControl = await Birth_control.findByPk(birth_control_id);
    // const duration = birthControl.frequency;
    // console.log(duration);
    // const expiration = duration + most recent date.
    // switch(duration){
    //   case:
    // }

    // const returnObject = {
    //   updatedUser,
    //   birthControl,
    // };
    return res.status(200).send(updatedUser);
  },

  calcNextDose: (req, res) => {
    return true;
  },
};
