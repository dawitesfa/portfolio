import ReactDOM from 'react-dom';
import { useContext } from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AppContext from './store/app-context';
import Overlay from './components/UI/Overlay';
import Modal from './components/UI/Modal';

const App = () => {
  const appCtx = useContext(AppContext);
  const overlay = (
    <Overlay
      onClick={() => {
        appCtx.showModal(false);
      }}
    />
  );
  const modal = <Modal />;
  return (
    <>
      {appCtx.show &&
        ReactDOM.createPortal(overlay, document.getElementById('overlay-root'))}
      {appCtx.show &&
        ReactDOM.createPortal(modal, document.getElementById('modal-root'))}
      <Header />
      <hr />
      <Skills id='section-1' />
      <hr />
      <Projects id='section-2' />
      <Footer />
    </>
  );
};

export default App;
