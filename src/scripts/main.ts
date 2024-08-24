// EduHeader
(function EduHeader() {
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

  // const HandleResize = () => {
  //   if (typeof window !== 'undefined') {
  //     // Run on load:
  //     handleResizeFixedHeader();

  //     window.addEventListener('resize', function () {
  //       // Need to handle this after each resize as well:
  //       handleResizeFixedHeader();
  //     });
  //   }
  // }

  const init = () => {
    document
      .getElementById('mobileTogBtn')
      ?.addEventListener('click', ToggleMobileNav);

    HandleScroll();
  };

  init();
})();
