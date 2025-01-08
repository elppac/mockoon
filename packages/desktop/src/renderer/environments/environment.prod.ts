import { AppEnvironment } from 'src/renderer/app/models/app-environment.model';

export const environment: AppEnvironment = {
  production: true,
  remoteConfig: 'prod',
  useFirebaseEmulator: false,
  ci: false,
  websiteURL: 'http://console.gram-tech.com/manage/',
  apiURL: 'http://console.gram-tech.com/'
};
