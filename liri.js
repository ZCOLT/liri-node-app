require("dotenv").config();

var keys = require("./key")

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

// Enter Track Name: 
spotify.search({ type: 'track', query: process.argv[2] } , function (err, data) {
    if (err) {
    return console.log('Error ' + err);
}
// console.log(data.tracks.items[0])
console.log("Song Name: " + data.tracks.items[0].name)
console.log("Artist: " + data.tracks.items[0].artists[0].name);
console.log("Album: " + data.tracks.items[0].album.name)
console.log("Release Date: " + data.tracks.items[0].album.release_date);
console.log("Link: " + data.tracks.items[0].external_urls.spotify)
})