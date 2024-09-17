const router = require('express').Router();
const { Post, User } = require('../models');

// Route to get user's posts and render the dashboard
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', { posts, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
