import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Userlogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const[loading , setloading] = useState(false);
  const[message , setMessage] = useState(null);

  const onSubmit  = async(e) =>{
    e.preventDefault();
    try {
      const respone = await axios.post("http://localhost:4000/user/login" , {email, password});
      console.log("respone : " , respone);
      console.log("respone : " , respone.data.token);
      //set token in loacl stroage
      localStorage.setItem("userToken" , respone.data.token);
      navigate("/home");
      

    } catch (error) {

      console.log("user login error : " , error);
      setMessage("Email and Password is wrong");
      navigate("/userlogin");
      
    }


  }

  return (
  <>

<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    {/* <img className="mx-auto w-9 h-9" src="/public/user.png" alt="Your Company" /> */}

     <h1 className="text-4xl font-bold text-center">Uber</h1>

    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
    {
      message ? <><h1 className="text-red-700 text-center my-3">{message}</h1></> : ""
    }
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form  onSubmit={onSubmit}
      className="space-y-6" >
      <div>
        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div className="mt-2">
          <input
          onChange={(e)=>{
          setEmail(e.target.value);
          }}
          type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      </div>


      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
          type="password" name="password" id="password" autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <button
        type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>

        <Link to="/captionlogin">
        <button
        type="submit" className="my-4 flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In as Caption</button>
        </Link>



      </div>
    </form>

    <p className="mt-10 text-center text-sm/6 text-gray-500">
      Not a member?
      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500"><Link to="/usersignup">Create Account</Link></a>
    </p>
  </div>
</div>

  </>
  )
}
