const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Blog.sync();
    await User.sync();

    const blog = await Blog.bulkCreate([{ contents:"These are the contents of a blog post", postTitle: "Post one", username: "thefastestman", dateCreated: new Date() }]);
    const user = await User.bulkCreate([{ username:"thefastestman", email:"dfastman@fakemail.com", password:"password" }])
};

seedDatabase();