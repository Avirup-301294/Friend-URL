const mongoose = require('mongoose'),
      config = require('config'),
	     db = config.get('mongoURI');
       var uri = process.env.MongoURI || db;
const connectDB = async () => {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log('MongoDB connected');
	  } catch(err){
		console.log(err.message);
		process.exit(1);
	}
}
module.exports = connectDB;
