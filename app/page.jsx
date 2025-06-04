"use client";

import { useState } from "react";

export default function Home() {
  const [successMsg, setSuccessMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = formData.get("msg");

    try {
      setSuccessMsg("Sending...");
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
        setSuccessMsg("✅ Message sent successfully!");
        e.target.reset();
      } else {
        setSuccessMsg("❌ Failed to send message.");
      }
    } catch (error) {
      setSuccessMsg("⚠️ An error occurred. Please try again.");
      console.error(error);
    }

    // Optional: Clear message after 5 seconds
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
        <section className="mt-16">
          <form className="w-full relative" onSubmit={handleSubmit}>
            <textarea
              className="w-full bg-gray-50 outline-none px-10 pb-4 pt-6 rounded-xl text-text-primary shadow-sm focus:shadow-md focus:ring-2 focus:ring-accent focus:border-transparent"
              name="msg"
              rows={7}
              placeholder="Type your mind..."
              autoFocus
              required
            ></textarea>
            <input
              className="mt-4 px-6 py-2.5 bg-accent text-button-text font-medium rounded-lg cursor-pointer block mx-auto transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              type="submit"
              value="Send"
            />
          </form>
        </section>
        {successMsg && (
          <p className={messageClasses}>
            {successMsg}
          </p>
        )}
      </section>
    </>
  );
}
