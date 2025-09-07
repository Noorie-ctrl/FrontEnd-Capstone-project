import{Link} from "react-router-dom"
import { useCart } from "../Components/CartContext";
export default function Checkout(){
    const { cart, total } = useCart();
    return(
        <>
        <div className="flex  md:mt-9 mt-3 mx-[3rem] md:mx-[5rem] hidden md:block">
            <Link to ="/Profile"><button className="text-gray-400 " >Account /</button></Link>
            <Link to ="/"><button className="text-gray-400 text-sm"> Product /</button></Link>
            <Link to="/Cart"><button className="text-gray-400 text-sm"> ViewCart/</button> </Link>
            <button className="text-black">Checkout </button>
        </div>

        <div className="grid lg:grid-cols-2 mx-[1rem] md:mx-[5rem]">
            <div className="mt-9 ">
                <h1 className="text-xl md:text-2xl font-semibold">Billing details</h1>
         <form className="md:mt-9 p-5">
            <label htmlFor="firstName" className="md:text-base text-gray-400 font-md mt-5 block">
                First Name <span className="text-red-500">*</span>
            </label>
            <input 
                type="text"
                id="firstName"
               
                className="py-3 px-2 bg-slate-100 w-full md:w-[30rem] rounded-md mt-2"
                required 
            />
            <label htmlFor="firstName" className="md:text-base text-gray-400 font-md mt-5 block">
                Company Name <span className="text-red-500">*</span>
            </label>
            <input 
                type="text"
                id="CompanyName"
               
                className="py-3 px-2 bg-slate-100 w-full md:w-[30rem] rounded-md mt-2"
                required 
            />
            <label htmlFor="firstName" className="md:text-base text-gray-400 font-md mt-5 block">
                Street Address <span className="text-red-500">*</span>
            </label>
            <input 
                type="text"
                id="Address"
                
                className="py-3 px-2 bg-slate-100 w-full md:w-[30rem] rounded-md mt-2"
                required 
            />
            <label htmlFor="firstName" className="md:text-base text-gray-400 font-md mt-5 block">
                Appartment, floor (Optional) <span className="text-red-500">*</span>
            </label>
            <input 
                type="text"
                id="Apartment"
               
                className="py-3 px-2 bg-slate-100 w-full md:w-[30rem] rounded-md mt-2"
                
            />
            <label htmlFor="firstName" className="md:text-base text-gray-400 font-md mt-5 block">
                Town/City <span className="text-red-500">*</span>
            </label>
            <input 
                type="text"
                id="Town"
               
                className="py-3 px-2 bg-slate-100 w-full md:w-[30rem] rounded-md mt-2"
                required 
            />
            <label htmlFor="firstName" className="md:text-base text-gray-400 font-md mt-5 block">
                Phone Number <span className="text-red-500">*</span>
            </label>
            <input 
                type="digit"
                id="PhoneNumber"
               
                className="py-3 px-2 bg-slate-100 w-full md:w-[30rem] rounded-md mt-2"
                required 
            />
            <label htmlFor="firstName" className="md:text-base text-gray-400 font-md mt-5 block">
                Email Address <span className="text-red-500">*</span>
            </label>
            <input 
                type="Email"
                id="Email Address"
               
                className="py-3 px-2 bg-slate-100 w-full md:w-[30rem] rounded-md mt-2"
                required 
            />
                <label htmlFor="agree" className="flex items-center gap-2 cursor-pointer mt-5 md:mb-15">
                    <input
                    type="checkbox"
                    id="agree" 
                    className="w-4 h-4 accent-red-500"
                    />
                    <span className="text-sm text-gray-700">
                    Save this information for faster check-out next time
                    </span>
                </label>
            </form>
            </div>
             <div className=" md:mx-[5rem] lg:mt-[6rem]">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>

            {/* Order Summary */}
            <div className="bg-white p-4 m-auto rounded shadow-md">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <ul>
                {cart.map((item) => (
                    <li key={item.id} className="flex justify-between mb-2">
                    <span>{item.desc} x {item.quantity}</span>
                    <span>${item.amount * item.quantity}</span>
                    </li>
                ))}
                </ul>

                <hr className="my-3" />

                <div className="flex justify-between font-bold">
                <span>Subtotal:</span>
                <span>${total}</span>
                </div>
      </div>
     <div className="flex md:flex-row mt-9">
        <form className="flex gap-6">
            {/* Bank */}
            <label className="flex items-center gap-2 cursor-pointer">
            <input
                type="radio"
                name="payment"   // ✅ group radios
                value="bank"
                className="h-4 w-4 text-red-500 focus:ring-red-500"
            />
            Bank
            </label>

                 <label className="flex items-center gap-2 cursor-pointer">
                <input
                    type="radio"
                    name="payment"   // ✅ same name
                    value="cod"
                    className="h-4 w-4 text-red-500 focus:ring-red-500"
                />
                Cash on Delivery
                </label>
        </form>
            </div>
           <div className="grid md:grid-cols-2 p-5 md:p-1  md:w-full h-[3rem] md:mt-5 md:h-[3rem] gap-3">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-grow border rounded px-3 text-sm md:text-base py-2 md:px-3 md:py-2"
                />
                <button className="bg-red-500 text-white px-3 py-2 text-sm md:text-base rounded hover:bg-red-600">
                  Apply Coupon
                </button>
              </div>
      <div className="text-center p-3">
      <Link to="/Error"><button className="mt-[8rem] md:mt-[3rem]  md:w-full  w-[10rem] bg-red-500 text-white py-2 px-3 rounded hover:bg-red-600">
        Place Order
      </button></Link>
      </div>
    </div>
        </div>
        </>
    )
}