const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
  { username: 'john', password: 'password123' },
  { username: 'jane', password: 'password456' },
];

const postData = [
  { title: 'First Post', content: 'This is my first post!', user_id: 1 },
  { title: 'Second Post', content: 'This is another post!', user_id: 2 },
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
  });

  await Post.bulkCreate(postData);

  process.exit(0);
};

seedDatabase();
