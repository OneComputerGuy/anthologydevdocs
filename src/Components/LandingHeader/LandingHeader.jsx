import React from "react";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./LandingHeader.module.css";

/// Monolithic Layout
const LandingHeader = () => {
  const { colorMode } = useColorMode();

  return (
    <header
      className={clsx(
        styles["hero-banner"],
        styles[`hero-banner-${colorMode}`]
      )}>
      <div className={styles["hero-banner-wrapper"]}>
        <div className={styles["hero-banner-message"]}>
          <h1 className={styles["hero-title"]}>Developer Documentation</h1>
          <p className={styles["hero-description"]}>
            Discover everything you need to build for Anthology Solutions.
          </p>
          <a className={styles["hero-cta"]} href='/docs/site-intro'>
            <img
              className={styles["hero-cta-icon"]}
              src='/img/rocket-outline.svg'
              alt='Icon of a rocket'
            />
            Get&apos;s started!
          </a>
        </div>
        <div className={styles["hero-banner-image"]}>
          <img
            className={styles["hero-image"]}
            src='/img/hero-image.svg'
            alt='A person selecting a documentation page to open'
          />
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
