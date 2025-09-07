import { useCart } from "../Components/CartContext"
import { Link } from "react-router-dom"
import { FaTrash } from "react-icons/fa";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <>
      {/* Breadcrumb */}
      <div className="p-4 md:p-9 mx-4 md:mx-9">
        <Link to="/">
          <button className="text-gray-400 font-bold">Home /</button>
        </Link>
        <button className="font-bold"> Cart</button>
      </div>

      <div className="p-4 md:p-6">
        <h1 className="text-base md:text-2xl font-bold md:mx-[5rem] mb-4 md:mb-9">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid md:mx-[5rem] gap-6">
            {/* ✅ Desktop / Tablet Table */}
            <div className="overflow-x-auto hidden md:block">
              <table className="w-full shadow-md text-xs md:text-base">
                <thead>
                  <tr className="bg-gray-100 shadow-md rounded-md text-left">
                    <th className="p-2 md:p-3">Product</th>
                    <th className="p-2 md:p-3">Price</th>
                    <th className="p-2 md:p-3">Quantity</th>
                    <th className="p-2 md:p-3">Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="shadow-md rounded-md">
                      <td className="p-3 md:p-7">{item.desc}</td>
                      <td className="p-3 md:p-7">${item.amount}</td>
                      <td className="p-3 md:p-7">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, Number(e.target.value))
                          }
                          className="w-12 md:w-16 p-1 shadow-md border rounded"
                        />
                      </td>
                      <td className="p-3">${item.amount * item.quantity}</td>
                      <td className="p-3">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Return / Update Buttons */}
              <div className="flex flex-col p-5 sm:flex-row justify-between gap-3 mt-4 mb-6">
                <Link to="/">
                  <button className="w-full text-sm md:text-base sm:w-auto px-4 py-2 border rounded hover:bg-gray-100">
                    Return To Shop
                  </button>
                </Link>
                <button className="w-full sm:w-auto text-sm md:text-base px-4 py-2 border rounded hover:bg-gray-100">
                  Update Cart
                </button>
              </div>
            </div>

            {/* ✅ Mobile Card Layout */}
            <div className="md:hidden space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg shadow-md p-4 space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{item.desc}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <span>Price:</span>
                    <span>${item.amount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Quantity:</span>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                      className="w-16 p-1 shadow-md border rounded"
                    />
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Subtotal:</span>
                    <span>${item.amount * item.quantity}</span>
                  </div>
                </div>
              ))}

              {/* Return / Update Buttons for Mobile */}
              <div className="flex flex-col gap-3 mt-4 mb-6">
                <Link to="/">
                  <button className="w-full text-sm px-4 py-2 border rounded hover:bg-gray-100">
                    Return To Shop
                  </button>
                </Link>
                <button className="w-full text-sm px-4 py-2 border rounded hover:bg-gray-100">
                  Update Cart
                </button>
              </div>
            </div>

            {/* Coupon + Cart Total (Responsive stacking) */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Coupon Section */}
              <div className="grid md:grid-cols-2 p-5 md:p-1 mb-9 md:w-full h-auto  gap-3">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-grow border rounded md:h-[3rem] px-3 text-sm md:text-base py-2 md:px-3 md:py-2"
                />
                <button className="bg-red-500 text-white md:h-[3rem] px-3 py-2 text-sm md:text-base rounded hover:bg-red-600">
                  Apply Coupon
                </button>
              </div>

              {/* Cart Total */}
              <div className="p-6 rounded shadow-md">
                <h2 className="text-lg md:text-xl font-bold mb-4">Cart Total</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between font-bold mb-4">
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
                <Link to="/Checkout">
                  <button className="w-full bg-red-500 text-sm md:text-base text-white py-3 rounded hover:bg-red-600">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
