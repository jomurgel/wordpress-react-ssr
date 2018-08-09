import React from 'react';
import HomePage from './pages/HomePage';
import PostListPage from './pages/PostListPage';

export default [
	{
		...HomePage,
		path: '/',
		exact: true
	},
	{
		...PostListPage,
		path: '/posts',
	}
];
