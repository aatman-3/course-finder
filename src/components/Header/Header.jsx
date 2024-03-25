import React from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import { useIsMobileContext } from "../../contexts/IsMobileContext";

const Header = ({ config }) => {
  const isMobile = useIsMobileContext();

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <img
          className={styles.headerLogo}
          src={config.imgSrc}
          alt="course-finder-ai"
        />
        <div className={styles.headerLinks}>
          {isMobile ? (
            <img src="/assets/images/hamburger.svg" alt="" />
          ) : (
            <>
              {config?.linksList?.map((link) => {
                return (
                  <div key={link.key} className={styles.headerLink}>
                    {link.name}
                  </div>
                );
              })}
              <Button text="Course Finder" theme="transparent" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
