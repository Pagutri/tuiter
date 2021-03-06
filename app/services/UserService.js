const User = require('./../models/User.js')

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(user) {
        return [user.id, user.username, user.name, user.bio]
    }

    static updateUserUsername(user, newUsername) {
        user.setUsername = newUsername
    }

    static getAllUsernames(users) {
        return users.map(function(user){return user.getUsername})
    }
}

module.exports = UserService