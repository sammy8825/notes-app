import React from "react";
import { FaRegBookmark, FaBookmark, FaRegTimesCircle } from "react-icons/fa";

export default function Notes(props) {
    const [saved, changeSave] = React.useState(false);

    function handleClick() {
        changeSave(!saved);
    }
    return (
        <div className="sticky notes" style={{ border: "1px solid black", display: "flex", flexDirection: "column", padding: "1% 3%" }}>
            <p style={{ textAlign: "end" }} onClick={handleClick}> {saved ? <FaBookmark /> : <FaRegBookmark />}</p>
            <input type="text" placeholder="Enter your title here" style={{ fontSize: "24px" }} />
            <textarea placeholder="Enter your notes here" style={{ display: "block", marginTop: "15px", height: "25vh", border: "none" }} />
            <button> <FaRegTimesCircle /></button>
        </div>
    )
}