import React from "react";
import styles from "./ReleaseNotes.module.css";
import Card from "../Card/Card";
import latest from "../../../latestMaintenance.json";

const ReleaseNotes = () => {
  return (
    <Card title='Maintenance and Releases'>
      <div className={styles["releases-inner"]}>
        <div className={styles["releases-entry"]}>
          <span>
            <strong>Service:</strong> {latest.service}
          </span>
          <span>
            <strong>Scheduled Date:</strong> {latest.startDate}
          </span>
          <span>
            <strong>Expected Downtime:</strong> {latest.expectedDowntime}
          </span>
          <span>{latest.description}</span>
        </div>
        <a className={styles["releases-link"]} href='/docs/maintenance-page'>
          More information
          <img
            className='docs-custom-link-icon'
            src='/img/link-outline.svg'
            alt='icon of a chain link'
          />
        </a>
      </div>
    </Card>
  );
};

export default ReleaseNotes;
