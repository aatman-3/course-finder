import React from "react";
import styles from "./Footer.module.css";
import Button from "../Button/Button";
import { useIsMobileContext } from "../../contexts/IsMobileContext";

const Footer = ({ config }) => {
  const isMobile = useIsMobileContext();

  return (
    <div className={styles.footerContainer}>
      <img className={styles.footerBgImg} src={config.bgImgSrc} alt="" />
      <img className={styles.footerImg} src={config.imgSrc} alt="" />
      <div className={styles.footerWrapper}>
        <p className={styles.footerTitle}>{config.title}</p>
        <div className={styles.footerForm}>
          {config?.formList?.map((item) => {
            switch (item.type) {
              case "text": {
                return (
                  <input
                    key={item.key}
                    className={styles.inputField}
                    type="text"
                    placeholder={item.placeholder}
                  />
                );
              }
              case "select": {
                return (
                  <select
                    key={item.key}
                    className={styles.selectField}
                    name={item.key}
                    id={item.key}
                  >
                    <option value="">{item.placeholder}</option>
                    {item.options?.map((option) => {
                      return (
                        <option key={option.name} value={option.value}>
                          {option.name}
                        </option>
                      );
                    })}
                  </select>
                );
              }
              default:
                return <></>;
            }
          })}
          <Button text={config.ctaText} width={isMobile ? "100%" : "auto"} />
          {isMobile && <div className={styles.footerDivision}></div>}
        </div>
      </div>
    </div>
  );
};

export default Footer;
