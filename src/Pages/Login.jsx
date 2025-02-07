import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { useSnackbar } from 'notistack'

const Login = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const navigate = useNavigate();
const { enqueueSnackbar } = useSnackbar();

const handleLogin = () => {
    axios
    .post('https://workout-server-qadc.onrender.com/user/login', { email, password })
    .then(response => {
        const { email }= response.data;
        console.log('Eamil:', email);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', response.data.email);
        enqueueSnackbar('Login successfully', { variant: 'success'});
            navigate('/home', { state:{ email} });

    })
    .catch(error => {
        enqueueSnackbar('Login faild', {variant: 'error'});
        console.log(error);
})
}

  return (
    <div className='p-4'>
        <h1 className='mx-4 my-4'>Login</h1>

        <div className='P-4'>
        <div className="my-4">
            <label className="mx-3 mr-4">Email</label>
            <input 
            type="email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="px-4 py-2"
            />
              
              </div>
            <div className="my-4">
            <label className="mx-3 mr-4">Password</label>
            <input 
            type="password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="px-4 py-2"
            />
              </div>

              <button className="btn btn-primary mx-4 my-2 p-2" style={{width:300}} onClick={handleLogin}>
                Login
              </button>
              <div>
                <p className="mx-4"> Don't have an account? <Link to='/signup'>Sign Up</Link></p>
              </div>
        </div>
    </div>
  )
}

export default Login