import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./AuthorCard.module.css";
import clsx from "clsx";

const AuthorCard = ({ avatar, name, position, area }) => {
  const { colorMode } = useColorMode();
  // /// Option 1: Circle with rectangle in the bottom

  // //+ TODO: Add GitHub Link (on image hover? Maybe?)
  return (
    <div className={styles["author-wrapper"]}>
      <div
        className={clsx(
          styles["author-avatar"],
          styles[`author-avatar-dropshadow-${colorMode}`]
        )}>
        <img
          src={avatar ? avatar : "/img/author-card-default-picture.png"}
          alt='Profile picture of the contributor'
        />
      </div>
      <div
        className={clsx(
          styles["author-info"],
          styles["author-info-dropshadow"]
        )}>
        <h3>{name}</h3>
        <span>{position}</span>
        <span>{area}</span>
      </div>
    </div>
  );

  /// Option 2: Circle with rectangle in the bottom
  // return (
  //   <div className={styles["author-wrapper"]}>
  //     <div
  //       className={clsx(
  //         styles["author-avatar"],
  //         styles[`author-avatar-dropshadow-${colorMode}`]
  //       )}>
  //       <img
  //         src={avatar ? avatar : "/img/author-card-default-picture.png"}
  //         alt='Profile picture of the contributor'
  //       />
  //     </div>
  //     <div
  //       className={clsx(
  //         styles["author-info"],
  //         styles["author-info-dropshadow"]
  //       )}>
  //       <h3>{name}</h3>
  //       <span>{position}</span>
  //       <span>{area}</span>
  //     </div>
  //   </div>
  // );
};

export default AuthorCard;
