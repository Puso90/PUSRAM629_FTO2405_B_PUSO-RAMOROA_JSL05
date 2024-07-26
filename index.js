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
    {user: "Drax", prefered: "R&B"},
    {user: "Rocket", prefered: "Rock"},
    {user: "Groot", prefered: "Pop"}
];



function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const playlists = document.getElementById('#playlist');
    //playlists.innerHTML = "";

    // This creates a portal to create a changed array 
    const playlistByGenre = guardians.map(guardians => {
        const newPlaylist = songs.filter(song => song.genre === guardians.prefered);
        return newPlaylist;
      });
console.log(playlistByGenre);
    };






// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);






//______________________________________________________________________________________________________________________________________________
// THOUGHTS/ COMMENTS:
/* 

      1.  Somehow, I still need to group the music to genres
      2.  My playlist keeps generating forever!!! 
      3.  LORD HAVE MERCY.... It's finnally showing, just need to match it to guardians!!!!!!!
      4.  Function to generate playlist based on preferred genre

*/

//______________________________________________________________________________________________________________________________________________

//TRY OUT METHOD:
/*
    1.  let actorNames = actorsList.map(actor => actor.name);
        console.log(actorNames);

    2.  I WAS VERY CLOSE HERE BEN ...

        Tried this and I was just confusing nyself
        
        const playlistByGenre = songs.map(songs => {
        const  guardians = ["Star-Lord"];

            guardians[songs.title] = songs.genre;
        });
        console.log("Playlist by genre: " + generatePlaylist(guardians, songs));

    3.  const songGenres = songs.map(playlist => playlist.genre)
        
    4.  const createPlaylist = guardians.map(newPlaylist => newPlaylist.prefered)

    5.  const playlistByGenre = guardians.map(guardians => {
        const newPlaylist = songs.filter(song => song.genre === guardians.prefered);
        return newPlaylist;
        });
        console.log(playlistByGenre);
        };
    
*/

//______________________________________________________________________________________________________________________________________________

/* INSTRUCTIONS

3. **Generate Playlists**: Implement the `generatePlaylist` function. Use the `map()` function to create a personalized playlist for each Guardian based on their genre preference.
4. **Display Playlists**: Dynamically create and append elements to the `#playlists` div to display each Guardian's playlist. Include the Guardian's name and their list of songs.

*/

//______________________________________________________________________________________________________________________________________________

// REFERENCE VIDEO THAT I USED...: MAP() METHOD
// https://www.youtube.com/watch?v=-6cYQNY6rok