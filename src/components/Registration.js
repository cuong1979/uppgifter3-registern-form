import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import  {addName, addEmail, addPassword} from '../actions/usersAction'



function Registration() {

    const history = useHistory();
    const [name, setName] =  useState('');
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');

    const dispatch = useDispatch();
    

    dispatch(addName(name))
    dispatch(addEmail(email))
    dispatch(addPassword(password))
    


    return (
        <section className ="wrapper">
           
           <h1>Registrera dig för ett konto</h1>
            
            <label >NAME </label>
            <input type="text" onChange={ (e) => setName(e.target.value)}placeholder="Full Name"/>

            <label >EMAIL</label>
            <input type="text" onChange={ (e) => setEmail(e.target.value)} placeholder="Email"/>

            <label >PASSWORD</label>
            <input type="password" onChange={ (e) => setPassword(e.target.value)} placeholder="Password"/>

            <button onClick = {() => history.push('/change')}>Sign me up!</button>

        </section>
        
        
    )
}

export default Registration;