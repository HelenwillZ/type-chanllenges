type DeepReadonly<T> = {
  readonly [ k in keyof T] : T[k] extends Function ? T[k] : T[k] extends Object ? DeepReadonly<T[k]> : T[k];
}