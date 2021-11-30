import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import Abstract from './Abstract';

const AbstractContainer = () => {
  const [loaded, setLoaded] = useState(true);
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const onClose = () => setModal(false);

  return (
    <Abstract
      loaded={loaded}
      modal={modal}
      openModal={openModal}
      onClose={onClose}
    />
  );
};

export default inject('routing')(observer(AbstractContainer));
