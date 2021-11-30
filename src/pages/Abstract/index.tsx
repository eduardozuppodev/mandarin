import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import Abstract from './Abstract';

const AbstractContainer = () => {
  const [loaded, setLoaded] = useState(true);

  return <Abstract loaded={loaded} />;
};

export default inject('routing')(observer(AbstractContainer));
