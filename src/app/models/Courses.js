var mongooseDelete = require('mongoose-delete');
const mongoose = require('mongoose');
var slug = require('mongoose-slug-updater');

const { Schema } = require('mongoose');

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String, required: true },
    level: { type: String },
  },
  // automatic update created time
  { timestamps: true },
);

// add plugin
mongoose.plugin(slug);

// import plugin soft delete function
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);
