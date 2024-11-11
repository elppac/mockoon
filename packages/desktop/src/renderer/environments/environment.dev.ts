import { AppEnvironment } from 'src/renderer/app/models/app-environment.model';

export const environment: AppEnvironment = {
  production: false,
  remoteConfig: 'dev',
  useFirebaseEmulator: true,
  ci: false,
  websiteURL: 'http://localhost:7002/',
  apiURL: 'http://localhost:7001/'
};
