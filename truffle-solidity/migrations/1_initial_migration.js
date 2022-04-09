// const Migrations = artifacts.require("Migrations");

// module.exports = function (deployer) {
//   deployer.deploy(Migrations);
// };

// const SimpleStorage = artifacts.require("SimpleStorage");

// module.exports = function(deployer) {
//     deployer.deploy(SimpleStorage);
// };


const ABC = artifacts.require("TokenERC20");

module.exports = function(deployer) {
    deployer.deploy(ABC);
};