import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState();

     const handelSubmit = (event) =>{
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)
     }

    const handelEmailChange = (event) => {
        // console.log(event.target.value)
        setEmail (event.target.value)
    }
    const handelPasswordBlur = (event) => {
        // console.log(event.target.value)
        
    }


    return (
        <div>
            <h2>
                Register
            </h2>
            <form onSubmit={handelSubmit}>
                <input onChange={handelEmailChange} type="email" name="email" id="email" placeholder='inter your mail' />
                <br />
                <input onBlur={handelPasswordBlur} type="password" name="password" id="password" placeholder='your password' />
                <br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;