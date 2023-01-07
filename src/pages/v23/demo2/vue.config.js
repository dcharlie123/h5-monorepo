const getBaseVueConfig = require("../../../../vue.config.js");
const pkg = require("./package.json");
module.exports = {
  ...getBaseVueConfig(pkg.name),
};
