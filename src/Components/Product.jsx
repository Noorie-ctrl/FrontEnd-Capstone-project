import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import Photo from "../assets/Frame 604 (1).png";
import Laptop from "../assets/Frame 604 (2).png";
import Cesar from "../assets/Frame 604.png";
import Boot from "../assets/Frame 608 (1).png";
import Car from "../assets/Frame 608.png";
import Game from "../assets/Frame 608 (2).png";
import Coat from "../assets/Frame 608 (3).png";
import Perfume from "../assets/Frame 706.png";
import { useAuth } from "./AuthContext";
import { useCart } from "./CartContext";  
import { useNavigate } from "react-router-dom";    

const Devices = [
  { image: Photo, desc: "CANON EOS DSUR Camera", amount: 360, id: "d-1" },
  { image: Laptop, desc: "ASUS FHD gaming laptop", amount: 500, id: "d-2"},
  { image: Cesar, desc: "Breed dry Dog food", amount: 100, id: "d-3" },
  { image: Boot, desc: "Jr.Zoom soccer cleats", amount: 1160, id: "d-4" },
  { image: Car, desc: "Kids electric car", amount: 960, id: "d-5" },
  { image: Game, desc: "GPII Shooter Usb game pad", amount: 760, id: "d-6"},
  { image: Coat, desc: "Quilted Satin Jacket", amount: 160, id: "d-7" },
  { image: Perfume, desc: "Curology product set", amount: 500, id: "d-8"},
];

export default function Product() {
  const { user, favorites, toggleFavorite } = useAuth(); // ✅ include user
  const [ratings, setRatings] = useState(Array(Devices.length).fill(0));
  const { addToCart } = useCart(); 
  const navigate = useNavigate();

  const handleRating = (index, starIndex) => {
    const newRatings = [...ratings];
    newRatings[index] = starIndex + 1;
    setRatings(newRatings);
  };

  // ✅ Only adds if logged in
  const handleCardClick = (item) => {
    if (!user) {
      navigate("/SignUp");
      return;
    }
    addToCart(item);
  };

  return (
    <section className="md:mx-[4rem] mx-[1rem] my-[5rem]">
      {/* Section Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-5 md:h-10 md:w-5 bg-[#DB4444] rounded"></div>
        <p className="text-[#DB4444] font-bold text-sm">Our Products</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="md:text-2xl text-xl font-bold">Explore our products</h1>
        <div className="flex gap-3">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-6">
        {Devices.map((item, index) => {
          const isFavorite = favorites.includes(item.id);
          return (
            <div
              key={index}
              className="shadow rounded-lg p-4 bg-gray-300 relative group cursor-pointer hover:scale-105 transition"
              onClick={() => handleCardClick(item)}  // ✅ use handleCardClick
            >
              {/* Heart Icon */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); 
                  toggleFavorite(item.id);
                }}
                className="absolute top-3 right-3 p-1 bg-white rounded-full shadow hover:scale-110 transition"
              >
                <Heart
                  className={`w-5 h-5 ${isFavorite ? "text-red-500" : "text-gray-500"}`}
                  fill={isFavorite ? "currentColor" : "none"}
                />
              </button>

              {/* Product Image */}
              <img
                src={item.image}
                alt={item.desc}
                className="w-full h-40 object-contain mb-3"
              />
              <p className="font-medium text-sm mb-2">{item.desc}</p>

              {/* Prices */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-500 font-bold">${item.amount}</span>
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, starIndex) => (
                  <button
                    key={starIndex}
                    onClick={(e) => {
                      e.stopPropagation(); // don’t trigger card click
                      handleRating(index, starIndex);
                    }}
                  >
                    <Star
                      className={`w-5 h-5 ${
                        starIndex < ratings[index]
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Button */}
      <div className="text-center mt-7 md:mt-15">
        <button className="text-base text-white bg-[#DB4444] rounded-md hover:bg-[#DB4455] p-3 m-2">
          View All products
        </button>
      </div>
    </section>
  );
}
