// controllers/subscribersController.js

const Subscriber = require('../models/subscriber');

exports.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.render('subscribers', { subscribers });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSubscriptionPage = (req, res) => {
  res.render('contact');
};

exports.saveSubscriber = async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email
  });

  try {
    const newSubscriber = await subscriber.save();
    res.render('thanks');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
