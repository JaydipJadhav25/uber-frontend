


export default function Ridding() {
  return (
    <div className="h-screen">
        {/* 1 */}
        <div className="bg-black h-[50%] w-full">
           <img src="https://miro.medium.com/v2/resize:fit:1400/1*5zpsn2LW5BUEUVJesz1SBQ.gif" alt="" className="h-full w-screen object-cover"/>
        </div>
        {/* 2 */}
        <div className="h-[1/2] pl-10">
             
          <div className="w-fullh-40 flex justify-between p-5 pl-20 pr-20 border-b-2">
          <img className="w-40 h-40 object-cover bg-slate-600 rounded-[50%]" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />
          {/* <img className="w-40 h-42 object-cover bg-slate-600 rounded-[50%]" src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png" alt="" /> */}
          <div className="text-black pl-4">
             <h1 className="text-2xl font-bold text-black">KA15AK00-0</h1>
             <p className="text-black"> white suzuki s-presso lxl</p>

           </div>


           </div>

           <div className="p-5 flex flex-col ">
           <div className="text-black pl-4 flex m-4 gap-4 border-b-2 py-1 pb-4">
           <i className="ri-map-pin-fill text-3xl"/>
            <div>
            <h1 className="text-2xl font-bold text-black">562/11-A</h1>
            <p className="text-black">17th cross Rd.PWD Quarters , 1st sector</p>
            </div>

           </div>
           
         <button   className="bg-green-700 p-4 rounded-2xl text-white text-lg my-4"> Make a Payment </button>

         </div> 

        </div>


 
    </div>
  )
}
