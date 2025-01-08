const commonConfig = require('./electron-builder.common');

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = Object.assign({}, commonConfig, {
  forceCodeSigning: true,
  win: {
    target: [{ target: 'nsis' }, { target: 'portable' }],
    publisherName: 'Matrix',
    azureSignOptions: {
      endpoint: 'https://eus.codesigning.azure.net',
      // respect casing
      certificateProfileName: 'Matrix',
      codeSigningAccountName: 'matrix',
      TimestampRfc3161: 'http://timestamp.acs.microsoft.com',
      TimestampDigest: 'SHA256'
    }
  },
  nsis: {
    artifactName: 'matrix.dummy.setup.${version}.${ext}'
  },
  portable: {
    artifactName: 'matrix.dummy.portable.${version}.${ext}'
  }
});

module.exports = config;
