import { reactive } from "../reactive";
import { effect } from "../effect";

describe('effect', () => {
  it("happy path", () => {
    const user = reactive({
      age: 10
    })

    let nextAge
    // effect 收集依赖，触发依赖
    effect(() => {
      nextAge = user.age + 1
      console.log("nexAge", nextAge);
      console.log("user.age", user.age);
      
    })
    expect(nextAge).toBe(11)

    // update
    // user.age = user.age + 1
    user.age = user.age + 10
    expect(nextAge).toBe(21)
  })

  it("should return runner when call effect", () => {
    let foo = 10
    const runner = effect(() => {
      foo++;
      return "foo"
    })

    expect(foo).toBe(11)
    const r = runner()
    expect(foo).toBe(12)
    expect(r).toBe("foo")
  })
})