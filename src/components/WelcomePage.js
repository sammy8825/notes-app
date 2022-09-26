export default function WelcomePage(props) {
    return (
        <>
            <nav>
                <p>Notes</p>
            </nav>

            <div>
                <h1>Welcome to the notes Web App</h1>
                <p><button onClick={props.addNewNote} className="addNewNoteButton">Add New Note</button></p>
            </div>
        </>
    )
}