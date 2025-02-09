import { SimpleServiceImp } from"../simple"

test("login sucess", () => {
    let service = new SimpleServiceImp();
    expect(service.ok()).toBe("ok");
})