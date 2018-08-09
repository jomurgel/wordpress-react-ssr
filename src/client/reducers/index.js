import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

// Essentially our store.
export default combineReducers({
	posts: postsReducer
});
