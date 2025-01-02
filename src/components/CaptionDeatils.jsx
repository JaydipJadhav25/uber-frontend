

export default function CaptionDeatils() {
  return (
    <div className="w-full h-full">
          {/* 1 */}
       <div className="w-full h-[30%] flex">
            <div className="w-[60%] h-full flex items-center gap-5 pl-8">
                <img className="w-20 h-25 object-cover bg-slate-600 rounded-[50%]" src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png" alt="" />
                    <h1 className="text-2xl font-bold">Harsh Patel</h1> 
                    </div>
                
            <div className="text-center flex justify-center items-center flex-col pl-20">  
                   <h1 className="text-2xl font-bold">295.20</h1>
                   <h1>Earned</h1>      
            </div>
              
        </div>

        {/* 2 */}
        <div className="bg-gray-200 m-12 rounded-xl flex p-12 justify-around text-center">
            <h1>
            <i className="ri-history-line text-4xl"/>
                <h1 className="text-2xl font-semibold">10.2</h1>
                <h1>
                    Hours Online
                </h1>
            </h1>
            <h1>
            <i className="ri-bar-chart-2-fill text-4xl"></i>
                <h1 className="text-2xl font-semibold">10.2</h1>
                <h1>
                    Hours Online
                </h1>
            </h1>
            <h1>
            <i className="ri-verified-badge-fill text-4xl"></i>
                <h1 className="text-2xl font-semibold">10.2</h1>
                <h1>
                    Hours Online
                </h1>
            </h1>
        </div>
    </div>
  )
}
