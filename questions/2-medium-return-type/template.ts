
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}


type MyReturnType<T> = T extends ( ...prams : any[] ) => infer P ? P : any;  

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"



