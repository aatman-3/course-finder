import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./StepsTodo.module.css";
import Button from "../Button/Button";
import { useIsMobileContext } from "../../contexts/IsMobileContext";

const StepsTodo = ({ config }) => {
  const isMobile = useIsMobileContext();
  const [activeInd, setActiveInd] = useState(0);
  const [cardsContainerStyles, setcardsContainerStyles] = useState({
    transform: `translateX(${isMobile ? 0 : 480}px)`,
  });
  const cardContaierEl = useRef(null);

  const calculatecardsContainerStyles = useCallback(
    (ind) => {
      let el = cardContaierEl.current?.children?.[0];
      let width = el?.clientWidth || 0;
      setcardsContainerStyles({
        transform: `translateX(${(isMobile ? 0 : 480) - ind * width}px)`,
      });
    },
    [isMobile]
  );

  useEffect(() => {
    calculatecardsContainerStyles(activeInd);
  }, [calculatecardsContainerStyles, activeInd]);

  function handlePrevClick() {
    if (activeInd > 0) {
      setActiveInd((prev) => {
        return prev - 1;
      });
    }
  }

  function handleNextClick() {
    if (activeInd < config?.cardsList?.length - 1) {
      setActiveInd((prev) => {
        return prev + 1;
      });
    }
  }

  return (
    <div className={styles.cardsWrapper}>
      <div
        className={styles.cardsContainer}
        ref={cardContaierEl}
        style={cardsContainerStyles}
      >
        {config?.cardsList?.map((card, ind) => {
          return (
            <div key={`step-${ind + 1}`} className={styles.cardContainer}>
              <div className={styles.cardNumber}>{ind + 1}</div>
              <div className={styles.card}>
                <img className={styles.cardImage} src={card.imgSrc} alt="" />
                <p className={styles.cardTitle}>{card.title}</p>
                <p className={styles.cardSubtitle}>{card.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.arrowsContainer}>
        <Button
          text="Previous step"
          leftImage="/assets/images/left-chevron-orange.svg"
          theme="orangePlain"
          onClick={handlePrevClick}
        />
        <Button
          text="Next step"
          rightImage="/assets/images/right-chevron-orange.svg"
          theme="orangePlain"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default StepsTodo;
