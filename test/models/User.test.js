const User = require('./../../app/models/User.js')

describe("Unit tests for User class", () => {
    test("Create an User object", () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBeDefined()
        expect(user.lastUpdated).toBeDefined()
    });

    test("Add getters", () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")

        expect(user.getUsername).toBe("carlogilmar")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).toBeDefined()
        expect(user.getLastUpdated).toBeDefined()
    });

    test("Add setters", () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        user.setUsername = "Gilmar"
        expect(user.username).toBe("Gilmar")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    });
});