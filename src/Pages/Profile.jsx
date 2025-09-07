import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";
import { useState } from "react";

export default function AccountPage() {
  const { user, logout, updateUser } = useAuth(); // ✅ use updateUser instead
  const navigate = useNavigate();

  // ✅ Local state for form inputs (pre-fill with user data if available)
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [address, setAddress] = useState(user?.address || "");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/SignUp"); // redirect to signup/login page
  };

  // ✅ Save profile changes
  const handleSaveProfile = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...user,
      firstName,
      lastName,
      email,
      address,
      password: user.password, // keep old password unless changed
    };

    updateUser(updatedUser);
    alert("Profile updated successfully ✅");
  };

  // ✅ Handle password change
  const handleChangePassword = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match ❌");
      return;
    }

    if (currentPassword !== user.password) {
      alert("Current password is incorrect ❌");
      return;
    }

    const updatedUser = {
      ...user,
      firstName,
      lastName,
      email,
      address,
      password: newPassword, // ✅ update password
    };

    updateUser(updatedUser);
    alert("Password updated successfully ✅");

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <div className="p-5">
        <Link to="/">
          <h1 className="text-gray-300 text-base">
            Home / <span className="text-black">My Account</span>
          </h1>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="col-span-1 space-y-6 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Manage My Account</h3>
            <ul className="space-y-2 mx-3">
              <li className="text-red-500 cursor-pointer">My Profile</li>
              <li className="cursor-pointer hover:text-red-500">Address Book</li>
              <li className="cursor-pointer hover:text-red-500">My Payment Options</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">My Orders</h3>
            <ul className="space-y-2 mx-3">
              <li className="cursor-pointer hover:text-red-500">My Returns</li>
              <li className="cursor-pointer hover:text-red-500">My Cancellations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">My Wishlist</h3>
          </div>
          <div>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </aside>

        {/* Profile Form */}
        <main className="col-span-3 p-6 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-6 text-red-500">
            Edit Your Profile
          </h2>

          <form onSubmit={handleSaveProfile} className="space-y-6">
            {/* Name fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 w-full bg-slate-100 rounded-md p-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 w-full bg-slate-100 rounded-md p-2 text-sm"
                />
              </div>
            </div>

            {/* Email & Address */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full bg-slate-100 rounded-md p-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 w-full bg-slate-100 rounded-md p-2 text-sm"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="px-6 py-2 bg-slate-100 rounded-md text-sm font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-red-500 text-white rounded-md text-sm font-medium hover:bg-red-600"
              >
                Save Changes
              </button>
            </div>
          </form>

          {/* Password Section */}
          <h2 className="text-lg font-semibold mt-10 mb-6 text-red-500">
            Change Password
          </h2>
          <form onSubmit={handleChangePassword} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="mt-1 w-full bg-slate-100 rounded-md p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 w-full bg-slate-100 rounded-md p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 w-full bg-slate-100 rounded-md p-2 text-sm"
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="submit"
                className="px-6 py-2 bg-red-500 text-white rounded-md text-sm font-medium hover:bg-red-600"
              >
                Update Password
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
