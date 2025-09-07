import { ChevronLeft, ChevronRight, Phone, Computer, Watch, Camera, Headphones, Gamepad2 } from "lucide-react"; 

const Categories = [
  { icon: Phone, desc: "Phones" },
  { icon: Computer, desc: "Computers" },
  { icon: Watch, desc: "SmartWatch" },
  { icon: Camera, desc: "Camera" },
  { icon: Headphones, desc: "HeadPhone" },
  { icon: Gamepad2, desc: "Gaming" },
];

export default function Section() {
  return (
    <>
      <section className="md:mx-[4rem] mx-[1rem] my-[5rem]">
        
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-5 md:h-10 md:w-5 bg-[#DB4444] rounded"></div>
          <p className="text-[#DB4444] font-bold text-sm">Categories</p>
        </div>

        
        <div className="flex justify-between items-center mb-6">
          <h1 className="md:text-2xl text-xl font-bold">Browse by Category</h1>
          <div className="flex gap-3">
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Categories.map((category, index) => {
            const Icon = category.icon; 
            return (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-4 border rounded hover:bg-[#DB4444] hover:text-white cursor-pointer transition-colors"
              >
                <Icon className="w-10 h-20 mb-2" />
                <p className="text-sm font-medium">{category.desc}</p>
              </div>
            );
          })}
        </div><hr className="text-gray-300 mt-9"/>
      </section>
    </>
  );
}
