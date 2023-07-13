const { Post } = require('../models');

const postData = [
  {
    title: 'The Future of Artificial Intelligence',
    body: 'Discover the latest advancements in artificial intelligence and how they are shaping the future of technology.',
    user_id: 1
  },
  {
    title: 'Top Programming Languages for Web Development',
    body: 'Explore the most popular programming languages used in web development and their unique features.',
    user_id: 2
  },
  {
    title: 'The Rise of Blockchain Technology',
    body: 'Learn about the revolutionary potential of blockchain technology and its impact on various industries.',
    user_id: 3
  },
  // Add more post objects as needed
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
