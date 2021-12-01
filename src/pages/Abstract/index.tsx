import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import Abstract from './Abstract';

const AbstractContainer = () => {
  const [animation, setAnimation] = useState('');
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
    />
  );
};

export default inject('routing')(observer(AbstractContainer));
