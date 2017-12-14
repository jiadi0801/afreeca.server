const models = require('./models');

models.User.findAll().then(users => {
    users.forEach(user => {
        console.log(user.username)
        console.log(user.get('nickname'))
    })
})