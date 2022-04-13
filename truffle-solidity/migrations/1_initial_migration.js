// const Migrations = artifacts.require("Migrations");

// module.exports = function (deployer) {
//   deployer.deploy(Migrations);
// };

// const SimpleStorage = artifacts.require("SimpleStorage");

// module.exports = function(deployer) {
//     deployer.deploy(SimpleStorage);
// };

//erc20 token

const TokenERC20 = artifacts.require("TokenERC20");

module.exports = function(deployer) {
    deployer.deploy(TokenERC20);
};
//批量转账合约
// const MultiSender = artifacts.require("MultiSender");

// module.exports = function(deployer) {
//     deployer.deploy(MultiSender,0,'0xc82D88971c1cC94c1e0821aDD449a4655C98E2BA');
// };