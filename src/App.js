import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Main from "./Wave/pages/Main";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                {/* <Route path="/about" element={<About />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
