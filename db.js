const mongoose = require('mongoose')

mongoose.connect(
	process.env.DB,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	err => {
		err ? console.log(err) : console.log(`Connected to ${process.env.DB}`)
	}
)

module.exports = mongoose
