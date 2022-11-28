const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  try {
    const tags = Tag.findAll({
      include: [{ model: Product, through: ProductTag }]
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  try {
    const tags = Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }]
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const tags = Tag.create(req.body);

    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tags = Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tags) {
      res.status(404).json({ message: 'No tag found with that ID' });
      return;
    }
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const tags = Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tags) {
      res.status(404).json({ message: 'No tag found with that ID' });
      return;
    }
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
