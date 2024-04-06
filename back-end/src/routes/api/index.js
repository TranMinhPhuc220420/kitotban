const express = require('express');
const postRoutes = require('./post.route');
const businessRoutes = require('./business.route');

const router = express.Router();

router.use('/posts', postRoutes);
router.use('/business', businessRoutes);

module.exports = router;
