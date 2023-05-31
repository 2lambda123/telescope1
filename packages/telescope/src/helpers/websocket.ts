export const webSocket = `

import WebSocket from 'isomorphic-ws';

export class defaultWebSocket {
  private ws: WebSocket;
  private method: string;
  private params: string[];
  private url: string;
  private id: number;
  private reconnect: boolean;

  constructor(url: string, method: string, params: string[], id: number, reconnect?: boolean) {
    this.url = url;
    this.method = method;
    this.params = params;
    this.id = id
    this.reconnect = reconnect ?? true;

    this.ws = new WebSocket(this.url);
    this.initWebSocket();
  }

  private initWebSocket() {
    this.ws.on('open', this.handleOpen);
    this.ws.on('close', this.handleClose);
    this.ws.on('message', this.handleMessage);
  }

  private handleOpen = () => {
      console.log('Connected to WebSocket');
      this.send(this.method, this.params, this.id);
  };

  private handleClose = () => {
    console.log('disconnected');
    if (this.reconnect) {
        console.log('trying to reconnect...');
        this.ws = new WebSocket(this.url);
        this.initWebSocket();
    }
  };

  private handleMessage = (data: WebSocket.Data) => {
    const finalData = JSON.parse(data.toString());
    if (finalData.result?.data) {
      console.log(finalData.result);
    }
  };

  private send = (method: string, params: string[], id: number) => {
    this.ws.send(JSON.stringify({
      "method": method,
      "params": params,
      "id": id.toString(),
      "jsonrpc": "2.0"
    }));
  };
}

/** This describe the main kind of tx events */
export enum Tx_Event {
  /** NewBlock - Contains Events triggered during BeginBlock and EndBlock */
  NewBlock = 'NewBlock',
  /** Tx - Contains Events triggered during DeliverTx (i.e. transaction processing) */
  Tx = 'Tx',
  /** ValidatorSetUpdates - Contains validator set updates for the block */
  ValidatorSetUpdates = 'ValidatorSetUpdates',
}

`