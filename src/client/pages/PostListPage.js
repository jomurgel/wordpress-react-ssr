import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	renderUsers() {
		console.log( this.props );
		return this.props.posts.map( post => {
			return <li key={ post.id }>{ post.title.rendered }</li>;
		});
	}

	render() {
		return (
			<div>
				<ul>
					{ this.renderUsers() }
				</ul>
			</div>
		);
	}
}

const mapStateToProps = ( state ) => {
	return { posts: state.posts }
}

const loadData = ( store ) => {
	return store.dispatch( fetchPosts() );
}

export default {
	loadData,
	component: connect( mapStateToProps, { fetchPosts } )( PostList )
};
