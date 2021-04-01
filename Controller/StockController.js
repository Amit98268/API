const stock = require("../models/Stock_M");
const mongoose  = require('mongoose');


exports.create = async (req, res) => {

    const user = new stock({

        orderId: req.body.orderId,
        deliveryDate: req.body.deliveryDate,
        note: req.body.note,
        select_product: req.body.select_product,
        company: req.body.company,
        grade: req.body.grade,
        topcolor: req.body.topcolor,
        coatingnum: req.body.coatingnum,
        temper: req.body.temper,
        guardfilm: req.body.guardfilm,
        thickness: req.body.thickness,
        width: req.body.width,
        length: req.body.length,
        pcs: req.body.pcs,
        weight: req.body.weight,
        rate: req.body.rate,
        gst: req.body.gst,
        products: req.body.products,
        batch_number: 'batch'+ req.body.products +req.body.gst,

    });
    try {
        const newUser = await user.save();
        res.status(201).json({ "status": 200, "msg":  'Sucessfully created', newUser });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


   //--------get----- aggregation-------------


    // exports.get = async (req, res) => {
    //     // Rest of the code will go here
    //     const userList = await stock.aggregate([
    //         { $match: { _id: new mongoose.Types.ObjectId(req.params.id) } },
    //         {
    //             $lookup:
    //             {
    //                 from: 'clients',
    //                 localField: 'oId',
    //                 foreignField: 'firmName',
    //                 as: 'orderdetails'
    //             }
    //         }
    //     ]);
    //     res.json({ "status": 200, "message": 'data has been fetched', res: userList });
    // }


// get
exports.get = async (req, res) => {
    const StockList = await stock.find(req.params.id);
    res.json({ "status": 200, "msg": 'data has been fetched', res: StockList });
}

//get by id 


// get
exports.getbyid = async (req, res) => {
    const StockList = await stock.findById(req.params.id);
    res.json({ "status": 200, "msg": 'data has been fetched', res: StockList });
}

/*
exports.getbyid = async (req, res) => {
    const Stockbyid = await stock.findById(req.params.id);
    res.json({"status": 200, "msg": 'data has been fetched', res: Stockbyid });
}
*/


//pagination 
exports.allRecords = async (req, res) => {
    try {
        const resPerPage = 10; // results per page
        const page = req.params.page || 1; // Page 
        const userList = await stock.find().skip((resPerPage * page) - resPerPage).limit(resPerPage);

        res.json({ userList })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


// edit /update
exports.edit = async (req, res) => {
    try {
        const updatebyid = await stock.findOneAndUpdate(req.params.id).exec();
        updatebyid.set(req.body);
        var result = await updatebyid.save();
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}




// DElete by ID
exports.delete = async (req, res) => {
    try {
        await stock.findOneAndDelete(req.params.id).deleteOne();
        res.json({ message: "eNTRY has been deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}



