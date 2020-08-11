const mongoose = require('mongoose'),
      config = require('config'),
	     db = process.env.DATABASEURL || config.get('mongoURI');
       console.log(process.env.DATABASEURL);
const connectDB = async () => {
	try {
		await mongoose.connect(db, {
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
