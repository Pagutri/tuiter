const User = require('./../models/User.js')

class UserView {
    static createUser(payload) {
        if (payload === null) {
            return {error: "payload no existe"}
        }
        else if (Object.values(payload).some((prop) => prop === null)) {
            return {error: "necesitan tener un valor válido"}
        }
        else if (Object.values(payload).length < 3) {
            return {error: "necesita más propiedades"}
        }
    }
}

module.exports = UserView