import './styles.css';

export const NewsFeatured = ({ items }) => {
  return (
    <section className="NewsFeatured_container__1bNJj" data-configuration="fourItemsEqual">
      <div className="single-col-inner">
        <ul className="NewsFeatured_newsList__2lOPn">
          {items.map((item, index) => (
            <li key={index} className="NewsFeatured_newsListItem__o8u3f">
              <div className="NewsItem_container__2zKxq NewsItem_hasImage__2q4K4 undefined">
                <div>
                  <img alt={item.alt} src={item.src} className="NewsItem_image__3IMgg" />
                </div>
                <div className="NewsItem_textContainer__3_tB9">
                  <small className="NewsItem_date__NA594 typography-small-letter"><span></span></small>
                  <a href={item.link} className="NewsItem_titleLink__Sr4cy" target="_blank" rel="noopener">
                    <span className="linkText"><span className="linkText">{item.title}</span></span>
                  </a>
                  <br />
                  <small className="NewsItem_source__1SRo8 typography-small">{item.description}</small>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};