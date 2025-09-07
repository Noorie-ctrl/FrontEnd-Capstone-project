import Secureee from "../assets/secure.png"
import Delivery from "../assets/delivery.png"
import Services from "../assets/services.png"



const emergency = [
  { image: Delivery, desc: "Free and fast delivery", desc2: "Free delivery for all orders over $140 orders", id:"e-1"},
  { image: Services, desc: "24/7 Customer services", desc2: "Friendly 24/7 customer support", id:"e-2" },
  { image: Secureee, desc: "Money back guarantee", desc2: "We return money within 30 days", id:"e-3" },
]

export default function Securee() {
   
  return (
    <>
      <div className="w-full flex justify-center my-10">
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl w-full text-center">
          {emergency.map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={e.image}
                className="border-5 rounded-full border-gray-400 bg-black w-16 h-16 object-contain p-2"
                alt={e.desc}
              />
              <h1 className="mt-4 font-bold text-base text-black">{e.desc}</h1>
              <p className="text-sm text-gray-700">{e.desc2}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
