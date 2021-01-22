export class ApiBlockHashModel {
  _id: string = '';
  chain: string = '';
  network: string = '';
  hash: string = '';
  height: number = -1;
  version: number = -1;
  size: number = -1;
  merkleRoot: string = '';
  time: Date | null = null;
  timeNormalized: Date | null = null;
  bits: number = -1;
  previousBlockHash: string = '';
  nextBlockHash: string = '';
  reward: number = -1;
  transactionCount: number = -1;
  confirmations: number = -1;
}
