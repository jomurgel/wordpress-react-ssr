import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer'
import createStore from './helpers/createStore';

const app = express();

// Allow public access to public directory.
app.use( express.static( 'public' ) );

// Send data to server.
app.get( '*', ( req, res ) => {

	// Register store.
	const store = createStore();

	// Match route with request path.
	const promises = matchRoutes( Routes, req.path ).map( ( { route } ) => {

		// Call loadData if exists.
		return route.loadData ? route.loadData( store ) : null;
	});

	Promise.all( promises ).then( () => {

		// Send output to the server.
		res.send( renderer( req, store ) );
	});
});

app.listen( 3000, () => {
	console.log( 'Listening on port 3000' );
});
