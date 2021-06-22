type MyOmit<T, K> = {
  [ k in  MyExclude<keyof T,K> ] : T[k];
}