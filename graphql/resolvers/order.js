const Order = require('../../model/Order');
module.exports = {
  Query: {
    getOrder: async (parent, { id }, req) => {
      if (!req.isAuth) throw new Error('Unauthenticated!');
      try {
        const order = await Order.findById(id);
        return order;
      } catch (error) {
        throw error;
      }
    },
    getAllOrders: async (parent, { userid }, req) => {
      if (!req.isAuth) throw new Error('Unauthenticated!');
      try {
        const orders = await Order.find({ user: userid });
        return orders;
      } catch (error) {}
    }
  },
  Mutation: {
    createOrder: async (parent, { movies }, req) => {
      if (!req.isAuth) throw new Error('Unauthenticated!');
      const newOrder = new Order({
        user: req.userId,
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
