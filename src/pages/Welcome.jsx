import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Welcome.module.css";
import logo from "../assets/TL.jpg";

function Welcome() {
  return (
    <div className={styles.page}>
      

      <div className={styles.container}>
         <img src={logo} alt="TalentLink Logo" className={styles.logo} />
        <h1 className={styles.title}>Welcome to TalentLink</h1>
        <p className={styles.subtitle}>
          Connecting clients and freelancers effortlessly
        </p>

        <div className={styles.buttons}>
          <Link to="/login">
            <button className={styles.loginBtn}>Login</button>
          </Link>
          <Link to="/register">
            <button className={styles.registerBtn}>Register</button>
          </Link>
        </div>
      </div>

      <div className={styles.howItWorks}>
        <h2>💡 How TalentLink Works</h2>
        <p>
          <strong>CLIENTS</strong> can post projects, describe their
          requirements, and browse through talented freelancers suited for their needs.
        </p>
        <p>
          <strong>FREELANCERS</strong> can explore projects, send proposals,
          chat with clients, and manage contracts efficiently.
        </p>
        <p>
          Once a project is accepted, both sides can collaborate easily through
          TalentLink’s integrated messaging and contract system.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
