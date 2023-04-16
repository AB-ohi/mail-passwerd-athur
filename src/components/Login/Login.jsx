import React from 'react';

const Login = () => {
    const [error,setError] = ('')
    const [success, setSuccess] = ('');

    const handelLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        console.log(email,password)

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
    }
    return (
        <div>
            <h2>Please login</h2>
            <form onSubmit={handelLogin}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text"  name='email' className="form-control" id="username" placeholder="Enter your username" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="password" placeholder="Enter your password" required/>
                </div>
                <p className='text-danger'>{error}</p>
                <button type="submit" className="btn btn-primary">Log In</button>
            </form>
        </div>
    );
};

export default Login;