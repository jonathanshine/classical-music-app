import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { DataContext } from '../App';
import { SignInUser } from '../helpers/apiCalls';


export default function Login() {
  const { user, setUser } = useContext( DataContext );
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory();

  const submitHandler = async (info) => {
    const res = await SignInUser(info);
    if (!res.error) {
      setUser(res);
      history.push("/");
      console.log("User successfully logged in");
    } else {
      console.log(res.error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(submitHandler)}>
        <h3>Login</h3>
        <label>
          <span>Email</span>
          <input type="text" placeholder="Enter Email" name="email" { ...register("email", { required: true }) }/>
        </label>
        {errors.email && <span>Email is required</span>}

        <label>
          <span>Password</span>
          <input type="password" placeholder="Enter Password" name="psw" { ...register("password", { required: true }) }/>
        </label>
        {errors.password && <span>Password is required</span>}

        <button type="submit">Login</button>
      </form>
    </div>
  )
}
