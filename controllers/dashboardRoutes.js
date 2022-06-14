const router = require('express').Router();
const { Post } = require('../models');
const Authorize = require('../utils/auth');

router.get('/', Authorize, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('all-posts-admin', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    console.log(err);
    res.redirect('login');
  }
});

router.get('/new', Authorize, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard'
  });
});

router.get('/edit/:id', Authorize, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (postData) {
      const post = postData.get({ plain: true });
      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
