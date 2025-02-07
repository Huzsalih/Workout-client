import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from "../component/Home/BackButton";

const CreateWorkout = () => {
  const [workout, setWorkout] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  
  const navigate = useNavigate();

    const handleSaveWorkout = () => {
      const token = localStorage.getItem("token"); // Retrieve the JWT token from localStorage (or wherever you store it)
      if (!token) {
        console.error("No token found. User must be logged in.");
        return;
      }
    const data = {
      workout,
      load,
      reps,
      
    };

    axios
      .post("https://workout-server-qadc.onrender.com/workouts", data, {
        headers: {
          "Content-Type": "application/json",
        
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },

        
       
      })
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        console.log("Error saving Workouts:", error.response?.data || error.message);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="my-4">Create Workouts</h1>
      <div className="p-4">
        <div className="my-4">
          <label className="mx-4">Workout</label>
          <input
            type="text"
            value={workout}
            onChange={(e) => setWorkout(e.target.value)}
            className="form-control mx-5 my-4"
          />
        </div>
        <div className="my-4">
          <label className="mx-4">Load</label>
          <input
            type="text"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
            className="form-control mx-5 my-4"
          />
        </div>
        <div className="my-4">
          <label className="mx-4">Reps</label>
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className="form-control mx-5 my-4"
          />
        </div>
        <button className="btn btn-primary btn-lg" onClick={handleSaveWorkout}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateWorkout;
