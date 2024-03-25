import React from "react";
import styles from "./Banner.module.css";
import Button from "../Button/Button";
import RoundedChevron from "../RoundedChevron/RoundedChevron";
import { useIsMobileContext } from "../../contexts/IsMobileContext";

function Banner({ config }) {
  const isMobile = useIsMobileContext();
  return (
    <div>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerWrapper}>
          <div className={styles.bannerBranch}>
            <p className={styles.bannerBranchType}>
              {config?.branchText?.type}
            </p>
            <div className="whiteCircle"></div>
            <p className={styles.bannerBranchName}>
              {config?.branchText?.name}
            </p>
          </div>
          <p className={styles.bannerTitle}>{config?.title}</p>
          <p className={styles.bannerSubtitle}>{config?.subtitle}</p>
          <div className={styles.bannerCtas}>
            <Button
              text={config?.ctaText}
              theme="primary"
              width={isMobile ? "232px" : "auto"}
            />
            <div className={styles.bannerCta2}>
              <RoundedChevron type="down" />
              <p className={styles.bannerCta2Text}>{config?.cta2Text}</p>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.bannerImg} src={config.imgSrc} alt="" />
    </div>
  );
}

export default Banner;
