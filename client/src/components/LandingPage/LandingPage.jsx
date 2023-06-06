import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.landingSection}>
      <div className={styles.landingBox}>
        <h1 className={`${styles.landingTitle} ${styles.welcome}`}>
          <b>Welcome to my website</b>
        </h1>
        <Link to="/Home">
          <button className={styles.landingButton}>Get In</button>
        </Link>
      </div>
    </div>
  );
}