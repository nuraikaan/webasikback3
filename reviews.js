const router = require('express').Router();
const auth = require('../middleware/auth');
const Review = require('../models/review');

router.get('/:productId', async (req, res) => {
  const reviews = await Review.find({ product: req.params.productId });
  res.json(reviews);
});

router.post('/:productId', auth, async (req, res) => {
  const review = new Review({
    product: req.params.productId,
    rating: req.body.rating,
    comment: req.body.comment
  });
  await review.save();
  res.status(201).json(review);
});

module.exports = router;
