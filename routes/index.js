const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const addContactController = require('../controllers/addContactController');
const deleteContactController = require('../controllers/deleteContactController');

//routing individual task which is done by user
router.get('/',mainController.main);
router.post('/add-contact',addContactController.addContact);
router.get('/delete-contact/',deleteContactController.delete);

console.log("Router is running successfully");


module.exports = router;