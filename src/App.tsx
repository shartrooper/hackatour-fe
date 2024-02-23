// Componenets
import Header from "./components/header/Header";
import Homepage from "./views/Homepage";
import Flights from "./views/Flights";
import Hotels from "./views/Hotels";
import Cars from "./views/Cars";
import Buses from "./views/Buses";
import Trains from "./views/Trains";
import Activities from "./views/Activities";
import Footer from "./components/footer/Footer";

// Sessions Components
import Login from "./views/sessions/Login";
import Register from "./views/sessions/Register";

// RRD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className='bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen'>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    {/* Sessions */}
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    {/* Services */}
                    <Route path='/flights' element={<Flights />} />
                    <Route path='/hotels' element={<Hotels />} />
                    <Route path='/cars' element={<Cars />} />
                    <Route path='/buses' element={<Buses />} />
                    <Route path='/trains' element={<Trains />} />
                    <Route path='/activities' element={<Activities />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
