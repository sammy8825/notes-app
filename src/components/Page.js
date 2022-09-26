import React from "react";

import Note from "./Note";
import WelcomePage from "./WelcomePage"

import { Grid } from '@mui/material';
import { FaPlus } from 'react-icons/fa';

import { nanoid } from "nanoid";


export default function App() {

    const [notes, setNote] = React.useState([]);

    function saveNote(id) {
        setNote(note => {
            let savedNote;
            for (let i = 0; i < note.length; i++) {
                console.log(note[i].key);
                if (note[i].key === id)
                    savedNote = note[i];
            }
            return [savedNote, ...note.filter(n => n.key !== id)];
        });
    }

    function deleteNote(id) {
        setNote(note => {
            return note.filter(n => n.key !== id);
        })
    }

    function newNote() {
        let id = nanoid();
        return (
            <Grid item md={4} key={id}>
                <Note id={id} deleteNote={deleteNote} saveNote={saveNote} />
            </Grid>
        )
    }

    function addNewNote() {
        setNote(note => [newNote(), ...note]);
    }

    return (
        notes.length === 0 ? <WelcomePage addNewNote={addNewNote} /> :
            <>
                <nav>
                    <p>Notes</p>
                    <button onClick={addNewNote}><FaPlus /></button>
                </nav>
                <Grid container spacing={2}>
                    {notes}
                </Grid>
            </>
    );
}
