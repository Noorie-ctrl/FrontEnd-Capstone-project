import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="lg:text-7xl md:text-5xl font-bold mb-4">404 Not Found</h1>
      <p className="md:text-xl text-base mb-6">
        Your visited page was not found. You may go back to the home page.
      </p>
      <div className="flex flex-col md:flex-row md:space-x-5 space-y-5">
        <Link to="/">
        <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
          Back to Home Page
        </button>
      </Link>
      <Link to="/Checkout">
        <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
          Back to Checkout page
        </button>
      </Link>
      </div>
      
    </div>
  );
}
