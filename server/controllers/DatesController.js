const dates = require("../models/dates");

const getDates = async (req, res) => {
  try {
    const result = await dates.find();
    if (result != null) {
      return res.json(result);
    }
  } catch (err) {
    return res.send("Login user not found");
  }
};

const addDate = async(req,res) => {
    const newDateValue = req.body.dates.date;
    const existingDate = await dates.findOne({'dates.date':newDateValue})
    if(existingDate){
        await dates.findByIdAndUpdate(existingDate._id,{$push:{'dates.times': req.body.dates.times[0]}})
        return res.status(200).json({ message: 'Date updated successfully.' })
    }else{
        const date = new dates(req.body);
        date
        .save()
        return res.status(201).json({ message: 'Date added successfully.' });
    }
}

module.exports = {
  getDates,
  addDate,
};
