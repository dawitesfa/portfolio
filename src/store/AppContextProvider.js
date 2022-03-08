import { useState } from 'react';
import AppContext from './app-context';

const AppContextProvider = (props) => {
  const [show, setShow] = useState(false);
  const showModal = (show) => {
    setShow(show);
  };
  const values = { showModal: showModal, show: show };
  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
