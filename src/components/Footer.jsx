
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

    const Footer = () => {
        return (
             <div className="bg-green-600 text-white ">

        <div className="flex justify-between mt-5 ">
            <div className="space-y-2">
                 <h2 className='text-5xl text-center '> 🌞 
                    </h2>
                    <span className="text-4xl"> SunCart</span>
            </div>
             <div className="space-y-2">
            <h2 className="text-2xl">Contact Info</h2>
            <p>Email: support@suncart.com</p>
            <p>Phone: +880 1xxxxxxx</p>
            <p>Adress: Dhaka, Bangladesh</p>
        </div>
        <div className="space-y-2">
            <h2 className="text-2xl">Social Links</h2>
            <div className="flex gap-3 mr-3">
            <AiFillTwitterCircle size={40}/>
            <FaFacebook size={40}/>
            <FaInstagramSquare size={40}/>
            </div>
        </div>
        </div>
        <div >
        <hr className='w-400 ml-30 mt-5'/>
         </div>
        <div>
            <p className="text-center mt-4">@2026 suncart .All rights reversed</p>
        </div>
    </div>
        );
    };
    export default Footer;

   
  
