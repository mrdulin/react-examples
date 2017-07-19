import * as Rx from 'rxjs';

interface ISubscriptionObject {
  [name: string]: Rx.Subscription;
}

interface ISubjectObject<T> {
  [name: string]: Rx.Subject<T>;
}

interface IActionBase {
  type: string;
}

interface IActionPayload<Payload> extends IActionBase {
  payload: Payload;
  error?: boolean;
}

interface IActionMeta<Payload, Meta> extends IActionPayload<Payload> {
  meta: Meta;
}

export {
  ISubscriptionObject,
  ISubjectObject,
  IActionPayload,
  IActionMeta
};
