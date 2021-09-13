const User = require("../models/user");
const { Op } = require("sequelize");
const Birth_control = require("../models/birth_control");
const Date_menstruation = require("../models/date_menstruation");
const Date_birth_control = require("../models/date_birth_control");
const Saved_article = require("../models/saved_article");

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
    // console.log(req.body);
    const { fname, lname, email, password } = req.body;
    // console.log("in ctrl sign up function");
    const newUser = await User.create({ fname, lname, email, password });
    // console.log("user successfully added");
    return res.status(200).send(newUser);
  },

  addBC: async (req, res) => {
    // console.log(req.body);
    const { birth_control_id, user_id } = req.body;
    // console.log(user_id);
    // console.log(birth_control_id);

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
  addPeriodDate: async (req, res) => {
    // console.log(req.body);
    const { id, dateState } = req.body;
    await Date_menstruation.create({
      user_id: id,
      date_occurred: dateState,
    })
      .then(async () => {
        const allDates = await Date_menstruation.findAll({
          where: { user_id: id },
        });
        // console.log(allDates);
        return res.status(200).send(allDates);
      })
      .catch(() => console.log("failed"));
  },

  addBCDate: async (req, res) => {
    // console.log(req.body);
    const { id, dateState } = req.body;
    await Date_birth_control.create({
      user_id: id,
      date_taken: dateState,
    })
      .then(async () => {
        // console.log("recored created");
        const allDates = await Date_birth_control.findAll({
          where: { user_id: id },
        });
        // console.log(allDates);
        return res.status(200).send(allDates);
      })
      .catch(() => console.log("failed"));
  },

  saveArticle: async (req, res) => {
    // console.log(req.body);
    const { user_id, title, url } = req.body;
    const alreadyExists = await Saved_article.findOne({
      where: { [Op.and]: [{ name: title }, { user_id: user_id }] },
    });
    console.log(alreadyExists);

    if (!alreadyExists) {
      await Saved_article.create({
        url,
        name: title,
        user_id,
      })
        .then(async () => {
          const allArticles = await Saved_article.findAll({
            where: { user_id },
          });
          return res.status(200).send(allArticles);
        })
        .catch((error) => console.log(error));
    } else {
      return res.status(200).send("no thanks");
    }
  },
  getSavedArticles: async (req, res) => {
    let { user_id } = req.params;
    user_id = Number(user_id);
    console.log(user_id);
    const previousSavedArticles = await Saved_article.findAll({
      where: { user_id: user_id },
    });
    if (previousSavedArticles) {
      return res.status(200).send(previousSavedArticles);
    }
  },
  // calcNextDose: async (req, res) => {
  //   console.log(req.body);
  //   return true;
  // },
  getPeriodDates: async (req, res) => {
    let { user_id } = req.params;
    user_id = Number(user_id);
    console.log(user_id);
    const previousPeriodDates = await Date_menstruation.findAll({
      where: { user_id: user_id },
    });
    if (previousPeriodDates) {
      // console.log(previousPeriodDates);
      return res.status(200).send(previousPeriodDates);
    }
  },
  getBCDates: async (req, res) => {
    let { user_id } = req.params;
    user_id = Number(user_id);
    console.log(user_id);
    const previousBCDates = await Date_birth_control.findAll({
      where: { user_id: user_id },
    });
    if (previousBCDates) {
      console.log(previousBCDates);
      return res.status(200).send(previousBCDates);
    }
  },
};
