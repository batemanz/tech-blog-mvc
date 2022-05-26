const router = require('express').Router();
const { Comment } = require('../../models/');
const Authorize = require('../../utils/auth');

router.get('/', Authorize, async (req, res) => {
  try {
    const comData = await Comment.findAll({
      include: [User],
    });
    const coms = comData.map((com) => com.get({ plain: true }));
    res.render('single-post', { coms, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', Authorize, async (req, res) => {
  const body = req.body;
  try {
    const newCom = await Comment.create({
      ...body,
      userId: req.session.userId,
    });
    res.json(newCom);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
