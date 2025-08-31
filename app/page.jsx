"use client";

import { useState } from "react";

export default function Home() {
  const [successMsg, setSuccessMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = formData.get("msg");

    try {
      setSuccessMsg("তোমার চিঠি রওনা দিল...");
      const response = await fetch(
        "https://ihsakib-admin.vercel.app/api/send-msg",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ msg: message }),
        }
      );

      if (response.ok) {
        setSuccessMsg("চিঠি গন্তব্যে পৌঁছেছে।");
        e.target.reset();
      } else {
        setSuccessMsg("চিঠি পৌঁছানো গেল না। আবার চেষ্টা করো।");
      }
    } catch (error) {
      setSuccessMsg("পথে কোনো বাধা এসেছে। পরে আবার লিখো।");
      console.error(error);
    }

    setTimeout(() => {
      setSuccessMsg(null);
    }, 3000);
  };

  let messageClasses = "mt-6 text-base px-4 py-2 rounded-md";
  if (successMsg) {
    if (successMsg.startsWith("✅")) {
      messageClasses += " bg-blue-100 text-accent"; // Accent is blue-500
    } else if (successMsg.startsWith("❌")) {
      messageClasses += " bg-red-100 text-red-700"; // Darker red for better contrast
    } else if (successMsg.startsWith("⚠️")) {
      messageClasses += " bg-yellow-100 text-yellow-700"; // Warning style
    } else {
      // Default/sending message style
      messageClasses += " bg-gray-100 text-gray-700";
    }
  }

  return (
    <>
      <section
        className="mx-auto max-w-lg min-h-screen bg-cover bg-center py-10 px-10 md:px-15 bg-primary"
      >
<<<<<<< HEAD
        <section className="mt-25 text-center">
         
=======
        <section className="mt-16">
>>>>>>> 277a4e4e6c88114aa4816058e001c7b7a0325954
          <form className="w-full relative" onSubmit={handleSubmit}>
            <textarea
              className="w-full bg-gray-50 outline-none px-10 pb-4 pt-6 rounded-xl text-text-primary shadow-sm focus:shadow-md focus:ring-2 focus:ring-accent focus:border-transparent"
              name="msg"
              rows={7}
              placeholder="এখানে লিখো তোমার চিঠি..."
              autoFocus
              required
            ></textarea>
            <input
<<<<<<< HEAD
              className="mt-4 px-6 py-2 bg-[#3e2b16] text-white font-semibold rounded-md cursor-pointer block mx-auto transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(255,193,73,0.4)] focus:outline-none"
=======
              className="mt-4 px-6 py-2.5 bg-accent text-button-text font-medium rounded-lg cursor-pointer block mx-auto transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
>>>>>>> 277a4e4e6c88114aa4816058e001c7b7a0325954
              type="submit"
              value="📮 পাঠাও"
            />
          </form>
        </section>
        {successMsg && (
<<<<<<< HEAD
          <p className="mt-10 text-sm px-4 py-2 text-center text-[#3e2b16] italic">
=======
          <p className={messageClasses}>
>>>>>>> 277a4e4e6c88114aa4816058e001c7b7a0325954
            {successMsg}
          </p>
        )}
      </section>
    </>
  );
}
