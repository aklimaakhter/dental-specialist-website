import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';



const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const navigate =useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name= event.target.name.value;
        const email = event.target.email.vaiue;
        const password = event.target.password.vaiue;

        createUserWithEmailAndPassword(email,password)
    }
    return (
        <div className='register-form'>
            <h2 style={{textAlign:"center"}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Your email' required />
                <input type="password" name="password" id=""  placeholder='password' required/>
                <input type="submit" value="Register" />
            </form>
            <p className='mt-5'>NAlready have an account? <Link to='/login'  onClick={navigateLogin}>Please Register</Link></p>
        </div>
    );
};

export default Register;