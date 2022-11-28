import { LogLevels } from "./constants";
export interface Credentials {
    keys: Keys;
    gcm: GcmData;
    fcm: FcmData;
}
export interface Keys {
    privateKey: string;
    publicKey: string;
    authSecret: string;
}
export interface GcmData {
    androidId: string;
    securityToken: string;
    appId?: string;
    token?: string;
}
export type FcmData = {
    token: string;
    pushSet: string;
};
export type PersistentId = string;
export type DisposeFunction = CallableFunction;
export interface Notification {
    title?: string;
    body?: string;
    android_channel_id?: string;
    icon?: string;
    sound?: string;
    tag?: string;
    color?: string;
    click_action?: string;
    body_loc_key?: string;
    body_loc_args?: string;
    title_loc_key?: string;
    title_loc_args?: string;
}
export interface MessageCustomData {
    [key: string]: unknown;
}
export interface Message {
    to?: string;
    registration_ids?: string[];
    condition?: string;
    collapse_key?: string;
    priority?: "normal" | "high";
    content_available?: boolean;
    mutable_content?: string;
    restricted_package_name?: string;
    dry_run?: boolean;
    data?: MessageCustomData;
    notification?: Notification;
    fcmMessageId?: string;
    from?: string;
}
export interface MessageEnvelope {
    message: Message;
    persistentId: string;
}
export interface DataPacket<T = any> {
    tag: number;
    object: T;
}
export interface ClientConfig {
    credentials?: Credentials;
    persistentIds?: PersistentId[];
    senderId: string;
    bundleId?: string;
    chromeId?: string;
    chromeVersion?: string;
    skipFcmRegistration?: boolean;
    logLevel?: keyof typeof LogLevels;
    vapidKey?: string;
    heartbeatIntervalMs?: number;
}
export interface EventChangeCredentials {
    oldCredentials?: Credentials;
    newCredentials: Credentials;
}
export interface MessageToSend {
    title: string;
    message: string;
    key?: string;
    action?: string;
}
