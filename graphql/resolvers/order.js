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
    createOrder: async (parent, { movies }) => {
      const newOrder = new Order({
        user: '5c89a35223d5d341e0170814',
        movies: movies
      });

      try {
        const result = await newOrder.save();
        const actualResult = Order.findById(result.id).populate('user movies');
        return actualResult;
      } catch (error) {
        throw error;
      }
    }
  }
};
