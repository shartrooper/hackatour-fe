import Header from "./components/header/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./views/Homepage";

function App() {
    return (
        <div className='bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen'>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Homepage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
