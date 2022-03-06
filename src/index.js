import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MePic from './assets/index.jpeg';
import Icn1 from './assets/js.png';
import Icn2 from './assets/html.png';
import Icn3 from './assets/css.png';
import Icn4 from './assets/logo192.png';
import Icn5 from './assets/nodejs.png';
import Icn6 from './assets/mongodb.png';
import Icn7 from './assets/bootstrap.png';
import Icn8 from './assets/adobe-photoshop.png';
import Icn9 from './assets/figma.png';
import ProImg1 from './assets/bankist.png';
import ProImg2 from './assets/natours.png';
import ProImg3 from './assets/note-keeper.png';

export { MePic, Icn1, Icn2, Icn3, Icn4, Icn5, Icn6, Icn7, Icn8, Icn9 };
export { ProImg1, ProImg2, ProImg3 };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
