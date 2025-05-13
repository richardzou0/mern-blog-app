const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  tags: {
    type: [String],
    default: [],
    validate: [arrayLimit, '{PATH} exceeds the limit of 5']
  }
}, { timestamps: true });

function arrayLimit(val) {
  return val.length <= 5;
}

module.exports = mongoose.model('Post', postSchema);onst postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);

