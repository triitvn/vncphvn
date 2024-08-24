import React from 'react';
import {NewsFeatured} from '../../../../shared/components/NewsFeatured';

const newsItems = [
  {
    alt: "William Myers, the first black resident of Levittown, Pennsylvania",
    src: "https://mc-1b49d921-43a2-4264-88fd-647979-cdn-endpoint.azureedge.net/-/media/project/uchicago-tenant/www/news/124373.jpg?h=330&iar=0&w=710&rev=8ef5e8cc6e5147fba05014f8941ad4e2&sc_lang=en&extension=webp&hash=6F1E0C981916D3DFCF7CF372EB57156C",
    link: "https://news.uchicago.edu/how-homeownership-shaped-race-america?utm_source=WWW&utm_medium=NewsModule",
    title: "Tam Tạng Thánh Điển Phật Giáo Việt Nam",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  },
  {
    alt: "Seven covers of &quot;Critical Space,&quot; a Japanese literary journal.",
    src: "https://mc-1b49d921-43a2-4264-88fd-647979-cdn-endpoint.azureedge.net/-/media/project/uchicago-tenant/www/news/124369.png?h=330&iar=0&w=710&rev=edaf0f7768ea42a6b27790199c9c1e8e&sc_lang=en&extension=webp&hash=61B338CD06BA74E9F8C19574FBE6FFB1",
    link: "https://news.uchicago.edu/story/uchicago-students-share-life-changing-experiences-fulbright-scholars?utm_source=WWW&utm_medium=NewsModule",
    title: "Sách",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  },
  {
    alt: "A dancer in a white bodysuit dances inside a white parachute.",
    src: "https://mc-1b49d921-43a2-4264-88fd-647979-cdn-endpoint.azureedge.net/-/media/project/uchicago-tenant/www/news/124369.png?h=330&iar=0&w=710&rev=edaf0f7768ea42a6b27790199c9c1e8e&sc_lang=en&extension=webp&hash=61B338CD06BA74E9F8C19574FBE6FFB1",
    link: "https://news.uchicago.edu/story/uchicagos-film-studies-center-preserve-groundbreaking-work-black-and-filipino-filmmakers?utm_source=WWW&utm_medium=NewsModule",
    title: "Tin Tức",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  },
  {
    alt: "A dancer in a white bodysuit dances inside a white parachute.",
    src: "https://mc-1b49d921-43a2-4264-88fd-647979-cdn-endpoint.azureedge.net/-/media/project/uchicago-tenant/www/news/124369.png?h=330&iar=0&w=710&rev=edaf0f7768ea42a6b27790199c9c1e8e&sc_lang=en&extension=webp&hash=61B338CD06BA74E9F8C19574FBE6FFB1",
    link: "https://news.uchicago.edu/story/uchicagos-film-studies-center-preserve-groundbreaking-work-black-and-filipino-filmmakers?utm_source=WWW&utm_medium=NewsModule",
    title: "Cúng Dường",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  }
];

export const HomeNewsFeatured = () => {
  return (
    <div className="SectionWrap_container__2Hi9n" data-theme="white" data-alignment="bottom-right" data-showaccentbar="false">
      <section className="HeadlineTextBold_container__1RnDP single-col-inner" data-alignment="center">
        <h2 className="HeadlineTextBold_title__MxSRh">Lorem, ipsum dolor</h2>
      </section>
      <NewsFeatured items={newsItems} />
    </div>
  );
};
