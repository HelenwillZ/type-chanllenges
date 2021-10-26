type Chainable<T extends {} = {}> = {
  option<K extends string = string, V = any>(
    key: K,
    value: V,
  ): Chainable<T & { [p in K]: V }>;
  get(): T;
};
