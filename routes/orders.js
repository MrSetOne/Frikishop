const express = require('express');
const OrderController = require('../controllers/OrderController');
const router = express.Router();
const { authentication, isAdmin } = require('../middelware/authentication')


router.post('/', authentication, OrderController.create)
router.get('/', authentication, isAdmin, OrderController.getAll)
router.get('/id/:id', authentication, isAdmin, OrderController.getById)
router.put("/id/:id", authentication, OrderController.makeAPaid)


module.exports = router;