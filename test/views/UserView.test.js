const UserView = require('./../../app/views/UserView.js')

describe("Tests for UserView", () => {
    test("Return an error object when trying to create a new user with a new payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    });

    test("Return an error object when trying to create a new user with a payload with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    });

    test("Return an error object when trying to create a new user with a payload with missing properties", () => {
        const payload = {username: "Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesita más propiedades/)
    });

    test("Create a user by a given valid payload", () => {
        const payload = {id: 1, username: "username", name: "name"}
        const result = UserView.createUser(payload)
        expect(result.id).toBe(1)
        expect(result.username).toBe("username")
        expect(result.name).toBe("name")
    });
});