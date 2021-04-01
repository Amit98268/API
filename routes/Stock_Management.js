const express = require("express");
const router = express.Router();

const Stock_Controller = require('../Controller/StockController');

router.post("/create", Stock_Controller.create);
router.get("/get", Stock_Controller.get);
router.get("/getby/:id", Stock_Controller.getbyid);
router.put("/edit/:id", Stock_Controller.edit);
router.delete("/delete/:id",Stock_Controller.delete);

module.exports = router;                         