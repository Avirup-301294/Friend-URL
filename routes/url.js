// Initializing packages
const express = require("express");
const validUrl = require("valid-url");
const shortid = require("shortid");
require('dotenv').config();
config   = require('config');
const Url = require("../models/Url");
const router = express.Router();

// @route   POST /api/url/shorten
// @desc    Create short url
router.post('/shorten', async (req, res) => {
	const { longUrl } = req.body;
	const baseUrl = config.get('baseUrl');

	// check base url
	if(!validUrl.isUri(baseUrl)){
		return res.status(401).json('Invalid Base Url');
	}
	// create url code
	const urlCode = shortid.generate();

	//check long url
	if(validUrl.isUri(longUrl)){
		try{
			let url= await Url.findOne({longUrl});
			if(url){
				res.json(url);
			}else{
				const shortUrl = baseUrl + '/' + urlCode;

				url = new Url({
					longUrl,
					shortUrl,
					urlCode,
					date: new Date()
				});
				await url.save();
				res.json(url);
			}
		}catch(err){
			console.log(err);
			res.status(500).json('server error');
	}
	} else{
		res.status(401).json('Invalid Long Url')
	}
});

module.exports = router;
