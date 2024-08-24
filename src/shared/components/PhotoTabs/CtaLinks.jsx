import React from 'react';

export const CtaLinks = ({ items }) => {
  return (
    <ul className="PhotoTabs_ctaLinkContainer__Zur3r">
      {items.map((item, index) => (
        <li key={index} className="PhotoTabs_tabLink__1XIcC">
          <a
            href="https://artsandpubliclife.uchicago.edu/"
            className="PhotoTabs_tabCta__30wr-"
            target="_blank"
            rel="noopener noreferrer"
            data-chevron="true"
          >
            <span className="linkText">{item.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
