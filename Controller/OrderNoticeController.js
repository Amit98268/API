const OrderNotice = require("../models/input_Schema");

exports.create = async (req, res) => {

    const user = new OrderNotice({
        company: req.body.company,
        remark: req.body.remark,
    });

    try {
        const newUser = await user.save()
        res.status(200).json({ newUser });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.get = async (req, res) => {
    const stock = await OrderNotice.findOne(req.params.purchaseNumber);
    res.json({ res: stock });
}

