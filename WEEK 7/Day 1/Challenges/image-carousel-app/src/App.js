import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import hongkong from './assets/hongkong.jpg';
import macao from './assets/macao.jpg';
import japan from './assets/japan.jpg';
import lasvegas from './assets/lasvegas.jpg';

function App() {
  return (
    <div style={{ width: '60%', margin: '0 auto', paddingTop: '50px' }}>
      <h1>Image Carousel</h1>

      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
        <div>
          <img src={hongkong} alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src={macao} alt="Macao" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src={japan} alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src={lasvegas} alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
