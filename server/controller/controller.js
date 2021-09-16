const User = require("../models/user");
const { Op } = require("sequelize");
const Birth_control = require("../models/birth_control");
const Date_menstruation = require("../models/date_menstruation");
const Date_birth_control = require("../models/date_birth_control");
const Saved_article = require("../models/saved_article");
const Note = require("../models/note");
const bcrypt = require("bcryptjs");

module.exports = {
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    const validUser = await User.findOne({ where: { email: email } });
    if (validUser) {
      console.log(validUser);
      if (bcrypt.compareSync(password, validUser.dataValues.password)) {
        console.log("password correct");
        return res.status(200).send(validUser);
      } else {
        return res.status(200).send("Password Incorrect");
      }
    } else {
      return res.status(200).send("Email Not Recognized");
    }
  },
  signUpUser: async (req, res) => {
    console.log(req.body);
    const { fname, lname, email, password } = req.body;
    console.log(password);

    //Password Hashing
    const salt = bcrypt.genSaltSync(5);
    const passwordHash = bcrypt.hashSync(password, salt);
    console.log(passwordHash);

    const newUser = await User.create({
      fname,
      lname,
      email,
      password: passwordHash,
    });
    if (newUser) {
      console.log(newUser);
      return res.status(200).send(newUser);
    } else {
      return res.status(500).send("unsuccessful");
    }
  },

  addBC: async (req, res) => {
    const { birth_control_id, user_id } = req.body;
    console.log(user_id);
    console.log(birth_control_id);

    await User.update(
      { birth_control_id: birth_control_id },
      { where: { id: user_id } }
    )
      .then(async () => {
        let updatedUser = await User.findOne({ where: { id: user_id } });
        const birthControlObj = await Birth_control.findOne({
          where: { id: birth_control_id },
        });

        const returnObject = {
          updatedUser,
          birthControlObj,
        };
        console.log(birthControlObj);
        return res.status(200).send(returnObject);
      })
      .catch((error) => console.log("failed - " + error));
  },
  getBirthControl: async (req, res) => {
    let { birth_control_id } = req.params;
    birth_control_id = Number(birth_control_id);
    const birthControlObj = await Birth_control.findOne({
      where: { id: birth_control_id },
    });
    if (birthControlObj) {
      return res.status(200).send(birthControlObj);
    }
  },
  addPeriodDate: async (req, res) => {
    const { id, dateState } = req.body;
    await Date_menstruation.create({
      user_id: id,
      date_occurred: dateState,
    })
      .then(async () => {
        const allDates = await Date_menstruation.findAll({
          where: { user_id: id },
        });
        return res.status(200).send(allDates);
      })
      .catch(() => console.log("failed"));
  },

  addBCDate: async (req, res) => {
    const { id, dateState } = req.body;
    await Date_birth_control.create({
      user_id: id,
      date_taken: dateState,
    })
      .then(async () => {
        const allDates = await Date_birth_control.findAll({
          where: { user_id: id },
        });
        return res.status(200).send(allDates);
      })
      .catch((error) => console.log("failed - " + error));
  },
  addNotes: async (req, res) => {
    const { user_id, text, note_date } = req.body;
    await Note.create({ user_id, text, note_date })
      .then(async () => {
        const allNotes = await Note.findAll({
          where: { user_id },
        });
        return res.status(200).send(allNotes);
      })
      .catch((error) => console.log("failed - " + error));
  },

  saveArticle: async (req, res) => {
    const { user_id, title, url } = req.body;
    const alreadyExists = await Saved_article.findOne({
      where: { [Op.and]: [{ name: title }, { user_id: user_id }] },
    });

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
    const previousSavedArticles = await Saved_article.findAll({
      where: { user_id: user_id },
    });
    if (previousSavedArticles) {
      return res.status(200).send(previousSavedArticles);
    }
  },
  removeResource: async (req, res) => {
    const { name, user_id } = req.body.body;
    await Saved_article.destroy({
      where: { [Op.and]: [{ name: name }, { user_id: user_id }] },
    })
      .then(() => {
        return res.status(200).send("successfully deleted");
      })
      .catch((error) => console.log("failed - " + error));
  },
  getPeriodDates: async (req, res) => {
    let { user_id } = req.params;
    user_id = Number(user_id);
    const previousPeriodDates = await Date_menstruation.findAll({
      where: { user_id: user_id },
    });
    if (previousPeriodDates) {
      return res.status(200).send(previousPeriodDates);
    }
  },
  getBCDates: async (req, res) => {
    let { user_id } = req.params;
    user_id = Number(user_id);
    const previousBCDates = await Date_birth_control.findAll({
      where: { user_id: user_id },
    });
    if (previousBCDates) {
      return res.status(200).send(previousBCDates);
    }
  },
  getNotes: async (req, res) => {
    let { user_id } = req.params;
    user_id = Number(user_id);
    const previousNotes = await Note.findAll({
      where: { user_id: user_id },
    });
    if (previousNotes) {
      return res.status(200).send(previousNotes);
    }
  },
  deleteNote: async (req, res) => {
    let { note_id } = req.params;
    await Note.destroy({ where: { id: note_id } }).then(() => {
      return res.status(200).send("successfully deleted");
    });
  },
};
