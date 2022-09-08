import { notepadData } from "../data/nodepad.js";

export const getAllNotepadData = (req, res)=>{
    res.send(notepadData);
}

export const addNotepadData = (req, res)=>{
    const { body } = req;
    notepadData.push(body);
    res.send("Successfully added note to the DB");
   
}