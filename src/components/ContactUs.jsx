import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../assets/footer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactUs = (animation) => {
  const form = useRef(null);
  const name = useRef(null);
  const mail = useRef(null);
  const message = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await toast.promise(
        emailjs.sendForm(
          "service_2tqoc9h",
          "template_mowr0th",
          form.current,
          "cHYrZWWCA8f2j2Ypt"
        ),
        {
          pending: "Sending email...", // Displayed while the promise is pending
          success: "Email sent successfully! 🙌🏻", // Displayed on success
          error: "Error sending email. 👎🏻", // Displayed on error
        }
      );

      console.log(result.text);
      name.current.value = "";
      mail.current.value = "";
      message.current.value = "";
    } catch (error) {
      console.error(error.text);
    }
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-center items-center gap-4 pt-10"
      >
        <input
          type="text"
          name="user_name"
          ref={name}
          placeholder="Type your name"
          className="px-3 py-1 w-full shadow-lg"
        />
        <input
          type="email"
          name="user_email"
          ref={mail}
          placeholder="Type your email"
          className="px-3 py-1 w-full shadow-lg"
        />
        <textarea
          name="message"
          ref={message}
          className="px-3 h-[200px] w-full resize-none shadow-lg"
          placeholder="Type a message"
        />
        <button className="buttonfx slideleft mt-5 shadow-xl">Send</button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
