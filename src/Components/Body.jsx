import { useState } from "react";
import { Heart, Star } from "lucide-react";
import Shelf from "../assets/Frame 612 (2).png";
import Sound from "../assets/Frame 610.png";
import Bag from "../assets/Frame 606.png";
import Cardigan from "../assets/Frame 605.png";
import { useAuth } from "./AuthContext";
import { useCart } from "./CartContext";  
import { useNavigate } from "react-router-dom";    


const Products = [
  { image: Shelf, icon: Heart, icon2: Star, desc: "Small bookshelf", amount: 380, id: "p-1" },
  { image: Sound, icon: Heart, icon2: Star, desc: "RGB liquid CPU cooler", amount: 260, amount2: 360, id: "p-2" },
  { image: Bag, icon: Heart, icon2: Star, desc: "Gucci duffle bag", amount: 960, amount2: 1160, id: "p-3" },
  { image: Cardigan, icon: Heart, icon2: Star, desc: "The north coat", amount: 260, amount2: 360, id: "p-4" },
];

export default function Body() {
  const { user, favorites, toggleFavorite } = useAuth();
  const { addToCart } = useCart(); // ✅ use cart
   const navigate = useNavigate(); 

  const [ratings, setRatings] = useState(Array(Products.length).fill(0));

  const handleRating = (index, starIndex) => {
    const newRatings = [...ratings];
    newRatings[index] = starIndex + 1;
    setRatings(newRatings);
  };
   const handleCardClick = (item) => {
    if (!user) {
      navigate("/SignUp");
      return;
    }
    addToCart(item);
  };


  return (
    <section className="md:mx-[4rem] mx-[1rem] my-[5rem]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-5 md:h-10 md:w-5 bg-[#DB4444] rounded"></div>
        <p className="text-[#DB4444] font-bold text-sm">This month</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="md:text-2xl text-xl font-bold">Best Selling Products</h1>
        <div>
          <button className="p-2 m-1 bg-[#DB4444] text-white rounded">
            View All
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-6">
        {Products.map((item, index) => (
          <div
            key={index}
            className="shadow rounded-lg p-4 bg-gray-300 relative group cursor-pointer hover:scale-105 transition"
            onClick={() => handleCardClick(item)}  // ✅ whole card adds to cart
          >
            {/* Heart Icon */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent cart add when clicking heart
                toggleFavorite(item.id);
              }}
              className="absolute top-3 right-3 p-1 bg-white rounded-full shadow hover:scale-110 transition"
            >
              <Heart
                className={`w-5 h-5 ${
                  favorites.includes(item.id)
                    ? "fill-red-500 text-red-500"
                    : "text-gray-500"
                }`}
              />
            </button>

            {/* Image */}
            <img
              src={item.image}
              alt={item.desc}
              className="w-full  h-40 object-contain mb-3"
            />

            {/* Prices */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-500 font-bold">${item.amount}</span>
              {item.amount2 && (
                <span className="line-through text-gray-500">${item.amount2}</span>
              )}
            </div>

            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, starIndex) => (
                <button
                  key={starIndex}
                  onClick={(e) => {
                    e.stopPropagation(); // ✅ prevent adding to cart on star click
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
        ))}
      </div>
    </section>
  );
}
