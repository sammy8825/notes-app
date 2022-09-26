import React from "react";
import Note from "./Note";
import { Grid } from '@mui/material';
import { FaPlus } from 'react-icons/fa';


export default function App() {
    const [note, addNote] = React.useState([<Grid item md={4} key={0}>
        <Note />
    </Grid>]);

    function addNewNote() {
        addNote(notes => [<Grid item md={4} key={note.length}>
            <Note />
        </Grid>, ...notes]);
    }

    return (
        <>
            <button onClick={addNewNote}><FaPlus /></button>
            <Grid container spacing={2}>
                {note}
            </Grid>
        </>
    );
}
