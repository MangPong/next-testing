import {LoginService} from "../login"

const loginService = new LoginService()

test("login admin sucess", async () => {
    let adminLogin = await loginService.login("admin","admin")
    expect(adminLogin).toHaveProperty("id",BigInt(1))
})

test("login user sucess", async () => {
    let userLogin = await loginService.login("user","user")
    expect(userLogin).toHaveProperty("id",BigInt(2))
})

test("login fail", async () => {
    let failLogin = await loginService.login("admin","user")
    expect(failLogin).toBeNull()
})