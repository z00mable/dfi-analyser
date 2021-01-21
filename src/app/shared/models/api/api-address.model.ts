export class ApiAddressModel {
  _id: string = '';
  chain: string = '';
  network: string = '';
  coinbase: boolean = false;
  mintIndex: number = -1;
  spentTxid: string = '';
  mintTxid: string = '';
  mintHeight: number = -1;
  spentHeight: number = -1;
  address: string = '';
  script: string = '';
  confirmations: number = -1;
  customTxOut: string | null = null;
}
