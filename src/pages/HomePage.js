import CardView from "../components/CardView";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function HomePage() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);
  const getNotes = async () => {
    const querySnapshot = await getDocs(collection(db, "notes"));
    setNotes(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 style={{ color: "#0693E3"}}>Your Notes</h2>

            {notes.map((note) => {
              return (
                <div key={note.id}>
                  <CardView note={note} />
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
