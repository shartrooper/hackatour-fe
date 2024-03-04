import Activities from "@/views/Activities";
import Buses from "@/views/Buses";
import Cars from "@/views/Cars";
import Flights from "@/views/Flights";
import Homepage from "@/views/Homepage";
import Hotels from "@/views/Hotels";
import Trains from "@/views/Trains";
import Login from "@/views/sessions/Login";
import Register from "@/views/sessions/Register";
import { Routes, Route } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* Sessions */}
      <Route path="/manage/login" element={<Login />} />
      <Route path="/manage/register" element={<Register />} />
      {/* Services */}
      <Route path="/flights" element={<Flights />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/buses" element={<Buses />} />
      <Route path="/trains" element={<Trains />} />
      <Route path="/activities" element={<Activities />} />
    </Routes>
  );
};

export default PublicRoutes;