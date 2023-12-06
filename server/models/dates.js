const mongoose = require("mongoose");

const schema = mongoose.Schema;

const datesSchema = new schema({
  dates: {
    date: { type: String },
    times: [String],
  },
});

const dates = mongoose.model('dates', datesSchema);

module.exports = dates;