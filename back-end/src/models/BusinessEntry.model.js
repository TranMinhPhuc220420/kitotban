const mongoose = require('mongoose');

/**
 * Schema
 */
const BusinessEntrySchema = new mongoose.Schema({
  // name_space: {
  //   type: String,
  //   required: true,
  // },
  name: {
    type: String,
    required: true,
  },
  cancel_date: {
    type: Date,
    required: true,
  }
}, {
  timestamps: true,
});

/**
 * Methods
 */
BusinessEntrySchema.method({});

/**
 * Statics
 */
BusinessEntrySchema.statics = {};

module.exports = mongoose.model('BusinessEntry', BusinessEntrySchema);
