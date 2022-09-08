import { notepadData } from "../data/nodepad.js";

export const getAllNotepadData = (req, res)=>{
    res.send(notepadData);
}

export const addNotepadData = (req, res)=>{
    const { body } = req;
    notepadData.push(body);
    res.send("Successfully added note to the DB");
}

export const getbyIdNotepadData = (req, res)=> {
        console.log(req.params.id);
        const result = notepadData.filter(
          (notes) => notes.id === parseInt(req.params.id)
        );
        res.send(result);
      }
