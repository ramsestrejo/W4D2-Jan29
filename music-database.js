
module.exports = ( function ( ) {

	const pg = require( 'pg');
	const cfg = require( './config' );

	const config = {
		host : cfg.host,
		port : cfg.port,
		database : cfg.database,
		user : cfg.user,
		password : cfg.password
	};

	const client = new pg.Client( config );

	client.connect( );

	function displayResults( err , results ) {
		console.log( results.rows );
	}

	function getAlbums( callback ) {
		client.query( `SELECT * FROM albums` , 
			[] , callback );
	}

	function getAlbumByTitle( title , callback ) {
		client.query( `SELECT * FROM albums 
			WHERE title = $1::text` ,
		[ title ] , callback );
	}

	function getArtistByAlbumTitle( title , callback ) {
		client.query( `SELECT * FROM artists art 
			JOIN albums alb
			ON art.id = alb.artist_id
			WHERE alb.title = $1::text` , [ title ] , callback );
	}

	function getTracksByAlbumTitle( title , callback ) {
		client.query( `SELECT t.* FROM tracks t JOIN albums a
			ON t.album_id = a.id 
			WHERE a.title = $1::text` , [ title ] , callback );
	}

	function close( ) {
		client.end( );
	}

	return {
		getAlbums : getAlbums,
		getAlbumByTitle : getAlbumByTitle,
		getArtistByAlbumTitle : getArtistByAlbumTitle,
		getTracksByAlbumTitle : getTracksByAlbumTitle,
		close : close
	}
	// getAlbums( );
	// getAlbumByTitle( 'Classics' );
	// getArtistByAlbumTitle( 'Classics' , displayResults );
	// getTracksByAlbumTitle( 'Classics' , displayResults )
})()




