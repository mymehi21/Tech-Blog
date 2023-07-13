
const { User } = require('../models');

const userData = [{
        username: 'John',
        email: 'john@email.com',
        password: 'john123'
    },
    {
        username: 'Sam',
        email: 'sam@email.com',
        password: 'sam123'
    },
    {
        username: 'Tom',
        email: 'tom@email.com',
        password: 'tom123'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;