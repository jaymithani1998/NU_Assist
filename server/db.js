const mongoose = require("mongoose");

//Create Connection with MongoDB using Mangoose
module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.DatabaseURL, connectionParams);
		console.log("Connected to database successfully");
	} 

	catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
