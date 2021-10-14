import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { DataContext } from "../context/Context";
import { SignUpUser } from '../helpers/apiCalls';

export default function Signup() {
  const { data, setUser } = useContext( DataContext );
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory();
  
  const randomIndex = Math.floor(Math.random() * (data.length + 1));

  const submitHandler = async (info) => {
    const res = await SignUpUser(info);
    if (!res.error) {
      setUser(res);
      history.push("/");
    } else {
      console.log(res.error);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit(submitHandler)}>
        <h3>Signup</h3>
        <label>
          <span>First Name</span>
          <input type="text" placeholder={`${data[randomIndex]?.complete_name.substring(0, (data[randomIndex].complete_name.length - data[randomIndex].name.length))}`} name="fname" { ...register("firstName", { required: true }) }/>
        </label>
        {errors.firstName && <span>First name is required</span>}
        
        <label>
          <span>Last Name</span>
          <input type="text" placeholder={`${data[randomIndex]?.name}`} name="lname" { ...register("lastName", { required: true }) }/>
        </label>
        {errors.lastName && <span>Last name is required</span>}
        
        <label>
          <span>Username</span>
          <input type="text" placeholder={`${data[randomIndex]?.complete_name.toLowerCase().split(" ").join("")}`} name="username" { ...register("username", { required: true }) }/>
        </label>
        {errors.username && <span>Username is required</span>}

        <label>
          <span>Email</span>
          <input type="email" placeholder={`${data[randomIndex]?.complete_name.toLowerCase().split(" ").concat("@achord.com").join("")}`} name="email" { ...register("email", { required: true }) }/>
        </label>
        {errors.email && <span>Email is required</span>}

        <label>
          <span>Password</span>
          <input type="password" placeholder="Enter Password" name="psw" { ...register("password", { required: true }) }/>
        </label>
        {errors.password && <span>Password is required</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
