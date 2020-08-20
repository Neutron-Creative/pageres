'use strict';
const utils = require('./utils');

module.exports = type => {
	if (typeof type !== 'string') {
		return Promise.reject(new TypeError(`Expected a \`string\`, got \`${typeof type}\``));
	}

	if (utils.types.indexOf(type) === -1) {
		return Promise.reject(new Error(`Type '${type}' doesn't exist`));
	}

	return utils.load()
		.then(stats => {
			if (stats[type].length === 0) {
				throw new Error(`Couldn't get any ${type}`);
			}

			return stats[type];
		})
		.catch(err => {
			if (data[type]) {
				return data[type];
			}

			throw err;
		});
};


const data = {
	"timestamp": "2016-06-15T13:20:48.447Z",
	"stats": {
		"browser": [
			{
				"item": "Chrome 50",
				"percent": "32.72%"
			},
			{
				"item": "Safari 9",
				"percent": "10.09%"
			},
			{
				"item": "Chrome 49",
				"percent": "9.04%"
			},
			{
				"item": "Firefox 46",
				"percent": "5.97%"
			},
			{
				"item": "IE 11",
				"percent": "5.74%"
			},
			{
				"item": "Chrome 38",
				"percent": "2.21%"
			},
			{
				"item": "Android 4",
				"percent": "2.17%"
			},
			{
				"item": "Chrome 29",
				"percent": "1.94%"
			},
			{
				"item": "UC 10",
				"percent": "1.65%"
			},
			{
				"item": "IE 9",
				"percent": "1.55%"
			}
		],
		"os": [
			{
				"item": "Windows 7 ",
				"percent": "21.57%"
			},
			{
				"item": "iOS 9",
				"percent": "16.86%"
			},
			{
				"item": "Android 4",
				"percent": "13.42%"
			},
			{
				"item": "Android 5",
				"percent": "11.82%"
			},
			{
				"item": "Windows 10 ",
				"percent": "9.18%"
			},
			{
				"item": "Windows 8.1 ",
				"percent": "4.78%"
			},
			{
				"item": "Mac OS X",
				"percent": "3.31%"
			},
			{
				"item": "iOS 8",
				"percent": "3.30%"
			},
			{
				"item": "Android 6",
				"percent": "3.02%"
			},
			{
				"item": "Windows XP ",
				"percent": "3.02%"
			}
		],
		"res": [
			{
				"item": "1366x768",
				"percent": "16.40%"
			},
			{
				"item": "640x360",
				"percent": "15.90%"
			},
			{
				"item": "1024x768",
				"percent": "8.41%"
			},
			{
				"item": "568x320",
				"percent": "7.44%"
			},
			{
				"item": "667x375",
				"percent": "6.66%"
			},
			{
				"item": "1920x1080",
				"percent": "6.21%"
			},
			{
				"item": "1280x800",
				"percent": "3.03%"
			},
			{
				"item": "1600x900",
				"percent": "2.84%"
			},
			{
				"item": "1280x1024",
				"percent": "2.71%"
			},
			{
				"item": "736x414",
				"percent": "2.67%"
			}
		]
	}
};
