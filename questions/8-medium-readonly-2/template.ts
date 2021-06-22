type MyReadonly2<T, K extends keyof T = keyof T> = { 
  [X in keyof T as X extends K ? never : X]: T[X]
} & { readonly [X in K]: T[X]};
