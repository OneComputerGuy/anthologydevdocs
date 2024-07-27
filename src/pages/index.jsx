import React from "react";
import Layout from "@theme/Layout";

import "./index.css";
import LandingHeader from "./Components/LandingHeader/LandingHeader";

/// 50-50 layout
export default function Home() {
  return (
    <Layout title='Home'>
      <div className='hero-wrapper'>
        <LandingHeader />
      </div>
      <main className='main-landing-page'></main>
    </Layout>
  );
}

/// Monolithic layout
// export default function Home() {
//   return (
//     <Layout title='Home'>
//       <LandingHeader />

//       <main className='main-landing-page'></main>
//     </Layout>
//   );
// }
