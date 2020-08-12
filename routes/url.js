// Initializing packages
const express = require("express");
const validUrl = require("valid-url");
const shortid = require("shortid");
require('dotenv/config');

const Url = require("../models/Url");
const router = express.Router();

config   = require('config');

// @route   POST /shorten
// @desc    Create short url

router.post('/shorten', (req, res) => {
	const { longUrl } = req.body;
	const baseUrl = config.get('baseUrl');
	// Checking if user is trying to shorted our URL
    if (longUrl.includes(baseUrl)) {
        return res.status(422).json({ msg: "Don't try to shorten our URL", statusCode: 422 });
    }
	// check base url
	if(!validUrl.isUri(baseUrl)){
		return res.status(401).json({ msg: "Internal Server Error", statusCode: 500 });
	}
	// create url code
	const urlCode = shortid.generate();
	//check long url
	if(validUrl.isUri(longUrl)){
			Url.findOne({longUrl})
			.then(url => {
			if(url){
				return res.status(200).json({ msg: "Success", statusCode: 200, url });
			}else{
				const shortUrl = baseUrl + '/' + urlCode;

			const	newurl = new Url({
					longUrl,
					shortUrl,
					urlCode
				});
				newurl.save()
				.then(url =>
					res.status(200).json({ msg: "Success", statusCode: 200, url })
				)
				.catch(err =>
					res.status(500).json({msg: "Internal Server Error",statusCode: 500,err})
				 );
			}
		})
		.catch(err => {
        console.log(err);
          res.status(500).json({msg: "Internal Server Error",statusCode: 500,err});
      });
    } else {
        res.status(422).json({ msg: "Invalid URL", statusCode: 422 });
    }
});

module.exports = router;
