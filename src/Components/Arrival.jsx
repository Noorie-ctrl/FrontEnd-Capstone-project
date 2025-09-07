import {ChevronLeft, ChevronRight, Heart, Star} from "lucide-react"
import PlayStation from "../assets/Ps.png"
import Woman from "../assets/Wman.png"
import Gucci from "../assets/Frame 706.png"
import Speak from "../assets/Speak.png"
export default function Arrival(){
    return(
        
         <section className="md:mx-[4rem] mx-[1rem] my-[5rem]">
        
            <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-5 md:h-10 md:w-5 bg-[#DB4444] rounded"></div>
                <p className="text-[#DB4444] font-bold text-sm">Featured</p>
            </div>
                
           <div className="flex justify-between items-center mb-6">
                <h1 className="md:text-2xl text-xl font-bold">New Arrival</h1>
           </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-5 h-[30rem]">
                <div className="row-span-2 relative rounded-xl overflow-hidden bg-black cursor-pointer transition-transform duration-300 hover:-translate-y-1 group">
                   <img 
                   alt="playStation"
                   className="object-cover md:block mx-[3rem] md:object-cover"
                   src={PlayStation} />
                    <div class="product-overlay absolute bottom-0 left-0 right-0 text-white p-6 pb-6">
                        <h3 class="md:text-2xl text-sm font-semibold md:mb-2">PlayStation 5</h3>
                        <p class="md:text-sm text-xs opacity-90 mb-4 leading-relaxed">Black and White version of the PS5 <br /> coming out on sale.</p>
                        <button class="bg-transparent border border-white text-white md:px-4 px-2 py-1 md:py-2 rounded md:text-sm text-xs transition-all duration-300 hover:bg-white hover:text-gray-800">Shop Now</button>
                    </div>
                </div>
                 <div className="relative rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1 group">
                <img src={Woman} alt="Women's Collections" className="md:w-full md:h-full h-[7rem] w-full object-cover " />
                <div className="product-overlay absolute bottom-0 left-0 right-0 text-white p-6 pb-5">
                    <h3 className="md:text-xl text-sm font-semibold md:mb-2">Women's Collections</h3>
                    <p className="md:text-sm text-xs opacity-90 md:mb-3 leading-relaxed">Featured women collections <br/> that give you another vibe.</p>
                    <button className="bg-transparent border border-white text-white md:px-4 px-2 py-1 md:py-2 rounded md:text-sm text-xs transition-all duration-300 hover:bg-white hover:text-gray-800">Shop Now</button>
                </div>
            </div>
             <div className="grid grid-cols-2 gap-5">
                
                <div className="relative rounded-xl overflow-hidden cursor-pointer bg-black transition-transform duration-300 hover:-translate-y-1 group">
                    <img src={Speak} alt="Speakers" className=" object-cover w-[7rem] mx-[1rem] my-[1rem] md:mx-[3rem]" />
                    <div className="product-overlay absolute bottom-0 left-0 right-0 text-white p-5 pb-4">
                        <h3 className="md:text-lg text-sm font-semibold mb-1">Speakers</h3>
                        <p className="md:text-sm text-xs opacity-90 mb-3">Amazon wireless speakers</p>
                        <button className="bg-transparent border border-white text-white md:px-3 px-1 py-0.5 md:py-1.5 rounded md:text-sm text-xs transition-all duration-300 hover:bg-white hover:text-gray-800">Shop Now</button>
                    </div>
                </div>
                 <div className="relative rounded-xl overflow-hidden bg-black cursor-pointer transition-transform duration-300 hover:-translate-y-1 group">
                    <img src={Gucci} alt="Perfume" className=" object-cover w-[7rem] md:w-full mx-[1rem] my-[1rem] md:mx-[3rem]" />
                    <div className="product-overlay absolute bottom-0 left-0 right-0 text-white p-5 pb-4">
                        <h3 className="md:text-lg text-sm font-semibold mb-1">Perfume</h3>
                        <p className="md:text-sm text-xs opacity-90 mb-3">GUCCI INTENSE OUD EDP</p>
                        <button className="bg-transparent border border-white text-white md:px-3 px-1 py-0.5 md:py-1.5 rounded md:text-sm text-xs transition-all duration-300 hover:bg-white hover:text-gray-800">Shop Now</button>
                    </div>
                </div>
                </div>
            </div>
         </section>
        
    )
}