const express = require("express");
const router = express.Router();


const billing_Controller = require('../Controller/BillingController')

router.post("/post", billing_Controller.create);
router.get("/all", billing_Controller.getall);
router.get("/:id",billing_Controller.getid );
router.delete("/:id",billing_Controller.delete );



/*
router.get("/history/view_short/",billing_Controller.getall);
router.get("/history/full/",billing_Controller.getall);
router.get("/history/:id",billing_Controller.getid );
*/

module.exports = router;
