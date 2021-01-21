export class ApiTxModel {
  _id: string = '';
  txid: string = '';
  network: string = '';
  chain: string = '';
  blockHeight: number = -1;
  blockHash: string = '';
  blockTime: Date | null = null;
  blockTimeNormalized: Date | null = null;
  coinbase: boolean = false;
  locktime: number = -1;
  inputCount: number = -1;
  outputCount: number = -1;
  size: number = -1;
  fee: number = -1;
  value: number = -1;
  isCustom: boolean = false;
  txType: string | null = null;
  customData: string | null = null;
  confirmations: number = -1;
  isCustomTxApplied: boolean = false;
}

