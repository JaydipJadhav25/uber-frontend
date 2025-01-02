
import 'remixicon/fonts/remixicon.css'


export default function LocaltionSearchPanel(props) {
    console.log(props.setvehiclepanel)
    const loctions = [
        "Sakharwadi, Phaltan",
        "Sakharwadi1, Phaltan",
        "Sakharwadi2, Phaltan",
    ];
return (
    <div>
         {/* <div className='flex items-center justify-start gap-3 p-5 bg-slate-400 rounded-lg m-4 hover:bg-slate-500'>
                <h2 className='w-12 h-12 bg-white rounded-[50%] flex items-center justify-center hover:bg-orange-500'><i className="ri-map-pin-fill text-3xl"></i></h2>
                <h4 className='text-base font-medium'>sdjfnksdf</h4>
            </div> */}
        {
            loctions.map(function(e , i){
                return  <div key={i}>
                     <div 
                     onClick={()=>{
                        props.setvehiclepanel(true),
                        props.setOpenpanel(false)
                     }}
                     className='flex items-center justify-start gap-3 p-5 bg-slate-400 rounded-lg m-4 hover:bg-slate-500'>
                <h2 className='w-12 h-12 bg-white rounded-[50%] flex items-center justify-center hover:bg-orange-500'><i className="ri-map-pin-fill text-3xl"></i></h2>
                <h4 className='text-base font-medium'>{e}</h4>
            </div>
                </div>

            })
        }    
       
    </div>
)
}
