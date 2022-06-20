export type SubscriberCallbackHandler = (data: object, event?: string) => void;

export type SubscriptionManager = {
  [susbscriptionId: string]: {
    send: Function;
  };
};

export type SubscriberUpdateParam = {
  key: object;
  event: string;
};

export type SubscriberLoadParam = {
  value: object;
};

export type SubscriberModel = {
  property: string;
  propValue?: string;
  onLoad?: Function;
  onUpdate?: Function;
};

export type UnsubscriberModel = {
  property: string;
  propValue: string;
};
