import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CaptionProtedWrap({children}) {
    const navigate = useNavigate();

    const captionToken = localStorage.getItem("captionToken");
    console.log("captiontoken  " , captionToken);

   
    useEffect(() =>{
    //    const userToken = localStorage.getItem("userToken");
    // console.log("usertoken  " , userToken);
        if(!captionToken){
            navigate("/captionlogin");
        }

    },[captionToken])


    



  return <>
    {
        children
    }
    </>
}
