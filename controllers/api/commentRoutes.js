const router = require('express').Router();
const { Comment } = require('../../models');
const Authorize = require('../../utils/auth');

router.post('/', Authorize, async (req, res) => {
  const body = req.body;
  try {
    const newCom = await Comment.create({
      ...body,
      user_id: req.session.user_id,
    });
    res.json(newCom);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
