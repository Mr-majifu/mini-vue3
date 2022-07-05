// jest 默认在 nodejs 环境下运行，不支持 ESM
// 因此需要配置 babel
import { add } from "../index";

it("init", () => {
  expect(add(1,1)).toBe(2)
})