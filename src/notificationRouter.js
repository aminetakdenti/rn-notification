import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
import * as RootNavigation from '../Rootnavigation';

export const setupNotification = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    __DEV__ && console.log('Message handled in the background!', remoteMessage);

    handleNotificationMessage(remoteMessage.notification);
  });

  messaging().onMessage(async remoteMessage => {
    console.log('Message handled in the foreground state!', remoteMessage);

    handleNotificationMessage(remoteMessage.notification);
  });

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );

    handleNotificationMessage(remoteMessage.notification);
  });
};

export async function getToken() {
  return await messaging().getToken();
}

function handleNotificationMessage(messageData) {
  switch (messageData.title) {
    case 'Account':
      RootNavigation.navigate('Home');
      Alert.alert('Navigate to home');
      return;
    case 'notification':
      Alert.alert('Navigate to notification');
      break;
    case 'profile':
      Alert.alert('Navigate to profile');
      break;
    default:
      break;
  }

  // if (showBanner) {
  //   Alert.alert('Show banner');
  // }
}
