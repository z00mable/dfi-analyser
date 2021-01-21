import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  // API URLs
  apiDefichainUrl: 'https://api.defichain.io/v1',
  apiDefichainUrlMainnet: 'https://mainnet-api.defichain.io/api/DFI/mainnet/',

  // Test Addresses
  testAddress: 'dHimhWSPvwHriHTk2X7GuFvtWvjCC3rc',
};
