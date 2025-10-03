const Lana = {Song: "Summertime Sadness",
        Artist: "Lana Del Rey" ,
        Genre: "Pop",
        Duration: 200,
        SongII: "High by the Beach",
        DurationII: 350,
        GenreII: "rock"
    };
const taylor = {song: "august",
    Artist: "Taylor Swift",
    Genre: "mellow",
    Duration: 300
}
const Phoebe = {song: "Motion sickness",
    artist: "Phoebe Bridgers",
    Genre: "Rock",
    Duration: 400
}
const Melanie = {songs: "Mad Hatter",
    artist: "Melanie Martinez",
    Genre: "Pop",
    Duration: 231,
    songII: "Training Wheels",
    GenreII: "mellow",
    DurationII: 251
}
function playlist (){
    let songs = [Lana.Song + " by " + Lana.Artist, 
        taylor.song + " by " + taylor.Artist, 
        Phoebe.song + " by " + Phoebe.artist,
        Lana.SongII + " by " + Lana.Artist,
        Melanie.songs + " by " + Melanie.artist,
        Melanie.songII + " by " + Melanie.artist
    ];
    console.log("PLAYLIST")
    for (songss of songs) {
        console.log(songss);
    }
}
function total () {
    const total = (Lana.Duration + 
        Lana.DurationII + 
        taylor.Duration +
        Phoebe.Duration +
        Melanie.DurationII +
        Melanie.Duration
    );
    console.log(`TOTAL DURATION OF THE PLAYLIST: ${total} seconds`)
}
function genre () {
    console.log("GENRES");
    console.log(`POP: ${Lana.Song}, ${Melanie.songs}`)
    console.log(`ROCK: ${Lana.SongII}, ${Phoebe.song}`)
    console.log(`MELLOW: ${Melanie.songII}, ${taylor.song}`)
}
function longest () {
    console.log(`LONGEST SONG: ${Phoebe.song} ${Phoebe.Duration} seconds`)
}
function group () {
    console.log("GROUPED BY ARTISTS")
    console.log(`${Lana.Artist}: ${Lana.Song}, ${Lana.SongII}`)
    console.log(`${Phoebe.artist}: ${Phoebe.song}`)
    console.log(`${Melanie.artist}: ${Melanie.songs}, ${Melanie.songII}`)
    console.log(`${taylor.Artist}: ${taylor.song}`)
}
playlist();
total();
genre();
longest();
group();