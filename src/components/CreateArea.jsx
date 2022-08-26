import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom'
import { NoEncryption } from "@material-ui/icons";

function CreateArea(props){

const [isExpanded, SetIsExpanded] = useState(false);

function onExpand(){
SetIsExpanded(true)   
}

const [note,Setnote] = useState({
    title: "",
    content: ""
});

function handleChange(event){

  const {name, value} = event.target;

  Setnote( (prevNote)=>{
        return { 
            ...prevNote,
            [name]: value
        }   
  } )
}

function submitNote(event){
      props.onAdd(note)
      Setnote({
        title: '',
        content: ''
      })
      event.preventDefault();
}

    return (
        <div>
            <form>
               {
                isExpanded ? 
                <input 
                name="title" 
                value={note.title} 
                placeholder="Título" 
                onChange={handleChange}
                /> : null
               }
                <textarea 
                name="content" 
                value={note.content} 
                placeholder="Descrição do card"
                onChange={handleChange}
                onClick={onExpand}
                rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded}>
                  <button className="btn-style" onClick={submitNote}>
                    <AddIcon />
                  </button>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea;