const Customer = require('../models/customer');

exports.userById = (req, res, next, id) => {
    Customer.findById(id).exec((err, customer) => {
        if (err || !customer) {
            return res.status(400).json({
                error: 'Customer not found'
            });
        }
        req.customer = customer;
        next();
    });
};