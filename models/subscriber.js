const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedToChannel: {
    type: String,
    required: true,
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

// Default will use subscribers as collection name
const Subscriber = mongoose.model('Subscriber', subscriberSchema); 

// This would use the collection 'my_subscribers'
// const Subscriber = mongoose.model('Subscriber', subscriberSchema, 'my_subscribers');


module.exports = Subscriber;