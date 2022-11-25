/// <reference types="node" />
/// <reference types="node" />
import EventEmitter from 'events';
import { TLSSocket } from 'tls';
export default class Parser extends EventEmitter {
    private socket;
    private state;
    private data;
    private messageTag;
    private messageSize;
    private handshakeComplete;
    private isWaitingForData;
    constructor(socket: TLSSocket);
    destroy(): void;
    private emitError;
    private handleData;
    private waitForData;
    private handleGotVersion;
    private handleGotMessageTag;
    private handleGotMessageSize;
    private handleGotMessageBytes;
    private getNextMessage;
    private buildProtobufFromTag;
}
