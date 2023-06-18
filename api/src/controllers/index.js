const pokemon = require("./Pokemon");
const type = require("./Type");

module.exports = {
    ...pokemon, ...type
}