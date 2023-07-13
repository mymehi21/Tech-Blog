const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        const user = await seedUsers();
        console.log("user",user)
        const post = await seedPosts();
        console.log("post",post)
        await seedComments();
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

seedAll();
