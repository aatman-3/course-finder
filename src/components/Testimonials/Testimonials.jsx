import React, { useEffect, useState, useCallback, useRef } from "react";
import styles from "./Testimonials.module.css";
import RoundedChevron from "../RoundedChevron/RoundedChevron";
import { useIsMobileContext } from "../../contexts/IsMobileContext";

const Testimonials = ({ config }) => {
  const isMobile = useIsMobileContext();
  const [activeInd, setActiveInd] = useState(0);
  const [cardsContainerStyles, setcardsContainerStyles] = useState({
    transform: `translateX(0px)`,
  });
  const [cardStyles, setCardStyles] = useState({ width: "calc(100vw - 64px)" });
  const cardContaierEl = useRef(null);

  useEffect(() => {
    let containerWidth = cardContaierEl.current.clientWidth || 0;
    let cardWidth = (containerWidth - 64) / 3;
    if (isMobile) {
      cardWidth = containerWidth - 64;
    }
    if (isMobile) {
      setcardsContainerStyles({
        transform: `translateX(-${activeInd * containerWidth}px)`,
      });
    } else {
      setcardsContainerStyles({
        transform: `translateX(${(1 - activeInd) * (cardWidth + 32)}px)`,
      });
    }
    if (!isMobile) {
      setCardStyles({
        width: `${cardWidth}px`,
      });
    } else {
      setCardStyles({
        width: "calc(100vw - 64px)",
      });
    }
  }, [activeInd, isMobile]);

  function handlePrevClick() {
    if (activeInd > 0) {
      setActiveInd((prev) => {
        return prev - 1;
      });
    }
  }

  function handleNextClick() {
    let totalLength = config?.cardsList?.length - 1;
    // if (!isMobile) {
    //   totalLength -= 1;
    // }
    if (activeInd < totalLength) {
      setActiveInd((prev) => {
        return prev + 1;
      });
    }
  }

  return (
    <div>
      <div className={styles.testimonials}>
        <div className={styles.leftChevron}>
          <RoundedChevron
            type="left"
            onClick={handlePrevClick}
            width={isMobile ? "40px" : "50px"}
          />
        </div>

        <div className={styles.testimonialsWrapper}>
          <div
            className={styles.testimonialsContainer}
            style={cardsContainerStyles}
            ref={cardContaierEl}
          >
            {config?.cardsList?.map((card, ind) => {
              return (
                <div
                  key={`testimonial-${ind + 1}`}
                  className={styles.testimonialCard}
                  style={{
                    ...cardStyles,
                    transform:
                      !isMobile && ind === activeInd
                        ? "translateY(-60px)"
                        : "none",
                  }}
                >
                  <div>
                    <img className={styles.cardImg} src={card.imgSrc} alt="" />
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>
                  <div>
                    <p className={styles.cardTitle}>{card.title}</p>
                    <p className={styles.cardSubtitle}>{card.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.rightChevron}>
          <RoundedChevron
            type="right"
            onClick={handleNextClick}
            width={isMobile ? "40px" : "50px"}
          />
        </div>
      </div>

      <div className={styles.circleContainer}>
        {config?.cardsList?.map((_, ind) => {
          return (
            <div
              key={`circle-${ind + 1}`}
              className={`${styles.circle} ${
                ind === activeInd && styles.activeCircle
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
