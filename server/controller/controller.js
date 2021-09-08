module.exports = {
  loginUser: (req, res) => {
    console.log(req.params);
    // const { difficulty } = req.params;
    // let wordArray = [];
    // let oneWord = "";
    // words.map((item) => {
    //   if (item.difficulty === difficulty) {
    //     wordArray.push(item.word);
    //   }
    //   oneWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    // });
    return res.status(200).send("success");
  },
};
