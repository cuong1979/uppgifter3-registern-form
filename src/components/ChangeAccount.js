import React from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';


function ChangeAccount() {

    const history = useHistory();
    const state = useSelector ((state) => {return state})

    return (
        <section>
            <h1>Ditt konto</h1>
            <div>
                <p>NAME</p>
                   <span >{state.nameReducer}</span> 
                <p>EMAIL</p>
                    <span>{state.emailReducer}</span>
                <p>PASSWORD</p>
                    <h4>{state.passwordReducer}</h4>
            </div>
            <button onClick = {() => history.push('/account')}>Ändra</button>
        </section>
        

    
    )
}

export default ChangeAccount;