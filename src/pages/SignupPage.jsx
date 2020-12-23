import React, { useState, useEffect } from 'react';
import { userService } from '../services/userService';
import bitcoinImg from '../assets/bitcoin.png';



export function SignupPage(props) {

    const [name, setName] = useState('');

    useEffect(() => {
        if(userService.getUser()) props.history.replace('/');
    }, [])

    const onHandleChange = (ev) => {
        const value = ev.target.value;
        setName(value);
        console.log(name);
    }

    const onSignup = () => {
        userService.signup(name)
        props.history.push('/')
    }

    return (
        <div className="signup-section">
            <img src={bitcoinImg} alt="" />
            <h2>Please enter your name:</h2>
            <form action="">
                <input type="text" name="name" value={name} onChange={onHandleChange} id="" />
                <button onClick={onSignup}>Sign up</button>
            </form>
        </div>
    )
}
