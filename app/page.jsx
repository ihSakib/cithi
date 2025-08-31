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
        setSuccessMsg("❌ চিঠি পৌঁছানো গেল না। আবার চেষ্টা করো।");
      }
    } catch (error) {
      setSuccessMsg("⚠️ পথে কোনো বাধা এসেছে। পরে আবার লিখো।");
      console.error(error);
    }

    setTimeout(() => {
      setSuccessMsg(null);
    }, 3000);
  };

  return (
    <>
      <section
        style={{ backgroundImage: `url('/bg.jpg')` }}
        className="mx-auto  max-w-lg min-h-screen bg-cover bg-center py-10 px-10 md:px-15"
      >
        <section className="mt-25 text-center">
        
          <form className="w-full relative" onSubmit={handleSubmit}>
            <div className="max-w-40 absolute left-0 right-0 mx-auto -top-15">
              <img className="w-full" src="/envelop2.png" alt="Envelope" />
            </div>
            <textarea
              className="border-2 border-[#7c6551] w-full bg-[#f5dbb0] outline-none px-10 pb-4 pt-15 rounded-lg text-[#6b5645]"
              name="msg"
              rows={7}
              placeholder="এখানে লিখো তোমার চিঠি..."
              autoFocus
              required
            ></textarea>
            <input
              className="mt-4 px-6 py-2 bg-[#3e2b16] text-white font-semibold rounded-md cursor-pointer block mx-auto transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(255,193,73,0.4)] focus:outline-none"
              type="submit"
              value="📮 পাঠাও"
            />
          </form>
        </section>
        {successMsg && (
          <p className="mt-10 text-sm px-4 py-2 text-center text-[#3e2b16] italic">
            {successMsg}
          </p>
        )}
      </section>
    </>
  );
}
