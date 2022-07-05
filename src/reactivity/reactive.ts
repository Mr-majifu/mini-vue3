import { track,trigger } from "./effect"

export function reactive(raw) {
  return new Proxy(raw, {
    // target 指的是 raw 对象本身，key 是对象里面的键名 foo
    get(target, key){
      // console.log("i am target",target) // {foo: 1}
      const res = Reflect.get(target,key)

      // TODO 收集依赖
      track(target, key)

      return res
    },

    set(target, key, value) {
      const res = Reflect.set(target, key, value)
      
      // TODO 触发依赖
      trigger(target,key)

      return res
    }
  })
}