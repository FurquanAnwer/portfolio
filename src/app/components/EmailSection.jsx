"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import MailIcon from "../../../public/gmail.png"
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="glass-card p-6 rounded-lg">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-white/70 mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll
          get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/FurquanAnwer" className="transition-transform hover:scale-110">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/furquananwer/" className="transition-transform hover:scale-110">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlGTtrnWzNVHbcZKhrNsXZzsLWVjSmHSmfSgWJnzjszMNjffBwtxBCWLBmzDfNGnbpSmSq" className="transition-transform hover:scale-110">
            <Image src={MailIcon} alt="Mail Icon" />
          </Link>
        </div>
      </div>
      <div className="glass-card p-6 rounded-lg">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-white/5 border border-white/10 placeholder-white/30 text-white text-sm rounded-lg block w-full p-2.5 focus:ring-purple-500 focus:border-purple-500"
                placeholder="abc@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-white/5 border border-white/10 placeholder-white/30 text-white text-sm rounded-lg block w-full p-2.5 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-white/5 border border-white/10 placeholder-white/30 text-white text-sm rounded-lg block w-full p-2.5 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;

