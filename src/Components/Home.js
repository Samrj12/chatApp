
import { useState } from "react";
import ParticlesBG from "./particlesBG";
function Home() {
    
const [user, setUser] = useState(null)
    return ( 
        <div className="flex justify-center items-center h-screen">
        <ParticlesBG ></ParticlesBG>
        <div className="flex flex-col bg-white rounded-lg ">
        {
            // user ? {

            // } : {}
        }
        </div>
        </div>
     );
}

export default Home;