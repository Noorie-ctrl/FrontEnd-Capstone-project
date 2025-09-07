import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartViewed, setCartViewed] = useState(false); // ✅ track if cart was opened

  // ✅ Calculate total price
  const total = cart.reduce((sum, item) => sum + item.amount * item.quantity, 0);

  // ✅ Calculate badge count (only if not viewed)
  const badgeCount = cartViewed
    ? 0
    : cart.reduce((sum, item) => sum + item.quantity, 0);

  // ✅ Add item to cart
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });

    setCartViewed(false); // 🔹 reset badge when adding new items
  };

  // ✅ Remove item completely
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Update quantity safely
  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // ✅ Mark cart as viewed → hides badge
  const clearBadge = () => {
    setCartViewed(true);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total,
        badgeCount,
        clearBadge,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
