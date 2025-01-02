
export default function VehiclePanel(props) {
  return (
    <>

<div>
         
       

        
         <button
           onClick={() =>{
             props.setvehiclepanel(false)
           }}
           className="bg-red-500 p-4 text-white rounded-2xl px-4">Back</button>
           <h1 className="text-3xl font-bold text-center pb-4">Choose a Vehicle</h1>
        </div>
 
       <div 
       onClick={()=>{
        props.setComformPanel(true)
        props.setvehiclepanel(false)
       }}
       className="w-full flex active:border-2 border-black justify-center gap-8 items-center p-4 rounded-2xl my-4">
         <img className="w-32 h-30" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
           <div className="ml-4 text-black">
             <h1 className="text-2xl font-bold text-black">UberGo <i className="ri-user-fill"></i></h1>
             <p className="text-black"> 2 minitus away. 15:24</p>
             <p className="text-black"> Afortable and Comact Ride</p>
           </div>
           <div className="ml-4 flex items-center">
             <h1 className="text-2xl font-bold absolute">193.3</h1>
           </div>
           
        </div>
 
        <div 
          onClick={()=>{
            props.setComformPanel(true)
            props.setvehiclepanel(false)
           }}
        className="w-full flex active:border-2 border-black justify-center gap-8 items-center p-4 rounded-2xl my-4">
         <img className="w-32 h-30" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />
           <div className="ml-4 text-black">
             <h1 className="text-2xl font-bold text-black">UberGo <i className="ri-user-fill"></i></h1>
             <p className="text-black"> 2 minitus away. 15:24</p>
             <p className="text-black"> Afortable and Comact Ride</p>
           </div>
           <div className="ml-4 flex items-center">
             <h1 className="text-2xl font-bold absolute">193.5</h1>
           </div>
           
        </div>
 
 
        <div
          onClick={()=>{
            props.setComformPanel(true)
            props.setvehiclepanel(false)
           }}
        className="w-full flex active:border-2 border-black justify-center gap-8 items-center p-4 rounded-2xl my-4">
         <img className="w-32 h-30" src="https://atlas-content-cdn.pixelsquid.com/stock-images/cartoon-taxi-cab-o0Lr6W2-600.jpg" alt="" />
           <div className="ml-4 text-black">
             <h1 className="text-2xl font-bold text-black">UberGo <i className="ri-user-fill"></i></h1>
             <p className="text-black"> 2 minitus away. 15:24</p>
             <p className="text-black"> Afortable and Comact Ride</p>
           </div>
           <div className="ml-4 flex items-center">
             <h1 className="text-2xl font-bold absolute">193.3</h1>
           </div>
           
        </div>



    </>
  )
}
