const express = require("express");
const { send_queries, receive_queries } = require("../../controllers/query");
const router = express.Router();

router.post("/send-queries", send_queries);
router.post("/receive-queries", receive_queries);
g
module.exports = router;