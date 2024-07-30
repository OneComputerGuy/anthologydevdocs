import React from "react";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";

export default function FooterWrapper(props) {
  const { colorMode } = useColorMode();

  return (
    <>
      <footer
        className={clsx(
          "docs-custom-footer",
          `docs-footer-theme-${colorMode}`
        )}>
        <div>
          <section className='footer-section'>
            <img
              className='footer-docs-logo'
              src='/img/anthology-logo-white.svg'
              alt='Anthology logo'
            />
          </section>
          <section className='footer-section'>
            <h3>Solutions</h3>
            <ul className='footer-link'>
              <li>
                <a
                  href='https://www.anthology.com/products/teaching-and-learning/learning-effectiveness/blackboard'
                  target='_blank'>
                  Blackboard Learn
                </a>
              </li>
              <li>
                <a
                  href='https://www.anthology.com/products/enterprise-operations/student-information-and-enterprise-resources/anthology-student'
                  target='_blank'>
                  Anthology Student
                </a>
              </li>
              <li>
                <a
                  href='https://www.anthology.com/products/lifecycle-engagement/enrollment-and-retention/anthology-reach'
                  target='_blank'>
                  Anthology Reach
                </a>
              </li>
            </ul>
          </section>
          <section className='footer-section'>
            <h3>Community</h3>
            <ul className='footer-link'>
              <li>
                <a
                  href='https://join.slack.com/t/blackboardtechies/shared_invite/zt-nheykjth-wLgONrE58MS53H~oySYk1g'
                  target='_blank'>
                  Bb Techies - Slack server
                </a>
              </li>
              <li>
                <a href='https://community.anthology.com' target='_blank'>
                  Anthology Community
                </a>
              </li>
            </ul>
          </section>
          <section className='footer-section'>
            <h3>Contact Us</h3>
            <ul className='footer-link'>
              <li>
                <span>Email us at </span>
                <a
                  href='mailto:developers@anthology.com'
                  target='_blank'
                  className='footer-email'>
                  developers@anthology.com
                </a>
              </li>
              <li>
                <a href='https://behind.blackboard.com' target='_blank'>
                  Behind the Blackboard
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className='footer-copy-legal'>
          <p className='footer-docs-copy'>
            ©2024 Anthology Inc. and its affiliates. All rights reserved.&nbsp;
            <a
              href='https://www.anthology.com/trademarks-and-patents'
              target='_blank'>
              Trademarks and Patents
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
