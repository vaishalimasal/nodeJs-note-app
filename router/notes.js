import express from 'express'
import { addNotepadData, getAllNotepadData } from '../controller/notes.js';
const router = express.Router();

router.get("/", getAllNotepadData);

// router.get("/:id", (req, res) => {
//     console.log(req.params.id);
//     const result = notepadData.filter(
//       (notes) => notes.id === parseInt(req.params.id)
//     );
//     res.send(result);
//   });
  
//   router.patch("/:id", (req, res) => {
//     const { body, params } = req;
//     console.log(req.params.id);
//     notepadData.forEach((notes) => {
//       if (notes.id === parseInt(params.id)) {
//         if (body.title) {
//           notes.title = body.title;
//         }
//       }
//     });
//     res.send("Successfully updated note to the DB");
//   });
  
  router.post("/", addNotepadData);
  
//   router.delete("/:id", (req, res) => {
//     const { params } = req;
//     const idx = notepadData.findIndex(
//       (notes) => notes.id === parseInt(req.params.id)
//     );
//     if (idx >= 0) {
//       delete notepadData[idx];
//     }
//     res.send("Successfully deteled note to the DB");
//   });

export default router;
