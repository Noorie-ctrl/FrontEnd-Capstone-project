import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import Chair from "../assets/Frame 614.png";
import Keyboard from "../assets/Frame 612.png";
import Fire from "../assets/Frame 613.png";
import Game from "../assets/Game.png";
import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useCart } from "./CartContext"; 
import { useNavigate } from "react-router-dom";    

const gadgets = [
  { image: Chair, desc: "5 Series Comfort Chair", amount: 375, price2: 405, discount: "-25%", id: "g-1" },
  { image: Keyboard, desc: "AK-900 Wired Keyboard", amount: 960, price2: 1160, discount: "-10%", id: "g-2"},
  { image: Fire, desc: "IPS LCD Gaming Monitor", amount: 370, price2: 425, discount: "-15%", id: "g-3" },
  { image: Game, desc: "HAVIT HV-G92 Gamepad", amount: 120, price2: 160, discount: "-20%", id: "g-4" },
];

export default function Main() {
  const { favorites, toggleFavorite, user } = useAuth();   // ✅ get user
  const [ratings, setRatings] = useState(Array(gadgets.length).fill(0));
  const { addToCart, clearBadge } = useCart();   // ✅ get clearBadge
  const navigate = useNavigate(); 

  const handleRating = (index, starIndex) => {
    const newRatings = [...ratings];
    newRatings[index] = starIndex + 1; 
    setRatings(newRatings);
  };

  const handleCardClick = (item) => {
    if (!user) {                  // ✅ block if not logged in
      navigate("/SignUp");
      return;
    }
    addToCart(item);
  };

  // ✅ when cart icon or "View All products" is clicked, clear badge + go to Cart
  const handleGoToCart = () => {
    clearBadge();
    navigate("/Cart");
  };

  return (
    <section className="md:mx-[4rem] mx-[1rem] my-[5rem]">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-5 md:h-10 md:w-5 bg-[#DB4444] rounded"></div>
        <p className="text-[#DB4444] font-bold text-sm">Today's</p>
      </div>

      {/* Title + Timer + Arrows */}
      <div className="flex justify-between items-center">
        <div className="flex items-center flex-row gap-8">
          <h1 className="text-2xl font-semibold">Flash Sales</h1>

          {/* Timer */}
          <div className="flex items-center hidden md:flex gap-6">
            <div className="text-center">
              <p className="text-sm">Days</p>
              <p className="text-xl font-bold">03</p>
            </div>
            <span className="text-xl text-[#DB4444] font-bold">:</span>
            <div className="text-center">
              <p className="text-sm">Hours</p>
              <p className="text-xl font-bold">23</p>
            </div>
            <span className="text-xl text-[#DB4444] font-bold">:</span>
            <div className="text-center">
              <p className="text-sm">Minutes</p>
              <p className="text-xl font-bold">19</p>
            </div>
            <span className="text-xl text-[#DB4444] font-bold">:</span>
            <div className="text-center">
              <p className="text-sm">Seconds</p>
              <p className="text-xl font-bold">56</p>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex gap-3">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-400">
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-400">
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-6">
        {gadgets.map((item, index) => {
          const isFavorite = favorites.includes(item.id);
          return (
            <div
              key={index}
              className="shadow rounded-lg p-4 bg-gray-300 relative group cursor-pointer hover:scale-105 transition"
              onClick={() => handleCardClick(item)}   // ✅ now uses handler
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

              {/* Image */}
              <img
                src={item.image}
                alt={item.desc}
                className="w-full h-40 object-contain mb-3"
              />

              {/* Discount */}
              {item.discount && (
                <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs font-semibold px-2 py-1 rounded">
                  {item.discount}
                </span>
              )}

              {/* Description */}
              <p className="font-medium text-sm mb-2">{item.desc}</p>

              {/* Prices */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-500 font-bold">${item.amount}</span>
                <span className="line-through text-gray-500">${item.price2}</span>
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, starIndex) => (
                  <button
                    key={starIndex}
                    onClick={(e) => {
                      e.stopPropagation(); // ✅ prevent card click
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

      {/* View All */}
      <div className="text-center mt-7 md:mt-15">
        <button 
          className="text-base text-white bg-[#DB4444] rounded-md hover:bg-[#DB4455] p-3 m-2"
          onClick={handleGoToCart}   // ✅ clears badge + goes to Cart
        >
          View All products
        </button>
      </div>
      <hr className="text-gray-300 mt-9" />
    </section>
  );
}
