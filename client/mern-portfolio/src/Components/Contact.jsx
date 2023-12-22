import React from "react";

{
  ScrollReveal({
    reset: true,
    distance: "600px",
    duration: 2500,
    delay: 400,
  });

  ScrollReveal().reveal(".contact-animate", { delay: 600, origin: "right" });
}

const Contact = () => {
  return (
    <section className="contact contact-animate" id="contact">
      <div className="contact-container">
        <h2 className="title">
          Contact <span className="span2">Me</span>
        </h2>
        <div className="contact-box">
          <div className="contact-left">
            <p>
              <i className="fa-regular fa-envelope"></i> royaltyint15@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> +22956768703
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i>Cotonou, Benin
              Republic
            </p>
            <div className="social-media-icons">
              <a href="https://web.facebook.com/profile.php?id=100006657407777">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/_royaltycodes/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://github.com/joy-ezeani">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form action="https://formspree.io/f/xpzvaoyn" method="post">
              <input
                type="text"
                name="Name"
                placeholder="Your Name: Mary Ann"
                required
                className="input"
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email: maryann@gmail.com"
                required
                className="input"
              />
              <textarea
                name="Message"
                rows="7"
                placeholder="Your Message"
              ></textarea>
              <input type="submit" className="contact-submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
