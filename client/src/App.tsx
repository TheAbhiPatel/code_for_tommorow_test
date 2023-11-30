import { Provider } from 'react-redux';
import { store } from './store/store';

import Routers from './Routers';

const App = () => {


  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
};

export default App;
