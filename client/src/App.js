import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Addmovie from "./components/Addmovie";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import AdminRoute from "./components/PrivateRoute/AdminRoute";
import PrivateRoute from "./components/PrivateRoute/privateroute";

import Profile from "./components/Profile";
import Register from "./components/register";
import { getcurrent } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/signUp" element={<Register></Register>} />
        <Route path="/signIn" element={<Login></Login>} />
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/add" element={<Addmovie></Addmovie>}></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin></Admin>
            </AdminRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
