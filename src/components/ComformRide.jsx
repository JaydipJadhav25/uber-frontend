

function ComformRide(props) {
  return (
    <>
     <div className="w-screen h-screen flex justify-center">
           <div className="w-[80%] h-[50%]">
           <h1 className="text-2xl font-bold">Conform Your Ride</h1>

           <div className="w-fullh-40 flex justify-center">
          <img className="w-40 h-42 object-cover" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />

           </div>

            
           <div className="p-5 flex flex-col gap-5">

           <div className="text-black bg-slate-50 pl-4 border-b-2 border-gray-200">
             <h1 className="text-2xl font-bold text-black">562/11-A</h1>
             <p className="text-black"> 2 minitus away. 15:24</p>

           </div>

           
           <div className="text-black pl-4 border-b-2 border-gray-200">
             <h1 className="text-2xl font-bold text-black">Thride Wave coffee</h1>
             <p className="text-black">17th cross Rd.PWD Quarters , 1st sector</p>

           </div>
           

                    <div className="pl-4">
                    <h1 className="text-2xl font-bold">193.5</h1>
                    <p>Cash Cash</p>
                        
                    </div>

            <button
            onClick={()=>{
                props.setloakingdiver(true);
                props.setComformPanel(false)
            }}
            className="bg-green-700 p-4 rounded-2xl text-white text-lg">Conform </button>
            </div>          
           
           </div>
     </div>
    </>
  )
}

export default ComformRide