import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../../firebash/firebase-config';
import { Link } from 'react-router-dom';


const auth = getAuth(app)

const Login = () => {
    const [error,setError] = useState('')
    const [success, setSuccess] = useState('');
    const emailRef = useRef();

    const handelLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // console.log(email,password)

        setError('');
        setSuccess('');


        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Please add at least two uppercase.');
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please add a special character.');
            return;
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters long');
            return;
        }

        signInWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const logUser = result.user;
            setSuccess('User login successful')
            setError('')
        })
        .catch(error => {
            setError(error.messags)
        })
    }
    const handelResetPassword = event => {
        const email = emailRef.current.value;
        if(!email){
            alert ('please provide your email address to reset passwordasf')
            return;
        }

        sendPasswordResetEmail(auth, email)
        .then( () =>{
            alert('please check your email')
        })
        .catch(error =>{
            console.log(error)
            setError(error.messags)
        })
    }
    return (
        <div>
            <h2>Please login</h2>
            <form onSubmit={handelLogin}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text"  name='email' ref={emailRef} className="form-control" id="username" placeholder="Enter your username" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="password" placeholder="Enter your password" required/>
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
            </form>
            <p><small>Forget password?Please <button onClick={handelResetPassword}>reset password</button></small></p>
            <p>New to this website? please <Link to='/register'>Register</Link></p>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
        </div>
    );
};

export default Login;