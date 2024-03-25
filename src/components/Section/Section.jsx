import React from "react";
import styles from "./Section.module.css";

const Section = ({ children, config }) => {
  return (
    <div
      className={styles.sectionContainer}
      style={{ background: config.bgColor }}
    >
      <div
        className={styles.sectionWrapper}
        style={{ maxWidth: config.maxWidth }}
      >
        <p className={styles.sectionTitle}>{config.title}</p>
        {children}
      </div>
    </div>
  );
};

export default Section;
