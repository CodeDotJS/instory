'use strict';

const got = require('got');

module.exports = (username, exclude) => {
	const url = `https://api.storiesig.com/stories/${username}`;

	const obx = {
		image: 'jpg',
		video: 'mp4'
	};

	return got(url, {json: true}).then(res => {
		const base = res.body.items;

		const stories = {story: []};
		const pack = [];

		for (let i = 0; i < base.length; i++) {
			base[i].video_versions === undefined ? stories.story.push(base[i].image_versions2.candidates[0].url) : stories.story.push(base[i].video_versions[0].url); // eslint-disable-line no-unused-expressions
		}

		if (exclude) {
			stories.story.map((x, i) => { // eslint-disable-line array-callback-return
				pack[i] = x;
			});

			const feed = pack.filter(urls => urls.indexOf(obx[exclude]) === -1);

			return feed;
		}
		return stories;
	});
};
