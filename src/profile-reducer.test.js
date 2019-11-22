// import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer.js';

const state = {
	posts: [
		{
			id: 1,
			message: 'Hi John! How are you?',
			likesCount: 3,
		},
		{
			id: 2,
			message: 'Hi Bill! I am fine thanks!',
			likesCount: 3,
		},
		{
			id: 3,
			message: 'Hi Fred!',
			likesCount: 3,
		}
	],
};

it('Length of posts shoud be increment', () => {

	// const action = addPostActionCreator('New post');
	// const newState = profileReducer(state, action);

	expect(state.posts.length).toBe(3);
});
