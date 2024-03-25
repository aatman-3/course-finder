import React from "react";
import styles from "./Webinars.module.css";
import Button from "../Button/Button";

const Webinars = ({ config }) => {
  return (
    <div>
      <div className={styles.webinarsCards}>
        {config?.cardsList?.map((card, ind) => {
          return (
            <div
              key={`webinar-${ind + 1}`}
              className={`${styles.webinarCard} ${styles[card.type || ""]}`}
            >
              <div className={styles.cardImgContainer}>
                <img className={styles.cardImg} src={card.imgSrc} alt="" />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.cardHeader}>{card.header}</p>
                <p className={styles.cardTitle}>{card.title}</p>
                <p className={styles.cardSubtitle}>{card.subtitle}</p>
                <Button
                  text={card.ctaText}
                  rightImage="/assets/images/right-chevron-orange.svg"
                  theme="orangePlain"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.ctaContainer}>
        <Button
          text={config.ctaText}
          rightImage="/assets/images/right-chevron-orange.svg"
          theme="orangePlain"
        />
      </div>
    </div>
  );
};

export default Webinars;
