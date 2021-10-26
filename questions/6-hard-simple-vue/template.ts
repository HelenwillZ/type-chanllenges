

type Options<D,C,M> = {
    data : (this : {})=> D;
    computed : C & ThisType<D>;
    methods : M & ThisType<M & D & { [k in keyof C] :  C[k] extends (...args : any[]) => infer R ? R : never  }>;
}

declare function alert(message?: any): void;

declare function SimpleVue<D,C,M>(options: Options<D,C,M>): any
