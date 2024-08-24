import React from 'react';

export const MenuItem = ({ menuTitle, hasDropDown = false }) => {
  return (
    <li
      className={`EduNavigation_navListItem__vencQ ${hasDropDown ? 'EduNavigation_hasDropdown__gm21j' : ''}`}
      data-mobilenavdropdownisopen="false"
      aria-label=""
    >
      <a
        target="_blank"
        data-iscurrentpage="false"
        className="EduNavigation_l1Link__2GKvH"
        href="https://www.uchicago.edu/who-we-are"
        rel="noopener"
      >
        <span className="linkText">{menuTitle}</span>
      </a>
      <div className="EduNavigation_linkDropdown__1FJzR">
        <div className="EduNavigation_linksubDropdown__1uupK">
          <button aria-label="Back" className="EduNavigation_backButton__2R-ey">Back</button>
          <a
            target="_blank"
            data-iscurrentpage="false"
            className="EduNavigation_l1LinkDropdown__EcW2Y"
            href="https://www.uchicago.edu/who-we-are"
            rel="noopener"
          >
            <span className="linkText">Who We Are</span>
          </a>
          <ul className="EduNavigation_linkDropdownColumn__3T5Du">
            <li className="EduNavigation_dropdownSubLinks__8Rcxj">
              <a
                target="_blank"
                data-chevron="true"
                data-size="small"
                href="https://www.uchicago.edu/who-we-are/scholarship-at-uchicago"
                rel="noopener"
              >
                <span className="linkText">Phật giáo nguyên thuỷ</span>
              </a>
            </li>
            <li className="EduNavigation_dropdownSubLinks__8Rcxj">
              <a
                target="_blank"
                data-chevron="true"
                data-size="small"
                href="https://www.uchicago.edu/who-we-are/what-we-value"
                rel="noopener"
              >
                <span className="linkText">Phật giáo bộ phái</span>
              </a>
            </li>
            <li className="EduNavigation_dropdownSubLinks__8Rcxj">
              <a
                target="_blank"
                data-chevron="true"
                data-size="small"
                href="https://www.uchicago.edu/who-we-are/global-impact"
                rel="noopener"
              >
                <span className="linkText">Phật giáo đại thừa</span>
              </a>
            </li>
          </ul>
          <ul className="EduNavigation_linkDropdownColumn__3T5Du">
            <li className="EduNavigation_dropdownSubLinks__8Rcxj">
              <a
                target="_blank"
                data-chevron="true"
                data-size="small"
                href="https://www.uchicago.edu/who-we-are/community-impact"
                rel="noopener"
              >
                <span className="linkText">Kinh Tạng Pali</span>
              </a>
            </li>
            <li className="EduNavigation_dropdownSubLinks__8Rcxj">
              <a
                target="_blank"
                data-chevron="true"
                data-size="small"
                href="https://www.uchicago.edu/who-we-are/history-and-traditions"
                rel="noopener"
              >
                <span className="linkText">Luật Tạng Pali</span>
              </a>
            </li>
            <li className="EduNavigation_dropdownSubLinks__8Rcxj">
              <a
                target="_blank"
                data-chevron="true"
                data-size="small"
                href="https://www.uchicago.edu/who-we-are/facts-and-figures"
                rel="noopener"
              >
                <span className="linkText">Luận Tạng Pali</span>
              </a>
            </li>
          </ul>
          <ul className="EduNavigation_linkDropdownColumn__3T5Du">
            <li className="EduNavigation_dropdownSubLinks__8Rcxj">
              <a
                target="_blank"
                data-chevron="true"
                data-size="small"
                href="https://www.uchicago.edu/who-we-are/leadership"
                rel="noopener"
              >
                <span className="linkText">Kinh Trường Bộ</span>
              </a>
            </li>
            <li className="EduNavigation_dropdownSubLinks__8Rcxj">
              <a
                target="_blank"
                data-chevron="true"
                data-size="small"
                href="https://www.uchicago.edu/who-we-are/university-administration"
                rel="noopener"
              >
                <span className="linkText">Kinh Trung Bộ</span>
              </a>
            </li>
            <li className="EduNavigation_dropdownSubLinks__8Rcxj">
              <a
                target="_blank"
                data-chevron="true"
                data-size="small"
                href="https://www.uchicago.edu/who-we-are/university-administration"
                rel="noopener"
              >
                <span className="linkText">Kinh Tương Ưng Bộ</span>
              </a>
            </li>
            <li className="EduNavigation_dropdownSubLinks__8Rcxj">
              <a
                target="_blank"
                data-chevron="true"
                data-size="small"
                href="https://www.uchicago.edu/who-we-are/university-administration"
                rel="noopener"
              >
                <span className="linkText">Kinh Tăng Chi Bộ</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="EduNavigation_navListOverlay__2dpoT"></div>
    </li>
  );
};
