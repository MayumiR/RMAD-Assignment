import { db } from "../firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
function Note() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const addNote = async () => {
    const docRef = await addDoc(collection(db, "notes"), {
      title: title,
      note: note,
      date: date,
    })
      .then((res) => {
        alert("Note Added !");
      })
      .catch((err) => {
        alert("Failed Attempt !");
      });
  };

  const getNotes = async () => {
    const querySnapshot = await getDocs(collection(db, "notes"));
    setNotes(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
  };

  return (
    <div className="container">
      <div className="row">
        <h3 style={{ color: "#009688", marginTop: 5 }}>
          Enter your notes to save
        </h3>

        <div className="col-6">
          <input
            className="form-control mt-5"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Enter Your Title"
          ></input>
          {/* <input className="form-control mt-3" value={note} onChange={(e) => {
                        setNote(e.target.value)
                    }} type="textarea" placeholder="Enter Your Note"></input> */}
          <textarea
            style={{ marginTop: 20, marginBottom: 20 }}
            class="form-control"
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
            placeholder="Enter Your Note"
            rows="3"
          ></textarea>
          {/* <input className="form-control mt-3" value={date} onChange={(e) => {
                        setDate(e.target.value)
                    }} type="text" placeholder="Enter Date"></input> */}
          <TextField
            onChange={(e) => {
              setDate(e.target.value);
            }}
            id="date"
            label="Date"
            type="date"
            defaultValue="2022-01-01"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />

          <button
            type="button"
            className="btn btn-success mt-4"
            onClick={addNote}
          >
            Add Note
          </button>
        </div>

        <div className="col-6">
          <table className="table mt-5">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Note</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note) => {
                return (
                  <tr>
                    <td>{note.title}</td>
                    <td>{note.note}</td>
                    <td>{note.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Note;
