import { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import App from "../assets/App.png"
import GooglePlay from "../assets/GooglePlay.png"
import Qr from "../assets/Qr Code.png"

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }
    setMessage("✅ Subscribed successfully!");
    setEmail(""); // clear input
  };

  return (
    <footer className="bg-black text-white px-6 md:px-16 lg:px-32 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
        
        <div>
          <h2 className="text-lg font-bold mb-4">Exclusive</h2>
          <p className="mb-4 text-sm">Subscribe</p>
          <p className="mb-4 text-sm">Get 10% off your first order</p>
          <form onSubmit={handleSubscribe} className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 ring-2 py-2 w-full bg-white rounded-l-lg text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-r-lg font-bold"
            >
              →
            </button>
          </form>
          {message && <p className="text-xs mt-2">{message}</p>}
        </div>

        
        <div>
          <h2 className="text-lg font-bold mb-4">Support</h2>
          <p className="text-sm">111 Bijoy sarani, Dhaka,</p>
          <p className="text-sm">DH 1515, Bangladesh.</p>
          <p className="text-sm">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Account</h2>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Link</h2>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-lg font-bold mb-4">Download App</h2>
          <p className="text-sm mb-3">Save $3 with App New User Only</p>
          <div className="flex gap-4 items-center md:mb-5">
            <img src={Qr} className="h-24 w-24" alt="Qr" />
            <div className="flex flex-col gap-2 ">
            <img src={GooglePlay} alt="Google Play" className="h-10 hidden md:block" />
            <img src={App} alt="App Store" className="h-10 hidden md:block" />
            </div>
          </div>

          <div className="flex md:gap-4 mt-3 gap-4 ">
            <Facebook className="cursor-pointer hover:text-gray-400" />
            <Twitter className="cursor-pointer hover:text-gray-400" />
            <Instagram className="cursor-pointer hover:text-gray-400" />
            <Linkedin className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs mt-6 text-gray-500">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
}
