import { useState } from "react";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";


export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {


  e.preventDefault();

  try {
   await emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  {
    name: form.name,
    email: form.email,
    message: form.message,
  },
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
);

    alert("Transmission sent");

    setForm({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    console.error("EmailJS error:", error);
    alert("Transmission failed");
  }
};




  return (
    <section className="contact-page">
      <div className="terminal-card">
        <div className="terminal-header">
          <span className="status-dot"></span>
          COMMUNICATIONS SATELLITE
        </div>

        <div className="terminal-body">
          <p className="status">
            STATUS: <span>ONLINE</span>
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Commander Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Transmission Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit">
              TRANSMIT MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}