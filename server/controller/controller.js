const User = require("../models/user");

module.exports = {
  loginUser: (req, res) => {
    console.log("inside loginUser ctrl function");
    console.log(req.body);
    const { email, password } = req.body;
    //check password logic here with db

    const fakePass = "starlord";
    if (password == fakePass) {
      return res.status(200).send(req.body);
    } else {
      return res.status(200).send(false);
    }
  },
  signUp: async (req, res) => {
    console.log(req.body);
    const { fname, lname, email, password } = req.body;

    //by setting variable to instance, you can update using currentUser.lname etc.
    const currentUser = await User.create({ fname, lname, email, password });
    return res.status(200).send("sign up success");
  },
};
