const express = require("express");
const { get_all_sellers, seller_by_id } = require("../../controllers/seller");
const router = express.Router();

router.get("/get/all/sellers", get_all_sellers);

router.get("/seller/:id", seller_by_id);

module.exports = router;