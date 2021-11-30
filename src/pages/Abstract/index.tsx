import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import Abstract from './Abstract';

const AbstractContainer = () => {
  const [loaded, setLoaded] = useState(true);
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState(false);

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
    />
  );
};

export default inject('routing')(observer(AbstractContainer));
