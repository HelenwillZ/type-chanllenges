import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<{
    readonly title: string 
    description: never
    completed: never
  },MarkNever<Todo1>>>,

  Expect<Equal<{ readonly title: string },NoNever<MarkNever<Todo1>>>>,

  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}
