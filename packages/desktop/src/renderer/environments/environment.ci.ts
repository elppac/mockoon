import { AppEnvironment } from 'src/renderer/app/models/app-environment.model';

export const environment: AppEnvironment = {
  production: false,
  remoteConfig: 'dev',
  useFirebaseEmulator: true,
  ci: true,
  websiteURL: 'http://console-matrix.gram-tech.com/',
  apiURL: 'http://console.gram-tech.com/'
};
