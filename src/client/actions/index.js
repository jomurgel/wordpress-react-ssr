import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const fetchPosts = () => async dispatch => {

	const response = await axios.get( 'https://webdevstudios.com/wp-json/wp/v2/posts' );

	dispatch({
		type: FETCH_POSTS,
		payload: response
	});
};
