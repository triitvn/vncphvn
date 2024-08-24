import React from 'react';
import { CalloutTile } from './../../../../shared/components/CalloutTile';

export const Sutras = () => {
  const calloutTileItems = [
    {
      title: 'Bốn bọ kinh a hàm',
      description: 'Faculty have a free and challenging environment in which to pursue the most original research.',
      image: 'https://i.imgur.com/x6MczVP.jpeg'
    },
    {
      title: 'Năm bộ kinh Pali',
      description: 'As a community partner, we invest in Chicago’s South Side across such areas as health, education, economic growth, and the arts.',
      image: 'https://i.imgur.com/x6MczVP.jpeg'
    },
    {
      title: 'Kinh đại thừa',
      description: 'We are an international community of scholars working to solve the world\'s most pressing issues, with initiatives and programs on all seven continents.',
      image: 'https://i.imgur.com/x6MczVP.jpeg'
    }
  ];

  return (
    <div
      className="SectionWrap_container__2Hi9n"
      data-theme="white"
      data-alignment="center"
      data-showaccentbar="false"
      data-accentcolor="red"
      style={{ backgroundImage: 'url("")' }}
    >
      <section className="HeadlineTextBold_container__1RnDP single-col-inner">
        <h2 className="HeadlineTextBold_title__MxSRh">
          lorem ipsum dolor sit amet
        </h2>
      </section>

      <CalloutTile items={calloutTileItems}/>
    </div>
  );
};
