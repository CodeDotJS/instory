import test from 'ava';
import m from './';

test('getId', async t => {
	const item = await m('9gag');
	t.is(item.story[0], item.story[0]);
});
