const userInformation = require('./information.js')

const cowsay = require("cowsay");
console.log(cowsay.say({
    text: `My name is ${userInformation.name},i work in ${userInformation.campus} and i discover the moduuuuules!"`,
    T: "U ",
}))