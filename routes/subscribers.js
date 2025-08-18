const express = require('express');
const router = express.Router();
const { 
    getAllSubscribers, 
    getSubscriberById, 
    createSubscriber, 
    updateSubscriber, 
    deleteSubscriber 
} = require('../controllers/subscribersController');
const getSubscriber = require('../middlewares/getSubscriber');

// Getting all 
router.get('/', getAllSubscribers);

// Getting one
router.get('/:id', getSubscriber, getSubscriberById);

// Creating one
router.post('/', createSubscriber);

// Updating one
router.patch('/:id', getSubscriber, updateSubscriber);

// Deleting one
router.delete('/:id', getSubscriber, deleteSubscriber);

module.exports = router;