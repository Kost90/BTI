const dates = require("../models/dates");

const getDates = async (req, res) => {
  console.log(req)
  try {
    const result = await dates.find();
    console.log(result)
      return res.json(result);
  } catch (err) {
    return res.send("Dates not found");
  }
};

const addDate = async (req, res) => {
  console.log(req.body);
  const newDateValue = req.body.date;
  const existingDate = await dates.findOne({ date: newDateValue });
  if (existingDate) {
    const result = await dates.findByIdAndUpdate(existingDate._id, {
      $push: { times: req.body.times[0] },
    });
    // const updatedDate = await dates.findById(existingDate._id);
    return res.status(200).json(result);
  } else {
    const date = new dates(req.body);
    await date.save();
    return res.status(201).json(date);
  }
};

module.exports = {
  getDates,
  addDate,
};
