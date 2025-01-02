import React, { useRef, useState } from 'react'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function CaptionRiding() {

  const[finishridepanel , setfinishridepanel] = useState(false);


  const finishridepanelRef = useRef(null);


  
  useGSAP(function(){
    
    if(finishridepanel){
      gsap.to(finishridepanelRef.current ,{
        transform : "translateY(0)",
        // backgroundColor : "blue"
      })
    }else{
      gsap.to(finishridepanelRef.current ,{
        transform : "translateY(100%)",
        // backgroundColor :"green"
     
       })
    }
  
  
  },[finishridepanel])




  return (
    <div className='h-screen'>
        <div className='h-[80%]'>
            <img  className='w-full h-full object-cover' src="https://reactnativeexample.com/content/images/2018/09/grab-uber-map-location-picker.gif" alt="" />
        </div>
        <div className='h-[20%] bg-yellow-600 rounded-t-3xl flex justify-center items-center'>
            <h1 className='text-3xl p-12 font-bold'>4 KM Away</h1>
            <button 
            onClick={()=>{
                  setfinishridepanel(true)

            }}
            className="bg-green-700 p-3 pr-4 pl-4 rounded-md text-white text-lg">Complete Ride </button>

        </div>


         <div ref={finishridepanelRef}  className="fixed z-10 w-full h-[90%] bg-white p-4 bottom-0 rounded-2xl">
        
        
            <FinishRide/>
            
            </div>

    </div>
  )
}
