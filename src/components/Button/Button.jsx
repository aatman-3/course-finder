import React from "react";
import styles from "./Button.module.css";

const Button = ({
  text,
  theme,
  rightImage,
  leftImage,
  onClick,
  width = "auto",
}) => {
  return (
    <button
      className={`${styles.btnContainer} ${styles[`${theme}Btn`]}`}
      style={{
        width,
      }}
      onClick={onClick}
    >
      {leftImage && (
        <img className={styles.btnLeftImage} src={leftImage} alt="" />
      )}
      {text}
      {rightImage && (
        <img className={styles.btnRightImage} src={rightImage} alt="" />
      )}
    </button>
  );
};

Button.defaultProps = {
  text: "",
  theme: "primary",
};

export default Button;
