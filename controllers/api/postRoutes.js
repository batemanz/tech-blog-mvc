const router = require('express').Router();
const { Post } = require('../../models');
const Authorize = require('../../utils/auth');

router.post('/', Authorize, async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const newPost = await Post.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', Authorize, async (req, res) => {
  try {
    const [updatedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updatedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', Authorize, async (req, res) => {
  try {
    const updatedRows = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (updatedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
