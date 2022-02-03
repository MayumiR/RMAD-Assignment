import './App.css';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import Note from './pages/Note';
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Navigation />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/add_note" element={<Note />} />
            </Routes>
        </div>

    );
}

export default App;
