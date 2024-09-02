// EduHeader
(function EduHeader() {
    var ToggleMobileNav = function () {
        var header = document.querySelector('header[data-mobilenavisopen');
        var currentState = (header === null || header === void 0 ? void 0 : header.getAttribute('data-mobilenavisopen')) === 'true';
        var mobileNavBtn = document.getElementById('mobileTogBtn');
        // @ts-ignore
        header.setAttribute('data-mobilenavisopen', !currentState);
        if (typeof window !== 'undefined' && window.innerWidth <= 900) {
            var currentBodyState = document.body.getAttribute('data-mobilenavopen') === 'true';
            // @ts-ignore
            document.body.setAttribute('data-mobilenavopen', !currentBodyState);
            mobileNavBtn === null || mobileNavBtn === void 0 ? void 0 : mobileNavBtn.setAttribute('aria-expanded', "".concat(!currentState));
        }
    };
    var HandleScroll = function () {
        window.addEventListener('scroll', function () {
            var _a, _b;
            var header = document.body.querySelector('header[data-scrolldown]');
            if (!header) {
                return;
            }
            var elementAfterHeader = header.nextElementSibling || ((_a = header.parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling);
            var elBoundingTop = ((_b = elementAfterHeader === null || elementAfterHeader === void 0 ? void 0 : elementAfterHeader.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.top) || 0;
            if (elBoundingTop < -80) {
                // Desktop and user has scrolled more than 80 pixels down, 80 is arbitrary - looks nice
                header.setAttribute('data-scrolldown', 'true');
            }
            else {
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
    var init = function () {
        var _a;
        (_a = document
            .getElementById('mobileTogBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', ToggleMobileNav);
        HandleScroll();
    };
    init();
})();
