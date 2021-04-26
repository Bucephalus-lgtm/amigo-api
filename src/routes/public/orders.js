const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const {
    create
} = require("../controllers/order");

router.post("/order/create/:userId", create);

router.param("userId", userById);

module.exports = router;