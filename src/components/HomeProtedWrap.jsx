import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeProtedWrap({children}) {

    const navigate = useNavigate();

    const usertoken = localStorage.getItem("userToken");
    const captiontoken = localStorage.getItem("captionToken");

    useEffect(()=>{
        if(!usertoken || !captiontoken){
            navigate("/")
        }
    },[])




  return (
    <>
    {
        children
    }
    </>
  )
}
