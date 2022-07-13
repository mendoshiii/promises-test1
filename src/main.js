const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function ask(question) {
  return tell(question).then((response) => [
    `Your question was: ${question}`,
    `Your fortune is: ${response}`,
  ])
}

//const question = 'Will I ace my job interview?';

function getFortune(question) {

  return ask(question)
  .catch((error) => {
    return (`There was an error: ${error}`);
  });

};

function fullSession(question) {
  return welcome()
      .then((welcomeMessage) => 
      getFortune(question).then((fortune => 
        [welcomeMessage].concat(fortune))))
        .then((bye) => goodbye().then((goodbyeMessage) =>
        bye.concat(goodbyeMessage)))
        .catch((error) => `There was an error: ${error}`);
};

module.exports = { getFortune, fullSession };
