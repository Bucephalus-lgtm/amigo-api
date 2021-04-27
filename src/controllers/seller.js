const Seller = require('../models/seller');

exports.get_all_sellers = async (req, res) => {
    const sellers = await Seller.find();
    return res.json({ sellers });
}

exports.seller_by_id = async (req, res) => {
    const seller = await Seller.findById(req.params.id);
    return res.json({ seller });
}