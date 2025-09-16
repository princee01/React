import React, {useState, useContext } from 'react'
import UserContext from '../context/userContext'

//using this component we are sending data;
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);
    const { setpass} = useContext(UserContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username});
        setpass({password})
    }
  return (
      <div>
          <h2>login</h2>
          <input type="text"
              value={username}
              
              onChange={(e)=>setUsername(e.target.value)}
              placeholder='usename' />
          {" "}
          <input type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password' />
          <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
