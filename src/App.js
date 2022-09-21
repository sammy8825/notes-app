import React from "react";
import Page from "./components/Page";


export default function App() {
  const [page, addPage] = React.useState([<Page key={0} />]);

  function addNewPage() {
    addPage(pages => [...pages, <Page key={page.length} />])
  }

  return (
    <div>
      <button onClick={addNewPage}>Add new Page +</button>
      {page}
    </div>
  );
}
