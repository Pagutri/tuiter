const User = require('./../models/User.js')

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "Sin bio")
    }
}

module.exports = UserService