import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { ImInstagram } from "react-icons/im";
import styles from "./Footer.module.css";

const Contact = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerText}></div>
          <h2>About us</h2>
          <ul className={styles.p}>
            <li>
              <p className={styles.p}>
                Pizza Delivery, Near by you. Just Order in Pizza Mania...
              </p>
            </li>
            <li>
              <h2>Monday to Sunday - 9:00 am to 10:00 pm.</h2>
            </li>
          </ul>
        </div>

        <div className={styles.footerText}>
          <h2>Services</h2>
          <ul>
            <li>Need help? Contact us.</li>
            <li>About us page.</li>
            <li>Fast Delivery.</li>
            <li>Table booking.</li>
          </ul>
        </div>

        <div className={styles.footerText}>
          <h2>Contact us</h2>
          <ul>
            <li>(+91) 7011455389</li>
            <li>pizzamania@book.com</li>
            <li>
              <h5>Owner: VISHAL MAHTO</h5>
            </li>

            <span className={styles.span}>
              <a
                className={styles.linkA}
                href="https://www.facebook.com/vishal.mahto.10"
                target="blank"
              >
                <FaFacebookF />
              </a>
            </span>
            <span className={styles.span}>
              <a
                className={styles.linkA}
                href="https://Vishalmahto-portfolio.netlify.app"
                target="blank"
              >
                <IoLogoGoogle />
              </a>
            </span>
            <span className={styles.span}>
              <a
                className={styles.linkA}
                href="https://www.instagram.com/vishalmahto0007"
                target="blank"
              >
                <ImInstagram />
              </a>
            </span>
          </ul>
        </div>
      </div>

      <div className={styles.footerLast}>
        <hr className={styles.line} />
        <h3>@2025 Copyright by Vishal Mahto. All Rights Reserved.</h3>
      </div>
    </div>
  );
};

export default Contact;
