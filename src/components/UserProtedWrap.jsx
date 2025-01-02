import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtedWrap = ({ children  }) => {

    const navigate = useNavigate();

    const userToken = localStorage.getItem("userToken");
    console.log("usertoken  " , userToken);

   
    useEffect(() =>{
    //    const userToken = localStorage.getItem("userToken");
    // console.log("usertoken  " , userToken);
        if(!userToken){
            navigate("/userlogin");
        }

    },[])


    //check

    // if(!userToken){
    //     navigate("/userlogin");
    // }


  return (
    <>
    {
        children
    }
    </>
  )

}

export default UserProtedWrap;
