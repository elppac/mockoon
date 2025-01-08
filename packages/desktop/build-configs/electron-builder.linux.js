const commonConfig = require('./electron-builder.common');

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = Object.assign({}, commonConfig, {
  linux: {
    target: [
      {
        target: 'AppImage',
        arch: ['x64', 'arm64']
      },
      {
        target: 'snap',
        arch: ['x64']
      },
      {
        target: 'deb',
        arch: ['x64', 'arm64']
      },
      {
        target: 'rpm',
        arch: ['x64']
      }
    ],
    category: 'Development',
    icon: 'build-res',
    artifactName: 'matrix.dummy-${version}.${arch}.${ext}',
    desktop: {
      Name: 'Dummy',
      Type: 'Application',
      Categories: 'Development'
    }
  }
});

module.exports = config;
