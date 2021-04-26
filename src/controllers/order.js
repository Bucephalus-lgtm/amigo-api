const { Order } = require('../models/order');

exports.create = (req, res) => {
    console.log(req.body);
    req.body.order.user = req.customer;
    const order = new Order(req.body.order);
    order.save((error, data) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        res.json(data);
    });
};