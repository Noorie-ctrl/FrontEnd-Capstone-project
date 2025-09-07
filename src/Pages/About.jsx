import African from "../assets/African.png"
import Money from "../assets/money.png"
import Bag from "../assets/Bag.png"
import Shop from "../assets/shop.png"
import Sale from "../assets/sale.png"
import Image1 from "../assets/image 46.png"
import Image2 from "../assets/image 47.png"
import Image3 from "../assets/image 51.png"
import {Twitter, Instagram, Linkedin } from "lucide-react"
import Secure from "../Components/Securee"
import {NavLink} from "react-router-dom"

const delivery = [
  { image: Money, desc: "Annual gross sale in our site", amount: "25k" },
  { image: Bag, desc: "customer active in our site", amount: "45.5k" },
  { image: Shop, desc: "Salers active in our site sale in our site", amount: "30k" },
  { image: Sale, desc: "monthly product sale", amount: "33k" },
];

const partners =[
    {image:Image1, desc:"Tom Cruise", para:"Founder & Chairman", icon1:Twitter, icon2:Instagram, icon3:Linkedin},
     {image:Image2, desc:"Emma Watson", para:"Managing Director", icon1:Twitter, icon2:Instagram, icon3:Linkedin},
      {image:Image3, desc:"Will Smith", para:"Product Designer", icon1:Twitter, icon2:Instagram, icon3:Linkedin},
]

export default function About() {
  return (
    <>
      <div className="md:mx-[12rem] flex mx-5 p-5 md:p-11">
        <NavLink 
        className={({ isActive }) => isActive ? "text-gray-700 font-black border-b-1 border-red-500" : "text-gray-400"}
        to ="/"><button>
          Home/
        </button></NavLink>
         <NavLink 
        className={({ isActive }) => isActive ? "text-gray-700 font-black border-b-1 border-red-500" : "text-black"}
        to ="/"><button>
          About
        </button></NavLink>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="lg:mx-[8rem] mx-[2rem] lg:mt-19 md:mt-[1rem] md:mx-[1rem]">
          <h1 className="font-bold lg:text-5xl md:text-3xl text-2xl text-gray-700 mb-5">Our Story</h1>
          <p className="text-sm lg:text-xl  text-gray-700 md:mt-9 mb-7 md:mb-11">
            Launched in 2015, Exclusive in South Asia's premier online shopping
            marketplace with an active presence in Bangladdesh, supported by wide
            range of tailored marketing, data and service solutions, exclusive has
            5,500 sellers and 300 brands that serves 3 million customers acrss the
            region. <br />
            <br /> Exclusive has more than 1 million products to offer, growing at
            a very fast. Exclusive offers a diverse assotment in categories raging
            from consumer.
          </p>
        </div>

        <div className="">
          <img 
          className=""
          src={African} alt="African" />
        </div>
        </div>

        
        <div className="grid lg:mx-[12rem] p-1 md:p-11 grid-cols-1 p-9 md:grid-cols-4 md:grid-cols-2 lg:gap-6 gap-5 justify-items-center mt-10 col-span-2">
          {delivery.map((d, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-9  border rounded-md hover:bg-[#DB4444] hover:text-white cursor-pointer transition-all w-full text-center"
            >
              <img src={d.image} alt={d.desc} className="w-14 bg-black text-white h-14 rounded-full p-2 border-4 border-gray-400 mb-2 object-contain" />
              <h1 className="font-bold md:text-2xl text-xl">{d.amount}</h1>
              <p className="text-sm font-medium text-gray-500">{d.desc}</p>
            </div>
          ))}
        </div>

        
      
      <div className="grid flex justify-center md:grid-cols-3 p-3 lg:mx-[12rem]  lg:p-11 gap-9">
            {partners.map((p,i)=>(
               <div key={i} className=" flex flex-col p-3">
                 <img 
                 className="w-[326px] h-[392px] object-cover bg-slate-400 rounded-md"
                 src={p.image} />
                 <h1 className="md:text-2xl text-xl mt-5">{p.desc}</h1>
                 <p className="">{p.para}</p>
                 <div className="flex gap-3 mt-3">
                    <p.icon1 className="h-5 w-5" />
                    <p.icon2 className="h-5 w-5" />
                    <p.icon3 className="h-5 w-5" />
                 </div>
               </div>
            ))}

        </div>
        <Secure />
    </>
  )
}
