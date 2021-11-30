import { create } from 'mobx-persist';
import { RouterStore } from 'mobx-react-router';
import AppStore from './app.store';

class RootStore {
  app: AppStore;

  constructor() {
    this.app = new AppStore();
  }
}

const store = new RootStore();

const hydrate = create({
  storage: localStorage
});

hydrate('app', store.app);

export { RouterStore, AppStore };
export default store;
