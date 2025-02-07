import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import DeleteWorkout from './Pages/DeleteWorkout';
import CreateWorkout from './Pages/CreateWorkout';
import SignUp from './Pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/workouts/create" element={<CreateWorkout/>} />
        <Route path="/workouts/delete/:id" element={<DeleteWorkout/>} />
      </Routes>
    </Router>
  );
}

export default App;
