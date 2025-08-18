const Subscriber = require('../models/subscriber');

// Getting all subscribers
const getAllSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Getting one subscriber
const getSubscriberById = (req, res) => {
    res.json(res.subscriber);
};

// Creating one subscriber
const createSubscriber = async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel,
    });
    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Updating one subscriber
const updateSubscriber = async (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name;
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
    }
    try {
        const updatedSubscriber = await res.subscriber.save();
        res.json(updatedSubscriber);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Deleting one subscriber
const deleteSubscriber = async (req, res) => {
    try {
        await res.subscriber.deleteOne();
        res.json({ message: 'Deleted Subscriber' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllSubscribers,
    getSubscriberById,
    createSubscriber,
    updateSubscriber,
    deleteSubscriber
};

