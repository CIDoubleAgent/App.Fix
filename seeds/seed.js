const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Post.sync();
    await User.sync();

    const post = await Post.bulkCreate([{ contents:"These are the contents of a post", postTitle: "Post one", username: "thefastestman", dateCreated: new Date() }]);
    const user = await User.bulkCreate([{ username:"thefastestman", email:"dfastman@fakemail.com", password:"password" }])
};

seedDatabase();