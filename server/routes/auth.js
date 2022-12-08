//File to aunthenticate details entered by user

const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const JOI = require("joi");

//Create Route for post
router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const isValidPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!isValidPassword)
			return res.status(401).send({ message: "Invalid Email or Password. Please Enter correct details." });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "Logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});
router.post("/acc", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const isValidPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!isValidPassword)
			return res.status(401).send({ message: "Invalid Email or Password. Please Enter correct details." });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "Logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.get("/getAll", async (req, res) => {
	try {
		const user = await User.find({},  'email password')
		// console.log(user);
		return res.status(200).send(user);
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

//Validate data
const validate = (data) => {
	const schema = JOI.object({
		email: JOI.string().email().required().label("Email"),
		password: JOI.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;
