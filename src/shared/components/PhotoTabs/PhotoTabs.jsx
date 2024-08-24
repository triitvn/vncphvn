import React from 'react';
import {CtaLinks} from './CtaLinks';
import './styles.scss';

export const PhotoTabs = ({ photoTabs }) => {
  return (
    <section className="PhotoTabs_container__1Yx2P single-col-inner" data-accentbar-alignment={photoTabs.accentbarAlignment}>
      <div className="PhotoTabs_imageContainer__AkaTF" data-alignment={photoTabs.photoAlignment} style={{ backgroundImage: `url(${photoTabs.imgUrl})` }}>
        <div className="PhotoTabs_tabDescription__1ZJIu"></div>
      </div>
      <div className="PhotoTabs_tabContainer__29YJa" data-alignment="bottom-right">
        <h3 className="PhotoTabs_title__1P9Pd">
          {photoTabs.title}
        </h3>
        <p data-size="small" className="PhotoTabs_description__122tl">
          {photoTabs.description}
        </p>
        <CtaLinks items={photoTabs.items} />
      </div>
    </section>
  );
};
