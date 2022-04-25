const User = require('./../models/User.js')

class UserView {
    static createUser(payload) {
        if (payload === null) {
            return {error: "payload no existe"}
        }
        else if (!Object.values(payload).every((prop) => prop != null)) {
            return {error: "necesitan tener un valor válido"}
        }
    }
}

module.exports = UserView