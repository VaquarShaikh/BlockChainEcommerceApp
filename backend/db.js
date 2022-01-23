const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://test:test12345@blockchain-ecommerce-shard-00-00.gl833.mongodb.net:27017,blockchain-ecommerce-shard-00-01.gl833.mongodb.net:27017,blockchain-ecommerce-shard-00-02.gl833.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-150i0y-shard-0&authSource=admin&retryWrites=true&w=majority',
  {useNewUrlParser: true, useUnifiedTopology: true},
);

const paymentSchema = new mongoose.Schema({
  id: String,
  itemId: String,
  paid: Boolean
});
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
  Payment
};
