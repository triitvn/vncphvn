import React from 'react';
import './VideoSpotlight.scss';

export const VideoSpotLight = () => {
  return (
    <section className="single-col-wide">
      <section>
        <div className="VideoSpotlight_videoSpotlight__DrkOc VideoSpotlight_heightAdjusted__2quNh isPlaying" style={{ height: '700px' }}>
          {/* <button className="VideoSpotlight_btnPlayPause__qHPP3" aria-label="Pause/play spotlight video" aria-pressed="true"></button> */}
          <video className="VideoSpotlight_backgroundVideo__tZdZO" height="600" autoPlay muted playsInline loop>
            <source src="https://mc-1b49d921-43a2-4264-88fd-647979-cdn-endpoint.azureedge.net/-/media/project/uchicago-tenant/www/videos/homepage-refresh-feb-20-2024.mp4" type="video/mp4" />
          </video>
          <section id="VideoSpotlight_overlay__ZGvPB" className="VideoSpotlight_mediumGrayTheme__h09-z" aria-live="polite"></section>
        </div>
      </section>
    </section>
  );
}
