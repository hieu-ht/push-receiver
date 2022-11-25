/// <reference types="node" />
import { EventEmitter } from 'events';
import type * as Types from './types';
export { Types };
export default class PushReceiver extends EventEmitter {
    private config;
    private socket;
    private retryCount;
    private retryTimeout;
    private parser;
    private heartbeatTimer?;
    private heartbeatTimeout?;
    private streamId;
    private lastStreamIdReported;
    persistentIds: Types.PersistentId[];
    constructor(config: Types.ClientConfig);
    setLogLevel(logLevel: Types.ClientConfig['logLevel']): void;
    on(event: 'ON_MESSAGE_RECEIVED', listener: (data: Types.MessageEnvelope) => void): this;
    on(event: 'ON_CREDENTIALS_CHANGE', listener: (data: Types.EventChangeCredentials) => void): this;
    on(event: 'ON_CONNECT', listener: (data: void) => void): this;
    on(event: 'ON_DISCONNECT', listener: (data: void) => void): this;
    on(event: 'ON_READY', listener: (data: void) => void): this;
    on(event: 'ON_HEARTBEAT', listener: (data: void) => void): this;
    off(event: 'ON_MESSAGE_RECEIVED', listener: (data: Types.MessageEnvelope) => void): this;
    off(event: 'ON_CREDENTIALS_CHANGE', listener: (data: Types.EventChangeCredentials) => void): this;
    off(event: 'ON_CONNECT', listener: (data: void) => void): this;
    off(event: 'ON_DISCONNECT', listener: (data: void) => void): this;
    off(event: 'ON_READY', listener: (data: void) => void): this;
    off(event: 'ON_HEARTBEAT', listener: (data: void) => void): this;
    emit(event: 'ON_MESSAGE_RECEIVED', data: Types.MessageEnvelope): boolean;
    emit(event: 'ON_CREDENTIALS_CHANGE', data: Types.EventChangeCredentials): boolean;
    emit(event: 'ON_CONNECT'): boolean;
    emit(event: 'ON_DISCONNECT'): boolean;
    emit(event: 'ON_READY'): boolean;
    emit(event: 'ON_HEARTBEAT'): boolean;
    onNotification(listener: (data: Types.MessageEnvelope) => void): Types.DisposeFunction;
    onCredentialsChanged(listener: (data: Types.EventChangeCredentials) => void): Types.DisposeFunction;
    onReady(listener: () => void): Types.DisposeFunction;
    connect: () => Promise<void>;
    destroy: () => void;
    register(): Promise<Types.Credentials>;
    checkIn(): Promise<Types.GcmData>;
    private clearHeartbeat;
    private startHeartbeat;
    private handleSocketConnect;
    private handleSocketClose;
    private handleSocketError;
    private socketRetry;
    private getStreamId;
    private newStreamIdAvailable;
    private sendHeartbeatPing;
    private sendHeartbeatPong;
    private sendLogin;
    private handleMessage;
    private handleDataMessage;
    private handleParserError;
    send(message: Types.MessageToSend, serverApiKey: string): Promise<void>;
    testMessage(serverApiKey: string): Promise<void>;
}
