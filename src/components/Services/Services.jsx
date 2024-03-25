import React from "react";
import styles from "./Services.module.css";
import Button from "../Button/Button";

function Services({ config }) {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.cardsListContainer}>
        {config.cardsList.map((service, ind) => {
          return (
            <div key={`service-${ind + 1}`} className={styles.serviceCard}>
              <img
                className={styles.serviceCardImg}
                src={service.imgSrc}
                alt=""
              />
              <p className={styles.serviceCardTitle}>{service.title}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.ctaContainer}>
        <Button text={config.ctaText} />
      </div>

      <div className={styles.ambitionsContainer}>
        <div>
          <div className={styles.ambitionsImg}>
            <img src={config.ambitionsConfig.imgSrc} alt="" />
          </div>
        </div>
        <div className={styles.ambitionsListContainer}>
          <p className={styles.ambitionsTitle}>
            {config.ambitionsConfig.title}
          </p>
          <p className={styles.ambitionsSubtitle}>
            {config.ambitionsConfig.subtitle}
          </p>
          {config.ambitionsConfig.ambitionsList.map((ambition, index) => {
            return (
              <div key={`ambition-${index + 1}`} className={styles.ambition}>
                <img
                  className={styles.ambitionsListImg}
                  src={config.ambitionsConfig.ambitionsListImg}
                  alt=""
                />
                <p className={styles.ambitionText}>{ambition}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
