const User = require('./../models/User.js')

class UserView {
    static createUser(payload) {
        if (payload === null) {
            return {error: "payload no existe"}
        }
    }
}

module.exports = UserView