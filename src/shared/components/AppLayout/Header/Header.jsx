import React, { useEffect } from 'react';
import { BranchMenu } from './BrandMenu';
import { MainMenu } from './MainMenu';
import './Header.scss';

const ToggleMobileNav = () => {
  let header = document.querySelector('header[data-mobilenavisopen');
  let currentState = header?.getAttribute('data-mobilenavisopen') === 'true';
  let mobileNavBtn = document.getElementById('mobileTogBtn');
  // @ts-ignore
  header.setAttribute('data-mobilenavisopen', !currentState);
  if (typeof window !== 'undefined' && window.innerWidth <= 900) {
    let currentBodyState =
      document.body.getAttribute('data-mobilenavopen') === 'true';
    // @ts-ignore
    document.body.setAttribute('data-mobilenavopen', !currentBodyState);
    mobileNavBtn?.setAttribute('aria-expanded', `${!currentState}`);
  }
};

const HandleScroll = () => {
  window.addEventListener('scroll', function () {
    let header = document.body.querySelector('header[data-scrolldown]');
    if (!header) {
      return;
    }

    let elementAfterHeader =
      header.nextElementSibling || header.parentElement?.nextElementSibling;
    let elBoundingTop = elementAfterHeader?.getBoundingClientRect()?.top || 0;

    if (elBoundingTop < -80) {
      // Desktop and user has scrolled more than 80 pixels down, 80 is arbitrary - looks nice
      header.setAttribute('data-scrolldown', 'true');
    } else {
      // Mobile or user is at top of page
      header.setAttribute('data-scrolldown', 'false');
    }
  });
};

export const Header = () => {
  useEffect(() => {
    HandleScroll();
  }, []);

  return (
    <header className="EduHeader_container__1tqot " id="header" data-mobilenavisopen="false" data-scrolldown="false"
      style={{ top: '0px' }}>
      <a className="EduHeader_logoContainer__JaiwY" aria-label="Logo" href="/" rel="noopener">
        <span className="linkText">
          <img alt="Viện Nghiên Cứu Phật Học logo" className="EduHeader_desktopLogo__1wTcL" src="https://i.imgur.com/GomWFl3.png" />
          <img alt="Viện Nghiên Cứu Phật Học logo" className="EduHeader_mobileLogo__2czmh" src="./The University of Chicago_files/logo-background-mobile.svg" />
        </span>
      </a>
      <button id="mobileTogBtn" className="EduHeader_mobileNavToggle__2kx94" aria-label="Show main menu" aria-expanded="false"></button>
      <BranchMenu />
      <MainMenu />
      <div id="maincontent" className="EduHeader_skipLinkAnchor__1X-cl">Main content</div>
    </header>
  );
};

export default Header;
