const express = require('express');
const router = express.Router();
const request = require("request");

// GET from LocationBox Api's
router.get('/:api', function (req, res, next) {
	const apiurl = `http://www.locationbox.com.tr/locationbox/services?Cmd=${req.params.api}&Typ=JSON&Key=${global.key}&${req.url.split("?")[1]}`
	request(apiurl, function (err, resp, body) {
		if (err) {
			console.error(err);
			res.statusCode(404);
			next();
		} else {
			res.send(body);
		}
	});
});

module.exports = router;