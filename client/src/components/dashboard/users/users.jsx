import React, {useEffect, useState, ref, useRef} from 'react';
import Axios from 'axios';

const Users = (props) => {

  const [users, setUsers] = useState([]);
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const usernameField = useRef();
  const passwordField = useRef();

  useEffect(() => {
    Axios
    .get('http://localhost:3001/users')
    .then(res => { setUsers(res.data) })
    .catch(e => console.log(e));
  },[users])

  const Register = (e) => {
    e.preventDefault();

    Axios
    .post('http://localhost:3001/register', {username: usernameReg,password: passwordReg})
    .then((response) => {console.log(response)});

    usernameField.current.value = "";
    passwordField.current.value = "";
  }

  const DeleteUser = (id) => {    
    Axios
    .post('http://localhost:3001/delete_user', {id: id})
    .then((response) => {console.log(response)});

    props.logout();
  }

  return(
    <ul className="users-dashboard">
      {users.map((user, i) => {
        return(
          <li key={user.login_id} className="users-dashboard__item">
            <div className='bold-text' >{user.username}</div>
            {(user.username === props.user) && <button onClick={() => DeleteUser(user.login_id)} className='regular-text users-dashboard__button' >{"delete"}</button>}
          </li>
        )
      })}
      <form >
      <li className="users-dashboard__item">   
          <input ref={usernameField} className='regular-text users-dashboard__input' placeholder='username' type="text" onChange={((e) => setUsernameReg(e.target.value))} />
          <input ref={passwordField} className='regular-text users-dashboard__input' placeholder='password' type="password" onChange={((e) => setPasswordReg(e.target.value))} />
          <button className='regular-text users-dashboard__button' onClick={Register}>{"add"}</button>       
      </li>
      </form>
    </ul>
  )
}

export default Users;