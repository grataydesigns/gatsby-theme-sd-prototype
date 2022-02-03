import React from 'react';
import { IconContext } from '@react-icons/all-files/lib';
import Footer from './Footer';
import Meta from './Meta';

import '../scss/main.scss';
import '../scss/index.scss';

const Layout = ({ pageTitle, theme, children }) => {
  return (
    <>
      <IconContext.Provider value={{ className: 'sd-icon' }}>
        <Meta pageTitle={pageTitle} theme={theme} />
        <div className="sd-page-shell__container">
          <main>{children}</main>
          <Footer />
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Layout;
