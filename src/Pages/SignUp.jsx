import { useState } from "react";
import Side from "../assets/Side Image.png";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../Components/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (isSignUp) {
      // ✅ Sign Up flow
      if (users.find((u) => u.email === form.email)) {
        alert("User already exists, please log in.");
        setIsSignUp(false);
        return;
      }

      // Save new user
      users.push(form);
      localStorage.setItem("users", JSON.stringify(users));

      // Set currentUser immediately after signup
      localStorage.setItem("currentUser", JSON.stringify(form));
      login(form);

      alert("Account created! You are now logged in ✅");
      navigate("/Profile");
    } else {
      // ✅ Login flow
      const user = users.find(
        (u) => u.email === form.email && u.password === form.password
      );

      if (!user) {
        alert("Invalid email or password ❌");
        return;
      }

      // Save current user for session
      localStorage.setItem("currentUser", JSON.stringify(user));
      login(user);

      alert(`Welcome back, ${user.name}!`);
      navigate("/Profile");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:mt-[5rem] lg:mb-[5rem] md:grid-cols-2 lg:grid-cols-2 mx-[1rem] md:mx-[3rem] lg:mx-[4rem]">
      <div className="m-1  lg:mx-[-4rem]">
        <img 
        className=""
        src={Side} alt="side" />
      </div>

      <div className="m-9 lg:p-[5rem]">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-3">
          {isSignUp ? "Create an account" : "Log in to Exclusive"}
        </h1>
        <p className="text-sm md:text-base">Enter your details below</p>

        <form onSubmit={handleSubmit} className="mb-5">
          {isSignUp && (
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="border-b py-3 w-full mt-5 border-gray-400"
              required
            />
          )}

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email or Phone Number"
            className="border-b py-3 w-full mt-5 border-gray-400"
            required
          />

          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="border-b py-3 w-full mt-5 border-gray-400"
            required
          />

          <div className="mt-5 space-y-5">
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 w-full transition"
            >
              {isSignUp ? "Create Account" : "Log in"}
            </button>

            {isSignUp && (
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-black px-6 py-3 rounded-md bg-transparent hover:bg-red-600 w-full transition"
              >
                <FcGoogle className="md:text-xl text-2xl" />
                <span className="text-black text-sm md:text-base">Sign up with Google</span>
              </button>
            )}
          </div>
        </form>

        {!isSignUp ? (
          <button
            onClick={() => setIsSignUp(true)}
            className="text-sm text-red-500 mt-3"
          >
            Don’t have an account? Sign up
          </button>
        ) : (
          <p className="text-base text-center text-gray-500">
            Already have an account?{" "}
            <span
              className="border-b border-gray-500 cursor-pointer"
              onClick={() => setIsSignUp(false)}
            >
              Log in
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
