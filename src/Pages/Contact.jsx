import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // reset form
      } else {
        setStatus("❌ Error: " + data.error);
      }
    } catch (err) {
      setStatus("❌ Something went wrong!");
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="lg:p-9">
              <h2 className="text-base font-semibold mb-6 text-gray-400">Home /<span className="text-black">Contact</span></h2>
        </div>
    

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:mx-[7rem]">
        {/* Left Section */}
        <div className="space-y-6 p-6 shadow-md">
          <div className="p-6 rounded-lg ">
            <h3 className="flex items-center gap-2 text-lg font-medium text-red-600">
              📞 Call To Us
            </h3>
            <p className="mt-2 text-gray-600">We are available 24/7.</p>
            <p className="font-semibold mt-1">Phone: +8801611112222</p>
          </div><hr className="text-gray-400" />

          <div className="p-6 ">
            <h3 className="flex items-center gap-2 text-lg font-medium text-red-600">
              ✉️ Write To Us
            </h3>
            <p className="mt-2 text-gray-600">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="font-semibold mt-1">customer@exclusive.com</p>
            <p className="font-semibold">support@exclusive.com</p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-lg shadow-md space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              className=" px-3 py-2 bg-slate-200 rounded w-full focus:ring focus:ring-red-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              className="px-3 bg-slate-200 py-2 rounded w-full focus:ring focus:ring-red-300"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone *"
              value={formData.phone}
              onChange={handleChange}
              className="px-3 bg-slate-200 py-2 rounded w-full focus:ring focus:ring-red-300"
              required
            />
          </div>

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className=" px-3 py-2 bg-slate-200 rounded w-full focus:ring focus:ring-red-300"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
          >
            Send Message
          </button>

          <p className="mt-3 text-sm">{status}</p>
        </form>
      </div>
    </section>
  );
}
