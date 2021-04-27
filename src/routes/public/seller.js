const express = require("express");
const Seller = require("../../models/seller");
const router = express.Router();

router.get("/get/all/sellers", async (req, res) => {
    const sellers = await Seller.find();
    return res.json({ sellers });
});

module.exports = router;