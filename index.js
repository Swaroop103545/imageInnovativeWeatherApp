/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


// index.tsx
// import React from 'react';
// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';
// import { Provider } from 'react-redux';
// import store from './src/store/store';

// const Main = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// AppRegistry.registerComponent(appName, () => Main);

// App.tsx
// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './src/store/store.ts';
// import App from './App.tsx';

// const Main = () => {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// };

// AppRegistry.registerComponent(appName, () => Main);


// export default Main;

