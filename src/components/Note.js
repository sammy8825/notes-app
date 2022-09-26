import React from "react";
import { FaRegBookmark, FaBookmark, FaRegTimesCircle } from "react-icons/fa";

export default function Notes(props) {
    const [saved, changeSave] = React.useState(false);

    function handleClick() {
        changeSave(!saved);
        if (!saved) props.saveNote(props.id);
    }

    function handleDelete() {
        props.deleteNote(props.id);
    }
    return (
        <div className="sticky-notes" id={props.id}>
            <p>
                <button onClick={handleClick}>
                    {saved ? <FaBookmark /> : <FaRegBookmark />}
                </button>
                <button onClick={handleDelete} className="delete"> <FaRegTimesCircle /></button>
            </p>
            <input type="text" placeholder="Enter your title here" />
            <textarea placeholder="Enter your notes here" />

        </div>
    )
}