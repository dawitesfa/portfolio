import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Social from './components/Social';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Skills id='section-1' />
      <Projects id='section-2' />
      {/* <Social id='section-3' /> */}
      <Footer />
    </>
  );
};

export default App;
