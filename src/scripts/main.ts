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

  // const EduHeader = (props) => {

  //   // const appInsights = new ApplicationInsights({ config: {
  //   //   connectionString: 'InstrumentationKey=634c8c76-6976-4eff-8c4d-376c359624d6;IngestionEndpoint=https://eastus-0.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/'
  //   //   /* ...Other Configuration Options... */
  //   // } });
  //   // appInsights.loadAppInsights();
  //   // appInsights.trackPageView(); // Manually call trackPageView to establish the current user/session/pageview

  //   const { fields, sitecoreContext } = props;
  //   // @ts-ignore
  //   const [resetKey, setResetKey] = useReducer(() => Math.random(), Math.random());
  //   const children = fields?.children ? fields?.children : [null, null];
  //   const [brandBar, navigation] = children;
  //   const brandBarFields = brandBar?.fields;
  //   const navigationFields = navigation?.fields;
  //   const isEditing = sitecoreContext && (sitecoreContext.pageEditing == true || sitecoreContext.pageState == 'preview');
  // //Updating the useEffect to run the HandleResize whenever there is change in EduHeader component as part of EWP bugs-1-Alert-Banner-Display
  //   useEffect(() => {
  //     if (typeof window !== 'undefined' && !isEditing) {
  //       HandleResize();
  //       HandleScroll();
  //     }
  //   });

  //   return (
  //     <header key={`eduHeader-${resetKey}`}
  //       className={`${css.container} ${isEditing ? css.isEditing : ''}`} id='header'
  //       data-mobilenavisopen={false}
  //       data-scrolldown={false}>
  //       <a href="#maincontent" className={css.skipLink}>Skip to main content</a>

  //       {/* Logo: */}
  //       <RoutableLink field={brandBarFields?.homeLink}
  //         className={css.logoContainer}
  //         aria-label={brandBarFields?.logoCaption?.value}>
  //         {
  //           brandBarFields?.logo?.value?.src &&
  //           <Image field={brandBarFields.logo} className={css.desktopLogo} />
  //         }
  //         {
  //           brandBarFields?.mobileLogo?.value?.src &&
  //           <Image field={brandBarFields.mobileLogo} className={css.mobileLogo} />
  //         }
  //       </RoutableLink>

  //       {
  //         brandBarFields?.mobileNavButtonIcon?.value
  //           ? <button id="mobileTogBtn" className={css.mobileNavToggle} onClick={ToggleMobileNav} aria-label={'Show main menu'} aria-expanded={false} />
  //           : null
  //       }
  //       <div className={css.headerNavigation}>
  //         <EduBrandBar fields={brandBarFields} ResetNavHandler={setResetKey} />
  //         <EduNavigation fields={navigationFields} ResetNavHandler={setResetKey} />
  //       </div>

  //       <div id='maincontent' className={css.skipLinkAnchor}>Main content</div>
  //     </header>
  //   )
  // };
})();
