import React from 'react';
import {CalloutTile} from '../../../../shared/components/CalloutTile';

export const Tripitaka = () => {
  const calloutTilesItems = [
    {
      title: 'Kinh',
      description: 'As a community partner, we invest in Chicago’s South Side across such areas as health, education, economic growth, and the arts.',
      image: 'https://quydaophatngaynay.org/wp-content/uploads/2019/08/TND_0276-526x351.jpg'
    },
    {
      title: 'Luật',
      description: 'We are an international community of scholars working to solve the world\'s most pressing issues, with initiatives and programs on all seven continents.',
      image: 'https://quydaophatngaynay.org/wp-content/uploads/2019/08/TND_0276-526x351.jpg'
    },
    {
      title: 'Luận',
      description: 'We are an international community of scholars working to solve the world\'s most pressing issues, with initiatives and programs on all seven continents.',
      image: 'https://quydaophatngaynay.org/wp-content/uploads/2019/08/TND_0276-526x351.jpg'
    }
  ]

  return (
    <div
      className="SectionWrap_container__2Hi9n"
      data-theme="light"
      data-alignment="bottom-right"
      data-showaccentbar="true"
      data-accentcolor="red"
      style={{ backgroundImage: 'url("https://mc-1b49d921-43a2-4264-88fd-647979-cdn-endpoint.azureedge.net/-/jssmedia/project/uchicago-tenant/shared/phoenix.png")' }}
    >
      <section className="HeadlineTextBold_container__1RnDP single-col-inner">
        <h2 className="HeadlineTextBold_title__MxSRh">TAM TẠNG THÁNH ĐIỂN</h2>
      </section>
      <CalloutTile items={calloutTilesItems} hasBackground={true} />
    </div>
  );
};

