import { useState } from 'react';


import './Login.css'

const Login = (props) => {
    const {getUserDetails} = props;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const submithandler = () =>{
        console.log(email);
        getUserDetails(email,password);
    }
  return (<>
      <h2>Please Log In</h2>
      <form onSubmit={submithandler}>
        <div >
          <label for="inputEmail" className="form-label">
            Email address : 
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <br/>
        <div >
          <label for="inputPassword" className="form-label">
            Password :
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    
    </>
  );
}

export default Login;