import gsap from "gsap";
import CaptionDeatils from "../components/CaptionDeatils";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

import ComformRidePopup from "../components/comformRidePopup";

export default function CaptionHome() {

  const[ridepopuppanel , setridepopuppanel]=useState(true);
  const[comfomridepopup , setcomfomridepopuppanel]=useState(false);

  // console.log("set ridepopup panel vlause ;;;;;;;" , ridepopuppanel)


  const ridepopupRef = useRef(null);
  const comfomridepopupRef = useRef(null);


  useGSAP(function(){
    
    if(ridepopuppanel){
      gsap.to(ridepopupRef.current ,{
        transform : "translateY(0)",
        // backgroundColor : "blue"
      })
    }else{
      gsap.to(ridepopupRef.current ,{
        transform : "translateY(100%)",
        // backgroundColor :"green"
     
       })
    }
  
  
  },[ridepopuppanel])


  useGSAP(function(){
    
    if(comfomridepopup){
      gsap.to(comfomridepopupRef.current ,{
        transform : "translateY(0)",
        // backgroundColor : "blue"
      })
    }else{
      gsap.to(comfomridepopupRef.current ,{
        transform : "translateY(100%)",
        // backgroundColor :"green"
     
       })
    }
  
  
  },[comfomridepopup])



  return (
    <div className="h-screen">
              {/* 1 */}
      <div className="h-[50%] bg-orange-700">
           <img src="https://miro.medium.com/v2/resize:fit:1400/1*5zpsn2LW5BUEUVJesz1SBQ.gif" alt="" className="h-full w-screen object-cover"/>          
      </div>

              {/* 2 */}
    <div className="h-[50%] rounded-t-3xl">
       <CaptionDeatils/>
    </div>

    {/* 3 */}

    <div  ref={ridepopupRef} className="fixed z-10 w-full h-[65%] bg-white p-4 bottom-0 rounded-2xl">
     <RidePopUp   setridepopuppanel={setridepopuppanel}  setcomfomridepopuppanel={setcomfomridepopuppanel}/>
    
    </div>

    <div ref={comfomridepopupRef}  className="fixed z-10 w-full h-[90%] bg-green-100 p-4 bottom-0 rounded-2xl">


      <ComformRidePopup  setridepopuppanel={setridepopuppanel}     setcomfomridepopuppanel={setcomfomridepopuppanel} />

    
    </div>


    </div>
  )
}
