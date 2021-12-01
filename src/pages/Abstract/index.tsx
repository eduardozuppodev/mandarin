import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import Abstract from './Abstract';

const AbstractContainer = () => {
  const [activeGraph, setActiveGraph] = useState('VS');
  const [animation, setAnimation] = useState('');
  const [start, onStart] = useState(false);
  const [loaded, setLoaded] = useState(true);
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState(false);
  const [active, setActive] = useState('ABSTRACT');

  const openModal = () => setModal(true);
  const onClose = () => setModal(false);
  const openInfo = () => setInfo(!info);

  return (
    <Abstract
      loaded={loaded}
      modal={modal}
      openModal={openModal}
      onClose={onClose}
      openInfo={openInfo}
      info={info}
      active={active}
      setActive={setActive}
      setAnimation={setAnimation}
      animation={animation}
      onStart={onStart}
      setActiveGraph={setActiveGraph}
      activeGraph={activeGraph}
    />
  );
};

export default inject('routing')(observer(AbstractContainer));
