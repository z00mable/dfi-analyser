import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  // API URLs
  apiDefichainUrl: 'https://api.defichain.io/v1',
  apiDefichainUrlMainnet: 'https://mainnet-api.defichain.io/api/DFI/mainnet/',

  // Test Addresses
  testAddress1: 'dHimhWSPvwHriHTk2X7GuFvtWvjCC3',
  testAddress2: '8GP6RWDLTnK8VvU81frswjFTBdvutp',
};
