import React, {useState} from "react";
import Axios from 'axios';
import { checkPropTypes } from "prop-types";

const Login = (props) => {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    })
    .then((response) => {
      if(response.data.message){
        props.setLoginStatus(response.data.message, false)
      }
      else{
        props.setLoginStatus(username, true)
      }
    })
    .catch(error => console.log(error.response));
  };

  return (
    <div className="login">
      <form >
        <label>
          <p className='small-heading'>Username</p>
          <input className='regular-text' type="text" onChange={(e) => {setUsername(e.target.value)}}/>
        </label>
        <label>
          <p className='small-heading'>Password</p>
          <input className='regular-text' type="password" onChange={(e) => {setPassword(e.target.value)}}/>
        </label>

          <button onClick={login} className='login__button small-heading'>Login</button>
          <p className='small-heading'>{props.loginStatus}</p>
      </form>
    </div>
  );
}



export default Login;
