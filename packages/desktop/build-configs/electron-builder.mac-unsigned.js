const macConfig = require('./electron-builder.mac.js');

const unsignedConfig = Object.assign({}, macConfig);

unsignedConfig.mac.hardenedRuntime = false;
unsignedConfig.mac.gatekeeperAssess = false;
unsignedConfig.mac.entitlements = null;
unsignedConfig.mac.entitlementsInherit = null;
unsignedConfig.mac.sign = false;
delete unsignedConfig.afterSign;
console.log(JSON.stringify(unsignedConfig));
module.exports = unsignedConfig;
