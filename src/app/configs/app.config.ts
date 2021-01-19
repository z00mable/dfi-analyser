import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  defiChainApiUrl: 'https://api.defichain.io/v1'
};
