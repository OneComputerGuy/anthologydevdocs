import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";

import styles from "./index.module.css";
import LandingHeader from "../Components/LandingHeader/LandingHeader";
import WhatsNew from "../Components/WhatsNew/WhatsNew";
import ReleaseNotes from "../Components/ReleaseNotes/ReleaseNotes";
import Community from "../Components/Community/Community";

export default function Home() {
  return (
    <Layout title='Home'>
      <LandingHeader />
      <main className={clsx(styles["main-landing-page"])}>
        <section
          className={clsx(
            styles["main-landing-section"],
            styles["section-cards"]
          )}>
          <WhatsNew />
          <ReleaseNotes />
        </section>
        <section className={styles["main-landing-section"]}>
          <Community />
        </section>
      </main>
    </Layout>
  );
}
