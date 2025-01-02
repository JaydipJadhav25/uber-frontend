import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm }from "react-hook-form"


export default function Captionsignup() {

  const[message , setMessage] = useState(null);
  const[loading , setloading] = useState(false);

  const { register , handleSubmit} = useForm();
  const navigate = useNavigate();

  const onSubmite = async(data) =>{
    
    const caption = {
      fullname : {
        firstname : data.firstname,
        lastname : data.lastname

      } ,
      email : data.email,
      vehicle :{
        color : data.color,
        plate : data.plate,
        vehicaltype : data.vehicletype,
        capacity : data.capacity
      },
      password : data.password
    }
    try {
      setloading(true)
      const response = await axios.post("http://localhost:4000/caption/signup" , caption );
    console.log(response);
       navigate("/")
    } catch (error) {
      console.log("error :  : " , error.response);
      setMessage(error.response.data.message)
      
    }finally{
      setloading(false)
    }

  }




  return (
    <>

{/* <div className="bg-[url(https://img.lovepik.com/bg/20231220/City-Traffic-Light-Illuminated-at-Night-Creating-a-Vibrant-Urban_2655139_wh860.jpg!/fw/860)] bg-cover bg-fixed flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"> */}
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
   
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img className="mx-auto w-9 h-9" src="/public/user.png" alt="Your Company" /> */}
        <h1 className="text-4xl font-bold text-center">Uber</h1>
        {
      loading && <div className="text-center text-2xl text-grren">Loading...</div>
    }
    
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Caption Sign Up</h2>
        {
      message ? <><h1 className="text-red-700 text-center my-3">{message}</h1></> : ""
    }
      </div>
    
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6"  onSubmit={handleSubmit(onSubmite)}>

              <div>

      <label className="block text-sm/6 font-medium text-gray-900">FirstName</label>
      <div className="mt-2">
        <input 
        name="firstname"
        {...register("firstname")}
        type="text"  required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
      </div>

      </div>
      <div>

      <label  className="block text-sm/6 font-medium text-gray-900">LastName</label>
      <div className="mt-2">
        <input
         name="lastname"
         {...register("lastname")}
        type="text" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
      </div>

        </div>

          <div>

            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
            <div className="mt-2">
              <input
               {...register("email")}
              type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
            </div>

          </div>

<div>
<label  className="block text-sm/6 font-medium text-gray-900"><b>Vehicle Datails</b></label>
<main className="grid grid-cols-2 grid-rows-2 gap-5">
     <div className="">
     <label  className="block text-sm/6 font-medium text-gray-900">Color</label>
<div className="mt-2">
  <input 
   name="color"
   {...register("color")}
  type="text" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
</div>
     </div>

     <div className="">
     <label  className="block text-sm/6 font-medium text-gray-900">Plate NO</label>
<div className="mt-2">
  <input 
   name="plate"
   {...register("plate")}
  type="text" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
</div>
     </div>

     <div className="">
  <label className="block text-sm/6 font-medium text-gray-900">Vehicle Type</label>
  <div className="mt-2">
    <select
     name="vehicletype"
     {...register("vehicletype")}
    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
      <option value="car">Car</option>
      <option value="bike">Bike</option>
      <option value="bus">Bus</option>
    </select>
  </div>
</div>


     <div className="">
     <label  className="block text-sm/6 font-medium text-gray-900">capacity</label>
<div className="mt-2">
  <input 
  name="capacity"
  {...register("capacity")}
  type="number" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
</div>
     </div>

</main>
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
              {...register("password")}
              type="password" name="password" id="password" autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
            </div>
          </div>
    
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Account</button>
          </div>
        </form>
    
        <p className="mt-10 text-center text-sm/6 text-gray-500">
          A member?
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500"><Link to="/captionlogin">Login Account</Link></a>
        </p>
      </div>
    </div>
    
      </>
  )
}
