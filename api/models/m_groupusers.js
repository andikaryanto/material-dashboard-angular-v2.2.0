const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let M_groupusers = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
},{
    collection: 'M_groupusers'
});

module.exports = mongoose.model('M_groupusers', M_groupusers);