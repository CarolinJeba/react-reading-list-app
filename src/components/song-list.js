import React, { useState, useEffect } from 'react';
import SongForm from './song-form'

const SongList = () => {

    const [songs, setSongs] = useState([{ title: "Because He lives, I can face tomorrow.", id: 1 }, { title: "God will take care of you.", id: 2 }]);    

    const [ number, setNumber ] = useState(1); // to learn how multiple useState can be added

    const AddSongHandler = (title) => {
        setSongs([...songs, { title, id: Math.random().toString() }])  // Math.random().toString() generates random and unique key 
    }

    /* region To learn how useEffect works on every render/re-render */

    useEffect(() => {
        console.log('Fired only when the dependency(songs) changes')
    }, [songs]);

    useEffect(() => {
        console.log(number);
        console.log('Fired only when the dependency(number) changes')
    }, [number]);

    /* end region*/

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
            
            <button onClick= {() =>{ setNumber(number + 1)}}> Add Song Number </button> 
        </div>
    );
}

export default SongList;


