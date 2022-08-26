import React, {useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from './Note';
import CreateArea from "./CreateArea";
import arrayNotes from '../notes';


console.log(arrayNotes)

function App() {

const [notes, SetNotes] = useState([])

function addNote(newNotes){
   SetNotes( (prevNotes) =>{
    return  [...prevNotes, newNotes]
   })
}

function deleteNote(id){
    SetNotes( prevNotes => {
       return prevNotes.filter( (noteItem, index) =>{
            return index !== id;
        })
    })
}

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                )
            })}
            <Footer />
        </div>
    )
        
}

export default App;