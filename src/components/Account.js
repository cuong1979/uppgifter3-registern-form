import { useDispatch } from "react-redux"; 
import { useHistory } from 'react-router-dom';
import  {addName, addEmail, addPassword} from '../actions/usersAction'
import { useSelector } from 'react-redux'

function Account() {

    const history = useHistory();
    const state = useSelector((state) => {return state});
    const dispatch = useDispatch();

    return (
        <div>
                <h1>Ditt konto</h1>

            <label >NAME </label>
            <input type="text" onChange={ (e) => dispatch(addName(e.target.value))}value={state.nameReducer}/>

            <label >EMAIL</label>
            <input type="text" onChange={ (e) => dispatch(addEmail(e.target.value))} value={state.emailReducer}/>

            <label >PASSWORD</label>
            <input className="pass" type="password" onChange={ (e) => dispatch(addPassword(e.target.value))} value={state.passwordReducer}/>

            <button onClick = {() => history.push('/change')}>Spara</button>

        </div>
    )
}

export default Account;