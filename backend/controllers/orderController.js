const Order = require("./../models/orderModel");
const factory = require("./handlerFactory");

exports.createOneOrder = factory.createOne(Order);
exports.getOneOrder = factory.getOne(Order);
// exports.getOneOrder = factory.getOne(Order, {
//   path: "user_virtual",
//   select: "-__v",
// });
exports.getAllOrders = factory.getAll(Order);
exports.updateAOrder = factory.updateOne(Order);
exports.deleteAOrder = factory.deleteOne(Order);

exports.createOne = async (data) => {
  const doc = await Order.create(data);
};
