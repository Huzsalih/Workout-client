import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { CiSquarePlus } from "react-icons/ci";
import WorkoutsTable from "../component/Home/WorkoutTable";

import React from 'react'

const Home = () => {

    const [workouts, setWorkouts] = useState([]);

const navigate = useNavigate();
const emailLocal = localStorage.getItem('user');
console.log(emailLocal);

if (emailLocal == null) {
    navigate('/')
}

const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/');
};

useEffect(() => {
    const fetchWorkout = async () => {
      const token = localStorage.getItem("token"); 
      if (!token) {
        console.error("No token found. Redirecting to login...");
        navigate("/login"); 
        return;
      }

      try {
        const response = await axios.get("https://workout-server-qadc.onrender.com/workouts", {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        setWorkouts(response.data.data); 
      } catch (error) {
        // Handle errors
        if (error.response && error.response.status === 401) {
          console.error("Unauthorized. Redirecting to login...");
          navigate("/login");
        } else {
          console.error("Error fetching workout:", error.response?.data || error.message);
        }
      }
    };

    fetchWorkout(); 
  }, [navigate]); 



  return (

    
    <div className='container p-4'>

        <div className='flex justify-between items-center'>
            <h1 className='lead display-4 mt-5'>Workouts List</h1>
            <Link to='/workouts/create'>
            <CiSquarePlus className='display-5'/>
            </Link>

            <span className="mx-2">Welcome, { emailLocal }!</span>
            <button
            className="btn btn-primary my-3" 
            onClick={handleLogOut}>
                Log Out
            </button>


        </div>

        <WorkoutsTable workouts={workouts} />



    </div>
  )
}

export default Home