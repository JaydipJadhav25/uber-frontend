import { Link } from "react-router-dom"

export default function Home() {
 

  return (
    <div className="bg-[url('/public/welcome.png')] bg-cover h-screen w-full flex flex-col justify-between">
      <h2 className="text-white font-bold m-16 text-5xl hover:text-amber-200">Uber</h2>
      <div className="bg-white py-5 px-20">
        <h2 className="text-center text-2xl font-bold p-4">Get Start with Uber </h2>
        <Link to="/userlogin">
        <button className="bg-black text-white p-1 w-full py-4 rounded-md hover:bg-blue-500"
        >Continue</button>
        </Link>
      </div>
    </div>
  )
}

