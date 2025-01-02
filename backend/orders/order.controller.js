
const createAOrder = async() =>{
  try {
     const newOrder = await OrderedBulkOperation(req.body);
     const saveOrder = await newOrder.save();
     res.status(200).json(saveOrder);
  } catch (error) {
    console.log("Error creating order", error);
    res.status(500).json({
      message: "Failed to create order"
    });    
  }
};

module.exports = {
  createAOrder,
}