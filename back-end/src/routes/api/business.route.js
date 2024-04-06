const express = require('express');
const { validate } = require('express-validation');
const businessController = require('../../controllers/business.controller');
const businessValidation = require('../../validations/business.validation');

const router = express.Router();

// GET /api/posts
router.route('/')
  .get(businessController.get_list);

// POST /api/posts
router.route('/create')
  .post(businessValidation.createNew);

// GET /api/posts/:id
router.route('/:id')
  .get(businessController.show_list);

module.exports = router;
