const httpStatus = require('http-status');
const APIError = require('../utils/APIError');
const BusinessEntry = require('../models/BusinessEntry.model');
const { businessSerializer, businessCollectionSerializer } = require('../serializers/business.serializer');

exports.get_list = async (req, res, next) => {
  try {
    const business = await BusinessEntry.find();
    res.json(businessCollectionSerializer(business));
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    // console.log(req.body);
    // const business = new BusinessEntry(req.body);
    // const savedBusiness = await business.save();

    // res.json(businessSerializer(savedBusiness));
    res.json({})
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.show_list = async (req, res, next) => {
  try {
    const businessEntry = await BusinessEntry.findById(req.params.id);

    if (!businessEntry) {
      throw new APIError({
        status: httpStatus.NOT_FOUND,
        message: 'Business not found',
      });
    }
    res.json(businessSerializer(businessEntry));
  } catch (error) {
    next(error);
  }
};