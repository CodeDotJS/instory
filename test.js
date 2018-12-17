import test from 'ava';
import m from './';

test('getId', async t => {
	const item = await m('9gag');
	t.is(item.story[0], item.story[0]);
});

test('exclude', async t => {
	const item = await m('9gag', 'image');
	t.is(item[0], item[0]);
});
