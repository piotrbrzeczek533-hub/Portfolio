"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState, useRef, type FormEvent, type ChangeEvent, useEffect } from "react";
import { toast } from "sonner";

// import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "@/hoc";
import { styles } from "@/app/styles";
import { slideIn } from "@/utils/motion";
import { Portfolio_name } from "@/constants";
import EarthCanvas from "../sub/earth";

// Contact
export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Initialize EmailJS on component mount
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_KEY);
    }
  }, []);

  // handle form change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear error when user starts typing
    setErrors({ ...errors, [name]: false });
  };

  // validate form on submit
  const validateForm = () => {
    const { name, email, message } = form;
    const newErrors = { name: false, email: false, message: false };

    // validate name
    if (name.trim().length < 3) {
      newErrors.name = true;
    }

    const email_regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // validate email
    if (!email.trim().toLowerCase().match(email_regex)) {
      newErrors.email = true;
    }

    // validate message
    if (message.trim().length < 5) {
      newErrors.message = true;
    }

    setErrors(newErrors);

    // True if all fields are validated
    return !Object.values(newErrors).some((error) => error);
  };

  // handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validate form
    if (!validateForm()) {
      toast.error("Please fill all fields correctly.");
      return;
    }

    setLoading(true);

    // send email
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: form.name,
          to_name: Portfolio_name,
          from_email: form.email.trim().toLowerCase(),
          to_email: process.env.NEXT_PUBLIC_EMAILJS_RECEIVER || "",
          message: form.message,
        },
      )
      .then(() => {
        toast.success("Thanks for contacting me. I'll get back to you soon!");
        setForm({
          name: "",
          email: "",
          message: "",
        });
        setErrors({ name: false, email: false, message: false });
      })
      .catch((error) => {
        console.log("[CONTACT_ERROR]: ", error);
        toast.error("Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SectionWrapper idName="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden w-full max-w-[1350px] mx-auto min-h-[600px]">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-1 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-8 rounded-2xl border border-purple-500/20 shadow-2xl shadow-purple-500/20 backdrop-blur-sm flex flex-col justify-between"
        >
          {/* Title */}
          <div className="mb-8">
            <p className={`${styles.sectionSubText} bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent`}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="flex flex-row items-center gap-4 group">
                <span className="text-white font-medium w-32 group-hover:text-purple-400 transition-colors duration-300">Your Name*</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={Portfolio_name}
                  title="What's your name?"
                  disabled={loading}
                  aria-disabled={loading}
                  className={`flex-1 bg-white/5 backdrop-blur-sm py-4 px-6 placeholder:text-gray-500 text-white rounded-xl outline-none border-2 font-medium transition-all duration-300 hover:bg-white/10 focus:bg-white/15 focus:border-purple-500 disabled:bg-gray-500/10 disabled:text-white/60 ${
                    errors.name ? "border-red-500 shadow-lg shadow-red-500/30" : "border-purple-500/30 hover:border-purple-500/50"
                  }`}
                />
              </label>

              {/* Invalid Name */}
              {errors.name && (
                <span className="text-red-400 mt-2 text-sm flex items-center gap-1 animate-pulse ml-36">
                  <span className="text-lg">⚠️</span> Name must be at least 3 characters
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="flex flex-row items-center gap-4 group">
                <span className="text-white font-medium w-32 group-hover:text-purple-400 transition-colors duration-300">Your Email*</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="piotrbrzeczek533@gmail.com"
                  title="What's your email?"
                  disabled={loading}
                  aria-disabled={loading}
                  className={`flex-1 bg-white/5 backdrop-blur-sm py-4 px-6 placeholder:text-gray-500 text-white rounded-xl outline-none border-2 font-medium transition-all duration-300 hover:bg-white/10 focus:bg-white/15 focus:border-purple-500 disabled:bg-gray-500/10 disabled:text-white/60 ${
                    errors.email ? "border-red-500 shadow-lg shadow-red-500/30" : "border-purple-500/30 hover:border-purple-500/50"
                  }`}
                />
              </label>

              {/* Invalid Email */}
              {errors.email && (
                <span className="text-red-400 mt-2 text-sm flex items-center gap-1 animate-pulse ml-36">
                  <span className="text-lg">⚠️</span> Please enter a valid email address
                </span>
              )}
            </div>

            {/* Message */}
            <label htmlFor="message" className="flex flex-col group">
              <span className="text-white font-medium mb-3 group-hover:text-purple-400 transition-colors duration-300">Your Message*</span>
              <textarea
                rows={7}
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hello there! I'd love to hear from you..."
                title="What do you want to say?"
                disabled={loading}
                aria-disabled={loading}
                className={`bg-white/5 backdrop-blur-sm py-4 px-6 placeholder:text-gray-500 text-white rounded-xl outline-none border-2 font-medium transition-all duration-300 hover:bg-white/10 focus:bg-white/15 focus:border-purple-500 disabled:bg-gray-500/10 disabled:text-white/60 resize-none ${
                  errors.message ? "border-red-500 shadow-lg shadow-red-500/30" : "border-purple-500/30 hover:border-purple-500/50"
                }`}
              />

              {/* Invalid Message */}
              {errors.message && (
                <span className="text-red-400 mt-2 text-sm flex items-center gap-1 animate-pulse">
                  <span className="text-lg">⚠️</span> Message must be at least 5 characters
                </span>
              )}
            </label>

            {/* Submit */}
            <button
              type="submit"
              title={loading ? "Sending..." : "Send"}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 py-3 px-8 outline-none w-fit text-white font-bold shadow-lg shadow-purple-500/50 rounded-xl disabled:bg-gray-600 disabled:text-white/60 disabled:shadow-none hover:shadow-xl hover:shadow-purple-500/70 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 mt-2"
              disabled={loading}
              aria-disabled={loading}
            >
              {loading ? (
                <>
                  <span className="inline-block animate-spin">⏳</span>
                  Sending...
                </>
              ) : (
                <>
                  <span>📧</span>
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Earth Model */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
