import { useState } from "react";
import { useRef } from "react"
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import LocaltionSearchPanel from "../components/LocaltionSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ComformRide from "../components/ComformRide";
import LoakingForDiver from "../components/LoakingForDiver";
import WaitingForDiver from "../components/WaitingForDiver";

export default function Index() {

  const [openpanel , setOpenpanel] = useState(false);
  // const [closepanel , setClosepanel] = useState(false);
  const [vehiclepanel , setvehiclepanel] = useState(false);
  const [comformpanel , setComformPanel] = useState(false);
  const[loakingdiver , setloakingdiver]  = useState(false)
  const[waitingfordiver , setwaitingfordiver] = useState(false);

  console.log("vegicle panel now  : " , vehiclepanel);


   const panelRef = useRef(null);
   const btnRef = useRef(null);
   const vehiclepanelRef = useRef(null);
   const conformridepanelRef = useRef(null);
   const loakingdiverpanelRef = useRef(null);
   const waitingfordiverpanelRef = useRef(null);


//
useGSAP(function(){
  if(openpanel){
    gsap.to(panelRef.current,{
      height : '70%',
      padding : '25px'
    })
    gsap.to(btnRef.current,{
      opacity : '1'
     
    })
  }
  else{
     gsap.to(panelRef.current,{
      height : '0%',
       padding : '0px'
  })
  gsap.to(btnRef.current,{
    opacity : '0'
  })
  
}
},[openpanel ])

// for vehicle panel
useGSAP(function(){
console.log("cal................." , vehiclepanel)
  if(vehiclepanel){
    gsap.to(vehiclepanelRef.current ,{
      transform : "translateY(0)",
      // backgroundColor : "blue"
    })
  }else{
    gsap.to(vehiclepanelRef.current ,{
      transform : "translateY(100%)",
      // backgroundColor :"green"
   
     })
  }


},[vehiclepanel])


//conform ride panel

useGSAP(function(){
  console.log("cal................." , vehiclepanel)
    if(comformpanel){
      gsap.to(conformridepanelRef.current ,{
        transform : "translateY(0)",
        // backgroundColor : "blue"
      })
    }else{
      gsap.to(conformridepanelRef.current ,{
        transform : "translateY(100%)",
        // backgroundColor :"green"
     
       })
    }
  
  
  },[comformpanel])


  //loaking diver / vehicle found

  useGSAP(function(){
    
      if(loakingdiver){
        gsap.to(loakingdiverpanelRef.current ,{
          transform : "translateY(0)",
          // backgroundColor : "blue"
        })
      }else{
        gsap.to(loakingdiverpanelRef.current ,{
          transform : "translateY(100%)",
          // backgroundColor :"green"
       
         })
      }
    
    
    },[loakingdiver])




//waiting for diver panel

useGSAP(function(){
    
  if(waitingfordiver){
    gsap.to(waitingfordiverpanelRef.current ,{
      transform : "translateY(0)",
      // backgroundColor : "blue"
    })
  }else{
    gsap.to(loakingdiverpanelRef.current ,{
      transform : "translateY(100%)",
      // backgroundColor :"green"
   
     })
  }


},[waitingfordiver])






// const onSubmit = async(e) =>{
  // e.preventDefault();
  
// }




  return (
   <>
    <div 
    onClick={()=>{
      // setvehiclepanel(false);
    }}
    className="bg-slate-600 w-full h-screen relative overflow-hidden">
       <img
       onClick={()=>{
      setvehiclepanel(false);

       }}
       src="https://developers.google.com/static/maps/architecture/enhance-accuracy-address-aerial-view/images/3D-data-gif.gif" alt="" className="h-full w-screen object-cover"/>


      <div className="w-full h-screen rounded-lg absolute top-0 flex flex-col justify-end">
      <div className="w-screen h-[30%] bg-white">
        <button
        onClick={()=>{
          setOpenpanel(false);
         
        
        }}
        ref={btnRef}
        className="bg-green-900 text-white py-2 px-4 mr-4 absolute rounded-lg mt-4 right-0"
        >back</button>
        <h1 className="text-4xl p-4 font-bold text-center">Find a trip</h1>
        <form  >
          <input 
          onClick={() =>{
            setOpenpanel(true)
          }}
          type="text" placeholder="Add pick up Loaction" className="w-screen  py-4 px-14  bg-slate-800 text-white text-center text-2xl"/>
          <input
          onClick={()=>{
            setOpenpanel(true)
          }}
          type="text" placeholder="Enter your Destination" className="w-screen py-4 px-14 mt-5 bg-slate-800 text-white text-center text-2xl"/>
        </form>
      </div>


      <div  ref={panelRef}  className="h-[0%] bg-white">
                     <LocaltionSearchPanel setvehiclepanel={setvehiclepanel} setOpenpanel={setOpenpanel} /> 
      </div>


      <div  ref={vehiclepanelRef}  className="fixed z-10 w-full bg-white p-4 bottom-0 translate-y-full">

         <VehiclePanel setvehiclepanel={setvehiclepanel} setComformPanel={setComformPanel}/>
      </div>
      <div  ref={conformridepanelRef}  className="fixed z-10 w-full h-[60%] bg-white p-4 bottom-0 translate-y-full">

         <ComformRide    setloakingdiver={setloakingdiver} setComformPanel={setComformPanel}/>
      </div>

      <div  ref={loakingdiverpanelRef}  className="fixed z-10 w-full h-[60%] bg-white p-4 bottom-0 translate-y-full rounded-2xl">

      <LoakingForDiver />
 
</div>


<div ref={waitingfordiverpanelRef}   className="fixed z-10 w-full h-[60%] bg-white p-4 bottom-0 translate-y-full rounded-2xl">

<WaitingForDiver/>

</div>


      
</div>





    </div>
   
   </>
  )
}
