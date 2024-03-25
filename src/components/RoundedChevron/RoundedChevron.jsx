import React from "react";
import styles from "./RoundedChevron.module.css";

const RoundedChevron = ({
  type = "right",
  disabled = false,
  onClick,
  width = "50px",
}) => {
  return (
    <div
      className={`${styles[`${type}Chevron`]} ${
        styles[disabled ? "disabledChevron" : ""]
      }`}
      onClick={onClick}
      style={{ width }}
    >
      <img
        className={styles.chevronImage}
        src="/assets/images/right-chevron-rounded.png"
        alt=""
      />
    </div>
  );
};

export default RoundedChevron;
