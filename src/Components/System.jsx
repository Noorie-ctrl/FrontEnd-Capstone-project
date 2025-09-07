import Sound from "../assets/Frame 694.png"
export default function System(){
    return (
        <>
        <section className="md:mx-[3rem] lg:mx-[4rem] mx-[1rem] my-[5rem]">
            <div className="bg-black grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 w-full md:h-[35rem]">
               <div className="lg:p-[5rem] md:p-[3rem] p-[2rem]">
                 <p className="text-[#00FF66] text-base md:text-xl mt-5 md:mb-5">Categories</p>
                 <h1 className="text-white md:text-5xl md:mt-9 text-xl mt-5 font-black ">Enhance your music experience</h1>
                 <div className="flex md:gap-5 md:mt-9 gap:3 mt-5">
                    <div className="rounded-full bg-white md:h-16 md:w-16 h-12 w-12 text-center">
                        <h1 className="md:text-xl text-base p-2 font-black ">23</h1>
                        <p className="md:text-sm text-xs mt-[-1rem]">Hours</p>
                    </div>
                     <div className="rounded-full bg-white md:h-16 md:w-16 h-12 w-12 text-center">
                        <h1 className="text-xl p-2 font-black">05</h1>
                        <p className="md:text-sm text-xs  mt-[-1rem]">Days</p>
                    </div>
                     <div className="rounded-full bg-white md:h-16 md:w-16 h-12 w-12 text-center">
                        <h1 className="md:text-xl text-base p-2 font-black">59</h1>
                        <p className="md:text-sm text-xs mt-[-1rem]">Min</p>
                    </div>
                     <div className="rounded-full bg-white md:h-16 md:w-16 h-12 w-12 text-center">
                        <h1 className="md:text-xl text-base p-2 font-black">35</h1>
                        <p className="md:text-sm text-xs mt-[-1rem]">Sec</p>
                    </div>
                 </div>
                 <div className="md:mt-11 mt-5">
                 <button className="bg-[#00FF66] text-white md:px-15 px-5 py-[1rem] my-1 md:py-[1rem] md:my-5 hover:bg-green-400 cursor-pointer rounded-md shadow-md text-xl">
                    Buy Now!
                 </button>
                 </div>
               </div>
               <div className="md:my-11 items-center order-1 md:order-2">
                <img 
                className="rounded-lg"
                src ={Sound} />
               </div>
            </div>
          
        </section>
        </>
    )
}