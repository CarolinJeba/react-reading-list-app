import React, {useState} from 'react';

const SongForm = ({addSong}) => {

    const [title, setTitle] = useState('');

    const titleSubmitHandler = (event) => {
        event.preventDefault();
        addSong(title);
        setTitle(''); //only to clear the input field
    }
    
    return (
        <form onSubmit={titleSubmitHandler}>
            <label>Add Song form</label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}
            />
            <input type="submit" value = "Add Title to Song List" />
        </form>
    );
}

export default SongForm;