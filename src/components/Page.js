import React from "react";
import Note from "./Note";
import { Grid } from '@mui/material';


export default function App() {
    const [note, addNote] = React.useState([<Grid item md={4} key={0}>
        <Note />
    </Grid>]);
    function addNewNote() {
        addNote(notes => [...notes, <Grid item md={4} key={note.length}>
            <Note />
        </Grid>]);
    }

    return (
        <>
            <button onClick={addNewNote}>Add a new note+</button>
            <Grid container spacing={2}>
                {note}
            </Grid>
        </>
    );
}
