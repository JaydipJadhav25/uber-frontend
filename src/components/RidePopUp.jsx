

export default function RidePopUp(props) {


   



  return (
    <>
      <>
     <div className="w-screen h-screen flex justify-center">
           <div className="w-[80%] h-[50%]">
           <h1 className="text-2xl font-bold p-4">New Ride For You!</h1>

           <div className="w-full flex items-center justify-between bg-yellow-400 rounded-lg p-5">
              <div className="flex">
              <img className="w-20 h-25 object-cover bg-slate-600 rounded-[50%]" src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png" alt="" />
              <h1 className="text-2xl font-bold p-4">Harsh Patel</h1>
              </div>
              <div className="pr-10">
                <h1 className="text-4xl font-semibold text-center">
                    2.2K
                </h1>
              </div>

           </div>

            
           <div className="p-5 flex flex-col gap-5 my-4">

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
                    <div className="flex justify-center gap-6">
                    <button
                    onClick={()=>{
                        props.setridepopuppanel(false);
                        props.setcomfomridepopuppanel(true);

                    }}
            className="bg-green-700 p-4 rounded-2xl text-white text-lg">Aceept </button>

<button
onClick={()=>{
    props.setridepopuppanel(false)
}}
            className="bg-red-700 p-4 rounded-2xl text-white text-lg">Ignore </button>
            
                    </div>

   
            </div>          
           
           </div>
     </div>
    </>
    
    </>
  )
}
