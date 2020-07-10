import React, { useState } from 'react';
import SongForm from './song-form'

const SongList = () => {

    const [songs, setSongs] = useState([{ title: "Because He lives, I can face tomorrow.", id: 1 }, { title: "God will take care of you.", id: 2 }]);

    const AddSongHandler = (title) => {
        setSongs([...songs, { title, id: Math.random().toString() }])  // Math.random().toString() generates random and unique key 
    }

    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (
                        <li key={song.id}>{song.title}</li>
                    );
                })}
            </ul>
            <SongForm addSong = {AddSongHandler} />
        </div>
    );
}

export default SongList;


