import React from "react";
import clsx from "clsx";
import "./LandingHeader.css";

/// 50-50 Layout
const LandingHeader = (props) => {
  return (
    <header className={"hero-banner-5050"}>
      <div className='hero-title-5050'>
        <h1 className='hero__title'>Developer Documentation</h1>
      </div>
      <div className='hero-description-5050'>
        <p>
          Discover everything you need to build for Anthology Solutions. Let's
          create something amazing!
        </p>
      </div>
    </header>
  );
};

/// Monolithic Layout
// const LandingHeader = (props) => {
//   return (
//     <header className={"hero-banner-full"}>
//       <h1 className='hero-title'>Developer Documentation</h1>
//       <p className='hero-description'>
//         Discover everything you need to build for Anthology Solutions. Let's
//         create something amazing!
//       </p>
//     </header>
//   );
// };

export default LandingHeader;
