var Ranger = require('../models/ranger');

module.exports = {
  index,
  create
};

async function index(req, res) {
  try{
      const rangers = await Ranger.find({});
      res.status(200).json(rangers);
  }
  catch(err){
      res.status(500).json(err);
  }
}

async function create(req, res) {
  console.log('user: ', req.user)
  try {
    const ranger = await Ranger.create(req.body);
    res.status(201).json(ranger);
  }
  catch(err){
    res.status(500).json(err);
  }
}
