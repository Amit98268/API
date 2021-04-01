const billing = require("../models/input_Schema");
exports.create = async (req, res) => {

    const user = new billing({
        orderId: req.body.orderId,
        company: req.body.company,
        contact: req.body.contact,
        name: req.body.name,
        Date: req.body.date,
        length: req.body.length,
        width: req.body.width,
        topColor: req.body.topColor,
        thickness: req.body.thickness,
        temper: req.body.temper,
        coating: req.body.coating,
        grade: req.body.grade,
        guardFilm: req.body.guardFilm,
        gst: req.body.gst,
        address: req.body.address,
    });

    try {
        const newUser = await user.save()
        res.status(200).json({ newUser });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
//get all oder multiple order - short detail

exports.getall = async (req, res) => {

    try{
    const userList = await billing.find(req.params.id);
    res.json({ "status": 200, "msg": 'data has been fetched', res: userList });
}
catch(err){res.status(400).json({ message: err.message });
}

}
//get

exports.getid = async (req, res) => {
    try{
    
    const userList = await billing.findById(req.params.id);
    res.json({ "status": 200, "msg": 'data has been fetched', res: userList });
}
catch(err){res.status(400).json({ message: err.message });
}

}


// by- id
exports.delete = async (req, res) => {
    try {
        await billing.findOneAndDelete(req.params.orderId).deleteOne();
        res.json({ message: "eNTRY has been deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}



//edit
exports.edit = async (req, res) => {
    try {
        const updatebyid = await billing.findOneAndUpdate(req.params.orderId).exec();
        updatebyid.set(req.body);
        var result = await updatebyid.save();
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
// Get PDf Function using NPM--------



