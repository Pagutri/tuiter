const UserView = require('./../../app/views/UserView.js')

describe("Tests for UserView", () => {
    test("Return an error object when trying to create a new user with a new payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    });
});