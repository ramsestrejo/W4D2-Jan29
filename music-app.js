const musicdb = require( './music-database.js' );

const title = process.argv[ 2 ];

function displayResults( err , results ) {
	console.log( results.rows );
}
// musicdb.getAlbums( displayResults );

musicdb.getAlbumByTitle( title , function ( err , 
	results ) {
	console.log ( 'Album title : ' , results.rows[ 0 ].title );
});

musicdb.getArtistByAlbumTitle( title , function( err ,

	results ) {
	console.log( 'Artist : ' , results.rows[ 0 ].name );
});

musicdb.getTracksByAlbumTitle( title , function( err , 
	results) {
	results.rows.forEach( function ( row ) {
		console.log( row.number , row.title );

	})
	musicdb.close( );
});









