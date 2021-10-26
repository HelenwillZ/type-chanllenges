type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type NoNever<T> = {
    [key in keyof T as T[key] extends never ? never : key]: T[key]
}
  
type MarkNever<T> = {
[key in keyof T]-?: Equal<{ -readonly [x in key]: T[x] }, { [x in key]: T[x] }> extends false ? T[key] : never
}

type GetReadonlyKeys<T> = keyof NoNever<MarkNever<T>>
