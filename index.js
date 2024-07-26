// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop"},
    { title: "U Got It Bad", artist: "Usher", genre: "R&B"},
    { title: "Pantsula 4 Life", artist: "Booga Luv", genre: "Kwaito"},
    { title: "Zonke", artist: "Booga Luv", genre: "Kwaito"},
    { title: "Akekh'Ugogo", artist: "Mzekezeke", genre: "Kwaito"}
]; 


// Object containing each Guardian's preferred genre

const guardians = [
    {user: "Star-Lord", prefered: "Rock"},
    {user: "Gamora", prefered: "Pop"},
    // Add preferences for Drax, Rocket, and Groot
    {user: "Drax", prefered: "R&B"},
    {user: "Rocket", prefered: "Rock"},
    {user: "Groot", prefered: "Pop"}
];
console.log(guardians);

// My playlist keeps generating forever!!! 
// LORD HAVE MERCY.... It's finnally showing, just need to match it to guardians!!!!!!!
// Function to generate playlist based on preferred genre

function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    //const songGenres = songs.map(playlist => playlist.genre)
    //const createPlaylist = guardians.map(newPlaylist => newPlaylist.prefered)
    const playlists = document.getElementById('#playlist');
    //playlists.innerHTML = "";

    const playlistByGenre = songs.map(items => {
      const container = {};

      container[items.title] = items.genre;

      return container;

    })
console.log(playlistByGenre);



};


// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
//Try Out Method
//let actorNames = actorsList.map(actor => actor.name);
//console.log(actorNames);

/*
3. **Generate Playlists**: Implement the `generatePlaylist` function. Use the `map()` function to create a personalized playlist for each Guardian based on their genre preference.
4. **Display Playlists**: Dynamically create and append elements to the `#playlists` div to display each Guardian's playlist. Include the Guardian's name and their list of songs.
*/

 //Here I was trying to send plaaylist to html
 


/* Tried this and I was just confusing nyself
const playlistByGenre = songs.map(songs => {
      const  guardians = ["Star-Lord"];

        guardians[songs.title] = songs.genre;
    });
    console.log("Playlist by genre: " + generatePlaylist(guardians, songs));
*/