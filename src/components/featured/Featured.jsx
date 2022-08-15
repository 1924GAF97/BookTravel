import React from 'react';
import "./featured.css"

export const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/Irlanda_Dublin_500px_100904953_Patricia%20Hofmeester_500px.jpg?itok=al0k8Ngx" alt="" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://www.adonde-y-cuando.es/site/images/illustration/austin_666.jpg" alt="" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Austin</h1>
          <h2>523 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/espana_cataluna_girona_shutterstock_613319723_vladimir_sazonov_shuttertock.jpg?itok=TXkUMPvj" alt="" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Cataluña</h1>
          <h2>412 properties</h2>
        </div>
      </div>
    </div>
  )
}
