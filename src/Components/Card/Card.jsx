import React from "react";
import styles from "./Card.module.css";
import { useColorMode } from "@docusaurus/theme-common";
import clsx from "clsx";

const Card = (props) => {
  const { colorMode } = useColorMode();

  return (
    <div className={styles["card-outer"]}>
      <div
        className={clsx(
          styles["card-wrapper"],
          styles[`card-wrapper-${colorMode}`]
        )}>
        <h2 className={styles["card-title"]}>{props.title}</h2>
        <div className={styles["card-contents"]}>{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
