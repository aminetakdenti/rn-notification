import React, {useEffect} from 'react';
import {getToken, setupNotification} from './src/notificationRouter';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation';

const App = () => {
  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      console.log('Setting up notification');
      setupNotification();
    }

    getToken().then(token => {
      console.log('Token', token);
    });

    return () => {
      ignore = true;
    };
  }, []);
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
