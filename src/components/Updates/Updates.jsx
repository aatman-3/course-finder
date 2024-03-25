import React from "react";
import styles from "./Updates.module.css";
import Button from "../Button/Button";

const Updates = ({ config }) => {
  return (
    <div>
      <div className={styles.updatesContainer}>
        {config?.cardsList?.map((card, ind) => {
          return card?.type === "main" ? (
            <div
              key={`update-${ind + 1}`}
              className={styles.mainCardContainer}
              style={{
                backgroundColor: card.bgColor || "#fff",
                backgroundImage: `url(${card.bgImgSrc})`,
              }}
            >
              <div>
                <p className={styles.mainCardTitle}>{card.title}</p>
                <p className={styles.mainCardSubtitle}>{card.subtitle}</p>
              </div>
              <div>
                <Button text={card.ctaText} />
              </div>
            </div>
          ) : (
            <div key={`update-${ind + 1}`} className={styles.cardContainer}>
              <div>
                <img className={styles.cardImg} src={card.imgSrc} alt="" />
                <p className={styles.cardHeader}>{card.header}</p>
              </div>
              <div>
                <img className={styles.cardImg2} src={card.img2Src} alt="" />
                <p className={styles.cardTitle}>{card.title}</p>
                <p className={styles.cardSubtitle}>{card.subtitle}</p>
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

export default Updates;
