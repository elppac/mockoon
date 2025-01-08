const commonConfig = require('./electron-builder.common');

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = Object.assign({}, commonConfig, {
  win: {
    target: [{ target: 'appx' }],
    publisherName: 'Matrix'
  },
  appx: {
    publisher: 'CN=F7BC8E8D-E7FB-4CF2-87B7-66105AC3B61D',
    publisherDisplayName: 'Matrix',
    identityName: 'matrix.dummy',
    applicationId: 'dummy',
    backgroundColor: '#ffffff',
    artifactName: 'matrix.dummy.${version}.${ext}'
  }
});

module.exports = config;
