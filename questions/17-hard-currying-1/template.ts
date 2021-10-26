type Curry<T> = T extends (...args: infer A) => infer R
  ? A extends [infer F, ...infer B] ? (a: F) => Curry<(...args: B) => R> : R
  : never

  
declare function Currying<T>(fn: T): Curry<T>