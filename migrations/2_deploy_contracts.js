const StarNotary = artifacts.require("StarNotary");

module.exports = function(deployer) {
  var tokenName = "ARKtoken";
  var tokenSymbol = "ARK";
  deployer.deploy(StarNotary, tokenName, tokenSymbol);
};
