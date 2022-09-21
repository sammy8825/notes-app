export default function Notes() {
    return (
        <div className="sticky notes" style={{ border: "1px solid black", display: "flex", flexDirection: "column", padding: "1% 3%" }}>
            <input type="text" placeholder="Enter your title here" style={{ fontSize: "24px" }} />
            <textarea placeholder="Enter your notes here" style={{ display: "block", marginTop: "15px", height: "25vh", border: "none" }} />
        </div>
    )
}