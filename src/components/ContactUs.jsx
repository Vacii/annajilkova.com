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
        className="flex flex-col justify-center items-center gap-4 pt-10 md:hidden"
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

      <form
        ref={form}
        onSubmit={sendEmail}
        className="hidden w-full flex-col justify-center items-start gap-6 pt-10 mb-10 md:flex"
      >
        <input
          type="text"
          name="user_name"
          ref={name}
          placeholder="Type your name"
          className="px-3 py-3 w-1/2 shadow-lg text-xl"
        />
        <input
          type="email"
          name="user_email"
          ref={mail}
          placeholder="Type your email"
          className="px-3 py-3 w-1/2 shadow-lg text-xl"
        />
        <textarea
          name="message"
          ref={message}
          className="px-3 py-3 h-[200px] w-3/4 resize-none shadow-lg text-xl"
          placeholder="Type a message"
        />
        <div className="flex flex-row justify-between w-full">
          <button className="buttonfx w-32 h-14 slideleft shadow-xl">
            Send
          </button>
          <div className="flex flex-row gap-10">
            <a
              href="https://dribbble.com/Adina_"
              title="Dribble profile"
              target="_blank"
            >
              <img
                src="src/assets/dribble-icon.png"
                alt="dribble-icon"
                className="h-[60px]"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/anna-jílková-4a5778279/"
              title="LinkedIn profile"
              target="_blank"
            >
              <img
                src="src/assets/linkedin-icon.png"
                alt="linkedin-icon"
                className="h-[60px]"
              />
            </a>
          </div>
        </div>
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
