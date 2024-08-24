import React from 'react';
import {VideoSpotLight} from './components/VideoSpotLight';
import {ResearchCenters} from './components/ResearchCenters';
import {Tripitaka} from './components/Tripitaka';
import {HomeNewsFeatured} from './components/HomeNewsFeatured';
import { Sutras } from './components/Sutras';

export const Home = () => {
  return (
    <section className="single-col-wide">
      <VideoSpotLight />
      <Sutras />
      <HomeNewsFeatured />
      <Tripitaka />
      <ResearchCenters />
    </section>
  );
}
