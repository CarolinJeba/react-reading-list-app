import React, { useState } from 'react';

const SongList = () => {

    const [songs, setSongs] = useState([{ title: "Because He lives, I can face tomorrow.", id: 1 }, { title: "God will take care of you.", id: 2 }]);

    const onClickAddSong = () => {
        setSongs([...songs, { title: "Amazing Grace", id: 3 }])
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
            <button className="add-song" onClick={onClickAddSong}> Add Song </button>
        </div>
    );
}

export default SongList;