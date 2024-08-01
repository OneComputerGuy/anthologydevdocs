import React from "react";
import styles from "./WhatsNew.module.css";
import Card from "../Card/Card";
import newDocs from "../../../widgets/newDocs.json";

const WhatsNew = () => {
  const buildNewEntry = (index, name, url) => {
    return (
      <li key={index} className={styles["whatsnew-item"]}>
        <img
          className={styles["whatsnew-item-icon"]}
          src='/img/link-outline.svg'
          alt='icon of a chain link'
        />
        <a className={styles["whatsnew-item-link"]} href={url}>
          {name}
        </a>
      </li>
    );
  };

  return (
    <Card title="What's new!">
      <ul className={styles["whatsnew-list"]}></ul>
      {Object.keys(newDocs).map((docId) => {
        return buildNewEntry(docId, newDocs[docId].name, newDocs[docId].url);
      })}
    </Card>
  );
};

export default WhatsNew;
