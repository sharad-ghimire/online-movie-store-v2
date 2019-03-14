const Order = require('../../model/Order');
module.exports = {
  Query: {
    getOrder: async (parent, { id }) => {
      try {
        const order = await Order.findById(id);
        return order;
      } catch (error) {
        throw error;
      }
    },
    getAllOrders: async (parent, { userid }) => {
      try {
        const orders = await Order.find({ user: userid });
        return orders;
      } catch (error) {}
    }
  },
  Mutation: {
    createOrder: async (parent, { movieIds }) => {
      const newOrder = new Order({
        user: req.userId,
        movies: movieIds
      });
      try {
        const result = await newOrder.save();
        return result;
      } catch (error) {
        throw error;
      }
    }
  }
};
