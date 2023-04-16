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
                Register-this-page
            </h2>
            <form onSubmit={handelSubmit}>
                <input className='w-50 mb-4 rounded ps-2 bs-border-color-rgb ' onChange={handelEmailChange} type="email" name="email" id="email" placeholder='inter your mail' />
                <br />
                <input className='w-50 mb-4 rounded ps-2 bs-border-color-rgb ' onBlur={handelPasswordBlur} type="password" name="password" id="password" placeholder='your password' />
                <br />
                <input className='' type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;