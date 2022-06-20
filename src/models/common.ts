export type SubscriberCallbackHandler = (data: object, event?: string) => void;

export interface SubscriptionManager {
  [susbscriptionId: string]: {
    send: Function;
  };
}

export interface SubscriberUpdateParam {
  key: object;
  event: string;
}

export interface SubscriberLoadParam {
  value: object;
}

export interface SubscriberModel {
  property: string;
  propValue?: string;
  onLoad?: Function;
  onUpdate?: Function;
}

export interface UnsubscriberModel {
  property: string;
  propValue: string;
}
