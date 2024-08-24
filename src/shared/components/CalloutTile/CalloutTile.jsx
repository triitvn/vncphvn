import React from 'react';
import './styles.css';

export const CalloutTile = ({ items, hasBackground }) => {
  return (
    <section className="CalloutTiles_container__2_O-P single-col-inner" data-tilesperrow="three" data-hasbackground={hasBackground}>
      {items.map((item, index) => (
        <div key={index} className="CalloutTiles_tile__3R5bL">
          <div>
            <img className="CalloutTiles_image__2utKD" src={item.image} alt="Agnes Callard close-up, Aims of Education" />
          </div>
          <div className="CalloutTiles_textContainer__37qbv">
            <div className="CalloutTiles_titleContainer__2U6hY">
              <h2 className="CalloutTiles_title__1prJb">{item.title}</h2>
            </div>
            <div className="CalloutTiles_calendarLinkContainer__2FViU">
              <p className="CalloutTiles_description__g0eZ4">{item.description}</p>
            </div>
            <div className="CalloutTiles_ctaContainer__3-b8l">
              <a aria-label="Learn more about our education and research" target="_self" className="CalloutTiles_cta__eo_HC" data-chevron="true" href="/education-and-research">
                <span className="linkText">Xem Chi Tiết</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
